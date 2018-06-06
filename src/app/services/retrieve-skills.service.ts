import { Injectable } from '@angular/core';
import { APIAccessService } from './api-access.service';

@Injectable()
export class RetrieveSkillsService {

  constructor(
    private apiService: APIAccessService
  ) { }

  

}
