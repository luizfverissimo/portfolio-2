import '../styles/globals.css';
import { motion, AnimatePresence } from 'framer-motion';
//import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial='pageInitial'
        animate='pageAnimate'
        variants={{
          pageInitial: {
            opacity: 0
          },
          pageAnimate: {
            opacity: 1,
            transition: {
              duration: .5
            }
          },
          pageExit: {
            opacity: 0
          }
        }}
      >
        <Component {...pageProps}/>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
