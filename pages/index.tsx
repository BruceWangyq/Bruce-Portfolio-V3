import BigText from "components/BigText";
import Container from "components/Container";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center inset-0">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Bruce Wang
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Frontend/ Blockchain Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Loving build cool Web-Applications, Web3, and help people break in
              the future technologies.
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
      </div>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
        Featured Projects
      </h3>
    </Container>
  );
}
