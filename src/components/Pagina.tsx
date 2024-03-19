import { useEffect, useState } from "react";
import { IPagina } from "../assets/poema/poema";
import PoemImage from "./Image";
import Verso from "./Verso";
import { createIntersectionObserver } from "../assets/utils/intersectionObserver";
import Footnote from "./Footnote";

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
        <article className="pb-24 w-full max-w-3xl mx-auto text-neutral-900 font-antique font-light text-center leading-tight text-2xl relative">
            <div className="pb-12">
                <PoemImage src={ index }/>
            </div>
            { 
                versos.map((verso, index) => 
                    <Verso key={ `verso-${ index }`} verso={ verso } index={ index }/>
                )
            }
            {
                !!footnote && <Footnote showFootnote={ showFootnote } text={ footnote }/>
            }
        </article>
    )
}
