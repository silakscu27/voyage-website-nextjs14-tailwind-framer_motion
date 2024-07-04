'use client';

import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

// Leaflet css
import 'leaflet/dist/leaflet.css';

import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const markers = [
   {
      position: [41.0082, 28.9784],
      title: 'İstanbul',
      subtitle: 'Tarihi ve kültürel zenginlikleriyle İstanbul, her köşesinde farklı bir hikaye sunuyor.',
      image: '/map/1.png',
   },
   {
      position: [38.4237, 27.1428],
      title: 'İzmir',
      subtitle: 'Ege\'nin incisi İzmir, güzel plajları ve zengin tarihiyle büyüleyici bir destinasyon.',
      image: '/map/2.png',
   },
   {
      position: [36.8969, 30.7133],
      title: 'Antalya',
      subtitle: 'Akdeniz\'in turizm cenneti Antalya, muhteşem sahilleri ve antik kentleriyle ünlü.',
      image: '/map/3.png',
   },
];

const customIcon = new Icon({
   iconUrl: '/pin-solid.svg',
   iconSize: [40, 40],
});

const Map = () => {
   const isMobile = useMediaQuery({
      query: '(max-width: 768px)',
   });

   return (
      <motion.section
         variants={fadeIn('up', 0.2)}
         initial='hidden'
         whileInView={'show'}
         viewport={{ once: false, amount: 0.2 }}
         id='contact'
         className='relative xl:after:w-full xl:after:h-[240px] xl:after:bg-gradient-to-b xl:after:from-white xl:after:via-white/80 xl:after: to-white/20 xl:after:absolute xl:after:top-0 xl:after:z-20'
      >
         <MapContainer
            center={[41.0082, 28.9284]}
            zoom={`${isMobile ? 10 : 12}`}
            className={`${isMobile ? 'h-[300px]' : 'h-[900px]'} z-10`}
            zoomControl={false}
         >
            <TileLayer
               attribution='&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
               url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
            />

            {/* markers */}
            {markers.map((marker, index) => (
               <Marker key={index} position={marker.position} icon={customIcon}>
                  <Popup>
                     <div className='flex gap-x-[30px]'>
                        <div className='flex-1'>
                           <h3>{marker.title}</h3>
                           <p className='font-poppins'>{marker.subtitle}</p>
                        </div>
                        <div className='flex-1'>
                           <Image
                              src={marker.image}
                              alt={marker.title}
                              width={130}
                              height={160}
                           />
                        </div>
                     </div>
                  </Popup>
               </Marker>
            ))}
         </MapContainer>
      </motion.section>
   );
};

export default Map;
