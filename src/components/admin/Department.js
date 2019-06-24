import React from 'react'
import {Link} from "react-router-dom";
import Moment from "react-moment";
import history from '../../history'
import api from '../../services/api'
class Department extends React.Component{

    handleDelete= (e) => {
        e.preventDefault();
        api.delete('http://localhost:5000/admin/department/'+this.props.department.id)
        history.push('/departments')
    }
    render(){
        return(
        <div className="list-group">
            <Link to={this.props.link} className="list-group-item list-group-item-action ">
                <div className="d-flex w-100 justify-content-between">
                    <h2 className="mb-1">{this.props.department.name}</h2>
                    <small> <Moment format={"DD/MM/YYYY"}>{this.props.department.createdAt}</Moment></small>
                </div>
                <h6 className="mb-1">Coordenador:{this.props.department.coordenador}</h6>
                <div id="delete" align="right">
                    <button type="button" className="btn btn-danger" onClick={this.handleDelete}>X</button>
                </div>
            </Link>
        </div>
        )
    }
}

export default Department