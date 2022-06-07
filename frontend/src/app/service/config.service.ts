import { Injectable } from '@angular/core';
import { INgxTableColumn } from '../data-table/ngx-data-table/ngx-data-table.component';

export interface IMenuItem {
  link: string;
  title: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  sidebarMenu: IMenuItem[] = [
    {link: '/', title: 'Dashboard', icon: 'home'},
    {link: '/termekek', title: 'Termékek', icon: 'archive'},
    {link: '/rendelesek', title: 'Rendelések', icon: 'shopping-cart'},
  ];

  productTableColumns: INgxTableColumn[] = [
    {key: '_id', title: '#'},
    {key: 'Elérhető', title: 'Elérhető'},
    {key: 'Kiszerelés', title: 'Kiszerelés'},
    {key: 'Ár', title: 'Ár'},
    {key: 'Magyar név', title: 'Magyar név'},
    {key: 'Latin név', title: 'Latin név'},
    {key: 'Fényigény', title: 'Fényigény'},
    {key: 'Talajigény', title: 'Talajigény'},
    {key: 'Habitus', title: 'Habitus'},
    {key: 'Virág színe', title: 'Virág színe'},
    {key: 'Egyéb', title: 'Egyéb'},

  ];

  constructor() { }
}
