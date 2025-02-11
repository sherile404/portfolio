import React from "react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

function Contact() {
  return (
    <div className="flex justify-around p-6 bg-[#1a202c] text-white" id="contact">
      <div className="w-96">
        <h1 className="text-[#00df9a] font-semibold">About Me</h1>
        <p className="text-start">
          I am a full stack web developer with 3+ years of expereince. I design
          and build user-friendly web applications.I have experience working
          with a variety of technologies including JavaScript, React, Node.js,
          Express and MongoDB.Being a scholar at Equity Leaders Program, I
          worked as a digital marketer at Equity Bank which gave me a distinct
          viewpoint on how business and technology interact. My ability to build
          creative solutions and successfully communicate their value
          proposition to a variety of audiences is facilitated by my dual
          expertise.
        </p>
      </div>
      <div>
        <h1 className="text-[#00df9a] font-semibold">Useful Links</h1>
        <ul className="font-semibold text-md">
          <li ><a href="#home" className="hover:text-[#00df9a]">Home</a></li>
          <li><a href="#about" className="hover:text-[#00df9a]">About</a></li>
          <li><a href="#education" className="hover:text-[#00df9a]">Education</a></li>
          {/* <li>Skills</li> */}
          <li><a href="#projects" className="hover:text-[#00df9a]">Projects</a></li>
          <li><a href="#experience" className="hover:text-[#00df9a]">Experience</a></li>          
        </ul>
      </div>
      <div>
        <div className="py-4">
          <h1 className="text-[#00df9a] font-semibold">Social Media</h1>
          <ul className="flex gap-3 pt-2">
          <a href="https://github.com/Devsherile" target="-blank">
            <li>
              {" "}
              <Github />
            </li>
            </a>
            <a
              href="https://www.linkedin.com/in/sherile-cheptoo/"
              target="-blank"
            >
            <li>
              {" "}
              <Linkedin />
            </li>
            </a>
          </ul>
        </div>
        <div>
          <h1 className="text-[#00df9a] font-semibold">Contact Me</h1>
          <ul className="pt-2 space-y-4">
            <li className="flex gap-2">
            <a href="tel:+254-793-721-334" className="flex gap-2">
              <Phone /> +254-793-721-334
              </a>
            </li>
            <li className="flex gap-2">
            <a href="mailto:sherilecheptoo1@gmail.com" className="flex gap-2">
              <Mail /> sherilecheptoo1@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
