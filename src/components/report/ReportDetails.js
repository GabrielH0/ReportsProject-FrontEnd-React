import React from 'react'
import  axios from "axios";
import './ReportDetail.css'
import Card from '../util/Card'
class ReportDetail extends React.Component{
    state={report:{},answer:{}};
    async componentDidMount() {
        const { match:{params}} = this.props;

        console.log(params.id)

        const response = await axios.get('http://localhost:5000/report/'+params.id);
        this.setState({report:response.data[0]});
        if(response.data[0].resposta){
            this.setState({answer:response.data[1]})
        }
        console.log(response)
    }

    renderAnswer=()=>{
        if(this.state.report.resposta){
            return(<div>
                <Card header={"De: "+this.state.answer.user} title={"Resposta"} text={this.state.answer.content}/>
            </div>)
        }
    };

    render() {

        return(
            <div>
                <Card header={"Para:"+this.state.report.dp} title="Relatório" text={this.state.report.content}/>
                {this.renderAnswer()}
            </div>);


    }
}

export default ReportDetail;