import { Point } from './Point';

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    protected points: Point[];

    abstract getType(): string;

    constructor (points: Point[]);
    constructor (points: Point[], color: string, filled: boolean);

    constructor (points: Point[], color = 'green', filled = true) {
        if (points.length < 3) {
            throw Error('should have at least 3 points');
        };

        this.points = points;
        this.color = color;
        this.filled = filled;
    }

    toString () {
        return `A Shape with color of ${
            this.color
        } and ${
            this.filled ? 'filled' : 'not filled'
        }. Points: ${
            this.points.map(point => point.toString()).join(', ')
        }.`
    }

    getPerimeter () {
        return this.points.reduce((a, point, i, points) => a + point.distance(points[i + 1]), 0);
    }
}
