import React from "react";
import '../css/core.css';

import Pok from './Experiment/pok'
import Pok_r from './Experiment/pok2_r'
import Pok_rr from './Experiment/pok2_rr'
import Pok_g from './Experiment/pok2_g'
import Pok_y from './Experiment/pok2_y'

class Square extends React.Component
{

        constructor(props) 
        {
                super(props);
                this.state = { username: '' };
        };
        render()
        {

        return (
        <div className="App">
                <header className="App-header">
                        <div className="CoreX">
                                &nbsp;
                                1st
                                <div className='CoreX0'>
                                        <Pok_g/>
                                </div>
                
                                <p> </p>

                                2nd
                                <div className='CoreX0'>
                                        <Pok_rr/>
                                </div>

                                <p> </p>

                                3rd
                                <div className='CoreX0'>
                                        <Pok_r/>
                                </div>

                                <p> </p>

                                4th
                                <div className='CoreX0'>
                                        <Pok_y/>
                                </div>

                                <p> </p>

                                5th
                                <div className='CoreX0'>
                                        <Pok/>
                                </div>
                                <p> </p>


                                6th
                                <div className='CoreX0'>
                                        <Pok/>
                                </div>
                                <p> </p>

                        </div>


                Learn Square
                </header>
        </div>
  );
    }
}

export default Square;
