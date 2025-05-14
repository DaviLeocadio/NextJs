import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

export default function Header() {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center">
                <Image
                    src="/logo.png"
                    alt=""
                    height={220}
                    width={360}
                    className="logo"
                />
            </div>
        </>
    )
}