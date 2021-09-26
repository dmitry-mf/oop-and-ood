import { Weapon } from './Weapon';

export class Sword extends Weapon {
    constructor (
        baseDamage: number,
        baseDurability: number,
        value: number,
        weight: number
    ) {
        super('sword', baseDamage, baseDurability, value, weight);
        // todo: empty constructor 
    }

    public polish () {
        if (this.getDurabilityModifier() >= ((25 * this.getDurabilityModifier()) / 100)) {
            return;
        }

        this.setDurabilityModifier(this.getDurabilityModifier() + this.MODIFIER_CHANGE_RATE);
    }
}