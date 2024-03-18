import PoemImage from "./Image";

export default function Intro() {
    return (
        <section className="text-right font-antique text-2xl max-w-2xl mx-auto text-neutral-700 min-h-screen px-4">
            <div className="border-4 border-neutral-400 w-fit mb-8 mx-auto shadow-sm p-8 border-double relative rounded-lg">
                <PoemImage src={ 'intro' }/>
            </div>
            <div className="pt-8">
                <h4>No quiero a tu abuela</h4>
                <h4>No quiero a mi novia</h4>
                <h4>Quiero ser peligroso</h4>
                <h5>
                    <i>
                        (E<span className="uppercase text-lg">l</span>&nbsp;
                        O<span className="uppercase text-lg">tro</span>&nbsp;
                        Y<span className="uppercase text-lg">o</span>, 1995)
                    </i>
                </h5>
            </div>
        </section>
    )
}
