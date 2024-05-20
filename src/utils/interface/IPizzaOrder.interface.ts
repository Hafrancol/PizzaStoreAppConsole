import { PizzaType, SodaType } from "../enums/PizzaAndSodaTypes.enum";


export interface IPizzaOrder {
        typePizza: PizzaType,
        amountPizza: number,
        totalPrice: number   
}

export interface ISodaOrder {
        sodaType: SodaType,
        amountSoda: number,
        totalPrice: number   
}