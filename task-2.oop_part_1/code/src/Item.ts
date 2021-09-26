import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    private id: number;
    private value: number;
    private name: string;
    private weight: number;

    constructor (name: string, value: number, weight: number) {
        this.id = ++id;
        this.name = name;
        this.value = value;
        this.weight = weight;
    }

    public compareTo(other: Item): number {
       if (this.value < other.value) {
           return -1;
       }

       if (this.value > other.value) {
           return 1;
       }

       return this.name.toLowerCase() < other.name.toLowerCase() ? -1 : 1;
    }

    public toString () {
        return `${this.name} − Value: ${this.value}, Weight: ${this.weight}`
    }

    public use (): string {
        return `you use the ${this.name}`;
    }

    public getId () {
        return this.id;
    }

    public getName () {
        return this.name;
    }

    public getValue () {
        return this.value;
    }

    public getWeight () {
        return this.weight;
    }

    public setValue (value: number): void {
        this.value = value;
    }

    public setName (name: string): void {
        this.name = name;
    }

    public setWeight (weight: number): void {
        this.weight = weight;
    }

    public static reset (): void {
        id = 0;
    }
}
