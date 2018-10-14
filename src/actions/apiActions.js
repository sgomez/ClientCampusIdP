import { callApi } from "../utils/api";
//import { CALL_API } from "../middleware/idpApi";

/*export function createIdp(data) {
  return {
    [CALL_API]: {
      endpoint: "/idp",
      data,
      types: [CREATE_IDP_PENDING, CREATE_IDP_FULFILLED, CREATE_IDP_FAILURE]
    }
  }
}*/

export const CREATE_IDP_PENDING = "CREATE_IDP_PENDING";
export function submitIdp() {
  return {
    type: CREATE_IDP_PENDING
  };
}

export const CREATE_IDP_FULFILLED = "CREATE_IDP_FULFILLED";
export function requestAccepted(message) {
  return {
    type: CREATE_IDP_FULFILLED,
    message
  };
}

export const CREATE_IDP_FAILURE = "CREATE_IDP_FAILURE";
export function requestDenied(error) {
  return {
    type: CREATE_IDP_FAILURE,
    error
  };
}

export const REQUEST_IDPS_PENDING = "REQUEST_IDP_PENDING";
export function listIdps() {
  return {
    type: REQUEST_IDPS_PENDING
  };
}

export const LIST_IDPS_ERROR = "LIST_IDP_ERROR";
export function listIdpsError(error) {
  return {
    type: LIST_IDPS_ERROR,
    error
  };
}

export const LIST_IDPS_FULFILLED = "LIST_IDP_FULFILLED";
export function listIdpsSuccessful(idps) {
  return {
    type: LIST_IDPS_FULFILLED,
    idps
  };
}

export const DELETE_IDP_PENDING = "DELETE_IDP_PENDING";
export function deleteIdp(idpID) {
  return {
    type: DELETE_IDP_PENDING,
    idpID
  };
}

export const DELETE_IDP_FULFILLED = "DELETE_IDP_FULFILLED";
export function deleteIdpSuccessful(idpID) {
  return {
    type: DELETE_IDP_FULFILLED,
    idpID
  };
}

export const DELETE_IDP_ERROR = "DELETE_IDP_ERROR";
export function deleteIdpError(error) {
  return {
    type: DELETE_IDP_ERROR,
    error
  };
}

export const GET_IDP_PENDING = "GET_IDP_PENDING";
export function getIdp(idpID) {
  return {
    type: GET_IDP_PENDING,
    idpID
  };
}

export const GET_IDP_FULFILLED = "GET_IDP_FULFILLED";
export function getIdpSuccess(idp) {
  return {
    type: GET_IDP_FULFILLED,
    idp
  };
}

export const GET_IDP_ERROR = "GET_IDP_ERROR";
export function getIdpError(error) {
  return {
    type: GET_IDP_ERROR,
    error
  };
}

export const APPROVE_IDP_PENDING = "APPROVE_IDP_PENDING";
export function submitApproval(name) {
  return {
    type: APPROVE_IDP_PENDING,
    name
  };
}

export const APPROVE_IDP_FULFILLED = "APPROVE_IDP_FULFILLED";
export function approvalSuccess() {
  return {
    type: APPROVE_IDP_FULFILLED
  };
}

export const APPROVE_IDP_ERROR = "APPROVE_IDP_ERROR";
export function approvalError(error) {
  return {
    type: APPROVE_IDP_ERROR,
    error
  };
}

export function approveIdp(name) {
  let data = { task: "ansible" };

  return callApi("/tasks/idp/" + name, data).then(
    response => {
      //dispatch(requestAccepted(response.message));
      //this.props.history.push(ROUTE_IDP_MANAGE);
      console.log(response);
    },
    error => {
      //dispatch(requestDenied(error));
      console.error(error);
    }
  );
}
