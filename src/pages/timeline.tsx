import { Typography } from '@mui/material';
import Container from 'src/components/Container';

export default function timeline() {
  return (
    <Container>
      <h3 className="font-bold text-2xl md:text-3xl tracking-tight mt-6 mb-4 text-black dark:text-white">
        Timeline
      </h3>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 my-8">
        <li className="mb-8 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Spetmebr 2022 - Present
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Hacker and Learner
          </h3>
          <p className="my-2 font-normal text-gray-500 dark:text-gray-400">
            - EthOnline Hackathon - PromiseLand.App
          </p>
          <p className="my-2 font-normal text-gray-500 dark:text-gray-400">
            - EthToronto Hackathon - Rentable Portocol
          </p>
          {/* <a
            href="#"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Learn more{' '}
            <svg
              className="ml-2 w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a> */}
        </li>

        <li className="mb-8 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            January 2022 - Augest 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Developer Evanglist in CyberConnect
          </h3>
          <p className="my-2 font-normal text-gray-500 dark:text-gray-400">
            - Built CyberGraph, a 3D-graph based, social connection explorer.
          </p>
          <p className="my-2 font-normal text-gray-500 dark:text-gray-400">
            - Hosted Gitcoin GR12, GR13, EthShanghai Hackathon.
          </p>
        </li>

        <li className="mb-8 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            January, 2021
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Become Canadian Permanet Resdent.
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
        </li>

        <li className="mb-8 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2018 -2021
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Work as Mechanical/Product Enginneer
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
        </li>

        <li className="mb-8 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2016 -2018
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            University of Ottawa, Department of Engineering
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
        </li>

        <li className="mb-8 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July, 2017
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Brought first Bitcoin.
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
        </li>

        <li className="mb-8 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            1993
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Born
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
        </li>
      </ol>
    </Container>
  );
}
