import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'
class header extends React.Component{

    render(){
        return(
            <div id="header" >
                <nav className="navbar navbar-light " >
                    <a className="navbar-brand">IFG</a>
                    <Link to="/report/new">Cadastrar relatorio</Link>
                </nav>
            </div>
        )
    }
}

export default header;
