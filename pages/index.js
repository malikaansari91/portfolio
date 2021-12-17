import Head from 'next/head';

import BlogPostCard from '../components/BlogPostCard';
import cn from 'classnames';
import { AnimWrapper } from '../components/AnimationWrapper';
import { ExperienceCard } from '../components/ExperienceCard';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Malika Ansari - Portfolio Website</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Malika Ansari - Frontend Developer with expertise in Javascript, ReactJs, UI development"
        />
        <meta
          name="keywords"
          content="Portfolio, Software Engineer, Software Developer, HTML, CSS, JavaScript, Frontend, Ghent, Malika Ansari"
        />
        <meta property="og:title" content="Malika Ansari, Frontend Developer" />
        <meta property="og:image" content="/banner.png" />
        <meta
          property="og:description"
          content="Malika Ansari is a Frontend Developer with interest in languages and frameworks likd Javascript, React.js, Next.js. You can find information related to Malika's Work and contact details on this site"
        />
        <meta
          property="og:url"
          content="https://malika-ansari-portfolio.netlify.app"
        />
        <meta property="og:type" content="website" />
        <meta name="author" content="Malika Ansari" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@forever_malikaa" />
      </Head>

      <section
        id="intro"
        className="py-10 md:pt-20 md:pb-20 relative min-h-screen-without-nav items-center content-center flex bg-primary-100 dark:bg-gray-900"
      >
        <div className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-4 pb-4 sm:pb-4  text-gray-900  dark:bg-gray-900 dark:text-gray-100">
          <div className="container flex gap-8 md:gap-0 mx-6 sm:mx-auto grid md:grid-cols-1 items-center content-center justify-items-center">
            <AnimWrapper>
              <div className="w-full pb-10">
                {/* <h5 className="font-semibold pb-5">Hi, my name is</h5> */}
                <h1
                  // style={{ flexBasis: '100%' }}
                  className={cn(
                    'text-3xl md:text-6xl font-extrabold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]',
                    'pb-4'
                  )}
                >
                  Hi, I&apos;m Malika Ansari.
                </h1>

                <h1
                  // style={{ flexBasis: '100%' }}
                  className="text-2xl md:text-4xl font-bold  md:items-start pb-5 opacity-100 font-extrabold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
                >
                  A Software Developer.
                </h1>
                <p className="pb-10 font-semibold">
                  I build things for the web!!
                  <br />
                  I&apos;m a professional Frontend Developer that loves creating
                  engaging UI and bringing products to life. My interest in web
                  development started back in 2017 and currently I enjoy working
                  on Languages & Frameworks like Javascript, React.js and
                  Next.js
                </p>
              </div>
            </AnimWrapper>

            <div className="w-3/4"></div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <svg
            preserveAspectRatio="none"
            width="100%"
            height="100"
            viewBox="0 0 1440 74"
            className="fill-current"
          >
            <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
          </svg>
        </div>
      </section>

      <section
        id="tech"
        className="py-10 md:pt-20 md:pb-20 relative min-h-screen-without-nav items-center content-center flex bg-white-100"
      >
        <div className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-4 pb-4 sm:pb-4  text-gray-900  dark:text-gray-100">
          <AnimWrapper>
            <div className=" container flex gap-8 md:gap-0 px-6 sm:mx-auto grid md:grid-cols-1 items-center content-center justify-items-center">
              <h3 className="md:mb-10 font-bold text-2xl md:text-4xl tracking-tight mb-2 text-black dark:text-white">
                Technologies I’ve been working with
              </h3>
              <div className="flex w-full flex-wrap gap-6 mt-6 justify-center flex-col md:flex-row">
                <BlogPostCard
                  styles={{ flexBasis: '55%' }}
                  title="Languages & Frameworks"
                  list={[
                    'Javascript',
                    'React.js',
                    'React Native',
                    'Next.js',
                    'Redux',
                    'jQuery',
                  ]}
                  gradient="from-[#D8B4FE] to-[#818CF8]"
                />
                <BlogPostCard
                  styles={{ flex: 1 }}
                  title="User Interface & Styling"
                  list={['CSS3', 'SASS', 'LESS', 'Bootstrap', 'Tailwind']}
                  gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
                />
                <BlogPostCard
                  styles={{ flexBasis: '40%' }}
                  title="Tools"
                  list={['Git', 'Webpack', 'Grunt']}
                  gradient="from-[#FF709F] via-[#FCA5A5] to-[#FECACA]"
                />
                <BlogPostCard
                  styles={{ flex: 1 }}
                  title="Others"
                  list={['Gitlab', 'JIRA', 'Bitbucket', 'Netlify']}
                  gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
                />
              </div>
            </div>
          </AnimWrapper>
        </div>
      </section>

      <section
        id="exp"
        className="py-10 md:pt-20 md:pb-20 relative min-h-screen-without-nav items-center content-center flex bg-primary-100 dark:bg-gray-900"
      >
        <div className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-4 pb-4 sm:pb-4  text-gray-900  dark:text-gray-100">
          <AnimWrapper>
            <div className=" container flex gap-8 md:gap-0 px-6 sm:mx-auto grid md:grid-cols-1 items-center content-center justify-items-center">
              <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-2 text-black dark:text-white">
                Where I’ve Worked
              </h3>
              <ExperienceCard
                title="Senior Software Developer"
                company="Yapsody India Pvt. Ltd."
                range="May 2019 - Present"
                link="https://www.linkedin.com/company/yapsody-india-pvt-ltd/mycompany/"
                list={[
                  'Lead a team of 4 full-time engineer, participated in the roadmap definition for the team, established engineering best practices and a mentor to other members of the team',
                  'Develop cross browser, cross devices high-quality, high-performance, beautiful, maintainable front-end code using React.JS, JavaScript, HTML5, CSS3',
                  'Ensured tight cooperation with other engineers, designers, and artists through active listening, systematic communication, and leadership skills.',
                  'Fixed bugs and problems across the project codebase in an efficient, timely manner.',
                ]}
              />
              <ExperienceCard
                title="Software Engineer"
                company="Maniar Technologies Private Limited"
                range="July 2017 - April 2019"
                list={[
                  'Worked in an Agile-driven environment to effectively maintain project timelines and utilize available resources.',
                  'Developed designs to meet specific requirements such as quick-loading sites with particular layouts.',
                  'Produced websites compatible with multiple browsers.',
                  'Mentored junior engineers and new hires to better improve the competency and efficiency of all staff.',
                ]}
              />
            </div>
          </AnimWrapper>
        </div>
      </section>

      <section id="contact" className="bg-purple dark:bg-darkgrey text-text">
        <div className="container grid md:grid-cols-2 gap-6 min-h-screen-without-nav content-center align-items"></div>
      </section>

      <footer className="flex justify-center items-center flex-col py-5">
        <ul className="flex gap-5">
          <motion.li
            whileHover={{
              scale: 1.2,
            }}
          >
            <a
              href="https://www.linkedin.com/in/malika-ansari-b89a81137/"
              aria-label="Linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="20"
                className="fstroke-1 stroke-current text-primary-400 dark:text-teal-400 inline h-6 w-6"
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
            }}
          >
            <a
              href="https://github.com/malikaansari91"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="fstroke-1 stroke-current text-primary-400 dark:text-teal-400  inline h-6 w-6"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.2,
            }}
          >
            <a href="#" aria-label="Twitter" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="20"
                className="fstroke-1 stroke-current text-primary-400 dark:text-teal-400 inline h-6 w-6"
              >
                <title>Twitter</title>
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </motion.li>
        </ul>
        <div className="pt-2 text-gray-800 dark:text-white px-2 font-sm">
          Made with{' '}
          <a
            target="_blank"
            href="https://nextjs.org"
            className="text-primary-400 dark:text-teal-400"
            rel="noreferrer"
          >
            Next.js{' '}
          </a>
          • View Source on{' '}
          <a
            target="_blank"
            href="https://github.com/malikaansari91/portfolio"
            className="text-primary-400 dark:text-teal-400"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </footer>
    </div>
  );
}
