import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Cards/Cards";
import Busca from "@/components/Busca/busca";

export default async function Home() {

  
  const filmes = await fetch("http://10.189.87.39/movies")
    .then((response) => response.json())


  return (
    <>

    

    <div className="d-flex justify-content-center align-items-center my-5">
      <h1>Filmes</h1>
    </div>

    <div className="d-flex justify-content-center align-items-center">
    <Busca />
    </div>
    <div className="row d-flex align-items-center justify-content-center">
      {filmes.map((filme, index) => {
        return (
          <div key={index} className='col-md-3 me-2 mb-4 d-flex'>
            <Card
              filme = {filme}
            />
          </div>
        )
      })}
    </div>
      



    </>
  );
}
