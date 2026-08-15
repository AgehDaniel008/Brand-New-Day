import React from "react";
import assets from "../assets/assets (1)";

const Footer = ({theme}) => {
    return(
        <div className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">
            {/* footer top */}
            <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
                <div className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
                    <img src={theme === 'dark' ? assets.logo_dark : assets.marketing_icon} alt="" className="w-32 sm:w-44"/>
                    <p className="max-w-md">From strategy to execution we create digital solutions that move your business forward</p>

                    <ul className="flex gap-8">
                      <li><a className="hover:text-primary" href="#hero">Home</a></li>
                      <li><a className="hover:text-primary" href="#services">Services</a></li>
                      <li><a className="hover:text-primary" href="#our-works">Our Works</a></li>
                      <li><a className="hover:text-primary" href="#contact-us">Contact Us</a></li>
                    </ul>
                </div>
                <div className="txt-gray-600 dark:text-gray-400">
                    <h3 className="font-semibold">Subscribe to our news letter</h3>
                    <p className="text-sm mt-3 mb-6">The latest news, articles and resources sent to your inbox weekly.</p>
                    <div className="flex gap-2 text-sm">
                        <input type="email" placeholder="Enter your Email" className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transperent border border-gray-300 dark:border-gray-500"/>
                        <button className="bg-primary text-white rounded px-6">Subscribe</button>
                    </div>
                    <hr  className="border-gray-300 dark:border-gray-600 my-6"/>
                    {/*footer bottom */}
                    <div className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap">
                        <p>Copyright 2026 agency.io- All Rights Reserved.</p>
                        <div className="flex items-center justify-betweeen gap-4">
                            <img src={assets.Facebook} alt=""  className="w-6"/>
                            <img src={assets.Twitter} alt=""  className="w-6"/>
                            <img src={assets.linkedin_icon} alt="" />
                            <img src={assets.logo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer