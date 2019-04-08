import {getCategoryList} from '../containers/category/state/category';

const categoryItems = getCategoryList();
const list = categoryItems.products;


export function getSortedItemList() {
    return list.sort(sortByRating);
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
