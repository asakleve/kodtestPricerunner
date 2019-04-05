import React, {Component} from 'react';
import ListItem from '@material-ui/core/ListItem';
import './Category.scss';
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import {getProductImageLink} from "../../utils/imageUtils";
import Icon from '@material-ui/core/Icon';


export default class CategoryItem extends Component {

    render() {
        console.log('hej');

        const {
            id,
            name,
            description,
            url,
            numberOfMerchants,
            amount,
            currency,
            image

        } = this.props;

        return (
            <ListItem className="listItem">
                <img className="image" src={image}/>
                <ListItemText primary={name} secondary={description}/>
                <Typography className="merchants">
                    {numberOfMerchants}
                </Typography>
                <Typography className="amount">
                    {amount}
                </Typography>
                <Typography className="currency">
                    {currency}
                </Typography>
                <Button variant="contained" href={url} className="button">
                    Jämför pris
                </Button>
            </ListItem>
        );
    }
}
