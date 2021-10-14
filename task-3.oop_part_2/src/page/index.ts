import { Item } from '../item';

export class Page extends Item {
    private id: number;
    private text: string;
    private type: string;

    constructor (id: number, text: string, type: string) {
        super();

        this.id = id;
        this.text = text;
        this.type = type;
    }

    toString () {
        return `here is page ${
            this.text
        } #${
            this.id
        } and it\'s material is ${
            this.type
        }`
    }
}