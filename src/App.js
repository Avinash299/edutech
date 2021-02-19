import React from 'react';
import Sidebar from './components/Sidebar';
import NavigationBar from './components/NavigationBar';
import Dashboard  from './components/Dashboard/Dashbaord';
import User from './/components/User/User';
import Login from './Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
class App extends React.Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        let user = localStorage.getItem('user');
        //let user = true;
        return (
            <div className="container" style={{"maxWidth":"none"}}>
                 <Router>
                <div className="row">
                    {user &&
                        <div className="col-12 bg-primary">
                               <NavigationBar/>
                           </div> 
                    }
                    {user &&
                          <Sidebar/>
                    }
                    <div className="main col  h-100" style={{"margin":"5px"}}>
                            <Switch>
                                <Route path='/dashbaord' component={Dashboard} />
                                <Route path='/users' component={User} />
                                <Route path="/" component={Login} />
                                <Redirect from="*" to="/" />
                            </Switch>
                    </div>
                </div>
              
                </Router>
            </div>
        );
    }
}

export default App;