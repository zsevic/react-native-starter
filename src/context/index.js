import React, {createContext, useContext, useMemo, useReducer} from 'react';
import {appReducer, initialState} from './reducer';

const appContext = createContext(initialState);

export function AppWrapper({children}) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const contextValue = useMemo(() => {
    return {state, dispatch};
  }, [state, dispatch]);

  return (
    <appContext.Provider value={contextValue}>{children}</appContext.Provider>
  );
}

export function useAppContext() {
  return useContext(appContext);
}
