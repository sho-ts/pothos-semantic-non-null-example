import { graphql, useLazyLoadQuery } from 'react-relay';
import { type UserPageQuery } from './__generated__/UserPageQuery.graphql';
import { User } from './User';

export const UserPage = () => {
  const data = useLazyLoadQuery<UserPageQuery>(
    graphql`
      query UserPageQuery($id: ID!) {
        node(id: $id) @required(action: THROW) {
          ... on User {
            ...UserFragment
          }
        }
      }
    `,
    { id: btoa('User:1') }
  );

  return <User user={data.node} />;
};
