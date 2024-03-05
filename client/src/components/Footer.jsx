import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
} from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin, BsDribbble } from "react-icons/bs";

export default function FooterComponent() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className=" grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg text-white">
                Rahul's
              </span>
              Blog
            </Link>
          </div>
          <div className=" grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About Me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/rahul230411"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rahul's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            href="https://github.com/rahul230411/mern-blog"
            by="Rahul's Blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <FooterIcon href="https://github.com/rahul230411" icon={BsGithub} />
            <FooterIcon
              href="https://www.linkedin.com/in/rahul-deshmukh-26083a184/"
              icon={BsLinkedin}
            />
            <FooterIcon
              href="https://www.instagram.com/_rahul2311/"
              icon={BsInstagram}
            />
            <FooterIcon href="/home" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
