import React, {Component} from "react";
import InformationBar from "./InformationBar";


class SelectionBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            dropdown : 'python-dev',
 
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    
    
    handleChange(event) {
        const {name, value} = event.target
         this.setState({ [name]: value })
    }
    render(){
        
        return(
            <div className='dropdown'>
                  <select 
                  className='dropdown-style'
              value={this.state.dropdown}
              onChange={this.handleChange}
              name="dropdown"
          >
             <option value="python-dev">Python Dev</option>
              <option value="python">Python</option>
              <option value="android">Android</option>
            
           
          </select>
          <InformationBar
          dropdown={this.state.dropdown}/>
            </div>
          )
    }
}
export default SelectionBar
