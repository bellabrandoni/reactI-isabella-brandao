function Relogio() {
    const horario = new Date().toLocaleDateString()
    
    return(
      <h1>{horario}</h1>
    )
}

export default Relogio