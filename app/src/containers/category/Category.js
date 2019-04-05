import React, {Component} from 'react';
import {getCategoryList} from './state/category';
import CategoryItem from './CategoryItem';
import './Category.scss';
import List from "@material-ui/core/List/List";
import {getProductImageLink} from "../../utils/imageUtils";

export default class Category extends Component {
    state = {category: {}};

    componentDidMount() {
        const loadedData = getCategoryList();

        this.setState({
            category: loadedData,
        });
    }

    constructor(props) {
        super(props);
        this.renderItems = this.renderItems.bind(this);

    }

    renderItems() {
        const {category: {products}} = this.state;

        if (products) {
            products.map((item, index) => {
                return (
                    <CategoryItem
                        key={index + item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        url={item.url}
                        numberOfMerchants={item.numberOfMerchants}
                        amount={item.cheapestPrice.amount}
                        currency={item.cheapestPrice.currency}
                        image={item.imageId}
                    />
                );
            })
        }

    }

    render() {
        /*
         * You can get the category data from the category state:
         * const { category } = this.state;
         */
        const {category: {products}} = this.state;

        return (
            <List className="list">
                /* sortera på rank*/
                {this.state.category.products &&
                products.map((item, index) => {
                    return (
                        <CategoryItem
                            key={index + item.id}
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            url={item.url}
                            numberOfMerchants={item.numberOfMerchants}
                            amount={item.cheapestPrice.amount}
                            currency={item.cheapestPrice.currency}
                            imageId={item.imageId}
                            image={getProductImageLink(item)}
                        />
                    );
                })
            }
            </List>
        );
    }
}
