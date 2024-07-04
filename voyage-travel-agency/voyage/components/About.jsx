'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import { Button } from './ui/button';

const About = () => {
   return (
      <section
         className='grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-0 items-center'
         id='about'
      >
         {/* text */}
         <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className='xl:pl-[135px]'
         >
            <h1 className='mb-9'>Voyage Hakkında</h1>
            <p className='mb-8'>
            Voyage, Türkiye genelindeki seçkin seyahat destinasyonlarını keşfetmenize olanak
            tanıyan önde gelen bir seyahat acentesidir. İstanbul, İzmir ve Antalya'daki köklü 
            şubeleriyle, her müşteriye özel ve unutulmaz bir seyahat deneyimi sunmayı amaçlar.
            Voyage, uzman kadrosu ve geniş hizmet yelpazesiyle, hayallerinizdeki tatil için size
            rehberlik etmeye hazır. <br/> Haydi, dünyayı keşfedin, Voyage ile unutulmaz anılar biriktirin.
            </p>
            <Button>Devamını oku</Button>
         </motion.div>
         {/* image */}
         <motion.div
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
         >
            <Image
               src='/about/img.png'
               alt='about'
               width={705}
               height={771}
               className='hidden xl:flex'
            />
         </motion.div>
      </section>
   );
};

export default About;
