import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutBox } from './SharedLayout.styled';
import Header from '../Header/Header';



const SharedLayout = () => {
  return (
    <>
      <Header />
      <LayoutBox>
        <Suspense fallback={<h1 style={{color:'red'}}>LOADING.....</h1>}>
          <Outlet />
        </Suspense>
      </LayoutBox>
    </>
  );
};
export default SharedLayout;
