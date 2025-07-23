import { ENatipayCardMode, ENatipayCardStatus } from '../enums';
import { ENatipayCardStatusProduction } from '../enums/status-production.enum';
import { ENatipayCardType } from '../enums/type.enum';
import { INatipayCard, INatipayCardConfig } from '../interfaces';
import { NatipayCardAccountProviderEntity } from './card-account-provider.entity';
import { NatipayCardConfigEntity } from './card-config.entity';
import { NatipayCardDataEntity } from './card-data.entity';

export class NatipayCardEntity implements INatipayCard {
  public accountProvider: NatipayCardAccountProviderEntity = new NatipayCardAccountProviderEntity();
  public active: boolean = false;
  public companyId: string = '';
  public config: INatipayCardConfig = new NatipayCardConfigEntity();
  public consumerExternalReference: string | null = null;
  public consumerId: string | null = null;
  public consumerMetadata: string | null = null;
  public containerId: string | null = null;
  public createdAt: Date = new Date();
  public data: NatipayCardDataEntity = new NatipayCardDataEntity();
  public id: string = '';
  public label: string = '';
  public logs: string[] = [];
  public mode: ENatipayCardMode = ENatipayCardMode.HYBRID;
  public status: ENatipayCardStatus = ENatipayCardStatus.BLOCKED;
  public statusProduction: ENatipayCardStatusProduction = ENatipayCardStatusProduction.PENDING;
  public tags: string[] = [];
  public type: ENatipayCardType = ENatipayCardType.VIRTUAL;
  public unlockCode: string | null = null;
  public unlockedAt: Date | null = null;
  public updatedAt: Date = new Date();

  constructor(data?: Partial<NatipayCardEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
