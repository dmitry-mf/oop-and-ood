import { Consumable } from "./Consumable"

export class Pizza extends Consumable {
    numberOfSlices: number;
    slicesEaten: number;

    constructor (
        numberOfSlices: number,
        spoiled: boolean,
        value: number,
        weight: number,
    ) {
        super('pizza', value, weight, spoiled);

        this.numberOfSlices = numberOfSlices;
        this.slicesEaten = 0;
    }

    public eat (): string {
        if (!this.numberOfSlices) {
            this.setConsumed(true);
            return super.eat();
        }

        if (this.numberOfSlices) {
            this.numberOfSlices -= 1;
            this.slicesEaten += 1;
            return `You eat a slice of the ${this.getName()}`
        }
    }
}