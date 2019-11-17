import { Moment } from 'moment';

export interface IBook {
  id?: number;
  name?: string;
  price?: number;
  published?: Moment;
}

export class Book implements IBook {
  constructor(public id?: number, public name?: string, public price?: number, public published?: Moment) {}
}
