import { IVerso } from "../assets/poema/poema";

export default function Verso({ verso, index } : { verso: IVerso, index: number }) {

    const { align } = verso

    const textAlign = align ? `text-${align}` : ''

    const getProcessedText = (text: string) => {

        if (!text.includes('_')) return text

        const splitText = text.split('_')
        const italic = splitText[1]
        const regular = [splitText[0], splitText[2]]

        return (
            <>{ regular[0] }<span className="italic">{ italic }</span>{ regular[1] }</> 
        )
    }

    return (
        <p 
            className={ `data-[is-first='true']:uppercase data-[is-first='true']:text-xl py-1 ${ textAlign } data-[footnote="true"]:hover:underline cursor-defaultgit`}
            data-footnote={ verso.hasFootNote }
            data-is-first={ index == 0 }
        >
            { getProcessedText(verso.texto) }
            { !!verso.hasFootNote && <sup>1</sup> }
        </p>
    )
}
