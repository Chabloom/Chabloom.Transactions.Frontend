import { UserManagerSettings } from "oidc-client";
import { AppConfigurationBase } from "./common";

export const AppConfiguration: AppConfigurationBase = {
  name: "chabloom-transactions",
  displayName: "Chabloom Transactions",
  accountsFrontendPublicAddress: "https://accounts-dev-1.chabloom.com",
  accountsBackendPublicAddress: "https://accounts-api-dev-1.chabloom.com",
  billingFrontendPublicAddress: "https://billing-dev-1.chabloom.com",
  billingBackendPublicAddress: "https://billing-api-dev-1.chabloom.com",
  ecommerceFrontendPublicAddress: "https://ecommerce-dev-1.chabloom.com",
  ecommerceBackendPublicAddress: "https://ecommerce-api-dev-1.chabloom.com",
  transactionsFrontendPublicAddress: "https://transactions-dev-1.chabloom.com",
  transactionsBackendPublicAddress: "https://transactions-api-dev-1.chabloom.com",
};

export const OidcConfiguration: UserManagerSettings = {
  authority: AppConfiguration.accountsBackendPublicAddress,
  client_id: "Chabloom.Transactions.Frontend",
  redirect_uri: `${AppConfiguration.transactionsFrontendPublicAddress}/signin-oidc`,
  post_logout_redirect_uri: `${AppConfiguration.transactionsFrontendPublicAddress}/signout-oidc`,
  response_type: "code",
  scope: "openid profile Chabloom.Transactions.Backend",
  filterProtocolClaims: true,
  loadUserInfo: true,
};
