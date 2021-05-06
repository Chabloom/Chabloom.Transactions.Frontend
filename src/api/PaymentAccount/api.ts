import { AppConfiguration } from "../../config";
import { BaseApi, BaseApiType } from "../../common";
import { PaymentAccountViewModel } from "./model";

export class PaymentAccountsApi
  extends BaseApi<PaymentAccountViewModel>
  implements BaseApiType<PaymentAccountViewModel> {
  baseUrl: string;

  constructor() {
    super();
    this.baseUrl = `${AppConfiguration.transactionsBackendPublicAddress}/api/paymentAccounts`;
  }

  readItems(token: string): Promise<[Array<PaymentAccountViewModel> | undefined, string]> {
    return this._readItems(`${this.baseUrl}`, token);
  }

  readItem(token: string, itemId: string): Promise<[PaymentAccountViewModel | undefined, string]> {
    return this._readItem(`${this.baseUrl}/${itemId}`, token);
  }

  addItem(token: string, item: PaymentAccountViewModel): Promise<[PaymentAccountViewModel | undefined, string]> {
    return this._addItem(`${this.baseUrl}`, token, item);
  }

  editItem(token: string, item: PaymentAccountViewModel): Promise<[PaymentAccountViewModel | undefined, string]> {
    return this._editItem(`${this.baseUrl}/${item.id}`, token, item);
  }

  deleteItem(token: string, item: PaymentAccountViewModel): Promise<string | undefined> {
    return this._deleteItem(`${this.baseUrl}/${item.id}`, token);
  }
}
