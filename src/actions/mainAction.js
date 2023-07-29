import * as TYPES from './types';

export function setRole(data) {
  return {type: TYPES.SET_ROLE, data};
}

export function setBabyDetails(data) {
  return {type: TYPES.SET_BABY_DETAILS, data};
}

export function setDocId(data) {
  return {type: TYPES.SET_DOC_ID, data};
}

export function demonstrateDemo(data) {
  return {type: TYPES.DEMO_ACTION_START, data};
}

export function demonstrateDemoSuccess(data) {
  return {type: TYPES.DEMO_ACTION_SUCCESS, data};
}

export function demonstrateDemoFailure() {
  return {type: TYPES.DEMO_ACTION_FAILURE};
}
