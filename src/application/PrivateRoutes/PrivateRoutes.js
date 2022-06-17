import { useAuth } from "../hooks/useAuth"
 

const PrivateRoute = ( {component: Component }) => {
  
     const { isAuthenticated } = useAuth();
    return isAuthenticated && <Component />;
}
 
export default PrivateRoute;