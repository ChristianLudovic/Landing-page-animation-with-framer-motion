import indicator from '../../assets/images/indicator.svg';
import { Button } from './button';

export function CTA (){
    return (
        <>
            <div className='flex items-center w-[498px] justify-between pl-6 pr-2 py-[6px] border border-solid border-[#C9C9C9] rounded-full bg-white'>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2'>
                        <img 
                            className='rounded-full'
                            src={indicator} 
                            alt="flag of nigeria" 
                        />
                        <div className='flex items-center justify-center'>
                            <svg class="heroicons-outline-chevron-down" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <span className='text-[18px] text-[#1A1A1A] font-[500]'>+234</span>
                </div>
                <Button className='bg-[#563ACC] flex items-center justify-center gap-1 px-6 py-3 rounded-full'>
                    <span className='text-[18px] text-white font-[700]'>Download</span>
                </Button>
            </div>
        </>
    )
}