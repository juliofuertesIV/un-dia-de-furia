import { poema } from "./assets/poema/poema"
import Estrofa from "./components/Estrofa"
import Cover from "./components/Cover"
import Intro from "./components/Intro"

function App() {

    return (
        <main className="flex-1 min-h-full bg-neutral-200">
            <Cover/>
            <Intro/>
            <div className="mx-auto w-fit font-antique text-lg px-4 max-w-3xl">
            {
                poema.map((estrofa, index) => 
                    <Estrofa estrofa={ estrofa } index={ index }/>
                )
            }
            </div>
        </main>
    )
}

export default App

