import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from 'react-icons/ti';

const Footer = () => {
  return (
    <footer className="font-satoshi max-w-[1120px] mx-auto bg-white py-14">
      {/* Footer Content */}
      <div className="mx-4 md:mx-2 flex flex-col md:flex-row gap-2 md:gap-20">
        <div>
          <Link href="/">
            <Image
              src={'/logo.png'}
              alt="logo"
              className="w-auto h-fit"
              width={200}
              height={10}
            />
          </Link>
          <div className="py-6">
            <p className="text-sm text-gray-4 font-medium">Connect with us</p>
            <div className="flex gap-4 text-2xl">
              <TiSocialFacebook className="cursor-pointer text-gray-500 hover:text-gray-700" />
              <TiSocialLinkedin className="cursor-pointer text-gray-500 hover:text-gray-700" />
              <TiSocialTwitter className="cursor-pointer text-gray-500 hover:text-gray-700" />
              <TiSocialYoutube className="cursor-pointer text-gray-500 hover:text-gray-700" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 pt-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/jobs">Jobs</Link>
            </li>
            <li>
              <Link href="/companies">Companies</Link>
            </li>
            <li>About Us</li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li>Help center</li>
            <li>Notices</li>
            <li>Report Issue</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li>Privacy Policy</li>
            <li>Terms & condition</li>
            <li>Report Issue</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
