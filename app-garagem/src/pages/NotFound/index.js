import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import foto from "./notfound.svg"

export default function NotFound () {
    return (
        <div style={{textAlign: 'center'}}>
            <h2>Página não encontrada</h2>
            <img style={{width: '30%'}} src={foto}/>

            <Link to="/">
                <Button variant="outlined">Voltar para o início</Button>

            </Link>
            

        </div>
    )
}