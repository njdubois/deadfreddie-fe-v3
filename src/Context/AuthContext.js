import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthed, setIsAuthed] = useState(localStorage.getItem('token') !== null);

  useEffect(() => {

    // setIsAuthed((localStorage.getItem('token') !== null));

    // console.log("getItem", localStorage.getItem('token'))
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthed, setIsAuthed }}>
      {children}
    </AuthContext.Provider>
  );
};
