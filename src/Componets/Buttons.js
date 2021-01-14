import logo from '../logo.svg';
import '../App.css';
import '../css/button.css';
import React from "react";
import {render} from "react-dom";

function Sum({ valueUpdated }) {
    return (
      <div> {this.valueUpdated} </div>
    );
  };

class Button extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = { 
            count: 0.0,
            count2: 0.0,

            sum: 0.0,
            substract: 0.0
        
        };

    };

    onUp= () =>{
        this.setState({
            count: this.state.count +1
        });
        console.group("Up was pressed");

        this.onOperation((this.state.count+1), (this.state.count2) );
    }


    onDown= () =>{
        this.setState({
            count: this.state.count -1
        });
        console.group("Down was pressed");

        this.onOperation((this.state.count-1), (this.state.count2) );
    }

    onUp2= () =>{
        this.setState({
            count2: this.state.count2 +1
        });
        console.group("Up2 was pressed");

        this.onOperation((this.state.count), (this.state.count2+1) );
    }


    onDown2= () =>{
        this.setState({
            count2: this.state.count2 -1
        });
        console.group("Down2 was pressed");
        this.onOperation(this.state.count, (this.state.count2-1) );
    }

    onOperation=(e1, e2) => {
        console.log("Opertion " + e2);
        this.sumOperation(e1, e2);
        this.substractOperation(e1, e2);

    }

    sumOperation= (e1, e2) =>{
        this.setState({
            sum: e1 + e2
        });
        console.group("Sum happen");
    }

    substractOperation= (e1, e2) =>{
        this.setState({
            substract: e1 - e2
        });
        console.group("Substract happen");
    }

    multiplicationOperation(e1, e2) {
        let multX = e1*e2;
        console.log(multX);
        return (<div> {multX} </div>);
      }

      divisionOperation(e1, e2) {
        let div = e1/e2;
        console.log(div);
        return (<div> {div} </div>);
      }


    render()
    {
    return (
        <div className="App">
            <header className="App-header">

                <div className='base'>
                    {this.state.count}    
                    <div> </div>            
                    <button as="input"  type="submit" onClick={this.onUp}> 
                        Up
                    </button>
                    <button as="input"  type="submit" onClick={this.onDown}> 
                        Down   
                    </button>
                </div>


                <div className='base'>
                    {this.state.count2}
                    <div> </div>  
                    <button as="input"  type="submit" variant="outline-primary" onClick={this.onUp2}> 
                        Up
                    </button>
                    <button as="input"  type="submit" onClick={this.onDown2}> 
                        Down   
                    </button>
                </div>


                <div className='base'>
                    Sum: 
                    <div> </div> 
                    {this.state.sum}
                </div>

                <div className='base'>
                    Substract: 
                    <div> </div>
                    {this.state.substract}
                </div>

                <div className='base'>
                    Multiplication: 
                    <div> </div>
                    {this.multiplicationOperation(this.state.count, this.state.count2)}
                </div>

                <div className='base'>
                    Division: 
                    <div> </div>
                    {this.divisionOperation(this.state.count, this.state.count2)}
                </div>
                

            </header>
        </div>
    );
}
}

export default Button;
