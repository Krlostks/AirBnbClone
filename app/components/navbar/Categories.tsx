import Image from "next/image";
const Categories = () =>{
    return(
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
              <Image
              src="/beach.jpg"
              alt="Category - Beach"
              width={20}
              height={20}/> 
              <span className="text-xs">Beach</span> 
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
              <Image
              src="/villas.jpg"
              alt="Category - Beach"
              width={20}
              height={20}/> 
              <span className="text-xs">Villas</span> 
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
              <Image
              src="/cabins.jpg"
              alt="Category - Beach"
              width={20}
              height={20}/> 
              <span className="text-xs">Cabins</span> 
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
              <Image
              src="/tinyhomes.jpg"
              alt="Category - Beach"
              width={20}
              height={20}/> 
              <span className="text-xs">Tiny Homes</span> 
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
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