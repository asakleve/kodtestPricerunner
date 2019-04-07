import {getCategoryList} from '../containers/category/state/category';

const categoryItems = getCategoryList();

export function getSortedItemList() {
    const list = categoryItems.products;
    list.sort(sortByRating);
    return list;
}

export function sortByRating(a, b) {
    if (a.rating.averageRating > b.rating.averageRating) {
        return 1;
    }
    if (a.rating.averageRating < b.rating.averageRating) {
        return -1;
    }
    return 0;
}