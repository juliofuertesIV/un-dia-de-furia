import { poema } from "./assets/poema/poema"

function App() {

    return (
        <main className="flex-1 min-h-full bg-gray-300">
            <header className="font-antique text-center py-20 text-neutral-900">
                <div className="flex flex-col">
                    <h1 className="text-6xl">El bate de béisbol</h1>
                    <h2 className="text-4xl">D<small>E</small> M<small>ICHAEL</small> D<small>OUGLAS</small>,</h2>
                    <h4 className="text-5xl">UN POEMA</h4>
                    <h2 className="text-4xl">(Ex-ánonimo)</h2>
                    <h2 className="text-3xl pt-4">De Julio Fuertes</h2>
                    <h2 className="text-xl">(traidor, llorica)</h2>
                    <h4 className="text-xl uppercase pt-2">Publicado originalmente en la prestigiosa web</h4>
                    <h4 className="text-2xl">TUMBLR.COM</h4>
                </div>
            </header>
            <div className="mx-auto w-fit font-antique text-2xl px-4 max-w-3xl">
            {
                poema.map((estrofa, estrofaIndex) => 
                    <article key={ estrofaIndex } className="pb-8 text-neutral-900"> 
                        { estrofa.map((verso, versoIndex) => 
                            <p 
                                className="data-[is-first='true']:uppercase leading-tight py-1 data-[alignment='right']:text-right"
                                data-alignment={ verso.align }
                                data-is-first={ versoIndex == 0}
                                key={ `${estrofaIndex}-${versoIndex}` }
                            >
                                { verso.texto }
                            </p>)
                        }
                    </article>
                )
            }
            </div>
        </main>
    )
}

export default App

