import { UserManagerSettings } from "oidc-client";

export const OidcConfiguration: UserManagerSettings = {
  client_id: "Chabloom.Transactions.Frontend",
  redirect_uri: `${process.env.PUBLIC_URL}/signin-oidc`,
  post_logout_redirect_uri: `${process.env.PUBLIC_URL}/signout-oidc`,
  response_type: "code",
  scope: "openid profile Chabloom.Transactions.Backend",
  filterProtocolClaims: true,
  loadUserInfo: true,
};
