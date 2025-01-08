import Buyable from "./Buyable";

export default class Movie implements Buyable {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly year: number,
        public readonly country: string,
        public readonly slogan: string,
        public readonly genre: string,
        public readonly time: string,
        public price: number,
    ) {}

    getInfo(): string {
        return `
        ${this.name}
        Год: ${this.year}
        Страна: ${this.country}
        Слоган: ${this.slogan}
        Жанр: ${this.genre}
        Время: ${this.time}
        `;
    }
}