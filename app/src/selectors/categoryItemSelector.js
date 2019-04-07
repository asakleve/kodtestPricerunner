import {getCategoryList} from '../containers/category/state/category';

const categoryItems = getCategoryList();

export function getSortedItemList() {
    const list = categoryItems.products;
    list.sort(sortByRating);
    list.map(item => {
        return item.cheapestPrice.amount = formatPrice(item.cheapestPrice.amount);
    });
    return list;
}

export const sortByRating = (a, b) => {
    if (a.rating.averageRating > b.rating.averageRating) {
        return 1;
    }
    if (a.rating.averageRating < b.rating.averageRating) {
        return -1;
    }
    return 0;
};

export const formatPrice = (amount) => {
    const price = parseInt(amount);
    Math.floor(price);
    Math.ceil(price);
// add space
    return price;
};