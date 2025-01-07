import Movie from "../domain/Movie";
import Cart from "../service/Cart";

describe("Movie class", () => {
    const movie = new Movie(1, "Мстители", 2012, "США", "Avengers Assemble!", "фантастика, боевик, фэнтези, приключения", "2 ч 17 мин", 250);

    test("should create a Movie instance with correct properties", () => {
        const correct = {
            id: 1,
            name: "Мстители",
            year: 2012,
            country: "США",
            slogan: "Avengers Assemble!",
            genre: "фантастика, боевик, фэнтези, приключения",
            time: "2 ч 17 мин",
            price: 250
        };

        expect(movie).toEqual(correct);
    });

    test("getInfo should return formatted movie info", () => {
        const correctInfo = `
        Мстители
        Год: 2012
        Страна: США
        Слоган: Avengers Assemble!
        Жанр: фантастика, боевик, фэнтези, приключения
        Время: 2 ч 17 мин
        `;

        expect(movie.getInfo()).toBe(correctInfo);
    });
});

describe("Cart class", () => {
    const cart = new Cart;
    const movie1 = new Movie(1, "Мстители", 2012, "США", "Avengers Assemble!", "фантастика, боевик, фэнтези, приключения", "2 ч 17 мин", 250);
    const movie2 = new Movie(2, "Мстители: Война бесконечности", 2018, "США", "An entire universe. Once and for all", "фантастика, боевик, приключения", "2 ч 29 мин", 300);

    test("should add a Buyable item to the cart", () => {
        cart.add(movie1);
        const itemsInCart = cart.items;

        expect(itemsInCart[0]).toBe(movie1);
    });

    test("should add multiple Buyable items to the cart", () => {
        cart.add(movie1);
        cart.add(movie2);

        const itemsInCart = cart.items;

        expect(itemsInCart).toHaveLength(2);
    });
});
