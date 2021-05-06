import { BaseViewModel } from "../../common";

export interface PaymentAccountViewModel extends BaseViewModel {
  readonly id?: string;
  name: string;
  accountNumber: string;
  readonly accountNumberLast4?: string;
  routingNumber: string;
}
