import actions from './actions';
const initState = {
    testVar: ''
};

export function musiciansReducer(state = initState, action) {
        switch (action.type) {
            case actions.TEST_ACTION:
                return {
                    ...state,
                    testVar: action.testVar
                }
            default:
                return state;
        }
    }