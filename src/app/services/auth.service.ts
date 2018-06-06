import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  InstanceUser: string;

  InstanceUserHasAuthed: boolean = false;

  InstanceUserIsAdmin: boolean = false;

  constructor() { }
}
