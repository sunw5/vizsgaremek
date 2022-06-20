export class Order {
  [key: string]: any;
  _id: string = 'new';
  customerId: number = 0;
  productId: number = 0;
  amount: number = 0;
  status: string = 'completed' || 'inProgress' || 'cancelled';
}
