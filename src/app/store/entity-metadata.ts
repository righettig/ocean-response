import { EntityMetadataMap } from 'ngrx-data';

const entityMetadata: EntityMetadataMap = {
  Vessel: {},
  Emergency: {}
};

const pluralNames = { Emergency: 'Emergencies' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};