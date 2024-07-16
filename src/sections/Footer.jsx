import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

export default function Footer() {
  return (
    <footer className="max-container">
      <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your Perfect Size in store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((socialMedia) => (
              <div
                className="flex items-center justify-center w-12 h-12 bg-white rounded-full"
                key={socialMedia.alt}
              >
                <img
                  src={socialMedia.src}
                  alt={socialMedia.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-between flex-1 gap-20 lg:gap-10">
          {footerLinks.map((link) => (
            <div key={link}>
              <h4 className="mb-6 text-2xl font-medium leading-normal text-white font-montserrat">
                {link.title}
              </h4>
              <ul>
                {link.links.map((l) => (
                  <li
                    className="mt-3 text-base leading-normal cursor-pointer text-white-400 font-montserrat hover:text-slate-gray"
                    key={l.name}
                  >
                    <a href={l.link}>{l.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-24 text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex items-center justify-start flex-1 gap-2 cursor-pointer font-montserrat">
          <img
            src={copyrightSign}
            alt="copyrighht"
            width={20}
            height={20}
            className="m-0 rounded-full"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="cursor-pointer font-montserrat">Terms & Conditions</p>
      </div>
    </footer>
  );
}
