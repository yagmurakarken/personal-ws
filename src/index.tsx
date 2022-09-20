import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './routes/about-page/AboutPage';
import HomePage from './routes/home-page/HomePage';
import BlogViewPage from './routes/blog-view-page/BlogViewPage';
import env from "react-dotenv";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <MantineProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog/:id" element={<BlogViewPage />}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </MantineProvider>
);

