export class Account {
  id: number;
  name: string;
  gender: string;
  age: number;
  address: Address;
}

export class Address {
  state: string;
  city: string;
}
