import { BaseViewModel } from "../modelBase";

export interface PaymentAccountViewModel extends BaseViewModel {
  readonly id: string;
  name: string;
  cardNumber: string;
  cardNumberLast4: string;
  cardholderName: string;
  expirationMonth: string;
  expirationYear: string;
  permanent: boolean;
}
