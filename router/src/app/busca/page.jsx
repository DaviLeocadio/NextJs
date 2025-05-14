'use client';
import { useSearchParams } from "next/navigation";
export default function Busca(){

    const useParams = useSearchParams();
    const valorBuscado = useParams.get("valorBuscado");

    return(
        <>
        {valorBuscado}
        </>
    )
}