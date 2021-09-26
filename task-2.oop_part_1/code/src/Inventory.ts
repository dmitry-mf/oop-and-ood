import { Item } from './Item';
import { ItemComparator } from './ItemComparator';


export class Inventory {
    private items: Item[];

    constructor () {
        this.items = [];
    }

    public getItems () {
        return this.items;
    }

    public addItem (item: Item) {
        this.items.push(item);
    }

    toString (): string {
        return this.items.map(item => item.toString()).join(',');
    }

    sort (comparator?: ItemComparator) {
        return comparator
            ? this.items.sort(comparator.compare)
            : this.items.sort((a, b) => a.getValue() - b.getValue());
    }
}