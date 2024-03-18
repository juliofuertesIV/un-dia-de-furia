import { IVerso } from "../assets/poema/poema";
import PoemImage from "./Image";
import Verso from "./Verso";

export default function Estrofa({ index, estrofa } : { index: number, estrofa: IVerso[] }) {
    return (
        <article className="pb-24 text-neutral-900 font-antique font-light text-center leading-tight text-2xl">
            <div className="pb-12">
                <PoemImage src={ index }/>
            </div>
            { 
                estrofa.map((verso, index) => 
                    <Verso verso={ verso } index={ index }/>
                )
            }
        </article>
    )
}
