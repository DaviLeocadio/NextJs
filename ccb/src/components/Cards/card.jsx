import "./card.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card({ title, text, link, image, modal_title, modal_text }) {
    return (
        <>
            <div className="card my-5 mx-5 justify-content-center d-flex align-items-center" style={{ width: "20rem" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body justify-content-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {text}
                    </p>
                    <>
                        {/* Button trigger modal */}
                        <div className="justify-content-center d-flex align-items-center w-100">
                            <button
                                type="button"
                                className="btn"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                            >
                                Ver mais
                            </button>
                        </div>
                        {/* Modal */}
                        <div
                            className="modal fade"
                            id="staticBackdrop"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex={-1}
                            aria-labelledby="staticBackdropLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5 justify-content-center d-flex align-items-center" id="staticBackdropLabel">
                                            {modal_title}
                                        </h1>
                                        <button
                                            type="button"
                                            className="btn-close justify-content-center d-flex align-items-center"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        />
                                    </div>
                                    <div className="justify-content-center d-grid align-items-center w-100">
                                        <div className="modal-body justify-content-center d-flex align-items-center">{modal_text}</div>
                                    </div>

                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>

                </div>
            </div>

        </>
    )
}