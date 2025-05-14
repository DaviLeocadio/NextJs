"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation'


export default function Busca() {
    const [valorBuscado, setValorBuscado] = useState("");
    const router = useRouter();
    return <>
        <input type="text" name="" id="" value={valorBuscado} className="border" onChange={(e) => { setValorBuscado(e.target.value) }} />

        <button type="button" onClick={
            () => { router.push('/busca?valorBuscado=' + encodeURIComponent(valorBuscado)) }
        }>Buscar</button>
    </>
}