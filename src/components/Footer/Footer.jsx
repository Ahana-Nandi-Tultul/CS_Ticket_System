import React from 'react';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-black text-white text-base-content p-10">
                <aside className='md:w-[400px]'>
                    <h3 className='text-xl font-bold'>CS - Ticket System</h3>
                    <p>
                        A customer support ticket system helps organizations manage, track, and resolve customer issues efficiently. It organizes requests into structured tickets, assigns priorities, monitors progress, and ensures timely responses. This system improves communication, increases productivity, and enhances overall customer satisfaction through streamlined support processes.
                    </p>
                </aside>
                <nav>
                    <h6 className=" text-white font-bold"> Company</h6>
                    <a className="link link-hover text-gray-400">About Us</a>
                    <a className="link link-hover text-gray-400">Our Mission</a>
                    <a className="link link-hover text-gray-400">Contact Us</a>
                </nav>
                <nav>
                    <h6 className="text-white font-bold">Services</h6>
                    <a className="link link-hover text-gray-400">Product & Services</a>
                    <a className="link link-hover text-gray-400">Customer Stores</a>
                    <a className="link link-hover text-gray-400">Download Apps</a>
                </nav>
                <nav>
                    <h6 className="text-white font-bold">Information</h6>
                    <a className="link link-hover text-gray-400">Privacy Policy</a>
                    <a className="link link-hover text-gray-400">Terms & Conditions</a>
                    <a className="link link-hover text-gray-400">Join Us</a>
                </nav>
                <nav>
                    <h6 className="text-white font-bold">Social Links</h6>
                    <a className="link link-hover text-gray-400 flex justify-between items-center gap-1"><FaSquareXTwitter className='text-xl text-white' /><span>@CS — Ticket System</span></a>
                    <a className="link link-hover text-gray-400 flex justify-between items-center gap-1"><FaLinkedin className='text-xl text-white' /><span>@CS — Ticket System</span></a>
                    <a className="link link-hover text-gray-400 flex justify-between items-center gap-1"><FaFacebookSquare className='text-xl text-white' /><span>@CS — Ticket System</span></a>
                    <a className="link link-hover text-gray-400 flex justify-between items-center gap-1"><MdOutlineEmail className='text-xl text-white' /><span>support@cst.com</span></a>

                </nav>
            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-black text-white p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} CS - Ticket System. All Rights reserved</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;