import styles from "./card.css";
export default function Card({ title = "title", text = "text", link, image }) {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {text}
                    </p>
                    <a href={link} className="btn">
                        See more
                    </a>
                </div>
            </div>

        </>
    )
}