import { SignInValues } from "./SignInValues";

export interface Auth {
  isLoggedIn: boolean;
  signIn: (values: SignInValues) => Promise<void>;
  signOut: () => Promise<void>;
}
