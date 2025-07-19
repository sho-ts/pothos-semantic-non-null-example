import { graphql, useFragment } from 'react-relay';
import type { UserFragment$key } from './__generated__/UserFragment.graphql';

type Props = {
  user: UserFragment$key;
};

export const User = ({ user }: Props) => {
  const data = useFragment(
    graphql`
      fragment UserFragment on User @throwOnFieldError {
        name
      }
    `,
    user
  );

  return <div>{data.name}</div>;
};
