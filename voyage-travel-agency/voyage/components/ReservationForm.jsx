import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from '@/components/ui/popover';

import Link from 'next/link';
import { Label } from './ui/label';
import { Input } from './ui/input';

import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select';

const ReservationForm = () => {
   const [date, setDate] = useState();

   return (
      <form className='flex flex-col gap-y-10'>
         <div className='grid gap-[30px]'>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
               <div>
                  <Label htmlFor='firstname'>Ad</Label>
                  <Input type='text' id='firstname' />
               </div>
               <div>
                  <Label htmlFor='lastname'>Soyad</Label>
                  <Input type='text' id='lastname' />
               </div>
            </div>

            <div className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
               {/* calendar */}
               <div>
                  <Label>Tarih</Label>
                  <Popover>
                     <PopoverTrigger asChild>
                        <Button
                           variant={'input'}
                           className={cn(
                              'w-full justify-start text-left font-normal'
                           )}
                        >
                           <CalendarIcon className='mr-2 h-4 w-4' />
                           {date ? (
                              format(date, 'PPP')
                           ) : (
                              <span>Tarih seç</span>
                           )}
                        </Button>
                     </PopoverTrigger>
                     <PopoverContent className='w-auto p-0'>
                        <Calendar
                           mode='single'
                           selected={date}
                           onSelect={setDate}
                           initialFocus
                        />
                     </PopoverContent>
                  </Popover>
               </div>
               {/* select */}
               <div>
                  <Label>Kişi</Label>
                  <Select>
                     <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Kaç kişi?' />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectGroup>
                           <SelectLabel>Kişi sayısı</SelectLabel>
                           <SelectItem value='1'>1</SelectItem>
                           <SelectItem value='2'>2</SelectItem>
                           <SelectItem value='3'>3</SelectItem>
                           <SelectItem value='4'>4</SelectItem>
                           <SelectItem value='5'>5</SelectItem>
                        </SelectGroup>
                     </SelectContent>
                  </Select>
               </div>
               {/* select */}
               <div>
                  <Label>Tur</Label>
                  <Select>
                     <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Tur seçiniz' />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectGroup>
                           <SelectLabel>Turlar</SelectLabel>
                           <SelectItem value='1'>Bali Adası</SelectItem>
                           <SelectItem value='2'>İtalya</SelectItem>
                           <SelectItem value='3'>Yunan Adaları</SelectItem>
                           <SelectItem value='4'>İsviçre Alpleri</SelectItem>
                        </SelectGroup>
                     </SelectContent>
                  </Select>
               </div>
            </div>
         </div>
         <Button variant='orange' className='uppwercase w-full xl:w-auto xl:self-end'>
            Yerini ayırt
         </Button>
      </form>
   );
};

export default ReservationForm;
