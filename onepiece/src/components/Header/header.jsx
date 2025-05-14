import styles from "./header.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid align-items-center  justify-content-between">
                    
                        <Image
                            src="/logo_onepiece.png"
                            alt=""
                            height={90}
                            width={170}
                            className="oi"
                        />
                    
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav gap-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="./">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href={"/Noticies"}>
                                Noticies
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    Episodes
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-disabled="true" href="#">
                                    Mangá
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}