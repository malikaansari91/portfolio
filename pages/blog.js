import Head from 'next/head';
import { AnimWrapper } from '../components/AnimationWrapper';
import cn from 'classnames';

export default function Blog() {
  return (
    <div>
      <Head>
        <Head>
          <title>Malika Ansari - Blogs</title>
          <link rel="icon" href="/favicon.ico" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Malika Ansari - Frontend Developer with expertise in Javascript, ReactJs, UI development"
          />
          <meta
            name="keywords"
            content="Portfolio, Software Engineer, Software Developer, HTML, CSS, JavaScript, Frontend, Ghent, Malika Ansari"
          />
          <meta
            property="og:title"
            content="Malika Ansari, Frontend Developer"
          />
          <meta
            property="og:description"
            content="You can find information related to Malika's Work and contact details on this site"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://malika-ansari-portfolio.netlify.app"
          />
          <meta
            property="og:image"
            content="https://media.istockphoto.com/photos/cyber-security-web-development-and-work-in-it-concept-picture-id1289411982?b=1&k=20&m=1289411982&s=170667a&w=0&h=0R3OXR4L6LOGphYA3sul4bWQwpGj_DSl05ENiP2kRZg="
          />
          <meta property="og:image:width" content="200" />
          <meta property="og:image:height" content="200" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@forever_malikaa" />
        </Head>
      </Head>

      <section
        id="hero"
        className="py-10 md:pt-20 md:pb-20 relative min-h-screen-without-nav items-center content-center flex bg-primary-100 dark:bg-gray-900"
      >
        <div className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-4 pb-4 sm:pb-4  text-gray-900  dark:bg-gray-900 dark:text-gray-100">
          <div className="container flex gap-8 md:gap-0 mx-6 sm:mx-auto grid md:grid-cols-1 items-center content-center ">
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
                  Blog
                </h1>

                <p className="pb-10 font-semibold">
                  <br />
                  Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has
                  survived not only five centuries
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
        id="hero"
        className="pt-10 pb-10 relative min-h-screen-without-nav items-center content-center flex bg-white-100"
      >
        <div className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-4 pb-4 sm:pb-4  text-gray-900  dark:text-gray-100">
          <div className=" container flex gap-8 md:gap-0 mx-6 sm:mx-auto grid md:grid-cols-1 items-center content-center ">
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-2 text-black dark:text-white">
              {/* Blog Title */}
            </h3>
            {/* <div className="flex w-full flex-wrap gap-6 mt-6 justify-center flex-col md:flex-row">
              <BlogPostCard
                styles={{ flexBasis: '55%' }}
                title="Languages & Frameworks"
                list={[
                  'Javascript',
                  'React.js',
                  'React Native',
                  'Next.js',
                  'React Native',
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
            </div> */}
          </div>
        </div>
      </section>

      <section
        id="contact"
        // ref={contactRef}
        className="bg-purple dark:bg-darkgrey text-text"
      >
        <div className="container grid md:grid-cols-2 gap-6 min-h-screen-without-nav content-center align-items"></div>
      </section>
    </div>
  );
}
