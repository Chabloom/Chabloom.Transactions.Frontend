import { FullAPI } from "../api";
import { PaymentViewModel } from "./model";

export class PaymentsAPI extends FullAPI<PaymentViewModel> {
  constructor() {
    super(`${window.__env__.REACT_APP_TRANSACTIONS_BACKEND_ADDRESS}/api/payments`);
  }

  deleteViewModel(viewModel: PaymentViewModel, token: string | undefined): Promise<boolean> {
    return this._delete(`${this._baseUrl}/${viewModel.id}`, token);
  }

  updateViewModel(viewModel: PaymentViewModel, token: string | undefined): Promise<boolean> {
    return this._update(`${this._baseUrl}/${viewModel.id}`, viewModel, token);
  }
}
