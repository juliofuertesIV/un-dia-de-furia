import { poema } from "./assets/poema/poema"
import Pagina from "./components/Pagina"
import Cover from "./components/Cover"
import Intro from "./components/Intro"

function App() {

    return (
        <main className="flex-1 min-h-full bg-stone-200">
            <Cover/>
            <Intro/>
            <div className="mx-auto w-fit font-antique text-lg px-4 max-w-3xl">
            {
                poema.map((pagina, index) => <Pagina key={ `pagina-${index}` } pagina={ pagina } index={ index }/>)
            }
            </div>
        </main>
    )
}

export default App

