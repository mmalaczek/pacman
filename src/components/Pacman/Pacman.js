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

        const currentTop = this.state.position.top;
        const currentLeft = this.state.position.left;

        // 39 ArrowRight
        // 40 ArrowDown
        // 37 ArrowLeft
        // 38 ArrowUp

        if (event.key == 'ArrowUp') {
            this.setState({
                direction: 'up'
            });
        } else if (event.key == 'ArrowRight') {
            this.setState({
                direction: 'right'
            });
        } else if (event.key == 'ArrowDown') {
            this.setState({
                direction: 'down'
            });
        } else if (event.key == 'ArrowLeft') {
            this.setState({
                direction: 'left'
            });
        }
    };

    render() {
        const { direction, position } = this.state;
        return (
            <div className={`pacman pacman-${direction}`}
                 ref={this.pacmanRef}
                 tabIndex="0"
                 style={this.state.position}
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
