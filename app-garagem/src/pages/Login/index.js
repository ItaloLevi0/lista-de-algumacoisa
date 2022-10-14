import { Divider, TextField, Button } from "@mui/material";

import "./style.css";

export default function Login () {
    return (
        <div className="login">
            <h2>Login</h2>
            <Divider/>
            <form>
                <TextField label="Email" fullWidth></TextField>
                <TextField label="Senha" type="password" fullWidth></TextField>
                <Button variant="contained" fullWidth>ENTRAR</Button>
            </form>
        </div>
    )
}