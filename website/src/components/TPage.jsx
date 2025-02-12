import React from "react";
import power from './images/PowerSwitch.png'

function TPage(){
    return(
        <div>
            <div className="w-full h-[20vh] flex justify-center bg-purple-900 mt-2">
                <div className="flex items-center">
                    <img src={power} className="w-10 h-10 ml-[1300px]" alt="" />
                </div>
            </div>
            <div className="w-full h-[80vh]">
                <div className="w-30 h-30 ml-71 mt-[-60px] bg-gray-300 rounded-full"></div>
                <div className="ml-50 flex">
                    <div>
                        <p className="font-[700] ml-16 mt-4 text-2xl">Mohit Chawlla</p>
                        <div className="mt-8">
                            <span className="ml-14 text-[15px]"><span className="font-[700] tracking-wide">Mobile No:</span> <span className="font-light">+91 9742160528</span></span>
                        </div>
                        <div>
                            <span className="ml-14 text-[15px]"><span className="font-[700] tracking-wide">Email ID:</span> <span className="font-light">mohit.epixable@gmail.com</span></span>
                        </div>
                        <div>
                            <span className="ml-14 text-[15px]"><span className="font-[700] tracking-wide">Date of Birth:</span> <span className="font-light">25-06-1997</span></span>
                        </div>
                        <div className="mt-15">
                            <span className="ml-14 text-[15px]"><span className="font-[700] tracking-wide">Address:</span></span>
                            <p className="ml-14 w-93 font-light">641 1st Floor, 9th Cross Rd, opposite to Soyog hospital, E & F Block, Ramakrishnanagar, Mysuru, Karnataka 570024</p>
                        </div>
                    </div>
                    <div>
                        <div className="ml-60 mt-20">
                            <span className="ml-14 text-[15px]"><span className="font-[700] tracking-wide">Date of Birth:</span> <span className="font-light">25-06-1997</span></span>
                        </div>
                        <div className="ml-60">
                            <span className="ml-14 text-[15px]"><span className="font-[700] tracking-wide">Course:</span> <span className="font-light">Agency Based Digital Marketing</span></span>
                        </div>
                        <div className="ml-60">
                            <span className="ml-14 text-[15px]"><span className="font-[700] tracking-wide">Date of Joining:</span> <span className="font-light">04/08/2024</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TPage;