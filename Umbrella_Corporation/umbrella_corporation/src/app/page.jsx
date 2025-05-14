'use client'
import Card from '@/components/Cards/card'
import { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [usuarios, setUsuarios] = useState(null)
  const [number, setNumber] = useState(5)



  function buscar() {
    if (number <= 100 && number >= 5) {
      fetch(`https://randomuser.me/api/?results=${number}`)
        .then((response) => response.json())
        .then((information) => setUsuarios(information.results))
    } else {
      alert('Quantidade não aceita, pois não no intervalo entre 5 e 100');
    }
  }
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((information) => setUsuarios(information.results))
  }, [])

  useEffect(() => {
    console.log(usuarios)
  }, [usuarios])




  return (

    <>

<div className="align-items-center justify-content-center d-flex">
      <input 
        type="number"
        value={number}
        onChange={(number) => setNumber(number.target.value)}
        className='bg-light rounded-3 border-2 border-black text-black p-2'
      />
      <button type="button" onClick={buscar} className='ms-3 rounded-3 bg-black border-0 p-2'>Buscar</button>
</div>
<div className="container-fluid mt-5 mb-5">
<div className="row d-flex align-items-center justify-content-center">
      {usuarios ? (
        <>
        {usuarios.map((item, index) => {
          return (
            <div key={index} className='col-md-4 me-2 mb-4'>
              <Card
              name={item.name.first}
              email={item.email}
              username={item.login.username}
              city={item.location.city}
              />
            </div>
          )
        })}

      </>
      ) : (
          <>
            <p>Carregando...</p>
          </>
        )}
</div>
</div>
    </>


  )
}