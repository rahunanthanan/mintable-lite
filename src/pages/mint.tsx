import React from "react";
import { withAuthenticator } from '@aws-amplify/ui-react';

interface Props {
  user: any
}

const Mint = ({user}: Props) => {
  return <div>Hello {JSON.stringify(user.attributes.email, null, 2)}</div>;
};

export default withAuthenticator(Mint);
