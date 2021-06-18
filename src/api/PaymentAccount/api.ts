import { FullAPI } from "../api";
import { PaymentAccountViewModel } from "./model";

export class PaymentAccountsAPI extends FullAPI<PaymentAccountViewModel> {
  constructor() {
    super(`${window.__env__.REACT_APP_TRANSACTIONS_BACKEND_ADDRESS}/api/paymentAccounts`);
  }

  deleteViewModel(viewModel: PaymentAccountViewModel, token: string | undefined): Promise<boolean> {
    return this._delete(`${this._baseUrl}/${viewModel.id}`, token);
  }

  updateViewModel(viewModel: PaymentAccountViewModel, token: string | undefined): Promise<boolean> {
    return this._update(`${this._baseUrl}/${viewModel.id}`, viewModel, token);
  }
}
