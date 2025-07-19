import { graphql, useLazyLoadQuery } from 'react-relay';
import { type UserPageQuery } from './__generated__/UserPageQuery.graphql';
import { User } from './User';

export const UserPage = () => {
  const data = useLazyLoadQuery<UserPageQuery>(
    graphql`
      query UserPageQuery @throwOnFieldError {
        user {
          ...UserFragment
        }
      }
    `,
    {}
  );

  return  (
    <User user={data.user} />
  )
};
