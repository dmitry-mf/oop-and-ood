import { Pages } from '../pages';
import { Item } from '../item';
import { itarableMixin } from '../iterable-mixin/mixin';

export class Comics extends itarableMixin(Item) {
    private title: string;
    private author: string;
    private pages: Pages;
    private artist: string;

    constructor (title: string, artist: string, author: string, pages: Pages) {
        super();

        this.title = title;
        this.author = author;
        this.pages = pages;
        this.artist = artist;
    }

    toString () {
        return `Comics: ${
            this.title
        } by ${
            this.artist
        }, the artist is ${
            this.author
        }, number of pages: ${
            this.pages.getPages().length
        }`;
    }
}