import React from 'react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Footer from 'src/components/Footer/Footer';
import cn from 'src/lib/classNames';
import Navbar from '../Navbar';
import { useTheme } from 'next-themes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Container(props: any) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const { theme } = useTheme();
  let imageURL = '/circle.gif';
  if (theme === 'dark') {
    imageURL = '/circle-dark.gif';
  } else if (theme === 'light') {
    imageURL = '/circle.gif';
  }

  const meta = {
    title: 'Bruce Wang - Developer, Creator, Builder',
    description:
      'Front-end developer, Blockchain Developer, and content creator.',
    image:
      'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/cat-face_1f431.png',
    type: 'website',
    ...customMeta,
  };

  return (
    <>
      <div
        className={cn(
          'text-primary',
          'relative h-full min-h-screen w-full',
          'flex flex-col',
          'motion-reduce:transition-none motion-reduce:transform-none',
          'bg-[#F5F5F5] dark:bg-[#232323]',
          'snap-y snap-mandatory',
        )}
      >
        <Head>
          <title>Bruce Wang - Developer, Creator, Builder</title>
          <meta name="robots" content="follow, index" />
          <meta
            property="og:url"
            content={`https://brucewangdev.com/${router.asPath}`}
          />
          <link
            rel="canonical"
            href={`https://brucewangdev.com//${router.asPath}`}
          />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="Bruce Wang" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@brucewang" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
          {meta.date && (
            <meta property="article:published_time" content={meta.date} />
          )}
        </Head>

        <nav>
          <Navbar />
        </nav>

        <main
          className={cn(
            'px-4 mt-12',
            'max-w-2xl w-full',
            'mx-auto my-auto',
            'flex flex-col justify-center gap-12',
            'divide-y divide-gray-200 dark:divide-gray-900',
            'rounded-lg z-10',
          )}
        >
          <div>{children}</div>
          <footer>
            <Footer />
          </footer>
        </main>

        <img
          src={imageURL}
          className="fixed max-w-1/2 object-cover bg-center bg-no-repeat top-1/8 left-1/3 z-0 md:top-1/3 md:left-1/4 lg:top-1/2 lg:left-1/4 xl:top-1/3 xl:left-2/3"
          alt=""
        />
      </div>
    </>
  );
}
