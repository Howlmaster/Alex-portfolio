import React from "react";
import Image from "next/image";
import { projects, recommend } from "../utils/data";

import { Card } from "../components/Card";
import { Skill } from "../components/Skill";
import { ProjectItem } from "../components/ProjectItem";
import { RecommendDetail } from "../components/RecommendDetail";
import { CoderIcon, CodingIcon, ThinkerIcon } from "../components/icons";

export default function Home() {
  return (
    <div className="space-y-4 lg:space-y-8">
      <Card id="Home">
        <div className="grid items-center gap-4 sm:grid-cols-7">
          <div className="space-y-2 font-bold text-center lg:space-y-4 sm:col-span-4">
            <p className="text-3xl text-gray-800 dark:text-gray-200 sm:text-4xl xl:text-5xl">
              SENIOR Web Scraping & Automation & FULL STACK DEVELOPER
            </p>
            <p className="text-2xl text-transparent uppercase bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-red-500 sm:text-2xl xl:text-4xl">
              welcome to my site
            </p>
          </div>
          <div className="sm:col-span-3">
            <CoderIcon className="w-full h-48" />
          </div>
        </div>
        <div className="my-6 space-y-2 lg:my-12 md:mx-12">
          <p className="text-gray-700 dark:text-gray-300 sm:text-lg lg:text-2xl">
            As a Data Scraping & Automation Architect with 8+ years of experience, I have broad experience designing and implementing scalable data pipelines for distributed systems.
          </p>

          <p className="text-gray-700 dark:text-gray-300 sm:text-lg lg:text-2xl">
            I have successfully delivered projects leveraging Playwright, Scrapy, Puppeteer, and Selenium for robust browser automation and data extraction, ensuring reliability and efficiency across large-scale deployments.
          </p>

          <p className="text-gray-700 dark:text-gray-300 sm:text-lg lg:text-2xl">
            In addition to my data engineering expertise, I have hands-on experience with AWS-based architectures, Node.js and Python backends, and Docker+CI/CD, enabling seamless deployment, security, and continuous delivery of data processing services.
          </p>
          <p className="text-gray-700 dark:text-gray-300 sm:text-lg lg:text-2xl">
            I am always open to new challenges and opportunities to contribute
            to impactful projects.
          </p>
          <p className="text-gray-700 dark:text-gray-300 sm:text-lg lg:text-2xl">
            I prioritize governance, credential management, and auditing to ensure resilient, scalable, and compliant data automation solutions.
          </p>
        </div>
        <div className="hidden grid-cols-2 gap-4 sm:grid">
          <div className="h-40 p-4 lg:h-48">
            <ThinkerIcon className="w-full h-full" />
          </div>
          <div className="h-40 p-4 lg:h-48">
            <CodingIcon className="w-full h-full" />
          </div>
        </div>
      </Card>
      <Card id="Projects">
        <p className="title">Projects I have worked on:</p>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {projects.map((item, idx) => (
            <ProjectItem item={item} key={idx} />
          ))}
        </div>
      </Card>
      <Card id="About">
        <div className="items-center lg:flex">
          <p className="title">Get to know me:</p>
          <p className="text-lg font-bold text-cyan-500 dark:text-cyan-400 lg:m-6 sm:text-xl md:text-2xl">
            Alexandar Gamboa
          </p>
        </div>
        <div className="items-center my-8 lg:my-12 lg:flex lg:justify-around">
          <div className="overflow-hidden border-2 border-blue-200 dark:border-blue-700 rounded-full w-28 h-28 lg:w-36 lg:h-36">
            <div className="object-cover object-center w-full h-full mx-auto rounded">
              <Image
                src="/images/photo/image.jpg"
                alt="Image of the author"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="my-8 xl:w-4/6 lg:w-3/5 lg:my-0">
            <p className="font-serif text-gray-700 dark:text-gray-300 sm:text-lg lg:text-xl">
              My name is Alexandar Gamboa.
              <span className="block">
                As a Data Scraping & Automation Architect with 8+ years of experience, I have broad experience designing and implementing scalable data pipelines for distributed systems. I have successfully delivered projects leveraging Playwright, Scrapy, Puppeteer, and Selenium for robust browser automation and data extraction, ensuring reliability and efficiency across large-scale deployments.
              </span>
              <span className="block">I'm open to work at any time zone.</span>
            </p>
          </div>
        </div>
        <div className="space-y-8">
          <p className="font-mono text-xl font-bold text-gray-700 dark:text-gray-300 lg:text-2xl">
            Main Skills
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 gap-y-6">
            <Skill
              borderColor1="border-yellow-400"
              borderColor2="border-yellow-200 dark:border-yellow-600"
              backColor="bg-yellow-100 dark:bg-yellow-900/30"
              pic="/images/skills/js.jpg"
              picSize="p-2"
              title="JS/TS"
              degree={96}
              degreeColor="bg-blue-400"
            />
            <Skill
              borderColor1="border-indigo-500"
              borderColor2="border-indigo-300 dark:border-indigo-600"
              backColor="bg-indigo-200 dark:bg-indigo-900/30"
              pic="/images/skills/py.jpg"
              picSize="p-1"
              title="Python/DJ"
              degree={91}
              degreeColor="bg-green-400"
            />
            <Skill
              borderColor1="border-green-500"
              borderColor2="border-green-300 dark:border-green-600"
              backColor="bg-green-200 dark:bg-green-900/30"
              pic="/images/skills/ta.jpg"
              picSize="p-3"
              title="Tailwind CSS"
              degree={99}
              degreeColor="bg-pink-400"
            />
            <Skill
              borderColor1="border-blue-400"
              borderColor2="border-blue-300 dark:border-blue-600"
              backColor="bg-white dark:bg-blue-900/30"
              pic="/images/skills/react.png"
              picSize="p-2"
              title="React/Next"
              degree={100}
              degreeColor="bg-purple-400"
            />
            <Skill
              borderColor1="border-red-500"
              borderColor2="border-red-300 dark:border-red-600"
              backColor="bg-red-200 dark:bg-red-900/30"
              pic="/images/skills/an.jpg"
              picSize="p-1"
              title="Angular"
              degree={93}
              degreeColor="bg-indigo-400"
            />
            <Skill
              borderColor1="border-green-400"
              borderColor2="border-green-200 dark:border-green-600"
              backColor="bg-white dark:bg-green-900/30"
              pic="/images/skills/vue.png"
              picSize="p-2"
              title="Vue/Nuxt"
              degree={93}
              degreeColor="bg-yellow-400"
            />
            <Skill
              borderColor1="border-pink-500"
              borderColor2="border-pink-300 dark:border-pink-600"
              backColor="bg-pink-200 dark:bg-pink-900/30"
              pic="/images/skills/nest.jpg"
              picSize="p-3"
              title="Nest(node.js)"
              degree={94}
              degreeColor="bg-yellow-400"
            />
            <Skill
              borderColor1="border-blue-500"
              borderColor2="border-indigo-300 dark:border-indigo-600"
              backColor="bg-white dark:bg-indigo-900/30"
              pic="/images/skills/docker.png"
              picSize="p-2"
              title="Docker"
              degree={86}
              degreeColor="bg-red-400"
            />
            <Skill
              borderColor1="border-yellow-500"
              borderColor2="border-yellow-300 dark:border-yellow-600"
              backColor="bg-yellow-100 dark:bg-yellow-900/30"
              pic="/images/skills/lara.png"
              picSize="p-2"
              title="PHP/Laravel"
              degree={88}
              degreeColor="bg-indigo-400"
            />
            {/* New Skills */}
            <Skill
              borderColor1="border-orange-500"
              borderColor2="border-orange-300 dark:border-orange-600"
              backColor="bg-orange-100 dark:bg-orange-900/30"
              pic="/images/skills/selenium.png"
              picSize="p-2"
              title="Selenium"
              degree={92}
              degreeColor="bg-orange-400"
            />
            <Skill
              borderColor1="border-slate-500"
              borderColor2="border-slate-300 dark:border-slate-600"
              backColor="bg-slate-100 dark:bg-slate-900/30"
              pic="/images/skills/ps.png"
              picSize="p-2"
              title="PostgreSQL"
              degree={87}
              degreeColor="bg-slate-400"
            />
            <Skill
              borderColor1="border-amber-500"
              borderColor2="border-amber-300 dark:border-amber-600"
              backColor="bg-amber-100 dark:bg-amber-900/30"
              pic="/images/skills/aws.png"
              picSize="p-2"
              title="AWS"
              degree={85}
              degreeColor="bg-amber-400"
            />
          </div>
        </div>
      </Card>
      <Card id="Recommend">
        <p className="title">Recommendations:</p>
        <div className="divide-y dark:divide-gray-700 md:mt-10">
          {recommend.map((item, idx) => (
            <RecommendDetail item={item} key={idx} />
          ))}
        </div>
      </Card>
      <Card id="Contact">
        <p className="title">Contact me:</p>
        <div className="text-sm text-gray-700 dark:text-gray-300 lg:text-lg sm:text-base">
          <p>I'm always up for interesting ideas and projects.</p>
          <p>
            If you want to talk about any of the projects I have worked on, or
            want to work with a project with me, feel free to get in touch!
          </p>
        </div>

        <div className="my-4">
          <div className="my-4 flex flex-col space-y-4">
            <div className="flex items-center">
              <div className="mr-4 text-gray-700 dark:text-gray-300">Send me Email:</div>
              <p className="text-base text-teal-600 dark:text-teal-400 md:text-lg">
                <a href="mailto: alexandergamboa402@gmail.com">
                  alexandergamboa402@gmail.com
                </a>
              </p>
            </div>
            <div className="flex items-center">
              <div className="mr-4 text-gray-700 dark:text-gray-300">View my Upwork Profile:</div>
              <p className="text-base text-teal-600 dark:text-teal-400 md:text-lg">
                <a href="https://www.upwork.com/freelancers/~019c080888126be60d" target="_blank" rel="noopener noreferrer">
                  https://www.upwork.com/freelancers/~019c080888126be60d
                </a>
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
