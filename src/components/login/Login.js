import React from 'react';
import history from '../../history'
import './Login.css'
import { isAuthenticated} from "../../services/auth"
import api from "../../services/api"
import { login } from "../../services/auth"
const {Link} = require('react-router-dom')


class Login extends React.Component{
    state={email:'',password:'',fireRedirect:false};


    onSubmitClick = async (event) => {
        event.preventDefault();
        const response = await api.post('http://localhost:5000/login',{
            email:this.state.email,
            password:this.state.password
        });
        login(response.data);
        this.handleRedirect()

    };

     async handleRedirect(){
       if(isAuthenticated()){
           const response= await api.get('http://localhost:5000/login/callback')
          history.push(response.data)
       }else{
           history.push("/login")
       }
    }



    render() {

        return (

            <div className="card" >
                <form className="formLogin" >
                    <div className="form-group mx-sm-3 mb-2">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input id="email" type="email" className="form-control" placeholder={"Enter email"} value={this.state.email} onChange={e => {
                            this.setState({email:e.target.value})
                        }}/>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label htmlFor="senha" className="sr-only">Senha</label>
                        <input id="senha" className="form-control" placeholder="Password" value={this.state.password} onChange={e => {
                            this.setState({password:e.target.value})
                        }} />
                    </div>
                    <button type="button" className="btn btn-secondary" onClick={this.onSubmitClick}>Submit</button>
                </form>
                <Link to={'/register'}>Cadastre-se</Link>

            </div>

        )
    }
};

export default Login;