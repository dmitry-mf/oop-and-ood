import { Page } from '../page';
import { Item } from '../item';

export class Pages extends Item {
    private pages: Page[];

    constructor (pages: Page[]) {
        super();

        this.pages = pages;
    }

    getPages () {
        return this.pages;
    }

    toString () {
        return this.pages.map(page => page.toString()).join();
    }
}