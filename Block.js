import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Button from '@material-ui/core/Button';

import { COLORS, blockSize } from '../config/config';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
        padding: 20,
        borderRadius: 5,
        minWidth: 10,
        minHeight: 20,
        height: blockSize(),
        width: blockSize(),
        backgroundColor: 'yellow',
    },
    buttonContent: {
        display: 'flex',
        flex: 1,
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'auto',
        wordWrap: 'break-word',
    },
    mainText: {
        fontFamily: "'Roboto', sans-serif",
        color: 'black',
        fontSize: 13,
        fontWeight: 1000
    },
    subText: {
        fontSize: 0
    }
});


export default class Block extends Component {


    _onBlockClick = () => {
        const { letter, onLetterClick } = this.props;
        if (letter && onLetterClick) {
            onLetterClick(letter);
        }
    }

    render() {
        const { letter, pos } = this.props;

        let fillerStyle = { border: '2px solid black' }
        if (letter) {
            let _backgroundColor = letter.moving ? COLORS.MOVING : COLORS.NOTMOVING;
            if (letter.isWord) _backgroundColor = COLORS.POSSIBLE_WORD;
            fillerStyle = {
                backgroundColor: _backgroundColor,
                border: '2px solid white'
            }
        }
        return (
            <Button variant="outlined" className={css(styles.container)} style={fillerStyle} onClick={this._onBlockClick}>
                <div className={css(styles.buttonContent)}>
                    {letter && <span className={css(styles.mainText)}>{letter.letter}</span>}
                    {process.env.NODE_ENV !== 'production' && <span className={css(styles.subText)} > {pos.x + "," + pos.y}</span >}
                </div>
            </Button >
        );
    }
}




