import '../../fonts/grifter.css'
import { Button } from '../basics/button'

export function Footer (){
    return (
        <>
            <div className='px-4 py-[72px] bg-[#F9F9F9]'>
                <div className='flex flex-col gap-[54px] max-w-[1264px]  mx-auto'>
                    <div className='flex justify-between'>
                        <div className='flex gap-[72px]'>
                            <div className="flex flex-col gap-4">
                                <h3
                                    className="text-[20px] font-bold text-[#1A1A1A]"
                                    style={{
                                        fontFamily: 'Grifter',
                                    }}
                                >Compagny</h3>
                                <div className="flex flex-col gap-3">
                                    <a href="#">About</a>
                                    <a href="#">Contact</a>
                                    <a href="#">Blog</a>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3
                                    className="text-[20px] font-bold text-[#1A1A1A]"
                                    style={{
                                        fontFamily: 'Grifter',
                                    }}
                                >Product</h3>
                                <div className="flex flex-col gap-3">
                                    <a href="#">Money conversion</a>
                                    <a href="#">International transactions</a>
                                    <a href="#">International transactions</a>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3
                                    className="text-[20px] font-bold text-[#1A1A1A]"
                                    style={{
                                        fontFamily: 'Grifter',
                                    }}
                                >Legal</h3>
                                <div className="flex flex-col gap-3">
                                    <a href="#">Terms & conditions</a>
                                    <a href="#">Privacy policy</a>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 max-w-[498px]'>
                            <span
                                className="text-[20px] font-bold text-[#1A1A1A]"
                                style={{
                                    fontFamily: 'Grifter',
                                }}
                            >Sign up for our newsletter</span>
                            <div className='flex items-center  w-full justify-between pl-6 pr-2 py-[5px] border border-solid border-[#C9C9C9] rounded-full bg-white'>
                                <input 
                                    type="email" 
                                    placeholder='Enter email' 
                                    className='focus:outline-none w-full bg-transparent'
                                />
                                <Button className='bg-[#563ACC] flex items-center justify-center gap-1 px-6 py-2 rounded-full'>
                                    <span className='text-[18px] text-white font-[700]'>Subscribe</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-[40px]'>
                            <div className='flex items-center justify-center bg-white w-[40px] h-[40px] rounded-full'>
                                <svg class="ph-instagram-logo-fill" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 12C15 12.5933 14.8241 13.1734 14.4944 13.6667C14.1648 14.1601 13.6962 14.5446 13.1481 14.7716C12.5999 14.9987 11.9967 15.0581 11.4147 14.9424C10.8328 14.8266 10.2982 14.5409 9.87868 14.1213C9.45912 13.7018 9.1734 13.1672 9.05764 12.5853C8.94189 12.0033 9.0013 11.4001 9.22836 10.8519C9.45542 10.3038 9.83994 9.83524 10.3333 9.50559C10.8266 9.17595 11.4067 9 12 9C12.7949 9.00247 13.5565 9.31934 14.1186 9.88141C14.6807 10.4435 14.9975 11.2051 15 12ZM21.375 7.875V16.125C21.375 17.5174 20.8219 18.8527 19.8373 19.8373C18.8527 20.8219 17.5174 21.375 16.125 21.375H7.875C6.48261 21.375 5.14726 20.8219 4.16269 19.8373C3.17812 18.8527 2.625 17.5174 2.625 16.125V7.875C2.625 6.48261 3.17812 5.14726 4.16269 4.16269C5.14726 3.17812 6.48261 2.625 7.875 2.625H16.125C17.5174 2.625 18.8527 3.17812 19.8373 4.16269C20.8219 5.14726 21.375 6.48261 21.375 7.875ZM16.5 12C16.5 11.11 16.2361 10.24 15.7416 9.49993C15.2471 8.75991 14.5443 8.18314 13.7221 7.84254C12.8998 7.50195 11.995 7.41283 11.1221 7.58647C10.2492 7.7601 9.44736 8.18868 8.81802 8.81802C8.18868 9.44736 7.7601 10.2492 7.58647 11.1221C7.41283 11.995 7.50195 12.8998 7.84254 13.7221C8.18314 14.5443 8.75991 15.2471 9.49993 15.7416C10.24 16.2361 11.11 16.5 12 16.5C13.1935 16.5 14.3381 16.0259 15.182 15.182C16.0259 14.3381 16.5 13.1935 16.5 12ZM18 7.125C18 6.9025 17.934 6.68499 17.8104 6.49998C17.6868 6.31498 17.5111 6.17078 17.3055 6.08564C17.1 6.00049 16.8738 5.97821 16.6555 6.02162C16.4373 6.06502 16.2368 6.17217 16.0795 6.3295C15.9222 6.48684 15.815 6.68729 15.7716 6.90552C15.7282 7.12375 15.7505 7.34995 15.8356 7.55552C15.9208 7.76109 16.065 7.93679 16.25 8.0604C16.435 8.18402 16.6525 8.25 16.875 8.25C17.1734 8.25 17.4595 8.13147 17.6705 7.9205C17.8815 7.70952 18 7.42337 18 7.125Z" fill="url(#paint0_linear_0_709)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_0_709" x1="12" y1="2.625" x2="12" y2="21.375" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#6364FF" />
                                            <stop offset="1" stop-color="#563ACC" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className='flex items-center justify-center bg-white w-[40px] h-[40px] rounded-full'>
                                <svg class="mdi-twitter" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.27998 9.09 5.10998 7.38 2.99998 4.79C2.62998 5.42 2.41998 6.16 2.41998 6.94C2.41998 8.43 3.16998 9.75 4.32998 10.5C3.61998 10.5 2.95998 10.3 2.37998 10V10.03C2.37998 12.11 3.85998 13.85 5.81998 14.24C5.19071 14.4122 4.53007 14.4362 3.88998 14.31C4.16158 15.1625 4.69351 15.9084 5.41099 16.4429C6.12847 16.9775 6.99543 17.2737 7.88998 17.29C6.37361 18.4904 4.49397 19.1393 2.55998 19.13C2.21998 19.13 1.87998 19.11 1.53998 19.07C3.43998 20.29 5.69998 21 8.11998 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="url(#paint0_linear_0_713)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_0_713" x1="12" y1="4" x2="12" y2="21" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#6364FF" />
                                            <stop offset="1" stop-color="#563ACC" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className='flex items-center justify-center bg-white w-[40px] h-[40px] rounded-full'>
                                <svg class="ic-baseline-tiktok" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6 5.82C15.9164 5.03962 15.5397 4.03743 15.54 3H12.45V15.4C12.4261 16.071 12.1428 16.7066 11.6597 17.1729C11.1766 17.6393 10.5314 17.8999 9.85997 17.9C8.43997 17.9 7.25997 16.74 7.25997 15.3C7.25997 13.58 8.91997 12.29 10.63 12.82V9.66C7.17997 9.2 4.15997 11.88 4.15997 15.3C4.15997 18.63 6.91997 21 9.84997 21C12.99 21 15.54 18.45 15.54 15.3V9.01C16.793 9.90985 18.2973 10.3926 19.84 10.39V7.3C19.84 7.3 17.96 7.39 16.6 5.82Z" fill="url(#paint0_linear_0_717)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_0_717" x1="12" y1="3" x2="12" y2="21" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#6364FF" />
                                            <stop offset="1" stop-color="#563ACC" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className='flex items-center justify-center bg-white w-[40px] h-[40px] rounded-full'>
                                <svg class="carbon-logo-youtube" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.0575 6.9449C21.938 6.50093 21.704 6.09614 21.3789 5.77103C21.0538 5.44592 20.649 5.2119 20.205 5.0924C18.57 4.6499 12 4.6499 12 4.6499C12 4.6499 5.43002 4.6499 3.79501 5.0924C3.35104 5.2119 2.94625 5.44592 2.62114 5.77103C2.29603 6.09614 2.06202 6.50093 1.94251 6.9449C1.63722 8.61235 1.48907 10.3048 1.50002 11.9999C1.48907 13.695 1.63722 15.3875 1.94251 17.0549C2.06202 17.4989 2.29603 17.9037 2.62114 18.2288C2.94625 18.5539 3.35104 18.7879 3.79501 18.9074C5.43002 19.3499 12 19.3499 12 19.3499C12 19.3499 18.57 19.3499 20.205 18.9074C20.649 18.7879 21.0538 18.5539 21.3789 18.2288C21.704 17.9037 21.938 17.4989 22.0575 17.0549C22.3628 15.3875 22.511 13.695 22.5 11.9999C22.511 10.3048 22.3628 8.61235 22.0575 6.9449ZM9.90001 15.1499V8.8499L15.3525 11.9999L9.90001 15.1499Z" fill="url(#paint0_linear_0_721)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_0_721" x1="12" y1="4.6499" x2="12" y2="19.3499" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#6364FF" />
                                            <stop offset="1" stop-color="#563ACC" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <p className='text-[14px] font-[400] text-[#000000]'>© 2023, FinanaceFast All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}