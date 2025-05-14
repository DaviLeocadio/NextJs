import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg p-0 bg-white">
                <div className="container-fluid">
                    <Link className="navbar-brand gap-5" href={"./"}> 
                        <Image
                            src="/logo.png"
                            alt=""
                            height={132}
                            width={145}
                            className="logo"
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav gap-4">
                            <Link className="nav-link active ms-md-5" aria-current="page" href="./">
                            Home
                            </Link>
                            <Link className="nav-link active" aria-current="page" href="./Cartas">
                            Cartas
                            </Link>
                            <Link className="nav-link active" aria-current="page" href="./Relatorio">
                            Relatório
                            </Link>
                            <Link className="nav-link active" aria-current="page" href="#">
                            Lista de atendimentos
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}