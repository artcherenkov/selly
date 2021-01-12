import { ActionType } from '../../action';

const initialState = {
  isAdShown: false,
  activeAd: null
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_FORM: {
      return { ...state, isAdShown: !state.isAdShown, activeAd: action.payload || null };
    }
    default:
      return state;
  }
};

export { appState };
