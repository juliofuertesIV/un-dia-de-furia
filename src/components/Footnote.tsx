import { useEffect, useState } from "react"

export default function Footnote({ showFootnote, text } : { showFootnote: boolean, text: string }) {

    const [ hiddenByUser, setHiddenByUser ] = useState<boolean>(false)

    useEffect(() => {

        if (showFootnote === true) setHiddenByUser(false)

    }, [ showFootnote ])

    const onClick = (/* e: MouseEvent */) => {
        
        //const target = e.currentTarget

        setHiddenByUser(true)
    }

    return (
        <div 
            onClick={ onClick }
            data-user-hide={ hiddenByUser }
            data-show={ showFootnote }
            className="sticky inset-0 mt-8 py-4 px-12 bg-stone-400 opacity-0 data-[show='true']:opacity-100 transition-all data-[user-hide='true']:opacity-0 cursor-pointer">
            <sup>1</sup>. { text }
        </div>
    )
}
