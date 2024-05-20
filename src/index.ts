import { mainMenu, cleanDisplay } from "./inquierer/menus";
import { writeFile } from 'node:fs/promises';
import { Pizzeria } from "./models/Pizzeria.model";


const main = async () => {
    const pizzeria: Pizzeria = new Pizzeria();
    cleanDisplay();
    let option = 1;
    while(option != 0){
        option = await mainMenu();
        switch (option) {
            case 1:// Hacer pedido
                cleanDisplay();
                await pizzeria.hacerPedido();
                writeFile("./out/out.json",JSON.stringify(pizzeria.verPedidos())).then(console.log);
                cleanDisplay();
                break;
            case 2:
                
                break;
            default:
                break;
        }

    }
}

main();