import Link from "next/link";
import "./card.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CardHome({ title = "title", link, image }) {
    return (
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 align-items-center justify-content-center d-flex">
                        <div className="card-body">
                            <Link href={"./"} className="link-none">
                                <h5 className="card-title title_com">{title}</h5>
                            </Link>
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}