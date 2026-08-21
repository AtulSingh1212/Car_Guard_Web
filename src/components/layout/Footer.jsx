import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import {
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { siInstagram } from "simple-icons";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
// import { Twitter, Linkedin, Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

const accountLinks = ["My Contracts", "My Claims", "Notifications", "My Profile", "Login"];
const supportLinks = ["Roadside Assistance", "Claim Process", "Policy Documents", "Cancellation Policy", "Privacy Policy"];
const socials = [
  {
    name: "facebook",
    icon: <FontAwesomeIcon icon={faFacebook} />,
  },
  {
    name: "instagram",
    icon: <FontAwesomeIcon icon={faInstagram} />,
  },
  {
    name: "twitter",
    icon: <FontAwesomeIcon icon={faTwitter} />,
  },
  {
    name: "linkedin",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
  
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b1220] px-6 md:px-10 pt-14 pb-6 border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto border-b border-white/[0.08] pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10 pb-10">
          {/* Brand */}
          <div >
            <div className="flex items-center gap-2.5 mb-4 ">
              {/* Swap this block for your uploaded logo image, e.g.
                  <img src="/logo.png" alt="CarGuard" className="w-8 h-8" /> */}
              <img src="assets/images/logo.png" alt="CarGuard" className="w-8 h-8" />
              <span className="text-white text-xl font-bold">Car Engyisi</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-5">
              CarGuard Extended Warranty provides comprehensive protection for
              your vehicle and peace of mind on every journey.
            </p>
            <div className="flex items-center gap-3">
              
              {socials.map((social) => (
                <a key={social.name} href="#" className="w-9 h-9 rounded-full bg-white/[0.06] flex items-center justify-center text-slate-300 hover:bg-white/[0.12] hover:text-white transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* My Account */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">My Account</h4>
            <ul className="flex flex-col gap-3">
              {accountLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">Customer Support</h4>
            <ul className="flex flex-col gap-3">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">Contact Us</h4>
            <ul className="flex flex-col gap-3.5">
              <li className="flex items-center gap-2.5 text-slate-400 text-sm">
                <Phone size={15} className="text-violet-400 shrink-0" />
                (800) 123-4567
              </li>
              <li className="flex items-center gap-2.5 text-slate-400 text-sm">
                <Mail size={15} className="text-violet-400 shrink-0" />
                support@carguard.com
              </li>
              <li className="flex items-start gap-2.5 text-slate-400 text-sm">
                <MapPin size={15} className="text-violet-400 shrink-0 mt-0.5" />
                <span>123 Warranty Way,<br />Austin, TX 78701, USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © 2025 CarGuard Extended Warranty. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 text-xs hover:text-slate-300 transition-colors">
              Terms &amp; Conditions
            </a>
            <a href="#" className="text-slate-500 text-xs hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}