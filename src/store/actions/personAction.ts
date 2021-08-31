import { createAction } from "redux-actions";
import * as fromApi from "./../../api";

// global page failure action
export const personRequestFailure = createAction(
  "[PERSON] PERSON_DATA_REQUEST_FAILURE"
);

export const loadPersonRequest = createAction("[PERSON] LOAD_PERSON_REQUEST");
export const loadPersonSuccess = createAction("[PERSON] LOAD_PERSON_SUCCESS");

/**
 * Load person Data
 * @returns
 */
export const loadPersons = () => async (dispatch: any) => {
  dispatch(loadPersonRequest());
  try {
    let response: any = await fromApi.getPersons();
    dispatch(loadPersonSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(personRequestFailure(error));
  }
};

export const addPersonRequest = createAction("[PERSON] ADD_PERSON_REQUEST");
export const addPersonSuccess = createAction("[PERSON] ADD_PERSON_SUCCESS");

/**
 * Add person Data
 * @returns
 */
export const addPerson = (payload: any) => async (dispatch: any) => {
  dispatch(addPersonRequest());
  try {
    let response: any = await fromApi.addPerson(payload);
    dispatch(addPersonSuccess(response));
  } catch (error) {
    console.log(error);
    dispatch(personRequestFailure(error));
  }
};

export const editPersonRequest = createAction("[PERSON] EDIT_PERSON_REQUEST");
export const editPersonSuccess = createAction("[PERSON] EDIT_PERSON_SUCCESS");

/**
 * Add person Data
 * @returns
 */
export const editPerson =
  (payload: any, callback: any) => async (dispatch: any) => {
    dispatch(addPersonRequest());
    try {
      let response: any = await fromApi.editPerson(payload);
      if (response) {
        callback && callback();
      }
      dispatch(editPersonSuccess(payload));
    } catch (error) {
      console.log(error);
      dispatch(editPersonRequest(error));
    }
  };
