import React from 'react';
import {connect} from 'react-redux';
import {testAction} from '../store/musicians/action-creator';

class Musicians extends React.Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
      const { onTestAction } = this.props;
      onTestAction();
  }

  render() {
    const {name, testActionValue} = this.props
    return (
      <section>{name} is mounted!, and the redux state is {testActionValue}</section>
    )
  }
}
const mapStateToProps = (state) => ({
  testActionValue : state.musicians.testVar
})
const mapDispatchToProps = (dispatch) => ({
  onTestAction : () => {
    dispatch(testAction());
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Musicians);