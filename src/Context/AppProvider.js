import React from "react";

import { useFirestore } from "../hooks/useFirestore";
import { AuthContext } from "./AuthProvider";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const {
    user: { uid },
  } = React.useContext(AuthContext);

  /*
    rooms
    {
      name: 'rooms name',
      description: 'rooms description',
      members: [uid1, uid2,...]
    }
    
    */
  // components bi re-render thi cac object nay se dc khoi tao lai nen ta can dung useMemo
  const roomsCondition = React.useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: uid,
    };
  }, [uid]);

  const rooms = useFirestore("rooms", roomsCondition);
  console.log({ rooms });
  return (
    <AppContext.Provider value={{ rooms }}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
