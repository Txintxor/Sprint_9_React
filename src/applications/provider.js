///Crea el entorno donde los componentes comparten estado
///Usando el hook createContext

import React, {createContext, useState} from "react";

const MyProvider = (props) => {
  const [state, setState] = useState ({});
  return (
    <div>
      {/* AppContext es el envoltorio donde lo componentes compartiran estado */}
      <AppContext.Provider value = {[state,setState]}>
        {/* Estos son los componentes indicados */}
        {props.children}
      </AppContext.Provider>
    </div>
    )
}

export default MyProvider;
export const AppContext = createContext();
