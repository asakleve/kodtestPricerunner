import React, {PureComponent} from 'react';
import {getCategoryList} from './state/category';
import CategoryItem from '../../components/CategoryItem';
import './Category.scss';
import List from "@material-ui/core/List/List";
import {getProductImageLink} from "../../utils/imageUtils";

export default class Category extends PureComponent {
    state = {category: {}};

    componentDidMount() {
        const loadedData = getCategoryList();

        this.setState({
            category: loadedData,
        });
    }

    constructor(props) {
        super(props);
    }

    render() {
        /*
         * You can get the category data from the category state:
         * const { category } = this.state;
         */
        const {category: {products}} = this.state;

        return (
            <List className="list">
                {this.state.category.products &&
                products.map((item) => {
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
