import { Switch } from 'react-router-dom';

import { GuardProvider, GuardedRoute } from 'react-router-guards';

const waitOneSecond = async (to, from, next) => {
  setTimeout(next, 1000);
};

const Index = () => (
  <GuardProvider loading={Loading} error={NotFoundView}>
    <Switch>
      <GuardedRoute
        path="/"
        exact
        component={Home}
        guards={[waitOneSecond]}
      />
    </Switch>
  </GuardProvider>
);

export default Index;
