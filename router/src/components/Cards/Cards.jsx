import Link from "next/link"
export default function Card({filme}) {
    return (
        <>
            <Link href={`/filme/${filme.id}`} className="card" style={{ width: "18rem" }}>
                <img src={filme.poster} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-decoration-none">{filme.title}</h5>
                    <p className="card-text">

                    </p>


                </div>
            </Link>

        </>
    )
}