export function Title ({subTitle, title, message}){
    return (
        <>
            <div className="flex flex-col gap-3 items-center">
                <div className="flex flex-col items-center gap-4">
                    <span className="text-[14px] font-[700] text-[#6364FF]">{subTitle}</span>
                    <h2
                        className="text-center text-[40px] font-bold max-w-[622px] leading-[48px]"
                        style={{
                            fontFamily: 'Grifter',
                        }}
                    >{title}</h2>
                </div>
                <p className="text-center text-[16px] text-[#3A3A3A] text-[300] leading-[26px] max-w-[560px]">{message}</p>
            </div>
        </>
    )
}