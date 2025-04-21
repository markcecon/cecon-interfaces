export enum EFeePayer {
  MERCHANT = 'MERCHANT',
  PLATFORM = 'PLATFORM',
}
/**
 * MERCHANT: O pagador da transação é o lojista.
 * PLATFORM: O pagador da transação é a plataforma.
 * Usado nos fees para saber de onde sairá o valor do fee.
 */
