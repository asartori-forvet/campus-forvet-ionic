import React, { ComponentType, ReactNode, useContext } from 'react';
import AppContextProvider from './AppContextProvider';
import AppContext from './AppContext';

/**
 * Inserts UserContextProvider in the react tree
 * before adding the given component.
 *
 * @param {Object} Component The component that needs the context provider.
 * @returns {Object} The component to render wrapped with the provider.
 */
const withAppContextProvider = (Component: ComponentType<any>) => (props: any): ReactNode => (
   <AppContextProvider>
      <Component {...props} />
   </AppContextProvider>
);

/**
 * Renders the given component when the user context is ready.
 *
 * @param {Object} Component The component to render.
 * @param {Object} Component The rendered component.
 * @returns {Object} The component to render or the LoadingPage component.
 */

const withAppContextReady = (Component: React.ComponentType<any>): React.FC<any> => (props: any) => {
   const { isReady } = useContext(AppContext);

   return isReady ? <Component {...props} /> : (
       <div style={{ height: "100%", minHeight: "95vh", display: "flex", alignItems: "center" }}>
           Loading...
       </div>
   );
};

export {
   withAppContextReady,
   withAppContextProvider,
};