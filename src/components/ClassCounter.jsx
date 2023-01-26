import React from "react";

class ClassCounter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            
        }
    }

  
    
    render(){
        return(
            <div>
                <h1> </h1>
                <input type="text" value={this.value} onChange={event => this.setValue(event.target.value)}></input>
                <h3> </h3>
            </div>
            )
        
       
    }
}
export default ClassCounter