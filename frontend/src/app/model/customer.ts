export class Customer {
  [key: string]: any;
  _id: string = 'new';
  firstName: string = '';
  lastName: string = '';
  addressBill: {
    zip: string;
    city: string;
    street: string;
  } = {
    zip: '',
    city: '',
    street: '',
  };
  addressShip: {
    zip: string;
    city: string;
    street: string;
  } = {
    zip: '',
    city: '',
    street: '',
  };
  email: string = '';
  phone: string = '';
}
