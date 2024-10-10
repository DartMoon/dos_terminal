import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';

import { WithChildren } from '@/app/types/globl';

const Layout = ({ children }: Readonly<WithChildren>) => {
  return (
    <div className="flex flex-col min-h-screen bg-primary-color">
      <Header />
      <main className="flex flex-col flex-grow">{children}</main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
