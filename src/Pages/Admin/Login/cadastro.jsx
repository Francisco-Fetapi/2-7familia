import React from 'react'

const cadastro = ({ voltar }) => {
  return (
      <>
         <h1>cadastro</h1>
         <p onClick={() => voltar(true)}>Voltar</p>
      </>
  )
}

export default cadastro