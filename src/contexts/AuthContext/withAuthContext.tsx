import React, {useContext} from 'react';
import AuthContextProvider from './AuthContextProvider';
import AuthContext from './AuthContext';
import LoaderFullscreen from '../../components/LoaderFullscreen/LoaderFullscreen';

/**
 * Inserts UserContextProvider in the react tree
 * before adding the given component.
 *
 * @param {Object} Component The component that needs the context provider.
 * @returns {Object} The component to render wrapped with the provider.
 */
const withAuthContextProvider = (Component: React.ComponentType<any>): React.FC<any> => (props: any): JSX.Element => (
    <AuthContextProvider>
        <Component {...props} />
    </AuthContextProvider>
);

/**
 * Renders the given component when the user context is ready.
 *
 * @param {Object} Component The component to render.
 * @param {Object} Component The rendered component.
 * @returns {Object} The component to render or the LoadingPage component.
 */
const withAuthContextReady = (Component: React.ComponentType<any>): React.FC<any> => (props: any): JSX.Element => {

    const {isReady} = useContext(AuthContext);
    return isReady ? <Component {...props} /> :
        < LoaderFullscreen />
};

export {
    withAuthContextReady,
    withAuthContextProvider,
};