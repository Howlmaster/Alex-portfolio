import Link from "next/link";
import { Card } from "../../components/Card";

export default function Resume() {
  return (
    <div className="space-y-4 lg:space-y-8">
      <Card>
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 sm:text-4xl xl:text-5xl">
              Alexandar Gamboa
            </h1>
            <p className="text-xl text-transparent uppercase bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-red-500 sm:text-2xl xl:text-3xl">
              Senior Web Scraping & Automation & Full Stack Developer
            </p>
            <div className="flex flex-col space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex flex-col">
                <div className="text-gray-700 dark:text-gray-300">Send me Email:</div>
                <a href="mailto:alexandergamboa402@gmail.com" className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300">
                  alexandergamboa402@gmail.com
                </a>
              </div>
              <div className="flex flex-col">
                <div className="text-gray-700 dark:text-gray-300">View my Upwork Profile:</div>
                <a href="https://www.upwork.com/freelancers/~019c080888126be60d" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300">
                  https://www.upwork.com/freelancers/~019c080888126be60d
                </a>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <i className="ri-code-s-slash-line text-2xl text-cyan-500 dark:text-cyan-400"></i>
              <h2 className="font-mono text-xl font-bold text-gray-700 dark:text-gray-300 md:text-2xl">
                Technical Skills
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-center">
                <div className="text-sm font-semibold text-blue-800 dark:text-blue-300">JavaScript/TypeScript</div>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg text-center">
                <div className="text-sm font-semibold text-green-800 dark:text-green-300">Python/Django</div>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg text-center">
                <div className="text-sm font-semibold text-purple-800 dark:text-purple-300">React/Next.js</div>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg text-center">
                <div className="text-sm font-semibold text-red-800 dark:text-red-300">Angular</div>
              </div>
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg text-center">
                <div className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">Vue/Nuxt</div>
              </div>
              <div className="p-4 bg-pink-50 dark:bg-pink-900/30 rounded-lg text-center">
                <div className="text-sm font-semibold text-pink-800 dark:text-pink-300">Nest.js</div>
              </div>
              <div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-center">
                <div className="text-sm font-semibold text-indigo-800 dark:text-indigo-300">Docker</div>
              </div>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg text-center">
                <div className="text-sm font-semibold text-yellow-800 dark:text-yellow-300">PHP/Laravel</div>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="flex justify-center pt-8">
            <a href="/CV/resume.pdf" target="_blank" download>
              <button className="px-6 py-3 text-white bg-cyan-500 dark:bg-cyan-600 border border-cyan-300 dark:border-cyan-500 rounded-md shadow-lg hover:bg-cyan-400 dark:hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200">
                <i className="ri-download-line mr-2"></i>
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}

