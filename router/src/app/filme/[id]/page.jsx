import Card from "@/components/Cards/Cards";
import './style.css'
export default async function Flime({ params }) {

    const filmeId = params.id;

    const filmes = await fetch("http://10.189.87.39/movies")
        .then((response) => response.json())

    const filmeExibido = filmes[filmeId - 1];

    return (
        <>
        <div className="title align-items-center justify-content-center d-flex">
            <h2 className="my-5 mx-3">{filmeExibido.title}</h2>
            
        </div>
        <div className="title align-items-center justify-content-center d-flex">

            <img src={filmeExibido.poster} className="img-fluid" />
        </div>
        
            <div className="container">
                <p>{filmeExibido.sinopse}</p>
            <p className="diretor">Diretor: {filmeExibido.director}</p>
            </div>
            


        </>
    )
}