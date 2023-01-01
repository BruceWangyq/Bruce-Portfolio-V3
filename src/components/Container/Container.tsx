import React, { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';

import Footer from 'src/components/Footer/Footer';
import cn from 'src/lib/classNames';
import { ConnectButton, lightTheme } from '@rainbow-me/rainbowkit';
import MobileMenu from '../MobileMenu';
import Navbar from '../Navbar';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Container(props: any) {
  const { children, ...customMeta } = props;
  const router = useRouter();

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
        )}
      >
        <Head>
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
            'rounded-lg',
          )}
        >
          <div>{children}</div>
          <footer>
            <Footer />
          </footer>
        </main>
      </div>
    </>
  );
}
