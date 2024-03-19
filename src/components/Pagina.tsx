import { useEffect, useState } from "react";
import { IPagina } from "../assets/poema/poema";
import PoemImage from "./Image";
import Verso from "./Verso";
import { createIntersectionObserver } from "../assets/utils/intersectionObserver";



export default function Pagina({ index, pagina } : { index: number, pagina: IPagina }) {
    
    const [ showFootnote, setShowFootnote ] = useState<boolean>(false)

    const { versos, footnote } = pagina

    useEffect(() => {

        if (!footnote) return; 
    
        const intersectionObserver = createIntersectionObserver({ action: setShowFootnote })
        const verseWithFootnote = document.querySelector('p[data-footnote="true"]')
        if (verseWithFootnote) intersectionObserver.observe(verseWithFootnote)
    
    }, [ footnote ])
    
    return (
        <article className="pb-24 text-neutral-900 font-antique font-light text-center leading-tight text-2xl">
            <div className="pb-12">
                <PoemImage src={ index }/>
            </div>
            { 
                versos.map((verso, index) => 
                    <Verso key={ `verso-${ index }`} verso={ verso } index={ index }/>
                )
            }
            {
                !!footnote && (
                    <div 
                        data-show={ showFootnote }
                        className="absolute right-0 left-0 py-4 px-12 bg-stone-400 opacity-0 data-[show='true']:opacity-100 transition-all">
                        <sup>1</sup>. { pagina.footnote }
                    </div>
                )
            }
        </article>
    )
}
