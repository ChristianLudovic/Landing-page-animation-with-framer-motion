import { Button } from "./button";

export function NavBar() {
    return (
        <>
            <div className="w-full flex items-center justify-between mt-[20px]">
                <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center">
                        <svg class="material-symbols-fast-forward-rounded" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.05 16.9749C3.71667 17.2082 3.375 17.2249 3.025 17.0249C2.675 16.8249 2.5 16.5249 2.5 16.1249V7.87488C2.5 7.47488 2.675 7.17888 3.025 6.98688C3.375 6.79555 3.71667 6.80822 4.05 7.02488L10.25 11.1749C10.55 11.3749 10.7 11.6499 10.7 11.9999C10.7 12.3499 10.55 12.6249 10.25 12.8249L4.05 16.9749ZM14.05 16.9749C13.7167 17.2082 13.375 17.2249 13.025 17.0249C12.675 16.8249 12.5 16.5249 12.5 16.1249V7.87488C12.5 7.47488 12.675 7.17888 13.025 6.98688C13.375 6.79555 13.7167 6.80822 14.05 7.02488L20.25 11.1749C20.55 11.3749 20.7 11.6499 20.7 11.9999C20.7 12.3499 20.55 12.6249 20.25 12.8249L14.05 16.9749Z" fill="url(#paint0_linear_0_325)" />
                            <defs>
                                <linearGradient id="paint0_linear_0_325" x1="11.6" y1="6.85229" x2="11.6" y2="17.1633" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.645833" stop-color="#6364FF" />
                                    <stop offset="1" stop-color="#563ACC" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <h2 className="text-[24px] font-[500] text-[#1A1A1A]">FinanceFast</h2>
                </div>
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-12">
                        <a className="text-[16px] font-regular text-[#3A3A3A]">Blog</a>
                        <a className="text-[16px] font-regular text-[#3A3A3A]">Compagny</a>
                        <a className="text-[16px] font-regular text-[#3A3A3A]">Products</a>
                    </div>
                    <Button className='bg-[#D8C6FF] flex items-center justify-center gap-1 px-6 py-3 rounded-full'>
                        <div className="flex items-center justify-center">
                            <svg class="heroicons-outline-device-phone-mobile" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 1.5H8.25C7.00736 1.5 6 2.50736 6 3.75V20.25C6 21.4926 7.00736 22.5 8.25 22.5H15.75C16.9926 22.5 18 21.4926 18 20.25V3.75C18 2.50736 16.9926 1.5 15.75 1.5H13.5M10.5 1.5V3H13.5V1.5M10.5 1.5H13.5M10.5 20.25H13.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <p className="text-[18px] font-[500] text-black">Download</p>
                    </Button>
                </div>
            </div>
        </>
    )
}