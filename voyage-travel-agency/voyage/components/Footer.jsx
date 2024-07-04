'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
   return (
      <motion.footer
         variants={fadeIn('up', 0.2)}
         initial='hidden'
         whileInView={'show'}
         viewport={{ once: false, amount: 0 }}
         className='bg-footer bg-cover bg-no-repeat text-white pt-16'
      >
         <div className='container mx-auto'>
            {/* logo */}
            <div className='flex flex-col justify-between xl:flex-row'>
               <div className='w-[300px] mb-8 xl:mb-0'>
                  <Link href='/'>
                     <Image
                        src='/logo.png'
                        width={250}
                        height={40}
                        alt='site logo'
                     />
                  </Link>
               </div>
               {/* grid items */}
               <div className='flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16'>
                  {/* company */}
                  <div>
                     <h4 className='font-semibold mb-5'>Şirket</h4>
                     <ul className='flex flex-col gap-y-6 text-sm'>
                        <li>
                           <Link href='/'>
                              Hakkımızda
                           </Link>
                        </li>
                        <li>
                           <Link href='/'>
                           Güvenlik politikaları
                           </Link>
                        </li>
                        <li>
                           <Link href='/'>
                           Hüküm ve koşullar
                           </Link>
                        </li>
                        <li>
                           <Link href='/'>
                           FAQ ve yardım
                           </Link>
                        </li>
                     </ul>
                  </div>
                  {/* item */}
                  <div>
                     <h4 className='font-semibold mb-5'>İletişim</h4>
                     <ul className='flex flex-col gap-y-6 text-sm'>
                        <li>
                           <Link href='/'>
                              Adres: 17. Sokak Fatih/istanbul
                           </Link>
                        </li>
                        <li>
                           <Link href='/'>
                           Telefon numarası: 02165742109
                           </Link>
                        </li>
                        <li>
                           <Link href='/'>
                              E-posta: voyage-travel@gmail.com
                           </Link>
                        </li>
                     </ul>
                  </div>
                  {/* social medias*/}
                  <div>
                     <h4 className='font-semibold mb-5'>Sosyal Medya</h4>
                     <ul className='flex flex-col gap-y-6 text-sm'>
                        <li>
                           <Link href='/'>Youtube</Link>
                        </li>
                        <li>
                           <Link href='/'>Facebook</Link>
                        </li>
                        <li>
                           <Link href='/'>Instagram</Link>
                        </li>
                        <li>
                           <Link href='/'>Twitter</Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            {/* copyright text */}
            <div className='py-4 border-t border-white/10'>
               <p className='text-white/10 text-center text-sm'>
                  Copyright &copy; Voyage 2024
               </p>
            </div>
         </div>
      </motion.footer>
   );
};

export default Footer;
