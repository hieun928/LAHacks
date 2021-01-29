import React from 'react';

import Header from './components-page2/header.js';
//import Container from './components-page2/container.js';

export default class ListPage extends React.Component 
{
    render () {
        return (<div> 
            <div id="header"> <Header /> </div> 
            {/*<div id="container"> <Container /> </div>*/}
    </div> )
    }
}