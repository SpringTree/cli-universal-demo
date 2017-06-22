import * as actionSet from '../actions/dummy';

export interface State {
  loaded:      boolean;
  loading:     boolean;
  dummy:       any;
  error:       Error;
};

const initialState: State = {
  loaded:      false,
  loading:     false,
  dummy:       null,
  error:       null
};

export function reducer( state = initialState, action: actionSet.Actions ): State {
  switch ( action.type ) {
    case actionSet.ActionTypes.FETCH: {
      return Object.assign( {}, state, {
        loaded:  false,
        loading: true,
        error:   null
      } );
    }

    case actionSet.ActionTypes.FETCH_SUCCESS: {
      const dummy = <any> action.payload;

      return Object.assign( {}, state, {
        loaded:  true,
        loading: false,
        dummy:   dummy,
        error:   null
      } );
    }

    case actionSet.ActionTypes.FETCH_FAIL: {
      const error = <Error>action.payload;

      return Object.assign( {}, state, {
        loaded:  false,
        loading: false,
        error:   error
      } );
    }

    default: {
      return state;
    }
  }
}

export const getLoaded      = ( state: State ) => state.loaded;

export const getLoading     = ( state: State ) => state.loading;

export const getDummy       = ( state: State ) => state.dummy;

export const getError       = ( state: State ) => state.error;
