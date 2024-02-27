
import { v4 as uuidv4 } from 'uuid';
import { Pizza } from "./pizza.model";
import { Soda } from "./soda.model";
import { IOrder } from "../utils/interface/order.interface";
import { PizzaType } from '../utils/enums/PizzaTypes.enum';

export class Order {

    // { tipo: cantidad}
		// {
		// 	{
		// 		tipo: hawaina,
		// 		cantidad: 3,
		// 		total: 20.000
		// 	},
		// 	{
		// 		tipo: carnes,
		// 		cantidad: 3,
		// 		total: 20.000
		// 	},
		//  totalProducts: 40000
		// }

  // {
	// 	hawaina: 3,
	// 	carnes: 1,
	// 	cocacola: 1,
	// 	manzana: 3
	// }

    private id: string;
    private items: Partial<{[key in PizzaType] : IOrder}> = {};
		private _total: number = 0;
//private soddas: string //TODO:

constructor() {
	this.id = uuidv4();
}

public addItem(product: (Pizza| Soda), amount: number){
	this.items[product.type as PizzaType] = {
		type: product.type,
    amountPizza: amount,
    totalPrice: amount * product.price
	}
}

public total (): number {
	// recorer el diccionario de items, extraer la lista de pizzas y multiplicar por el valor y sumar y devolver
	return this._total;
}

}