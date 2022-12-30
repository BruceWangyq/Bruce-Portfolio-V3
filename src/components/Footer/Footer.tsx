import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Home
          </Link>
          <Link
            href="/https://www.linkedin.com/in/brucewangdev/"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto: brucewangyq@gmail.com"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="https://twitter.com/brucewangdev"
            className="text-gray-500 hover:text-gray-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>
          <Link
            href="https://github.com/brucewangyq"
            className="text-gray-500 hover:text-gray-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCyiUWVGI7htuA_7d4otG5YQ"
            className="text-gray-500 hover:text-gray-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/explorer"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Explorer
          </Link>
          <Link
            href="/guestbook"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Guestbook
          </Link>
          <Link
            href="/timeline"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Timeline
          </Link>
          <Link
            href="https://cal.com/brucewang/30min"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Let's Chat!
          </Link>
        </div>
      </div>
      <p className="text-gray-500 transition text-center">
        This site is{' '}
        <Link
          href="https://github.com/BruceWangyq/Bruce-Portfolio-V3"
          target={'_blank'}
          className="hover:text-gray-400"
        >
          open-soured
        </Link>{' '}
        and inspired by{' '}
        <Link
          href="https://leerob.io/"
          target={'_blank'}
          className="hover:text-gray-400"
        >
          leerob.io
        </Link>
      </p>
    </footer>
  );
}
