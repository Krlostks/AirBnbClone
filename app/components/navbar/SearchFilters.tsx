'use client';
 
import useSearchModal from "@/app/hooks/useSearchModal";
const SearchFilters = () =>{
    const searchModal = useSearchModal();
    return(
        <div className="h-[48px] lg:h-[64px] flex flex-row items-center justify-between border rounded-full"
            onClick={() => searchModal.open('location')}>
            <div className="hidden lg:block">
                <div className=" flex flex-row justify-between items-center">
                    <div className="cursor-pointer w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">queee?</p>
                        <p className="text-sm">dondeeee?</p>
                    </div>

                    <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Porqueeee?</p>
                        <p className="text-sm">Cuandooo?</p>
                    </div>

                    <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">Aadkadbj?</p>
                        <p className="text-sm">Cuandoawdjboo?</p>
                    </div>

                    <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">ajdwbd?</p>
                        <p className="text-sm">awdda? </p>
                    </div>
                </div>
            </div>
            <div className="p-2">
                <div className="cursor-pointer p-2 lg:p-4 bg-[var(--airbnb)] hover:bg-[var(--airbnb-black)] transition rounded-full text-white">
                <svg viewBox="0 0 32 32" 
                style={{display:"block", fill:"none",height:"16px",width:"16px",stroke:"currentcolor",strokeWidth:4,overflow:"visible"}} aria-hidden="true" role="presentation" focusable="false" ><path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path></svg>
                </div>
            </div>
        </div>
    )
}
export default SearchFilters;