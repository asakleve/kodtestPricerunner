import React, {PureComponent} from 'react';
import ListItem from '@material-ui/core/ListItem';
import '../containers/category/Category.scss';
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import Rating from 'material-ui-rating';
import PropTypes from 'prop-types';

export default class CategoryItem extends PureComponent {

    render() {
        const {
            id,
            name,
            description,
            url,
            numberOfMerchants,
            amount,
            currency,
            image,
            averageRating

        } = this.props;

        return (
            <ListItem className="listItem">
                <img className="image" src={image}/>
                <Rating readOnly={true}
                    value={averageRating}
                    max={5}
                />
                <ListItemText primary={name} secondary={description}/>
                <Typography className="merchants">
                    {numberOfMerchants} butiker
                </Typography>
                <Typography className="amount">
                   fr {amount}
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
CategoryItem.propTypes = {
    id: PropTypes.number,
    description: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    numberOfMerchants: PropTypes.number,
    amount: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    averageRating: PropTypes.string
};


