import {Injectable} from '@angular/core';
import {Admin} from '../models/Admin';

@Injectable()

export class AdminRpository {
  private readonly Admins: Admin[];
  constructor() {
    this.Admins = [
      {
        id: 1,
        login: 'admin',
        password: 'pass'
      }
    ];
  }
  async findByLogin(login: string): Promise<Admin | undefined> {
    return this.Admins.find(admin => admin.login === login);
  }
}
