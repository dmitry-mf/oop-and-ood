import { Weapon } from './Weapon';

export class Bow extends Weapon {
    constructor (
        baseDamage: number,
        baseDurability: number,
        value: number,
        weight: number
    ) {
        super('bow', baseDamage, baseDurability, value, weight);
        // todo: empty constructor 
    }

    public polish () {
        if (this.getDurabilityModifier() >= 1) {
            return;
        }

        this.setDurabilityModifier(this.getDurabilityModifier() + this.MODIFIER_CHANGE_RATE);
    }
}