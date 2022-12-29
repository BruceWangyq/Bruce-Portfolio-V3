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

      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
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

      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white mt-12">
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
