'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import { Button } from './ui/button';

const Hero = () => {
   return (
      <section className='bg-hero bg-no-repeat relative xl:bg-cover xl:h-[1098px] py-40 pb-32 xl:py-0'>
         <div className='container mx-auto'>
            {/* text & img */}
            <div className='flex items-center xl:h-[960px]'>
               {/* text */}
               <div className='w-full xl:max-w-[460px] text-center xl:text-left'>
                  <motion.h1
                     variants={fadeIn('down', 0.2)}
                     initial='hidden'
                     whileInView={'show'}
                     viewport={{ once: false, amount: 0.4 }}
                     className='text-white mb-7'
                  >
                     Keşfedin, Yaşayın, Hatırlayın!
                  </motion.h1>
                  <motion.p
                     variants={fadeIn('down', 0.4)}
                     initial='hidden'
                     whileInView={'show'}
                     viewport={{ once: false, amount: 0.4 }}
                     className='text-white font-semibold mb-7'
                  >
                     by: <span className='text-orange'>Sıla Kuşcu</span>
                  </motion.p>
                  <motion.p
                     variants={fadeIn('down', 0.6)}
                     initial='hidden'
                     whileInView={'show'}
                     viewport={{ once: false, amount: 0.4 }}
                     className='text-white mb-12 max-w-lg mx-auto xl:max-w-none xl:mx-0'
                  >
                     Voyage, sizi dünyanın keşfedilmeyi bekleyen harika köşelerine götüren kapınız.
                     İstanbul'dan İzmir'e, Antalya'dan dünyanın öteki ucuna kadar uzanan şubelerimizle,
                     her adımda yanınızdayız. Uzman rehberlerimizle birlikte, hayalinizdeki tatilinizi
                     özelleştirin ve unutulmaz bir maceraya adım atın. <br/> Sizi bekleyen keşiflerle dolu bir
                     dünyaya hoş geldiniz!
                  </motion.p>
                  <motion.div
                     variants={fadeIn('down', 0.8)}
                     initial='hidden'
                     whileInView={'show'}
                     viewport={{ once: false, amount: 0.4 }}
                  >
                     <Button>Fırsatı Yakala</Button>
                  </motion.div>
               </div>
               {/* image */}
               <motion.div
                  variants={fadeIn('up', 0.8)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.1 }}
                  className='hidden xl:flex xl:absolute xl:top-[200px] xl:right-0'
               >
                  <Image
                     src={'/hero/travel.png'}
                     alt='travel'
                     width={756}
                     height={682}
                  />
               </motion.div>
            </div>
         </div>
         {/* compass img */}
         <motion.div
            variants={fadeIn('up', 1.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            className='hidden xl:flex xl:relative xl:-top-36'
         >
            <Image
               src='/hero/compass.png'
               alt='compass'
               width={386}
               height={404}
            />
         </motion.div>
      </section>
   );
};

export default Hero;
