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
                <div className="firstinfo">
                <img className="image" src={image}/>
                <ListItemText primary={name} secondary={description}/>
                 <div className="butt">
                <Button variant="contained" href={url} className="button">
                    Jämför pris
                </Button>
                 </div>
                </div>
                <div className="extrainfo">
                    <Rating
                        readOnly={true}
                        value={averageRating}
                        max={5}
                    />
                <Typography className="merchants">
                    {numberOfMerchants} butiker
                </Typography>
                <Typography className="amount">
                   fr {amount}
                </Typography>
                <Typography className="currency">
                    {currency}
                </Typography>
                </div>

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


