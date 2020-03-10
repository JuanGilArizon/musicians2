import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Musicians from './components/Musicians'
class RootReduxed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <div>Error</div>
    ) : (
      <BrowserRouter>
        <Route path="/musicians2" component={Musicians} />
      </BrowserRouter>
    );
  }
}

export default RootReduxed;