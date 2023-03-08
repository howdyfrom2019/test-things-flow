import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Issue from './routes/Issue';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={'/issue/:id'} element={<Issue />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
