import Container from 'src/components/Container';
import ProjectCard from 'src/components/ProjectCard';
import Image from 'next/image';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center inset-0 mb-8">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Bruce Wang
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 my-4">
              Frontend/ Blockchain Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Builder, creator, and explorer. I'm a software engineer with a
              passion for building products that help people. I'm currently
              living in Canada.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Bruce Wang"
              height={176}
              width={176}
              src="/bruce.jpeg"
              sizes="30vw"
              priority
              className="rounded-full filter"
            />
          </div>
        </div>
        <div className="flex flex-row">
          <kbd className="mx-1 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
            Next.js
          </kbd>
          <kbd className="mx-1 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
            Typescript
          </kbd>
          <kbd className="mx-1 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
            Tailwind CSS
          </kbd>
          <kbd className="mx-1 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
            GraphQL
          </kbd>
          <kbd className="mx-1 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
            Solidity
          </kbd>
          <kbd className="mx-1 px-4 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
            Hardhat
          </kbd>
          <kbd className="mx-1 px-2 py-1.5  text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
            Wagmi
          </kbd>
        </div>
      </div>

      <h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-6 text-black dark:text-white">
        Projects
      </h3>
      <div className="flex gap-6 flex-col md:flex-row ">
        <ProjectCard
          title="PromiseLand"
          description="A Instagrame-liked Web3 Social NFT Marketplace."
          link="https://github.com/PromiseLand-App/promiseland-frontend"
          icon="🏝️"
        />
        <ProjectCard
          title="CyberGraph"
          description="CyberGraph is a 3D-graph based, social connection explorer "
          link="https://github.com/cyberconnecthq/CyberGraph"
          icon="🌐"
        />
      </div>
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
        {/* <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2016 -2018
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            University of Ottawa, Department of Engineering
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
        </li> */}
      </ol>

      <h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-6 text-black dark:text-white mt-12">
        Content Creation
      </h3>
      <iframe
        width="320"
        height="215"
        src="https://www.youtube.com/embed/HovTOSjhKAc"
      ></iframe>
    </Container>
  );
}
