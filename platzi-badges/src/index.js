// const element = document.createElement('h1')
// element.innerText = 'Hello, Platzi Badges';

// const container = document.getElementById('app');

// container.appendChild(element);

// const jsx = <h1>Hello, Platzi Badges from React!</h1>

// const element = React.createElement('h1', {}, 'Hola!, Soy los children')

// const element = React.createElement(
    //     'a', { href: 'https://platzi.com' }, 'Ir a platzi');
    
    
// const name = 'Stephanie';
// const element = React.createElement(
    //     'h1', {}, `Hola soy  ${name}`
    // );
    // const jsx = <h1>Hola soy, {name}</h1>

    
// const jsx = (
    //     <div>
    //         <h1>Hola, soy Richard</h1>
    //         <p>Soy ingeniero frontend.</p>
    //     </div>
    // );
    
// const element = React.createElement(
    //     'div',
    //     {},
    //     React.createElement('h1', {}, 'Hola, soy Manolo'),
    //     React.createElement('p', {}, 'Soy ingeniero frontend.')
    // );
    // const container = document.getElementById('app');
    
// ReactDOM.render(element, container);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import App from './components/App';

const container = document.getElementById('app');

ReactDOM.render(<App />, container);