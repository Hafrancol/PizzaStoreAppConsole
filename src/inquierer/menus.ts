import { select, input, Separator, confirm } from '@inquirer/prompts';
import figlet from 'figlet';
import pc from "picocolors"
import { PizzaType, SodaType } from '../utils/enums/PizzaAndSodaTypes.enum';


export const mainMenu = async (): Promise<number> => {

  const answer = await select({
    message: 'Menu Principal:',
    choices: [
      {
        name: `${pc.green("1.")} Hacer pedido`,
        value: 1,

      },
      {
        name: `${pc.green("2.")} Mostrar pedidos`,
        value: 2,

      },
      {
        name: `${pc.green("3.")} Mostrar pedido por id`,
        value: 3,

      },
      {
        name: `${pc.green("4.")} modificar pedido`,
        value: 4,

      },
      {
        name: `${pc.green("5.")}Eliminar pedido`,
        value: 5,
      },
      new Separator(),
      {
        name: `${pc.green("0.")} Cerrar Pizzeria`,
        value: 0,
      },
    ],
  });

  return answer;

}

export const pizzasMenu = async (): Promise<PizzaType> => {

  const answer = await select({
    message:  `${pc.underline(`${pc.green('Eligue tu pizza:')}`)}`,
    choices: [
      {
        name: `${pc.green("1.")} ${PizzaType.Hawaiana}`,
        value: PizzaType.Hawaiana,

      },
      {
        name: `${pc.green("2.")} ${PizzaType.Carnes}`,
        value: PizzaType.Carnes,

      },
      {
        name: `${pc.green("3.")} ${PizzaType.PolloConChampiones}`,
        value: PizzaType.PolloConChampiones,

      },
      {
        name: `${pc.green("4.")} ${PizzaType.Vegetariana}`,
        value: PizzaType.Vegetariana,

      }
    ],
  });

  return answer;

}

export const SodaMenu = async (): Promise<SodaType> => {

  const answer = await select({
    message: `${pc.blue('Eligue tu Soda:')}`,
    choices: [
      {
        name: `${pc.green("1.")} ${SodaType.gaseosa}`,
        value: SodaType.gaseosa,

      },
      {
        name: `${pc.green("2.")} ${SodaType.hit}`,
        value: SodaType.hit,

      },
      {
        name: `${pc.green("3.")} ${SodaType.h20}`,
        value: SodaType.h20,

      },
      {
        name: `${pc.green("4.")} ${SodaType.mrtea}`,
        value: SodaType.mrtea,

      }
    ],
  });

  return answer;

}

export const numberOfPizzas = async (pizza: PizzaType): Promise<string> => {
  return await input({ message: `Cuantas pizzas ${pizza} desea: ` });
}

export const numberOfSodas = async (soda: SodaType): Promise<string> => {
  return await input({ message: `Cuantas sodas ${soda} desea: ` });
}

export const nombrePedido = async (): Promise<string> => {
  return await input({ message: `Ingrese a nombre: ` });
}

export const cleanDisplay = () => {
  console.clear();
  console.log(
    `${pc.bold(figlet.textSync("Pizzeria Palermo ", {
      font: "Standard",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 300,
      whitespaceBreak: true,
    }))}`
  );

}

export const continuarPedido = async (elemento: string) => {
  return await confirm({message: `Quieres seguir pidiendo '${elemento} ??"`})
}

export const pedirGaseosa = async () => {
  return await confirm({message: "Deseas solicitar bebidas ??"})
}