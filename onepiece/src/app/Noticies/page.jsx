import "./style.css";
import Card from "@/components/Noticies/Cards/card";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Noticies() {
    return (
        <>
            <div className="title">
                <h1>Noticies</h1>
            </div>

            <div className="container mx-auto justify-content-center d-flex flex-wrap gap-3 mt-5">
                <Card
                    title={"Novo dublador de Franky"}
                    text={"Veja a nova voz do personagem robótico Franky."}
                    link={"https://getbootstrap.com/docs/5.3/components/card/#about"}
                    image={"./alabasta.webp"} />

                <Card
                    title={"Visul Mr 3"}
                    text={"Veja o novo visual do personagem Mr 3 no Live action."}
                    link={"https://getbootstrap.com/docs/5.3/components/card/#about"}
                    image={"./wano.webp"} />

                <Card
                    title={"Ator de Garp"}
                    text={"Ator que interpreta Garp no Live action confirma presença."}
                    link={"https://getbootstrap.com/docs/5.3/components/card/#about"}
                    image={"./sky.jpg"} />

                <Card
                    title={"One Piece em Crunchyroll"}
                    text={"A plataforma Crunchyroll vai começar a exigir assinatura para One Piece."}
                    link={"https://getbootstrap.com/docs/5.3/components/card/#about"}
                    image={"./dress.jpg"} />

                <Card
                    title={"Whole Cake"}
                    text={"Parte em que o inimigo Big Mom aparece"}
                    link={"https://getbootstrap.com/docs/5.3/components/card/#about"}
                    image={"./whole.webp"} />

                <Card
                    title={"Arlong Park"}
                    text={"Parte em que o inimigo Arlong aparece"}
                    link={"https://getbootstrap.com/docs/5.3/components/card/#about"}
                    image={"./arlong.jpg"}
                />
            </div>

        </>
    )
}