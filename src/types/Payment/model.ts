import { BaseViewModel } from "../modelBase";

export interface PaymentViewModel extends BaseViewModel {
  readonly id: string;
  name: string;
  amount: number;
  currency: string;
  complete: boolean;
  referenceId: string;
  paymentCardId: string;
}
