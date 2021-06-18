import { FullAPI } from "../api";
import { PaymentCardViewModel } from "./model";

export class PaymentCardsAPI extends FullAPI<PaymentCardViewModel> {
  constructor() {
    super(`${window.__env__.REACT_APP_TRANSACTIONS_BACKEND_ADDRESS}/api/paymentCards`);
  }

  deleteViewModel(viewModel: PaymentCardViewModel, token: string | undefined): Promise<boolean> {
    return this._delete(`${this._baseUrl}/${viewModel.id}`, token);
  }

  updateViewModel(viewModel: PaymentCardViewModel, token: string | undefined): Promise<boolean> {
    return this._update(`${this._baseUrl}/${viewModel.id}`, viewModel, token);
  }
}
