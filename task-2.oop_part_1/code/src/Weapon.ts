import { Item } from './Item';

export class Weapon extends Item {
    MODIFIER_CHANGE_RATE = 0.05;

    private baseDamage: number;
    private damageModifier: number;
    private baseDurability: number;
    private durabilityModifier: number;

    constructor (
        name: string,
        baseDamage: number,
        baseDurability: number,
        value: number,
        weight: number
    ) {
        super(name, value, weight);

        this.baseDamage = baseDamage;
        this.damageModifier = this.baseDamage + this.MODIFIER_CHANGE_RATE;
        this.baseDurability = baseDurability;
        this.durabilityModifier = this.baseDurability + this.MODIFIER_CHANGE_RATE;
    }

    public getDamage () {
        return this.getBaseDamage() + this.MODIFIER_CHANGE_RATE;
    }

    public getDurability () {
        return (this.baseDurability - this.durabilityModifier) / this.baseDurability * 100;
    }

    public getBaseDamage () {
        return this.baseDamage;
    }

    public getDamageModifier () {
        return this.damageModifier;
    }

    public getBaseDurability () {
        return this.baseDurability;
    }

    public getDurabilityModifier () {
        return this.durabilityModifier;
    }

    protected setBaseDamage (value: number): void {
        this.baseDamage = value;
    }

    protected setBaseDurability (value: number): void {
        this.baseDurability = value;
    }

    protected setDamageModifier (value: number): void {
        this.damageModifier = value;
    }

    protected setDurabilityModifier (value: number): void {
        this.durabilityModifier = value;
    }

    public toString () {
        return `${
            super.toString()
        } , Damage : ${
            this.getDamage()
        } , Durability : ${
            this.getDurability()
        }%`;
    }

    public use (): string {
        const message = `${super.use()}, dealing ${this.getDamage()} points of damage`;

        this.durabilityModifier -= this.MODIFIER_CHANGE_RATE;

        if (this.durabilityModifier <= 0) {
            this.durabilityModifier = 0;
            return `${message}. The ${this.getName()} breaks`;
        }

        return message;
    }
}
