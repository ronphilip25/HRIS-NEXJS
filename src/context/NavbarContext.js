// src/context/NavbarContext.js
'use client';

import React, { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  return (
    <NavbarContext.Provider value={{ pageTitle, setPageTitle, subTitle, setSubTitle }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => useContext(NavbarContext);
