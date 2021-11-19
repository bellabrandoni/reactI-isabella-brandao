const UpperCase = (props) => {
    const textoRecebido = props.recebido
    const textoTransformado = textoRecebido.toUpperCase()
    return(
        <h2>{textoTransformado}</h2>
    )
}

export default UpperCase