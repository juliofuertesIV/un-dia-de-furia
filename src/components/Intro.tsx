import PoemImage from "./PoemImage";

export default function Intro() {
    return (
        <section className="text-right font-antique text-2xl max-w-2xl mx-auto text-neutral-700 min-h-screen px-8">
            <PoemImage src={ 'intro' }/>
            <div className="pt-8">
                <h4>No quiero a tu abuela</h4>
                <h4>No quiero a mi novia</h4>
                <h4>Quiero ser peligroso</h4>
                <h5>
                    (E<span className="uppercase text-lg">l</span>&nbsp;
                    O<span className="uppercase text-lg">tro</span>&nbsp;
                    Y<span className="uppercase text-lg">o</span>, 1995)
                </h5>
            </div>
        </section>
    )
}
