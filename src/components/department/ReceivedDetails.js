import React from 'react'
import api from '../../services/api'
import Card from '../util/Card'
import history from '../../history'
class ReceivedDetails extends React.Component{
    state={report:{},answer:""};
    async componentDidMount() {
        const { match:{params}} = this.props;

        console.log(params.id)

        const response = await api.get('http://localhost:5000/report/'+params.id);
        this.setState({report:response.data[0]});
        if(response.data[0].resposta){
            this.setState({answer:response.data[1]})
        }
        console.log(response)
    }
    onSubmitClick = (e) =>{
        const { match:{params}} = this.props;
        e.preventDefault();
        api.post('http://localhost:5000/received/'+params.id,{
            content:this.state.answer
        })
        history.push('/received')
    }

    renderAnswer=()=>{
        if(this.state.report.resposta){
            return(<div>
                <Card header={"De: "+this.state.answer.user} title={"Resposta"} text={this.state.answer.content}/>
            </div>)
        }else {
            return (
                <div>
                    <Card header={"Resposta"} text={<textarea rows="10" cols="120" id={'answer'} value={this.state.answer}
                                                              onChange={e=>{
                                                                  this.setState({answer:e.target.value})
                                                              }}/>}/>
                    <button type="button" className="btn btn-secondary" onClick={this.onSubmitClick}>Submit</button>
                </div>
        )
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

export default ReceivedDetails