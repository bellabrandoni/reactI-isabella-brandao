const LowerCase = (props) => {
    const textoRecebido = props.name
    const textoTransformado = textoRecebido.toLowerCase()
    return(
        <h4>{textoTransformado}</h4>
    )
}
export default LowerCase