
import { v4 as uuidv4 } from 'uuid';
import { IPizzaOrder, ISodaOrder } from "../utils/interface/IPizzaOrder.interface";
import { PizzaType, SodaType } from '../utils/enums/PizzaAndSodaTypes.enum';

export class Order {

	// ------------  ITEMS -------------------
	// "_pizzas": [
	//     {
	//         "Hawaina": {
	//             "typePizza": "Hawaina",
	//             "amountPizza": 2,
	//             "totalPrice": 20600
	//         }
	//     },
	//     {
	//         "Carnes": {
	//             "typePizza": "Carnes",
	//             "amountPizza": 2,
	//             "totalPrice": 20600
	//         }
	//     }
	// ]


	private _id: string;
	private _pizzas: Partial<{ [key in PizzaType]: IPizzaOrder }>[] = [];
	private _sodas: Partial<{ [key in SodaType]: ISodaOrder }>[];
	private _total: number = 0;
	private _ownerOrder: string;

	constructor(pizzas: Partial<{ [key in PizzaType]: IPizzaOrder }>[], sodas: Partial<{ [key in SodaType]: ISodaOrder }>[], ownerName: string) {
		this._ownerOrder = ownerName;
		this._id = uuidv4();
		this._pizzas = pizzas;
		this._sodas = sodas;
		this.total();
	}

	/**
	 * Add the new Pizza
	 * 
	 * @param {Partial<{ [key in PizzaType]: IPizzaOrder }>} pizza 
	 * @returns 
	 * 
	 * @memberOf Order
	 */
	public addPizza(pizza: Partial<{ [key in PizzaType]: IPizzaOrder }>) {
		if (!pizza) return;
		this._pizzas.push(pizza);
		this.total();
	}

	/**
	 * Calculate the price for every pizza and total price
	 * 
	 * @private
	 * 
	 * @memberOf Order
	 */
	protected total = () => {
		// total for pizzas 
		for (let pizza of this._pizzas) {
			const key = Object.keys(pizza)[0] as PizzaType;
			if (pizza.hasOwnProperty(key)) {
				const pizzaOrder = pizza[key];
				if (pizzaOrder !== undefined) {
					const totalPrice = pizzaOrder?.totalPrice * pizzaOrder?.amountPizza;
					pizzaOrder.totalPrice = totalPrice;
					this._total += totalPrice;
				}
			}

		};

		// total for sodas
		for (let soda of this._sodas) {
			const key = Object.keys(soda)[0] as SodaType;
			if (soda.hasOwnProperty(key)) {
				const sodaOrder = soda[key];
				if (sodaOrder !== undefined) {
					const totalPrice = sodaOrder?.totalPrice * sodaOrder?.amountSoda;
					sodaOrder.totalPrice = totalPrice;
					this._total += totalPrice;
				}
			}

		}
	}
}