/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react';
import TestUI from '../../tests/TestUI';
import TableExample from '../../tests/UI/TableExample';
import TableAdditionalExample from '../../tests/UI/TableAdditionalExample';
import FormSubmit from '../../tests/UI/FormSubmit';
import Login from '../../pages/auth/Login';
import MainLayout from '../../components/layouts/MainLayout';

const HomePage = lazy(() => import('../../pages/clients/HomePage'));
const PostDetailPage = lazy(() => import('../../pages/clients/PostDetailPage'));

const publicRoutes = [
  {
    path: '/',
    element:
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout />
      </Suspense>,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  },
  {
    path: '/bai-dang',
    element:
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout />,
      </Suspense>,
    children: [
      {
        path: ':postId/:slug',
        element: <PostDetailPage />
      }
    ]
  }
];

export default publicRoutes;
