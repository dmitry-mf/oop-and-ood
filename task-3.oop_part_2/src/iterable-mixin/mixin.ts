export function itarableMixin(SuperClass: any) {
    return class IterableItem extends SuperClass {
        [Symbol.iterator]() {
            let index = -1;

            return {
                next: () => (
                    {
                        value: `${this.toString()}, ${this.pages.getPages()[++index]}`,
                        done: this.pages.getPages().length === index
                    }
                )
            };
        };
    }
}
