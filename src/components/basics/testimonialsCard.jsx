import '../../fonts/grifter.css'

export function TestimonialsCard ({message, name, position, imagePath, bodyColor, footerColor}){
    return (
        <>
            <div className='w-full min-w-[835px] rounded-[24px] border border-solid border-[#BCB7C7]'>
                <div className={`${bodyColor} w-full flex items-center justify-center min-h-[321px] border-b border-b-solid border-b-[#BCB7C7] rounded-t-[24px]`}>
                    <p className='text-center text-[24px] leading-[35px] font-[500] text-[#3A3A3A] max-w-[642px] '>{message}</p>
                </div>
                <div className={`${footerColor} flex items-center justify-center w-full min-h-[128px]  rounded-b-[24px]`}>
                    <div className='flex gap-3 items-center '>
                        <img src={imagePath} alt="" />
                        <div className="inline-flex flex-col gap-[2px]">
                            <h3 
                                className=" text-[20px] font-bold text-[#1A1A1A]"
                                style={{
                                    fontFamily: 'Grifter',
                                }}
                            >{name}</h3>
                            <p className='text-[16px] font-[300] text-[#3A3A3A]'>{position}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}