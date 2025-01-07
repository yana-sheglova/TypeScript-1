import Buyable from "./Buyable";

export default class Movie implements Buyable {
    readonly id: number;
    readonly name: string;
    readonly year: number;
    readonly country: string;
    readonly slogan: string;
    readonly genre: string;
    readonly time: string;
    price: number;

    constructor(id: number, name: string, year: number, country: string, slogan: string, genre: string, time: string, price: number) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.genre = genre;
        this.time = time;
        this.price = price;
    }

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