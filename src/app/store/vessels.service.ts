import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from 'ngrx-data';
import { Vessel } from '../models/vessel';

@Injectable({ providedIn: 'root' })
export class VesselService extends EntityCollectionServiceBase<Vessel> {
  
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Vessel', serviceElementsFactory);
  }

}