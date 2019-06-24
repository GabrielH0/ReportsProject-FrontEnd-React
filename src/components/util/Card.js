import React from 'react'


class Card extends React.Component{

    render(){
        return(
            <div className="card">
                <div className="card-header">
                    {this.props.header}
                </div>
                <div className="card-body">
                    <h5 className="cardTitle">{this.props.title}</h5>
                    <p className="card-text">{this.props.text}</p>
                </div>
            </div>
        )

    }
}


export default Card