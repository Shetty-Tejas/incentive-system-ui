import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import AddTrainee from './AddTrainee'
import ViewTrainee from './ViewTrainee';
//import SearchByTraineeId from './SearchByTraineeId'
import Home from './Home'

export function ReactRouter() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/" >Home</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className="nav-link" to="/listOfTrainees">List of Trainee</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/add">Add/Update</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/searchByTraineeId">Search</Link>
                                </li> */}

                            </ul>
                        </div>
                    </div>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/listOfTrainees">
                        <ViewTrainee></ViewTrainee>
                    </Route>

                    <Route path="/add">
                        <AddTrainee></AddTrainee>
                    </Route>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>

                    {/* <Route path="/searchByTraineeId" component={SearchByTraineeId}/> */}
                </Switch>
            </div>
        </Router>
    )
}

export default ReactRouter
