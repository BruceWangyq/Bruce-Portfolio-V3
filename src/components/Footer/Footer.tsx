import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">
              About
            </a>
          </Link>
          <Link href="/newsletter">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Newsletter
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="https://twitter.com/brucewangdev">
            <a
              className="text-gray-500 hover:text-gray-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </Link>
          <Link href="https://github.com/brucewangdev">
            <a
              className="text-gray-500 hover:text-gray-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Link>
          <Link href="https://www.youtube.com/channel/UCyiUWVGI7htuA_7d4otG5YQ">
            <a
              className="text-gray-500 hover:text-gray-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/uses">
            <a className="text-gray-500 hover:text-gray-600 transition">Uses</a>
          </Link>
          <Link href="/guestbook">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Guestbook
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Dashboard
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}