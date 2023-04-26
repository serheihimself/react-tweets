import { Outlet } from 'react-router';
import { Suspense } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<h4>Loading...</h4>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
