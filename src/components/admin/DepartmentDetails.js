import React from 'react'
import api from '../../services/api'
import Moment from "react-moment";

class DepartmentDetails extends React.Component{
    state={department:{}}
    async componentDidMount() {
        const { match:{params}} = this.props;

        let response =  await api.get('http://localhost:5000/admin/department/'+ params.id)
        console.log(response)
        this.setState({department:response.data})
        console.log(this.state.department)
    }

    render(){
        return (
            <div className="card">
                <div className="card-header">{this.state.department.name}</div>
                <div className="card-body">
                    <h5><b>Coordenador:</b>  {this.state.department.coordenador}</h5>
                    <h5><b>Criado em :</b> <Moment format={"DD/MM/YYYY"}>{this.state.department.createdAt}</Moment> </h5>

                </div>
            </div>
        )
    }
}

export default DepartmentDetails