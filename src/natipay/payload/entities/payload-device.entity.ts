import { INatipayJwtPayloadDevice } from '../interfaces/i-payload-device';

export class NatipayJwtPayloadDeviceEntity implements INatipayJwtPayloadDevice {
  // #region Properties (4)

  public id: string = '';
  public name: string | null = '';

  // #endregion Properties (4)

  // #region Constructors (1)

  constructor(data?: Partial<NatipayJwtPayloadDeviceEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
