"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import './user.css';

export default function user(nome, idade, genero, foto, telefone, endereco, email, celular) {

    const [usuario, setUsuario] = useState(null)

    useEffect(() => {
        fetch("https://randomuser.me/api/")
            //^
            //quando isso ocorrer
            .then((response) => response.json())
            //^
            //quando isso ocorrer
            .then((information) => setUsuario(information.results[0]))
    }, []);

    useEffect(() => {
        console.log(usuario)
    }, [usuario])


    return (
        <>



            {usuario ? (
                <>
                
                    <div className="card m-5" style={{ width: "20rem" }}>
                        <img src={usuario.picture.large} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{usuario.name.first} {usuario.name.last}</h5>
                            <div className="card-text">
                                <p>Gênero: {usuario.gender}</p>
                                <p>Email: {usuario.email}</p>
                                <p>Endereço: {usuario.location.country}, {usuario.location.state}, {usuario.location.city}</p>
                                <p>Telefone: {usuario.phone}</p>
                                <p>Celular: {usuario.cell}</p>
                                <p>Idade: {usuario.dob.age}</p>
                            </div>
                           
                        </div>
                    </div>

                </>
            ) : (
                <>
                    <p>Carregando...</p>
                </>
            )}

        </>
    )
}