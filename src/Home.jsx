import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Home(){
    return (
        <h1>sssss</h1>
    )
}
// export default function Home(){
//     const listaLocalStorage = JSON.parse(localStorage.getItem("Listas")) || [];
//     const [video, setVideo] = useState("")
//     const [descricao, setDescricao] = useState("")
//     const [listas, setListas] = useState(listaLocalStorage)
//     const [identidade, setIdentidade] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1)

//     useEffect(() => { localStorage.setItem("Listas", JSON.stringify(listas)) }, [listas])

//     const salvar = (salve) => {
//         salve.preventDefault()
//         setListas([...listas, {
//             video: video,
//             descricao: descricao,
//         }])
//         setIdentidade(identidade + 1)
//         setNome("")

//         console.log(listas)

//     }
// }