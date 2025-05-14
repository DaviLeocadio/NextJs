import "./style.css";
import Image from "next/image";
import Link from "next/link";
export default function Relatorio() {
    return (
        <>
            <div className="container-fluid justify-content-center d-flex align-items-center w-100 my-5 pesq">
                <div className="row justify-content-center d-flex align-items-center w-100">
                    <div className="col-md-4 justify-content-center d-grid align-items-center">
                        <p>Estado</p>
                        <div className="dropdown">
                            <button
                                className="btn dropdown-toggle bg-light"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                SP
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        SP
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        MG
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        ES
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        RJ
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        AM
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        RS
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        PR
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        SC
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        PA
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        SE
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        ES
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        ES
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        ES
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        ES
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        ES
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        ES
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        ES
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        ES
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="#">
                                        ES
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        ES
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        ES
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        ES
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        ES
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        ES
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-md-4 justify-content-center d-grid align-items-center m-auto    ">
                        <p>Cidade</p>
                        <input type="text" placeholder="Ex: São Paulo" />
                    </div>
                    <div className="col-md-3 justify-content-center d-flex align-items-center">
                        <div className="d-grid">
                            <p>Bairro</p>
                            <input type="text" placeholder="Ex: Jardim Planalto" />
                        </div>

                    </div>

                    <div className="col-md-1 justify-content-center d-flex align-items-center">
                        <Link href={"#"} className="justify-content-center d-flex align-items-center search">
                            <p className="me-2 my-1">Buscar</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                fill="currentColor"
                                className="bi bi-search"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </Link>

                    </div>


                </div>

            </div>

            <div className="container my-5 justify-content-center d-block align-items-center">
                <div className="row flex-wrap">


                    <div className="col-md-3 my-5 igrejas">
                        <Image
                            src="/bras.png"
                            alt=""
                            width={300}
                            height={100}
                            className="img-fluid igr"
                        />

                        <>
                            {/* Button trigger modal */}
                            <div className="justify-content-center align-items-center d-flex">
                                <button
                                    type="button"
                                    className="btn mod m-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    Ver mais
                                </button>
                            </div>

                            {/* Modal */}
                            <div
                                className="modal fade"
                                id="exampleModal"
                                tabIndex={-1}
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                Modal title
                                            </h1>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            />
                                        </div>
                                        <div className="modal-body">...</div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                            >
                                                Close
                                            </button>
                                            <button type="button" className="btn btn-primary">
                                                Save changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>




                    </div>
                    <div className="col-md-3 my-5 igrejas">
                        <Image
                            src="/bras.png"
                            alt=""
                            width={300}
                            height={100}
                            className="img-fluid igr"
                        />

                        <>
                            {/* Button trigger modal */}
                            <div className="justify-content-center align-items-center d-flex">
                                <button
                                    type="button"
                                    className="btn mod m-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    Ver mais
                                </button>
                            </div>
                            {/* Modal */}
                            <div
                                className="modal fade"
                                id="exampleModal"
                                tabIndex={-1}
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                Modal title
                                            </h1>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            />
                                        </div>
                                        <div className="modal-body">...</div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                            >
                                                Close
                                            </button>
                                            <button type="button" className="btn btn-primary">
                                                Save changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>


                    </div>
                    <div className="col-md-3 my-5 igrejas">
                        <Image
                            src="/bras.png"
                            alt=""
                            width={300}
                            height={100}
                            className="img-fluid igr"
                        />

                        <>
                            {/* Button trigger modal */}
                            <div className="justify-content-center align-items-center d-flex">
                                <button
                                    type="button"
                                    className="btn mod m-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    Ver mais
                                </button>
                            </div>
                            {/* Modal */}
                            <div
                                className="modal fade"
                                id="exampleModal"
                                tabIndex={-1}
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                Modal title
                                            </h1>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            />
                                        </div>
                                        <div className="modal-body">...</div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                            >
                                                Close
                                            </button>
                                            <button type="button" className="btn btn-primary">
                                                Save changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>

                    </div>
                    <div className="col-md-3 my-5 igrejas">
                        <Image
                            src="/bras.png"
                            alt=""
                            width={300}
                            height={100}
                            className="img-fluid igr"
                        />
                        <>
                            {/* Button trigger modal */}
                            <div className="justify-content-center align-items-center d-flex">
                                <button
                                    type="button"
                                    className="btn mod m-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    Ver mais
                                </button>
                            </div>
                            {/* Modal */}
                            <div
                                className="modal fade"
                                id="exampleModal"
                                tabIndex={-1}
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                Modal title
                                            </h1>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            />
                                        </div>
                                        <div className="modal-body">...</div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                            >
                                                Close
                                            </button>
                                            <button type="button" className="btn btn-primary">
                                                Save changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>


                    </div>
                    <div className="col-md-3 my-5 igrejas">
                        <Image
                            src="/bras.png"
                            alt=""
                            width={300}
                            height={100}
                            className="img-fluid igr"
                        />

                        <>
                            {/* Button trigger modal */}
                            <div className="justify-content-center align-items-center d-flex">
                                <button
                                    type="button"
                                    className="btn mod m-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    Ver mais
                                </button>
                            </div>
                            {/* Modal */}
                            <div
                                className="modal fade"
                                id="exampleModal"
                                tabIndex={-1}
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                Modal title
                                            </h1>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            />
                                        </div>
                                        <div className="modal-body">...</div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                            >
                                                Close
                                            </button>
                                            <button type="button" className="btn btn-primary">
                                                Save changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>


                    </div>
                    <div className="col-md-3 my-5 igrejas">
                        <Image
                            src="/bras.png"
                            alt=""
                            width={300}
                            height={100}
                            className="img-fluid igr"
                        />

                        <>
                            {/* Button trigger modal */}
                            <div className="justify-content-center align-items-center d-flex">
                                <button
                                    type="button"
                                    className="btn mod m-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    Ver mais
                                </button>
                            </div>
                            {/* Modal */}
                            <div
                                className="modal fade"
                                id="exampleModal"
                                tabIndex={-1}
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                Modal title
                                            </h1>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            />
                                        </div>
                                        <div className="modal-body">...</div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                            >
                                                Close
                                            </button>
                                            <button type="button" className="btn btn-primary">
                                                Save changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>

                    </div>
                    <div className="col-md-3 my-5 igrejas">
                        <Image
                            src="/bras.png"
                            alt=""
                            width={300}
                            height={100}
                            className="img-fluid igr"
                        />

                        <>
                            {/* Button trigger modal */}
                            <div className="justify-content-center align-items-center d-flex">
                                <button
                                    type="button"
                                    className="btn mod m-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    Ver mais
                                </button>
                            </div>
                            {/* Modal */}
                            <div
                                className="modal fade"
                                id="exampleModal"
                                tabIndex={-1}
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                Modal title
                                            </h1>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            />
                                        </div>
                                        <div className="modal-body">...</div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                            >
                                                Close
                                            </button>
                                            <button type="button" className="btn btn-primary">
                                                Save changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>

                    </div>
                    <div className="col-md-3 my-5 igrejas">
                        <Image
                            src="/bras.png"
                            alt=""
                            width={300}
                            height={100}
                            className="img-fluid igr"
                        />

                        <>
                            {/* Button trigger modal */}
                            <div className="justify-content-center align-items-center d-flex">
                                <button
                                    type="button"
                                    className="btn mod m-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    Ver mais
                                </button>
                            </div>
                            {/* Modal */}
                            <div
                                className="modal fade"
                                id="exampleModal"
                                tabIndex={-1}
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                Modal title
                                            </h1>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            />
                                        </div>
                                        <div className="modal-body">...</div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                            >
                                                Close
                                            </button>
                                            <button type="button" className="btn btn-primary">
                                                Save changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>

                    </div>
                </div>
            </div>
        </>
    )
}