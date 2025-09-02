import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { motion } from "framer-motion";
import { DiscordIcon, GitIcon, TeamsIcon } from "./icons";

export const Layout = ({ children, title = "Alexandar Gamboa " }: any) => {
  return (
    <div>
      {renderSide()}
      <Head>
        <title>{title}</title>
      </Head>
      <div className="relative flex flex-col w-full min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200 APP">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative z-0"
        >
          <div className="my-20 md:my-32"> {children}</div>
          <Footer />
        </motion.main>
      </div>
    </div>
  );
};

function renderSide() {
  return (
    <>
      {/* Hover trigger area */}
      <div className="fixed left-0 top-0 w-4 h-full z-20 hover:w-16 transition-all duration-300 ease-in-out group">
        {/* Sidebar */}
        <div className="absolute left-0 top-0 w-16 h-full flex flex-col items-center justify-center space-y-4 text-gray-500 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0 shadow-lg">
          <div className="flex flex-col items-center justify-center space-y-4">
            <a
              href="https://teams.microsoft.com/l/chat/0/0?users=alexandergamboa402@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-colors duration-200 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              aria-label="Microsoft Teams"
            >
              <TeamsIcon className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Howlmaster"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-colors duration-200 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              aria-label="GitHub"
            >
              <GitIcon className="w-6 h-6" />
            </a>
            <a
              href="https://discord.com/users/alexandergamboa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-colors duration-200 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              aria-label="Discord"
            >
              <DiscordIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
