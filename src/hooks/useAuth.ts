import { useContext } from 'react';

// auth provider
import FirebaseContext from 'context/FirebaseContext';

const useAuth = () => {
  const context = useContext(FirebaseContext);

  if (!context) throw new Error('context must be use inside provider');

  return context;
};

export default useAuth;