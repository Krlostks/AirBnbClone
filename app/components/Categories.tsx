'use client';
 
import { useState } from 'react';
import Image from 'next/image';
import useSearchModal, {SearchQuery} from '../hooks/useSearchModal';
const Categories = () =>{
  const searchModal = useSearchModal();
  const [category, setCategory] = useState('');

  const _setCategory = (_category: string) => {
      setCategory(_category);

      const query: SearchQuery = {
          country: searchModal.query.country,
          checkIn: searchModal.query.checkIn,
          checkOut: searchModal.query.checkOut,
          guests: searchModal.query.guests,
          bedrooms: searchModal.query.bedrooms,
          bathrooms: searchModal.query.bathrooms,
          category: _category
      }

      searchModal.setQuery(query);
  }

             return (
                  <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
                      <div 
                          onClick={() => _setCategory('Villas')}
                          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == '' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
              <Image
              src="/villas.jpg"
              alt="Category - Beach"
              width={20}
              height={20}/> 
              <span className="text-xs">Villas</span> 
            </div>
            <div 
            onClick={() => _setCategory('Cabins')}
            className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
              <Image
              src="/cabins.jpg"
              alt="Category - Beach"
              width={20}
              height={20}/> 
              <span className="text-xs">Cabins</span> 
            </div>
            <div 
            onClick={() => _setCategory('tiny-homes')}
            className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
              <Image
              src="/tinyhomes.jpg"
              alt="Category - Beach"
              width={20}
              height={20}/> 
              <span className="text-xs">Tiny Homes</span> 
            </div>
            <div 
            onClick={() => _setCategory('beach')}
            className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
              <Image
              src="/beach.jpg"
              alt="Category - Beach"
              width={20}
              height={20}/> 
              <span className="text-xs">Playas</span> 
            </div>
            <div 
            onClick={() => _setCategory('islands')}
            className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
              <Image
              src="/islands.jpg"
              alt="Category - Beach"
              width={20}
              height={20}/> 
              <span className="text-xs">Islands</span> 
            </div>
        </div>
    )
}

export default Categories;