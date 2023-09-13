import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getHighScore } from '../config/SaveScore';
import color from '@material-ui/core/colors/amber';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
     
    },
});

export default class About extends Component {

    render() {

        return (
            <div className={css(styles.container)}>
                <h3>{`Score : ${this.props.score}`}</h3>
                <h3>{`High Score: ${getHighScore()}`}</h3>
                <div>Make phrases from the given inputs </div>
                <div><h5>Select letters by clicking if it is a valid word then it will disappear and your score will increase
            </h5>
            </div>
                <h4>Check out github repo here</h4>
                <a className="github-button" href="https://github.com/abhishekcode/word-tetris" data-size="large" data-show-count="true" aria-label="Star abhishekcode/word-tetris on GitHub">Github Repo</a>
            </div>
        );
    }
}




