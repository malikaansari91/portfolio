// import Navigation from './Navigation'

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Header from './Header';

// import Footer from './Footer'
const Layout = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const handleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };
  return (
    <>
      <div className="spacer pb-4 pt-4 bg-primary-100 dark:bg-gray-900"></div>
      <Header
        mounted={mounted}
        handleTheme={handleTheme}
        resolvedTheme={resolvedTheme}
      />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
