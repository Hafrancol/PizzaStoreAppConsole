import { DeliveryOrder } from "./DeliveryOrder.model";
import { Order } from "./order.model";
import { pizzasMenu, numberOfPizzas, continuarPedido, pedirGaseosa,SodaMenu, numberOfSodas, nombrePedido, cleanDisplay} from "../inquierer/menus";
import { PizzaType, SodaType } from "../utils/enums/PizzaAndSodaTypes.enum";
import { IPizzaOrder, ISodaOrder } from "../utils/interface/IPizzaOrder.interface";
import { PizzaPrice, SodaPrice } from "../utils/enums/PizzaAndSodaPrices.enum";

export class Pizzeria {

    private pedidos: Order[];
    private domicilios: DeliveryOrder[];

    constructor() {
        this.pedidos = [];
        this.domicilios = [];
    }


    public async hacerPedido() {
        const name: string = await nombrePedido();
        let confirm: boolean = false;
        const orderPizza: Partial<{ [key in PizzaType]: IPizzaOrder }>[] = [];
        const orderSoda: Partial<{ [key in SodaType]: ISodaOrder }>[] = [];
        do {
            let pizza: PizzaType = await pizzasMenu();
            await cleanDisplay();
            const numberOfPizza: number = parseInt(await numberOfPizzas(pizza));
            await cleanDisplay();
            const orderUnitariaPizza: Partial<{ [key in PizzaType]: IPizzaOrder }> = { [pizza]: { typePizza: pizza, amountPizza: numberOfPizza, totalPrice: PizzaPrice[pizza] } }
            orderPizza.push(orderUnitariaPizza);
            confirm = await continuarPedido("Pizza");
            cleanDisplay();
        } while (confirm);
        const isgaseosa = await pedirGaseosa();
        if(isgaseosa){
            do {
                let soda: SodaType = await SodaMenu();
                cleanDisplay();
                let numSodas: number = parseInt(await numberOfSodas(soda));
                await cleanDisplay();
                const orderUnitariaSoda: Partial<{ [key in SodaType]: ISodaOrder }> = { [soda]: { SodaType: soda, amountSoda: numSodas, totalPrice: SodaPrice[soda] } }
                orderSoda.push(orderUnitariaSoda);
                confirm = await continuarPedido("Gaseosa");
                cleanDisplay();
            } while (confirm);
        }

        const order: Order = new Order(orderPizza, orderSoda, name);
        this.pedidos.push(order);  
    }

    public verPedidos(){
        return this.pedidos;
    }




}