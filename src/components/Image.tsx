
export default function PoemImage({ src } : { src: number | string }) {
    return (
        <div className="border-4 border-neutral-400 w-fit mx-auto shadow-sm p-8 border-double relative rounded-lg">
            <div className="absolute inset-0 w-full h-full top-0 left-0 bg-yellow-50 mix-blend-multiply rounded-sm opacity-50"/>
            <img className="sepia border-double border-4 border-neutral-400 rounded-sm" src={ `img/${ src }.webp` }/>
        </div>
    )
}
