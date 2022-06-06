export class Bill {
  _id: string = '';
  orderId: string = '';
  price: number = 0;
  date: string = new Date().toLocaleDateString('hu-HU');
  status: "új" | "teljesítve" | "stornózott" = "új";
}
