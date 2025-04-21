import { EFirebankWithdrawDetailsKey } from '../../enums';
import { IFirebankWithdrawPost, IFirebankWithdrawPostDetails, IFirebankWithdrawPostResponse } from '../../interfaces';

export class FirebankWithdrawPostEntity implements IFirebankWithdrawPost {
  public details: FirebankWithdrawPostDetailsEntity = new FirebankWithdrawPostDetailsEntity();
  public externalId: string = '';
  public type: string = 'PIX';
  public value: number = 0;
}

export class FirebankWithdrawPostDetailsEntity implements IFirebankWithdrawPostDetails {
  public document: string = '';
  public key: string = '';
  public keyType: EFirebankWithdrawDetailsKey = EFirebankWithdrawDetailsKey.RANDOM_KEY;
  public name: string = '';
}

export class FirebankWithdrawPostResponseEntity implements IFirebankWithdrawPostResponse {
  public transactionId: string = '';
  public status: string = '';
}
