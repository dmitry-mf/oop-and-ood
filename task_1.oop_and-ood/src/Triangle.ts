import { Shape } from './Shape';
import { Point } from './Point';

enum TYPES {
    ISOSCELES = 'isosceles triangle',
    SCALENE = 'scalene triangle',
    EQUILATERAL = 'equilateral triangle',
}

export class Triangle extends Shape {

    constructor (points: Point[]);
    constructor (points: Point[], color: string, filled: boolean);

    constructor (...args) {
        super(args);
    }

    toString () {
        return `Triangle[${this.points.map((point, i) => `v${i + 1}=${point.toString()}`).toString()}]`;
    }

    getType () {
        const c = Number(parseFloat(String(this.points[0].distance(this.points[1]))).toFixed(1));
        const b = Number(parseFloat(String(this.points[1].distance(this.points[2]))).toFixed(1));
        const a = Number(parseFloat(String(this.points[2].distance())).toFixed(1));

        if ((a === b) && (a === c) && (b === c)) {
            return TYPES.EQUILATERAL;
        }

        if (a === b) {
            return TYPES.ISOSCELES;
        }

        return TYPES.SCALENE;
    }
}
