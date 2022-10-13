import { Card, CardBody, CardActionArea, CardContent } from "@mui/material"
import {DirectionsBike, DirectionsCar, TwoWheeler} from "@mui/icons-material"

function Informacao (props) {
    return (
        <Card style={{marginTop: 10}}>
            <CardContent>
                {props.icone}

                <strong style={{margin: '0 10px'}}>{props.qtd}</strong>
                
                {props.titulo}

            </CardContent>
        </Card>
    )
}

export default function Dashboard () {
    return (
        <>
            <Informacao icone={<DirectionsCar/>} qtd="10" titulo="Carros"></Informacao>
            <Informacao icone={<TwoWheeler/>} qtd="34" titulo="Motos"></Informacao>
            <Informacao icone={<DirectionsBike/>} qtd="31" titulo="Bicicletas"></Informacao>

            
        </>
    )
}