import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';

import { WithChildren } from '@/app/types/globl';

import { helperList, navList } from '@/app/_mock_/mocked';

const Layout = ({ children }: Readonly<WithChildren>) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header navList={navList} />
      <main className="flex-grow bg-amber-500">{children}</main>
      <div className="mt-auto">
        <Footer footerList={helperList} />
      </div>
    </div>
  );
};

export default Layout;
