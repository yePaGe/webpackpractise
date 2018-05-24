import React from 'react';
import { render } from 'react-dom';
import Greeter from './Greeter.jsx';

import main from './main.css';

class App extends React.Component{
    render() {
        return(
            <div className={main.main}>
                <Greeter/>
            </div>
        )
    }
}

render(<App/>, document.getElementById('root'));