import React from 'react'
import api from '../../services/api'
import history from '../../history'

class CreateUser extends React.Component{
    state={email:"",password:"",nome:""}


    onSubmitClick=(e)=>{
        e.preventDefault();
        api.post('http://localhost:5000/register',{
            email:this.state.email,
            password:this.state.password,
            name:this.state.nome
        })
        history.push('/login')
    }
    render(){
        return (
            <div className="card">
                <form >
                    <div className="form-group mx-sm-3 mb-2">
                        <label htmlFor="email" >Email</label>
                        <input id="email" type="email" className="form-control" placeholder={"Enter email"} value={this.state.email} onChange={e => {
                            this.setState({email:e.target.value})
                        }}required/>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label htmlFor="senha" >Senha</label>
                        <input id="senha" className="form-control" placeholder="Password" value={this.state.password} onChange={e => {
                            this.setState({password:e.target.value})
                        }} required/>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label htmlFor="nome" >Nome</label>
                        <input id="nome" className="form-control" placeholder="Nome" value={this.state.nome} onChange={e => {
                            this.setState({nome:e.target.value})
                        }} required/>
                    </div>
                    <button type="button" className="btn btn-secondary" onClick={this.onSubmitClick}>Submit</button>
                </form>
            </div>)
    }


}

export default CreateUser