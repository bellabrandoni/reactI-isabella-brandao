import filmes from '../data/database'
const List = () => {
    return(
        <ul>
            {filmes.map(filmes =>
            <li key = {filmes.id}>{filmes.nome}</li>
             )}
        </ul>

    )
}
export default List