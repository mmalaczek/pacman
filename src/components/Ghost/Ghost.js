import React, {Component} from 'react';

import {ReactComponent as GhostSvg} from './ghost.svg';
import './style.css'

class Ghost extends Component {

    state = {
        direction: 'left',
        position: {
            top: 50 * 3,
            left: 50 * 3
        }
    };

    componentDidMount() {
        this.changeDirectionInterval = setInterval(this.changeDirection, 1000);
        this.moveInterval = setInterval(this.move, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.changeDirectionInterval);
        clearInterval(this.moveInterval);
    }

    changeDirection = () => {
        const arrayOfMovement = ['left', 'up', 'right', 'down'];
        const movement = Math.floor(Math.random() * 4);

        this.setState({direction: arrayOfMovement[movement]});
    };

    move = () => {
        const currentTop = this.state.position.top;
        const currentLeft = this.state.position.left;
        const { direction } = this.state;
        const { step, border, size, topScoreBoardHeight } = this.props;

        if (direction === 'up') {
            this.setState({
                position: {
                    top: Math.max(currentTop - step, 0),
                    left: currentLeft
                }
            });
        } else if (direction === 'right') {
            this.setState({
                position: {
                    top: currentTop,
                    left: Math.min(currentLeft + step, window.innerWidth - border - size)
                }
            });
        } else if (direction === 'down') {
            this.setState({
                position: {
                    // top: currentTop + step,
                    top: Math.min(currentTop + step, window.innerHeight - border - size - topScoreBoardHeight),
                    left: currentLeft
                }
            });
        } else if (direction === 'left') {
            this.setState({
                position: {
                    top: currentTop,
                    left: Math.max(currentLeft - step, 0)
                }
            });
        }
    };

    render() {
        const {color} = this.props;
        return (
            <div className={`ghost ghost-${color}`}
                 style={this.state.position}>
                <GhostSvg/>
            </div>
        );
    }
}

Ghost.defaultProps = {
    color: 'red',
    step: 50, // 50px
    size: 50, // ghost size 50x50px
    // TODO move to config
    border: 10 * 2,
    topScoreBoardHeight: 50
};

export default Ghost;
