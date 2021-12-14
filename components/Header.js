import NextLink from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';
import MobileMenu from './MobileMenu';

function NavItem({ href, text, target }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        target={target}
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}
const Header = ({ mounted, handleTheme, resolvedTheme }) => {
  return (
    <div className="sticky top-0 z-10 flex flex-col justify-center px-8 bg-primary-100 dark:bg-gray-900">
      <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-4 pb-4 sm:pb-4  text-gray-900  dark:bg-gray-900 dark:text-gray-100">
        <div className="ml-[-0.60rem]">
          <MobileMenu />
          <NavItem href="/" text="Home" />
          <NavItem href="/blog" text="Blog" />
          <NavItem
            href="https://drive.google.com/file/d/1oJVUjNgiB-08jIgDAzf8dMRdoaCVFITP/view"
            text="Resume"
            target="_blank"
          />
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-9 h-9 rounded-lg border-gray-900 dark:ring-white-300 flex items-center justify-center  hover:ring-1 ring-gray-300  transition-all"
          onClick={handleTheme}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-5 h-5 text-gray-800 dark:text-gray-200 border-gray-900"
            >
              {resolvedTheme === 'dark' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 border-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </svg>
          )}
        </button>
      </nav>
    </div>
  );
};

export default Header;
