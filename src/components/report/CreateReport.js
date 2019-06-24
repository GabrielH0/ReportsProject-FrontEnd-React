import React from 'react'
import history from '../../history'
import api from "../../services/api"


class CreateReport extends React.Component{
    state={department:'',content:''};
    onSubmitClick= (event)=>{
        event.preventDefault();
        api.post('http://localhost:5000/report/new',{
            name:this.state.department,
            content:this.state.content,
        })
        history.push('/reports');

    };
    render(){
        return(<div>
            <form id="createReport">
                <div className="form-group">
                    <label htmlFor="name">Endereço de Email do destinatário</label>
                    <input type="name" className="form-control" id="name" placeholder="nome do departamento" value={this.state.nome}
                    onChange={e=>{
                        this.setState({department:e.target.value})
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">Mensagem</label>
                    <textarea id="content" className="form-control" rows="10" value={this.state.content} onChange={e=>{this.setState({content:e.target.value})}}/>
                </div>
                <button type="button" className="btn btn-secondary" onClick={this.onSubmitClick} formMethod="POST">Submit</button>

            </form>
        </div>)

    }
}

export default CreateReport;