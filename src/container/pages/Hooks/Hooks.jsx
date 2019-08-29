import React, { Component, useState, useEffect } from 'react';
import './Hooks.css';

// class Hooks extends Component {
//     state = {
//         count: 0
//     }

//     handleCount = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     render() {
//         return (
//             <div className="p-hooks">
//                 <p>Nilai saya saat ini adalah {this.state.count}</p>
//                 <button onClick={this.handleCount}>Update Nilai</button>
//             </div>
//         )
//     }
// }

const Hooks = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Title change: ${count}`;
        return () => {
            document.title = `ReactJS Hello World`;
        }
    })

    return (
        <div className="p-hooks">
            <p>Nilai saya saat ini adalah {count}</p>
            <button onClick={() => setCount(count + 1)}>Update Nilai</button>
        </div>
    )
}

export default Hooks;