import { Pages } from '../pages';
import { Item } from '../item';
import { itarableMixin } from '../iterable-mixin/mixin';

export class Magazine extends itarableMixin(Item) {
    private title: string;
    private pages: Pages;

    constructor (title: string,  pages: Pages) {
        super();

        this.title = title;
        this.pages = pages;
    }

    toString () {
        return `Magazine: ${
            this.title
        } with number of pages: ${
            this.pages.getPages().length
        }`;
    }
}