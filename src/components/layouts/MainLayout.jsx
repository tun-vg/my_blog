import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import Pagination from '../data-displays/Pagination/Pagination';
import { getPostsTrending } from '../../api/post/post';

const MainLayout = () => {

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
