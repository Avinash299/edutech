import React from 'react';
import  { Redirect } from 'react-router-dom'
class Login extends React.Component {
     constructor(props){
         localStorage.removeItem('user');
         super(props);
         this.state={
            username:"",
            password:""
         };
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
     }    
     handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
     handleSubmit(e){
        e.preventDefault();
        localStorage.setItem('user',JSON.stringify(this.state));
        this.props.history.push('/dashbaord');
        window.location.reload();
      }

    render() {
        return (
            <div className="col-md-4 col-md-offset-3" style={{"margin":"auto"}}>
            <h1> Log In</h1>
            <form onSubmit={this.handleSubmit}>
              <label>
                <p>Username</p>
                <input type="text" name="username" className="form-control" onChange={this.handleChange} />
              </label>
              <label>
                <p>Password</p>
                <input type="password"  name="password" className="form-control" onChange={this.handleChange} />
              </label>
              <div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        );
    }
}

export default Login ;