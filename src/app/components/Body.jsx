'use client';

import { motion } from "framer-motion";
import PaperRoll from '@/../public/PaperRoll.svg'

export default function Body() {
  return (
    <motion.div
      initial={{ y: 500 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 4, type: 'spring', bounce: 0.17 }}
      className="flex flex-col gap-6 z-40 xl:w-3/4 w-4/5 lg:text-lg text-sm font-lato mt-3">
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet
        gravida mi, sed bibendum diam fermentum a. Proin commodo enim sed augue
        rutrum imperdiet. Aliquam quis aliquam mi. Quisque vehicula porta
        bibendum. Nam vestibulum egestas orci, sit amet semper arcu imperdiet
        nec. Pellentesque facilisis justo vitae dui congue congue.
      </p>
      <div className="flex gap-6 items-center justify-center">
        <button className="bg-blue-600 p-3 rounded-full">
          DEVFOLIO {/*we can use apply with devfolio integration here. https://guide.devfolio.co/organizers/apply-with-devfolio-integration*/}
        </button>
        <a href="path to the file" download className="p-3 text-black font-semibold font-japanese text-2xl" style={{
          backgroundImage: `url(${PaperRoll.src})`,
          width: 'fit',
          height: '100%',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          
          }}>
          RULEBOOK
        </a>
      </div>
    </motion.div>
  );
}
