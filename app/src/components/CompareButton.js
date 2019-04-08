import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core';

const styles = () => ({

    buttonWrapper: {
        border: '1px solid #2A6DAB',
        borderBottomWidth: 2,
        background: "#2595DD",
        whiteSpace: "nowrap",
        padding: "16px 32px",
        borderRadius: 5,
        color: 'white',
        '@media (max-width:767px)': {
            display: 'none',
        }
    },
    link:{
        color: "white",
        textDecoration: "none"
    }
});

class CompareButton extends PureComponent{
    render(){

        const{
            url,
            classes
        }=this.props;

        return(
            <div className={classes.buttonWrapper}>
                <a href={url} className={classes.link}>
                        Jämför pris
                </a>
            </div>
        )
    }
}
CompareButton.propTypes ={
    url:PropTypes.string,
};

export default withStyles(styles)(CompareButton);