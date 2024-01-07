import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const renderComponent = (props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />;

    return <Route {...rest} render={renderComponent} />;
};

export default PrivateRoute;
