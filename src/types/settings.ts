import { UserManagerSettings } from "oidc-client";

export const ApplicationConfig = {
  name: "chabloom-transactions",
  displayName: "Chabloom Transactions",
  frontendPublicAddress: "http://localhost:3003",
  backendPublicAddress: "https://transactions-api-test.chabloom.com",
  accountsBackendPublicAddress: "https://accounts-api-test.chabloom.com",
};

export const AppInsightsInstrumentationKey = "APPINSIGHTS_INSTRUMENTATIONKEY";

export const OidcSettings: UserManagerSettings = {
  authority: ApplicationConfig.accountsBackendPublicAddress,
  client_id: "Chabloom.Transactions.Frontend",
  redirect_uri: `${ApplicationConfig.frontendPublicAddress}/signin-oidc`,
  post_logout_redirect_uri: `${ApplicationConfig.frontendPublicAddress}/signout-oidc`,
  response_type: "code",
  scope: "openid profile Chabloom.Transactions",
  filterProtocolClaims: true,
  loadUserInfo: true,
};
