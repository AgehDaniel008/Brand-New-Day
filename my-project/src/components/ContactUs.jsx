import React from "react";
import Title from "./Title";
import assets from "../assets/assets (1)";
import toast from "react-hot-toast";

const ContactUs = () => {

     const onSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    formData.append("access_key", "7c235bce-ce7c-4ad1-b6f6-9d818471279e");

    try{
         const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success('Thanks for your Submission')
      event.target.reset();
    } else {
      toast.error(data.message)
    }
    } catch (error){
        toast.error(error.message)
    }
  };



    return (
        <div id="contact-us" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
            <Title title='Reach out to us now' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>

            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                <div>
                    <p className="mb-2 text-sm font-medium">Your Name</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img src={assets.person_icon} alt=""/>
                        <input type="text" placeholder="Enter your Name" name="name"   className="w-full p-3 text-sm outline-none" required/>
                    </div>
                </div>

                 <div>
                    <p className="mb-2 text-sm font-medium">Email Id</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img src={assets.Email} alt="" className="w-5"/>
                        <input type="email" name="email" placeholder="Enter your Email" className="w-full p-3 text-sm outline-none" required/>
                    </div>
                </div>

                <div>
                      <p className="mb-2 text-sm font-medium">Message</p>
                      <textarea row={8} placeholder="Enter your Message" name="message" className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600" required/>
                </div>

                <button type="submit" className="w-35 h-10 flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all">
                    Submit <img src={assets.Right} alt="" className="w-4 h-4"/>
                </button>
            </form>
        </div>
    )
}
export default ContactUs


/*7c235bce-ce7c-4ad1-b6f6-9d818471279e*/