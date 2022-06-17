import { useContext } from "react";

export const useAuth = () => {
  const [state, setState ] = useContext();

  return {
    isAuthenticated: !!state.user
  }
}