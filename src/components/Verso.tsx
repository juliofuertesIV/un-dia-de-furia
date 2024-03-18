import { IVerso } from "../assets/poema/poema";

export default function Verso({ verso, index } : { verso: IVerso, index: number }) {

    const { align } = verso

    const textAlign = align ? `text-${align}` : ''

    return (
        <p 
            className={ `data-[is-first='true']:uppercase data-[is-first='true']:text-xl py-1 ${ textAlign } data-[footnote="true"]:hover:underline data-[footnote="true"]:cursor-pointer`}
            data-footnote={ verso.hasFootNote }
            data-alignment={ verso.align }
            data-is-first={ index == 0 }
        >
            { verso.texto }
            { !!verso.hasFootNote && <sup>1</sup> }
        </p>
    )
}
