import { useAuth0 } from '@auth0/auth0-react';
import { FC } from 'react';

const Dashboard: FC = () => {
  const { user } = useAuth0();

  console.log(user);

  return (
    <section>
      <h1>I am the dashboard</h1>
    </section>
  );
};

export default Dashboard;
