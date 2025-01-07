import Buyable from "../domain/Buyable";

export default class Cart {
    private _items: Buyable[] = [];
    private _itemsId: Set<number> = new Set();

    add(item: Buyable): void {
        if(!this._itemsId.has(item.id)) {
            this._items.push(item);
            this._itemsId.add(item.id);
        }
    }

    get items(): Buyable[] {
        return [...this._items]
    }
}