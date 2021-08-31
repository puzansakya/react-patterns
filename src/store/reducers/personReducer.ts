import produce from "immer";
import { handleActions } from "redux-actions";
import * as fromActions from "../actions";

interface PersonDefaultState {
  items: any[];
  status: "IDLE" | "LOADING";
}

export const PAGE_DEFAULT_STATE: PersonDefaultState = {
  items: [],
  status: "IDLE",
};

export const PersonReducer = handleActions<PersonDefaultState, any>(
  {
    // LOAD PERSON
    [fromActions.loadPersonRequest.toString()](state) {
      return {
        ...state,
        status: "LOADING",
      };
    },
    [fromActions.loadPersonSuccess.toString()](state, action) {
      return {
        ...state,
        status: "IDLE",
        items: action.payload,
      };
    },

    // ADD PERSON
    [fromActions.addPersonRequest.toString()](state) {
      return {
        ...state,
        status: "LOADING",
      };
    },
    [fromActions.addPersonSuccess.toString()](state, action) {
      return {
        ...state,
        status: "IDLE",
        items: state.items.concat(action.payload),
      };
    },

    // ADD PERSON
    [fromActions.editPersonRequest.toString()](state) {
      return {
        ...state,
        status: "LOADING",
      };
    },
    [fromActions.editPersonSuccess.toString()](state, action) {
      return {
        ...state,
        status: "IDLE",
        items: state.items.map((item) => {
          return item.id === action.payload.id
            ? { ...item, ...action.payload }
            : item;
        }),
      };
    },

    // HANDLE ERRORS
    [fromActions.personRequestFailure.toString()](state) {
      return {
        ...state,
        status: "IDLE",
      };
    },
  },
  PAGE_DEFAULT_STATE
);
