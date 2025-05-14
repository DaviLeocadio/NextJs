import Image from "next/image";
import Card from "@/components/Cards/card";
import styles from "./page.module.css";
import "./page.module.css";

export default function Home() {
  return (
    <>

      <div
        id="carouselExampleInterval"
        className="carousel slide container mt-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={2000}>
            <img src="./1.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src="./2.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src="./3.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src="./4.png" className="d-block w-100" alt="..." />
          </div>
          
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>



      <ol className={styles.ol}>
        <li className={styles.img}>
          Luffy
        </li>
      </ol>

      <div className="img-trip">
        <Image
          src="/luffy.jpeg"
          alt=""
          height={500}
          width={1050}
          className={styles.trip}
        />
      </div>


      <ol className={styles.ol}>
        <li className={styles.img}>
          Zoro
        </li>
      </ol>

      <div className="img-trip">
        <Image
          src="/zoro.webp"
          alt=""
          height={500}
          width={1050}
          className={styles.trip}
        />
      </div>


      <ol className={styles.ol}>
        <li className={styles.img}>
          Sanji
        </li>
      </ol>

      <div className="img-trip">
        <Image
          src="/sanji.jpg"
          alt=""
          height={500}
          width={1050}
          className={styles.trip}
        />
      </div>


      <ol className={styles.ol}>
        <li className={styles.img}>
          Brook
        </li>
      </ol>

      <div className="img-trip">
        <Image
          src="/brook.jpeg"
          alt=""
          height={500}
          width={1050}
          className={styles.trip}
        />
      </div>


      <ol className={styles.ol}>
        <li className={styles.img}>
          Franky
        </li>
      </ol>

      <div className="img-trip">
        <Image
          src="/franky.png"
          alt=""
          height={500}
          width={1050}
          className={styles.trip}
        />
      </div>


      <ol className={styles.ol}>
        <li className={styles.img}>
          Jinbe
        </li>
      </ol>

      <div className="imgtrip">
        <Image
          src="/jinbe.png"
          alt=""
          height={560}
          width={1050}
          className={styles.trip}
        />
      </div>

      <ol className={styles.ol}>
        <li className={styles.img}>
          Mangá Arcs
        </li>
      </ol>


      <div className="container mx-auto justify-content-center d-flex flex-wrap gap-3 mt-5">
        <Card
          title={"Alabasta"}
          text={"Parte em que o inimigo Crocodile aparece"}
          link={"https://getbootstrap.com/docs/5.3/components/card/#about"}
          image={"./alabasta.webp"} />

        <Card
          title={"Wano"}
          text={"Parte em que o inimigo Kaido aparece"}
          link={"https://getbootstrap.com/docs/5.3/components/card/#about"}
          image={"./wano.webp"} />

        <Card
          title={"Skypiea"}
          text={"Parte em que o inimigo Enel aparece"}
          link={"https://getbootstrap.com/docs/5.3/components/card/#about"}
          image={"./sky.jpg"} />

        <Card
          title={"Dressrosa"}
          text={"Parte em que o inimigo Doflamingo aparece"}
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
  );
}
