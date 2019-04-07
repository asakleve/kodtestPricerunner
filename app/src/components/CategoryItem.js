import React, {PureComponent} from 'react';
import ListItem from '@material-ui/core/ListItem';
import '../containers/category/Category.scss';
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Typography from "@material-ui/core/Typography/Typography";
import Rating from 'material-ui-rating';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core';

const styles = () => ({

    listItem: {
        width: '100%',
        height: 140,
        marginTop: 5,
        background: 'white',
        flexWrap: 'wrap',
        borderBottom: '2px solid #eee'
    },
    buttonWrapper: {
        paddingLeft: 40,
        paddingRight: 10,
        display: 'flex',

        '@media (max-width:768px)': {
            display: 'none',
        }
    },
    butt: {
        width: 120,
        marginTop: 45,
        background: 'dodgerblue',
        fontSize: 15,
        borderRadius: 5,
        fontFamily: 'Maven Pro',
        color: 'white',
    },
    firstinfo: {
        display: 'flex',
        width: '80%',
        fontFamily: 'Maven Pro',
    },
    extrainfo: {
        display: 'flex',
        fontFamily: 'Maven Pro',
    },
    star: {
        color: "#ffcc00",
        width: 15,
    },
    starButton: {
        padding: 0,
    },
    merchants: {
        marginLeft: 20,
        fontSize: 20,
    },
    amount: {
        marginLeft: 20,
        fontSize: 20,
    },
    currency: {
        fontSize: 20,
    },
    listItemText: {
        marginLeft: 20,
        fontSize: 20,
    },
    image: {
        height: 80,
        width: 'auto',
    },
    desc: {
        '@media (max-width:768px)': {
            display: 'none',
        }
    }
});


class CategoryItem extends PureComponent {

    render() {
        const {
            name,
            description,
            url,
            numberOfMerchants,
            amount,
            currency,
            image,
            averageRating,
            classes

        } = this.props;

        return (
            <ListItem className={classes.listItem}>
                <div className={classes.firstinfo}>
                    <img className={classes.image} src={image} alt={""}/>
                    <ListItemText primary={name} classes={{secondary: this.props.classes.desc}}
                                  secondary={description}/>
                </div>
                <div className={classes.buttonWrapper}>
                    <a href={url}>
                        <button className={classes.butt}>
                            Jämför pris
                        </button>
                    </a>
                </div>
                <div className={classes.extrainfo}>
                    <Rating
                        readOnly={true}
                        value={averageRating}
                        max={5}
                        classes={{icon: classes.star, iconButton: classes.starButton}}
                    />
                    <Typography className={classes.merchants}>
                        {numberOfMerchants} butiker
                    </Typography>
                    <Typography className={classes.amount}>
                        fr. {amount}
                    </Typography>
                    <Typography className={classes.currency}>
                        {currency}
                    </Typography>
                </div>

            </ListItem>
        );
    }
}

CategoryItem.propTypes = {
    id: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    numberOfMerchants: PropTypes.number,
    amount: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    averageRating: PropTypes.number
};


export default withStyles(styles)(CategoryItem);
