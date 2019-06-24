import React from 'react'
import Report from'../report/Report'
import api from '../../services/api'
class Received extends React.Component{
    state = {reports:[]};
    i=0;
    async componentDidMount(){
        const response = await api.get('http://localhost:5000/received')
        this.setState({reports:response.data})
    }

    createReport= (report) => {
        let key="report"+this.i.toString();
        this.i+=1;
        return <div key={key}><Report report={report} key={report.id} link={'/received/details/'+report.id}/></div>
    };

    renderReports= () => {
        return this.state.reports.map((this.createReport) );
    };

    render () {

        return(
            <div>{this.renderReports()}</div>
        )

    }

}

export default Received