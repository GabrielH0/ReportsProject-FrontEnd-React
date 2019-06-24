import React from 'react'
import Moment from "react-moment";
import {Link} from 'react-router-dom'
import api from '../../services/api'
import history from '../../history'
class Report extends React.Component{
    state={report:this.props.report}
    handleDelete=async (e)=>{
        e.preventDefault();
        const destroy= await api.delete('http://localhost:5000/report/'+this.props.report.id);
        history.push('/reports')
    };

    render(){
        console.log(this.props);
        const id=this.props.report.id;
        console.log(id);
        return(
            <div className="list-group">
                <Link to={this.props.link} className="list-group-item list-group-item-action ">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">adress</h5>
                        <small> <Moment format={"DD/MM/YYYY"}>{this.state.report.date}</Moment></small>
                    </div>
                    <p className="mb-1">{this.state.report.content}</p>
                    <div id="delete" align="right">
                        <button type="button" className="btn btn-danger" onClick={this.handleDelete}>X</button>
                    </div>
                </Link>



            </div>
        )
    }
}

export default Report