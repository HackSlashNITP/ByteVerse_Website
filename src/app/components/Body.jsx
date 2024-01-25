'use client';

import { motion } from "framer-motion";

export default function Body() {
  return (
    <motion.div
      initial={{ y: 500 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 4, type: 'spring', bounce: 0.17 }}
      className="flex z-40 xl:w-3/4 w-4/5 lg:text-lg text-sm font-lato mt-3">
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet
        gravida mi, sed bibendum diam fermentum a. Proin commodo enim sed augue
        rutrum imperdiet. Aliquam quis aliquam mi. Quisque vehicula porta
        bibendum. Nam vestibulum egestas orci, sit amet semper arcu imperdiet
        nec. Pellentesque facilisis justo vitae dui congue congue.
      </p>
    </motion.div>
  );
}
