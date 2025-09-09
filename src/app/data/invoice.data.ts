import { last } from "rxjs";
import { Invoice } from "../models/invoice";

export const invoiceData : Invoice={
  id:1,
  name: 'Componentes de PC',
  client:{
    name: 'Andres',
    lastname: 'Guzman',
    address:{
      country: 'Colombia',
      city: 'Bogota',
      street: 'Calle 8 # 15-20',
      number: 15
    }
  },
  company:{
    name: 'YC Technology',
    fiscalNumber: 1872919020
  },
  items:[
    {
    id:1,
    product: 'Monitor',
    price: 800000,
    quantity: 1
  },
  {
    id:2,
    product: 'Teclado',
    price: 200000,
    quantity: 2
  },
  {
    id:3,
    product: 'Mouse',
    price: 100000,
    quantity: 1
  },
  {
    id:4,
    product: 'CPU',
    price: 1200000,
    quantity: 1
  },
  {
    id:5,
    product: 'Impresora',
    price: 600000,
    quantity: 1
  },
  {
    id:6,
    product: 'Webcam',
    price: 300000,
    quantity: 1
  }
 ]
}
