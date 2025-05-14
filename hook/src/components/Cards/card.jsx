"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

export default function Card({ title = "Tênis", text = "Ótimo e perfeito", image = "https://placehold.co/200x110" }) {

    const [count, setCount] = useState(1);
    const [contadorAlterado, setContadorAlterado] = useState(false);

    //Sintaxe   
    // useEffect(() =>{}, [gatilho(toda vez q algo ocorrer, esse bloco acontece)])

    


    useEffect(() => {
        setContadorAlterado(true);

        //esperar 5s para alterar setContadorAlterado para false, se ele estiver true
        let timerId;
        timerId = setTimeout(() => {
            setContadorAlterado(false);
        }, 5000);

        return () => clearTimeout(timerId);
    }, [count]);

    function handleClickCountMais() {
        if (count >= 100) {
            setCount(100)
        } else {
            setCount(count + 1)
        }

    }

    function handleClickCountMenos() {

        if (count <= 0) {
            setCount(0)
        } else {
            setCount(count - 1)
        }
    }






    return (
        <>
            < div className="card my-4 my-md-3" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="align-items-center justify-content-center d-grid w-100">
                        <div className="align-items-center justify-content-center d-flex">
                            <h5 className="card-title">{title}</h5>
                        </div>
                        <div className="align-items-center justify-content-center d-grid"><p className="card-text">
                            {text}
                        </p></div>

                    </div>


                    <div className="container d-flex gap-3 my-3">
                        <button type="button" className="btn" onClick={handleClickCountMenos}>
                            -
                        </button>
                        <button type="button" className="btn" onClick={handleClickCountMais}>
                            +
                        </button>



                        <p className="my-2 mx-2">Quantidade: {count}</p>
                    </div>


                </div>
            </div >

            {contadorAlterado ? (
             <>
                <p>Count alterado nos ultimos 5s</p>
             </>   
            ) : (
                <>
                    <p>Count não alterado nos ultimo 5s</p>
                </>
            )}



        </>)




}