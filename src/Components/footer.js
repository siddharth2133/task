import React from "react";

const Footer = () => {
    return (
        <div className="bg-[#F0F2F6]">
        <div className="md:flex items-center justify-between px-6 py-2 border-b border-gray-200 mx-auto max-w-7xl text-[#81868E] ">
            <div className="flex items-center ">
                <h1>POWERED BY</h1>
                <div className="flex items-center pl-4">
                    <div className=" flex items-center justify-center">
                        <img
                            src="/images/1kibbi.png"
                            alt="Logo"
                            className="w-40 h-12"
                        />
                    </div>

                </div>
            </div>
            <p className="md:mt-0 mt-4">Privacy Policy <span>Terms of Use</span></p>
            
            <p className="md:mt-0 mt-4">Copyright 2024 Kibbi Technologies Inc. All rights reserved</p>




            
        </div>
        </div>
    );
};

export default Footer;
