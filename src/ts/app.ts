import Cart from "./service/Cart";
import Movie from "./domain/Movie";

const cart = new Cart;

const movie1 = new Movie(1, "Мстители", 2012, "США", "Avengers Assemble!", "фантастика, боевик, фэнтези, приключения", "2 ч 17 мин", 250);
const movie2 = new Movie(2, "Мстители: Война бесконечности", 2018, "США", "An entire universe. Once and for all", "фантастика, боевик, приключения", "2 ч 29 мин", 300);

cart.add(movie1);
cart.add(movie2);

const itemsInCart = cart.items;

console.log("Items in cart:");
(itemsInCart as Movie[]).forEach(item => {
    console.log(item.getInfo());
});