// const text = require('./assets/text.json')

// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = text.text;
//     console.log(greet)
//     return greet;
// }

import React from 'react';
import Text from './assets/text.json';
import style from './Greeter.css';

class Greeter extends React.Component {
    componentDidUpdate() {
        console.log('aaaa')
    }
    render() {
        return (
            <div>
                ourt
                welcome fool!
                {Text.text}
                <div className={style.con}>
                   lsdfsafsadfasdffas
                </div>
            </div>
        )
    }
}

export default Greeter;