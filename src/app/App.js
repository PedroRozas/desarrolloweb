import React, {Component} from "react";

class App extends Component{
    render(){
        return (
            <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        proyecto desarrollo web
                    </a>
                </div>
               </nav>
               <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-tittle">
                                        Usuario
                                    </h5>
                                    <form>
                                        <div className="row">
                                            <div className="form-group col-12">
                                                <input type="text" name="email" className="formncontrol" placeholder="Email">
                                                    
                                                </input>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-7">

                        </div>
                    </div>
               </div>
            </div>
        );
    }
}
export default App;