import React from 'react';
import Card from './card.js';

export default class Container extends React.Component
{
    render() {
        return ( <div>
            <div id="card1"> <Card /> </div>
            <div id="card2"> <Card /> </div>

        </div>)
    }
}