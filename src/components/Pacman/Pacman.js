import React, {Component} from 'react';

import {ReactComponent as PacmanSvg} from './pacman.svg';
import './style.css';

class Pacman extends Component {

    state = {
        direction: 'right',
        position: {
            top: 50,
            left: 50
        }
    };

    constructor(props) {
        super(props);
        this.pacmanRef = React.createRef();
    }

    componentDidMount() {
        this.pacmanRef.current.focus();
    }

    handleKeyDown = (event) => {
        console.log(event.keyCode, event.key);
    };

    render() {
        return (
            <div className="pacman" style={this.state.position}
                 ref={this.pacmanRef}
                 tabIndex="0"
                 onKeyDown={this.handleKeyDown}>
                <PacmanSvg/>
            </div>
        );
    }
}

Pacman.defaultProps = {
    step: 50, // 50px
    size: 50, // pacman size 50x50px
    // TODO move to config
    border: 10 * 2,
    topScoreBoardHeight: 50
};

export default Pacman;
