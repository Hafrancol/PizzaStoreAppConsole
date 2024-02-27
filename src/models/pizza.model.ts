import { PizzaPrice } from "../utils/enums/PizzaPrice.enum";
import { PizzaType } from "../utils/enums/PizzaTypes.enum";


export class Pizza {

    private _type: PizzaType;
    private _price: PizzaPrice;

    constructor(type: PizzaType) {
        this._type = type;
        this._price = PizzaPrice[type as PizzaType];
    }

    get type() : PizzaType {
        return this._type;
    }

    get price() : PizzaPrice {
        return this._price;
    }
}