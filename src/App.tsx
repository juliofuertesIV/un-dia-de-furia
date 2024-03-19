import { poema } from "./assets/poema/poema"
import Pagina from "./components/Pagina"
import Cover from "./components/Cover"
import Intro from "./components/Intro"

function App() {

    return (
        <main className="flex-1 min-h-screen min-w-full bg-stone-200 px-4">
            <Cover/>
            <Intro/>
            {    poema.map((pagina, index) => 
                    <Pagina key={ `pagina-${index}` } pagina={ pagina } index={ index }/>)
            }
        </main>
    )
}

export default App

