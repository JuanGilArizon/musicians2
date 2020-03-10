import React from 'react';
import RootReduxed from './rootReduxed';

import { Provider } from 'react-redux';
import store from './store';

class Root extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <RootReduxed />
      </Provider>
    )
  }
}
export default Root;