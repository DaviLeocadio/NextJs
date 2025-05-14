

import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "@/components/Cards/card";

export default function Home() {

  const cards = [
    {
      title: 'Puma',
      text: 'Tenis muito bom e perfeito',
      image: './6.png'
    },
    {
      title: 'Puma',
      text: 'Tenis muito bom e perfeito',
      image: './7.png'
    },
    {
      title: 'Puma',
      text: 'Tenis muito bom e perfeito',
      image: './8.png'
    },
    {

    }
  ]

  return (
    <>




      <div className="d-flex align-items-center justify-content-center m-5">
        <h2>Tênis</h2>
      </div>

      <div className="cards container-fluid flex-wrap">
        <div className="row justify-content-center d-flex">
          <div className="container align-items-center justify-content-center d-flex gap-5 flex-wrap">

            {cards.map((item, index) => {
              return (
                <div key={index}>

                  <Card
                    text={item.text}
                    title={item.title}
                    image={item.image}
                  />

                </div>
              )
            })}
          </div>

        </div>

      </div>

    </>
  );
}
