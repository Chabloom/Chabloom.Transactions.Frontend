import { UserManagerSettings } from "oidc-client";

export const ApplicationConfig = {
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

export const OidcSettings: UserManagerSettings = {
  authority: ApplicationConfig.accountsBackendPublicAddress,
  client_id: "Chabloom.Transactions.Frontend",
  redirect_uri: `${ApplicationConfig.transactionsFrontendPublicAddress}/signin-oidc`,
  post_logout_redirect_uri: `${ApplicationConfig.transactionsFrontendPublicAddress}/signout-oidc`,
  response_type: "code",
  scope: "openid profile Chabloom.Transactions.Backend",
  filterProtocolClaims: true,
  loadUserInfo: true,
};
