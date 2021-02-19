import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: [{
                    id:1,
                    firstName:"Avinash",
                    lastName:"Lohakare",
                    email:"avinash@gmail.com"
                },{
                    id:2,
                    firstName:"Avinash2",
                    lastName:"Lohakare",
                    email:"avinash22@gmail.com"
                },{
                    id:3,
                    firstName:"Avinash3",
                    lastName:"Lohakare",
                    email:"avinash11@gmail.com"
                }]
        }
       
    }

    render() {
        return (
            <div>
            <h2 className="text-center">Employees List</h2>
            
            <div className = "row">
                   <table className = "table table-striped table-bordered">

                       <thead>
                           <tr>
                              <th> Id</th>
                               <th> Employee First Name</th>
                               <th> Employee Last Name</th>
                               <th> Employee Email Id</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.employees.map(
                                   employee => 
                                   <tr key = {employee.id}>
                                       <td> { employee.id} </td>   

                                        <td> { employee.firstName} </td>   
                                        <td> {employee.lastName}</td>
                                        <td> {employee.email}</td>
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>

            </div>

       </div>
        );
    }
}

export default User ;