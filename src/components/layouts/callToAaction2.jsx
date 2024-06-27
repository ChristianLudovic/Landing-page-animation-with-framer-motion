import cta2 from '../../assets/images/cta2.svg'
import googlePlay from '../../assets/images/googlePlay.svg'
import appStore from '../../assets/images/appStore.svg'
import freeze from '../../assets/images/freeze.svg'
import oneSolution from '../../assets/images/oneSolution.svg'

export function CallToAction2 (){
    return (
        <>
            <div className='px-4 py-[132px]'>
                <div
                    style={{
                        backgroundImage: `url(${cta2})`,
                    }}
                    className='relative max-w-[1264px] w-full min-h-[432px] bg-cover bg-center flex items-center  mx-auto rounded-[24px]'
                >
                    <div className='flex flex-col gap-6 ml-[54px]'>
                        <h2 
                            style={{
                                fontFamily: 'Grifter',
                            }}
                            className='text-bold font-bold text-white text-[40px] max-w-[566px] leading-[48px]'
                        >One Solution for All Your Cross-Border Payments</h2>
                        <div className='flex items-center gap-4'>
                          <img src={googlePlay} alt="" />  
                          <img src={appStore} alt="" />
                        </div>
                    </div>
                    <img 
                        className='absolute bottom-[54.56px] right-[416px]' 
                        src={freeze} 
                        alt="" 
                    />
                    <img
                        className='absolute bottom-[0px] right-[54px]' 
                        src={oneSolution} 
                        alt="" 
                    />
                </div>
            </div>
        </>
    )
}