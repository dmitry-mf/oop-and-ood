
import { Item } from './Item';

export class Consumable extends Item {
    private consumed: boolean;
    private spoiled: boolean;

    constructor (
        name: string,
        value: number,
        weight: number,
        spoiled: boolean,
    ) {
        super(name, value, weight);

        this.consumed = false;
        this.spoiled = spoiled;
    }

    public eat (): string {
        const message = `You eat the ${this.getName()}.`;

        if (this.consumed) {
            return `There is nothing left of the ${this.getName()} to consume.`
        }

        if (this.spoiled) {
            `${message}\ You feel sick.`
        }

        return message;
    }

    public use (): string {
        if(!this.consumed && !this.spoiled) {
            return this.eat();
        }
    }

    public isConsumed (): boolean {
        return this.consumed;
    }

    public setConsumed (consumed: boolean): void {
        this.consumed = consumed;
    }

    public isSpoiled (): boolean {
        return this.spoiled;
    }
}