import React from 'react';

export default function ProjectCard({
  title,
  description,
  link,
  icon,
}: {
  title: string;
  description: string;
  link: string;
  icon: string;
}) {
  return (
    <a className="group block w-72 h-44" href={link} target="_blank">
      <div className="relative flex h-full items-end rounded-3xl border-2 border-black bg-white dark:border-white dark:bg-black p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#000] dark:group-hover:shadow-[8px_8px_0_0_#fff]">
        <div className="lg:group-hover:absolute lg:group-hover:opacity-0">
          <span className="text-3xl sm:text-4xl" role="img" aria-hidden="true">
            {icon}
          </span>
          <p className="mt-4 text-xl font-bold sm:text-2xl">{title}</p>
        </div>

        <div className="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100 pt-2">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">
            {title}
          </h2>

          <p className="mt-4 text-lg font-medium leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
