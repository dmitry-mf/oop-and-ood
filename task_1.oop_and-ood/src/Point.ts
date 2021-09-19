export class Point {
    x: number;
    y: number;

    constructor ();
    constructor (x: number);
    constructor (x: number, y: number);
    constructor (point: Point);

    constructor (...args) {
        const [point, y] = args;

        if (!args.length) {
            this.x = 0;
            this.y = 0;
            return;
        }

        if (point instanceof Point) {
            this.x = point.x;
            this.y = point.y;
            return;
        }

        this.x = point || 0;
        this.y = y || 0;
    }

    toString () {
        return `(${this.x}, ${this.y})`
    }

    distance (point: Point | number = 0, y: number = 0) {
        if (point instanceof Point) {
            return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(point.y - this.y, 2));
        }

        if (typeof point === 'number' && typeof y === 'number') {
            return Math.sqrt(Math.pow(this.x - point, 2) + Math.pow(y - this.y, 2))
        }
    }
}
