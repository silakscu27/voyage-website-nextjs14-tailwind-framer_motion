'use client';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const menu = [
   {
      img: '/menu/item-1.png',
      title: 'Bali Adası Tur Paketi',
      price: '$499.00',
   },
   {
      img: '/menu/item-2.png',
      title: 'İtalya Tur Paketi ',
      price: '$320.00',
   },
   {
      img: '/menu/item-3.png',
      title: 'Yunan Adaları Tur Paketi',
      price: '$175.00',
   },
   {
      img: '/menu/item-4.png',
      title: 'İsviçre Alp Dağları Tur Paketi',
      price: '$399.00',
   },
];

const Menu = () => {
   return (
      <section className='relative py-12 xl:py-24 bg-menu' id='menu'>
         <div className='container mx-auto'>
            <motion.div
               variants={fadeIn('left', 0.3)}
               initial='hidden'
               whileInView={'show'}
               viewport={{ once: false, amount: 0.2 }}
               className='max-w-[570px] mx-auto text-center xl:text-right'
            >
               <h2 className='mb-3'>Favori Tur Paketleri</h2>
               <Link
                  href='/'
                  className='text-green flex justify-center xl:justify-end items-center mb-16'
               >
                  Hepsini gör
                  <IoIosArrowRoundForward className='text-3xl' />
               </Link>
            </motion.div>
            {/* menu grid */}
            <motion.div
               variants={fadeIn('left', 0.4)}
               initial='hidden'
               whileInView={'show'}
               viewport={{ once: false, amount: 0.2 }}
               className='grid grid-cols-1 gap-[30px] md:grid-cols-3 md:gap-[15px] xl:grid-cols-4'
            >
               {menu.map((item, index) => {
                  return (
                     <div
                        key={index}
                        className='max-w-[270px] bg-white shadow-priamry mx-auto xl:mx-0 group'
                     >
                        {/* imgs */}
                        <div className='overflow-hidden'>
                           <Image
                              src={item.img}
                              width={270}
                              height={270}
                              alt={item.title}
                              className='group-hover:scale-110 transition-all duration-300'
                           />
                        </div>
                        {/* title & prize */}
                        <div className='pt-[20px] pb-[28px] px-[30px]'>
                           <Link href='/'>
                              <h3 className='font-poppins text-black mb-[14px]'>
                                 {item.title}
                              </h3>
                           </Link>
                           <div className='text-xl font-spoppins font-semibold text-orange'>
                              {item.price}
                           </div>
                        </div>
                     </div>
                  );
               })}
            </motion.div>
         </div>
      </section>
   );
};

export default Menu;
