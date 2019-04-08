import React, {PureComponent} from 'react';
import CategoryItem from '../../components/CategoryItem';
import './Category.scss';
import List from "@material-ui/core/List/List";
import {getProductImageLink} from "../../utils/imageUtils";
import {getSortedItemList} from "../../selectors/categoryItemSelector";
import {withStyles} from '@material-ui/core';

const styles =()=> ({
    list: {
    background: "#F8F8F8",
        '@media (max-width:767px)':{
            margin: 5
        },
        '@media (max-width:768px)':{
            margin: 5
        }
    }
});

class Category extends PureComponent {
    state = {category: []};

    componentDidMount() {
        const loadedData = getSortedItemList();

        this.setState({
            category: loadedData,
        });
    }

    render() {
        /*
         * You can get the category data from the category state:
         * const { category } = this.state;
         */
        const {classes} = this.props;

        return (
            <List className={classes.list}>
                {this.state.category &&
                this.state.category.map((item) => {
                    return (
                        <CategoryItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            url={item.url}
                            numberOfMerchants={item.numberOfMerchants}
                            amount={item.cheapestPrice.amount}
                            currency={item.cheapestPrice.currency}
                            imageId={item.imageId}
                            image={getProductImageLink(item)}
                            averageRating={Number(item.rating.averageRating)}
                        />
                    );
                })
                }
            </List>
        );
    }
}
export default withStyles(styles)(Category);