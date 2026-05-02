export class ProductData {
    constructor(
        public id: number,
        public title: string,
        public slug: string,
        public price: number,
        public category: string,
        public image: string,
        public description: string,
        public inStock: boolean
    ) {}
    describe(): string {
        return `Product: ${this.title}\n` + 
            `Price: $${this.price}\n` +
            `Category: ${this.category}\n` +
            `Description: ${this.description}\n` +
            `In Stock: ${this.inStock ? "Yes" : "No"}`;
    }
}