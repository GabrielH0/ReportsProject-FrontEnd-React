import React from 'react'
import Moment from "react-moment";
import {Link} from 'react-router-dom'

class Report extends React.Component{


    render(){
        console.log(this.props);
        const id=this.props.report.id;
        console.log(id);
        return(
            <div className="list-group">
                <Link to={'/report/'+id} className="list-group-item list-group-item-action ">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">adress</h5>
                        <small> <Moment format={"DD/MM/YYYY"}>{this.props.report.date}</Moment></small>
                    </div>
                    <p className="mb-1">{this.props.report.content}</p>
                </Link>

            </div>
        )
    }
}

export default Report