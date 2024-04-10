import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutBox } from './SharedLayout.styled';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <LayoutBox>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </LayoutBox>
    </>
  );
};
export default SharedLayout;
