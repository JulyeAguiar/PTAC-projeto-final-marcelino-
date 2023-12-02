import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";


export default function Home(){
    const listaLocalStorage = JSON.parse(localStorage.getItem("Listas")) || [];
    const [video, setVideo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [listas, setListas] = useState(listaLocalStorage)
    const [identidade, setIdentidade] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1)

    useEffect(() => { localStorage.setItem("Listas", JSON.stringify(listas)) }, [listas])

    const salvar = (salve) => {
        salve.preventDefault()
        setListas([...listas, {
            video: video,
            descricao: descricao,
            identidade: identidade
        }])
        setIdentidade(identidade + 1)
        setNome("")

        console.log(listas)

    }


    
    return (
        <div>

            <form onSubmit={salvar}>

                <div className="form-container">
                    <br />
                    <h2>Insira a url do vídeo</h2>
                    <input type="text" onChange={(e) => { setVideo(e.target.value) }}></input>
                    <h2>Insira a descreição do vídeo</h2>
                    <input type="text" onChange={(e) => { setDescricao(e.target.value) }}></input>
                    <button>Enviar</button>
                </div>


            </form>

            {listas.map((atv) =>
                <main key={atv.identidade}>
                    <ul >
                        <Link to={`${atv.identidade}`}>
                            <div className="card">
                                
                                <video src={atv.video}></video>
                                <h1>{atv.descricao}</h1>

                            </div>
                        </Link>
                    </ul>
                </main>
        
        )}
        <footer>AAAAAA</footer>
        </div>
        
    );
}