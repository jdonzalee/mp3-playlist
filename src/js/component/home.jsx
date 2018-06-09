import React from 'react';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';


//create your first component
export class Home extends React.Component{
    
    render(){
        return (
            <div className="Playlist">  
                <ul className="list-group">
                    <li className="list-group-item">South Park- By Kyle</li>
                    <li className="list-group-item">Thurder Cats- By Moonra</li>
                    <li className="list-group-item">X-Men-By Professor</li>
                </ul>
                <ul className="Controls mx-auto">
                    <i className="fas fa-step-backward"></i>
                    <i className="fas fa-play"></i>
                    <i className="fas fa-step-forward"></i>
                </ul>
                
            </div>
      
        );
    }
}
