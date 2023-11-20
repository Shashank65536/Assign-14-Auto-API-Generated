import { Entity, model, property } from '@loopback/repository';

@model()
export class Users extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    default: 'shanks', // Provide a default string value here
  })
  firstName?: string;

  @property({
    type: 'string',
    default: 'bid', // Provide a default string value here
  })
  lastName?: string;

  @property({
    type: 'string',
    default: 'sbidwai@gmail.com', // Provide a default string value here
  })
  email?: string;

  @property({
    type: 'string',
  })
  password?: string;

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
