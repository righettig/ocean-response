import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from 'ngrx-data';
import { Emergency } from '../models/emergency';

@Injectable({ providedIn: 'root' })
export class EmergencyService extends EntityCollectionServiceBase<Emergency> {
  
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Emergency', serviceElementsFactory);
  }

}