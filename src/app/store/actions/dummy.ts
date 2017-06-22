import { Action } from '@ngrx/store';
import { type   } from '../shared/type';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export const ActionTypes = {
  FETCH:            type( '[DUMMY] Fetch'         )
, FETCH_SUCCESS:    type( '[DUMMY] Fetch Success' )
, FETCH_FAIL:       type( '[DUMMY] Fetch Fail'    )
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class FetchAction implements Action {
  type = ActionTypes.FETCH;

  constructor( public payload?: void ) { }
}

export class FetchSuccessAction implements Action {
  type = ActionTypes.FETCH_SUCCESS;

  constructor( public payload: any ) { }
}

export class FetchFailAction implements Action {
  type = ActionTypes.FETCH_FAIL;

  constructor( public payload: Error ) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = FetchAction
  | FetchSuccessAction
  | FetchFailAction
  ;
