import { PizzaType } from "../enums/PizzaTypes.enum";


export interface IOrder {
        type: PizzaType,
        amountPizza: number,
        totalPrice: number   
}