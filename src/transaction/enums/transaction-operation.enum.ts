export enum ETransactionOperation {
  STAMP_NEEDED = 'STAMP_NEEDED',
  SPONSORS_NEEDED = 'SPONSORS_NEEDED',
  COMPLETE_NEEDED = 'COMPLETE_NEEDED',
  COMPLETED = 'COMPLETED',
}
/**
 * Usado para saber se a transação precisa de um stamp, sponsors ou completar.
 * STAMP_NEEDED: A transação precisa de um stamp. Será criada uma cópia da transação na Natipay com o stamp e a operaçao SPONSORS_NEEDED.
 * SPONSORS_NEEDED: Será verificado se a transação possui SPONSORS. Caso possua será criada transações com o COMPLETE_NEEDED.
 * COMPLETE_NEEDED: A transação precisa de completar. Será criada uma cópia da transação na Natipay ou na Loja com o valor completo e a operaçao COMPLETED.
 * COMPLETED: A transação foi completada.
 */
