"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import User from '@/components/User/user';

export default function example() {

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

    useEffect(()=>{
        console.log(usuario)
    }, [usuario])


    return (
        <>
        
            {usuario ? (
                <>
                <img src={usuario.picture.thumbnail} alt="" />
                <p></p>
                <p>Nome: {usuario.name.first} {usuario.name.last}</p>
                <p>Email: {usuario.email}</p>
                <p>Cidade: {usuario.location.city}</p>
                
                </>
            ) : (
                <>
                <p>Carregando...</p>
                </>
            )}
            

            <User 
            nome = 'oi'
            />
        </>
    )
}