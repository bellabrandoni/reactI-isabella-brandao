import { useState, useEffect } from 'react'
import './input.style.css'

const Input =()=>{
    const [ repositorios, setRepositorios] = useState([])
    const [busca, setBusca] = useState ('')
    const [ filtro,setFiltro] = useState ([])

    useEffect(() => {
        
        fetch('https://api.github.com/users/marciatkm/repos')
         .then(resposta => resposta.json())
         .then(dados => setRepositorios(dados))
     },[])

     useEffect(() => {
         setFiltro(
             repositorios.filter(repositorios =>{
                 return(
                     repositorios.name.includes(busca)
                 )
             })
         )

   },[repositorios, busca])
   



    return(
     <>
       
       <input  type="text" placeholder="Digite um Repositório" 
       onChange={e => {setBusca(e.target.value)}} />

       
       

       {filtro.map (repo => 
        
           <div className="container">
           <p className="repositorio" >{repo.name}</p> 
           </div>
        
           )}
    </> 
   )  
}




export default Input