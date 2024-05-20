import { PizzaType, SodaType } from "../utils/enums/PizzaAndSodaTypes.enum";
import { IPizzaOrder, ISodaOrder } from "../utils/interface/IPizzaOrder.interface";
import { Order } from "./order.model";

export class DeliveryOrder extends Order{

    private _direction!: string

    constructor(pizzas: Partial<{ [key in PizzaType]: IPizzaOrder }>[], sodas: Partial<{ [key in SodaType]: ISodaOrder }>[], ownerName: string, direction: string){
        super(pizzas, sodas, ownerName);
        this._direction = direction;
    }
}