export function Seperator (){
    return(
        <>
            <div className="flex flex-col items-center gap-[10px]">
                <div className="w-[1px] bg-[#C9C9C9] h-[225px]"></div>
                <span className="text-[18px] font-[700] text-[#3A3A3A]">VS</span>
                <div className="w-[1px] bg-[#C9C9C9] h-[225px]"></div>
            </div>
        </>
    )
}