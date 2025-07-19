import { type UserQuery } from './__generated__/UserQuery.graphql';
import { useLazyLoadQuery, graphql } from 'react-relay';

export const User = () => {
  const data = useLazyLoadQuery<UserQuery>(
    graphql`
      query UserQuery @throwOnFieldError {
        user {
          name
        }
      }
    `,
    {}
  );

  return <div>{data.user.name}</div>;
};
