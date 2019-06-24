import React from 'react'
import api from '../../services/api'
import Department from './Department'

class Departments extends React.Component{
    state={departments:[]}
    i=0
    async componentDidMount() {
        const response= await api.get('http://localhost:5000/admin/departments')
        this.setState({departments:response.data})
    }
    createDepartment=(department)=>{
        let key="department"+this.i.toString();
        this.i+=1;
        return <div key={key}><Department department={department} key={department.id} link={'/department/details/'+department.id}/></div>
    }
    renderElements=()=>{
       return this.state.departments.map(this.createDepartment)
    }
    render(){
        return (
                this.renderElements()
        )
    }
}

export default Departments