import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { Home } from '../../pages/Home';
import { Tweets } from '../../pages/Tweets';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
