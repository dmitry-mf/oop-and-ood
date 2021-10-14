import { Pages } from '../pages';
import { Item } from '../item';
import { itarableMixin } from '../iterable-mixin/mixin';

export class Book extends itarableMixin(Item) {
    private title: string;
    private author: string;
    private pages: Pages;

    constructor (title: string, author: string, pages: Pages) {
        super();

        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    toString () {
        return `Book: ${
            this.title
        } by ${
            this.author
        } with number of pages: ${
            this.pages.getPages().length
        }`;
    }
}