import React from "react";
import user from './images/user-favicon.png';
import calender from './images/calendar.png';
import certficate from './images/certificate.png';

function SPage(){
    return(
        <div className=" w-full h-[100vh] bg-purple-900">
            <div className="ml-[1450px] pt-7">
                <img src={user} alt="" />
            </div>
            <div className="flex">
                <div className=" block ml-50 mt-10">
                    {/* First Div */}
                    <div className="w-[500px] h-28 bg-white rounded-md">
                        <p className=" text-2xl font-bold pl-6 pt-7">Hello Mohit Chawlla,</p>
                        <p className=" text-md font-medium text-gray-700 pl-6">Good to see you again!</p>
                    </div>
                    {/* Second Div */}
                    <div className=" w-[500px] flex h-28 mt-5 bg-orange-500 rounded-md">
                        <div className="pt-6 pl-6">
                            <div className="flex justify-center items-center w-16 bg-white h-16 rounded-full">
                                <img src={calender} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="ml-0 mt-6">
                                <p className="text-white pl-5 text-2xl font-light tracking-wide">Attendance</p>
                                <p className="text-white pt-0 pl-5 text-xl font-extrabold ">70%</p>
                            </div>
                        </div>
                    </div>
                    {/* Third Div */}
                    <div className=" w-[500px] flex h-28 mt-5 bg-orange-500 rounded-md">
                        <div className="pt-7 pl-6">
                            <div className="flex justify-center items-center w-16 bg-white h-16 rounded-full">
                                <img src={certficate} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="ml-0 mt-7">
                                <p className="text-white pl-5 text-2xl font-light tracking-wide">Grade</p>
                                <p className="text-white pt-0 pl-5 text-xl font-extrabold ">A+</p>
                            </div>
                        </div>
                    </div>
                    {/* Fourth Div */}
                    <div className=" w-[500px] flex h-32 mt-5 bg-white rounded-md">
                        <div>
                            <div className="ml-0 mt-4">
                                <p className=" pl-6 text-2xl font-bold tracking-wide">Recent Updates</p>
                                <p className=" pt-3 pl-6 w-72 text-xs font-medium ">Hiring for Digital Marketing Executive
                                at Infosys. Contact @9742160528</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[600px] h-[524px] ml-5 mt-10 rounded bg-white">
                    <p className="font-bold text-2xl pt-5 ml-10">Course Details</p>
                    <p className="font-light text-base tracking-wide pt-1 ml-10">Agency Based Digital Marketing Course</p>
                    <hr className="mt-6"/>
                    <p className="font-medium text-lg pt-5 ml-10">Sessions</p>
                    <div className="w-[500px] h-14 bg-gray-300 ml-12 rounded-br-2xl rounded-tl-2xl mt-4">
                        <p className="text-medium ml-5 pt-2 font-medium">Introduction to fundamentals of Digital Marketing</p>
                        <div className="flex">
                            <p className="text-xs font-normal tracking-wide ml-5 mt-1">View recorder class</p>
                            <a href="google.com" className="text-xs font-normal underline tracking-wide ml-5 mt-1">Click to view</a>
                        </div>
                    </div>
                    <div className="w-[500px] h-14 bg-gray-300 ml-12 rounded-br-2xl rounded-tl-2xl mt-4">
                        <p className="text-medium ml-5 pt-2 font-medium">Social Media Marketing</p>
                        <div className="flex">
                            <p className="text-xs font-normal tracking-wide ml-5 mt-1">View recorder class</p>
                            <a href="google.com" className="text-xs font-normal underline tracking-wide ml-5 mt-1">Click to view</a>
                        </div>
                    </div>
                    <div className="w-[500px] h-14 bg-gray-100 ml-12 rounded-br-2xl rounded-tl-2xl mt-4">
                        <p className="text-medium ml-5 pt-3 font-medium">Search Engine Optimisation</p>
                    </div>
                    <div className="w-[500px] h-14 bg-gray-100 ml-12 rounded-br-2xl rounded-tl-2xl mt-4">
                        <p className="text-medium ml-5 pt-3 font-medium">Wordpress website development</p>
                    </div>
                    <div className="w-[500px] flex justify-center items-center ml-12 mt-5 h-12 rounded-tr-2xl rounded-bl-2xl bg-black">
                        <a href="youtube.com" className="text-white text-lg font-mono">View all Sessions</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SPage;