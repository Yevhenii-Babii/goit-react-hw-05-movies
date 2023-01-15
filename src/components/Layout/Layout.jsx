import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Links, Navigations } from '../Layout/Layout.styled.js';

export default function Layout() {
  return (
    <>
      <header>
        <Navigations>
          <Links to="/"> Home </Links>
          <Links to="/movies"> Movies </Links>
        </Navigations>
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
