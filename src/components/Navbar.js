import React from "react";
import { useMediaQuery } from "../ReuseComponents/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { pageLink, socialIconInfo } from "../Info/Info";
import { SocialToolTip } from "../ReuseComponents/ToolTips/ToolTip";
import { DotLink, NavLink } from "../ReuseComponents/Links/Links";

export const Navbar = ({ selectedPage, setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

  return (
    // Navbar info
    <nav
      className={`fixed top-0 bg-bluryBlue w-full z-50 py-2 border-b border-solid border-borderColor`}
    >
      <div className="flex items-center justify-between w-[90%] mx-auto xs:w-5/6">
        {/* Logo */}
        <h1 className="text-blue text-2xl font-signature font-semibold flex sm:text-3xl">
          Drisy
        </h1>

        {isAboveMediumScreens ? (
          <>
            {/* Destop nav links */}
            <div className="text-sm font-semibold w-3/5 flex justify-evenly items-center lg:text-base">
              {pageLink.map(({ id, pageName, pageIcon }) => (
                <NavLink
                  key={id}
                  page={pageName}
                  icon={pageIcon}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </div>

            {/* Destop social links */}
            <ul className="fixed top-[35%] left-0 flex flex-col">
              {socialIconInfo.map(
                ({ id, name, icon, href, style, download }) => {
                  return (
                    <li
                      key={id}
                      className={
                        "bg-white w-36 h-8 px-3 flex justify-between items-center translate-x-[-106px] hover:translate-x-[-6px] hover:rounded-md duration-500" +
                        " " +
                        style
                      }
                    >
                      <a
                        href={href}
                        className="text-blue text-sm lg:text-base font-bold w-full flex justify-between items-center"
                        download={download}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <>
                          {name} {icon}
                        </>
                      </a>
                    </li>
                  );
                }
              )}
            </ul>

            {/* NavigationDots links */}
            <div className="flex flex-col gap-6 fixed top-[35%] right-7">
              {pageLink.map(({ id, pageName }) => (
                <DotLink
                  key={id}
                  page={pageName}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Mobile social links */}
            <div className="flex justify-between basis-[70%] ss:basis-[65%]">
              <ul className="flex justify-evenly items-center basis-1/2 xs:basis-[45%] ss:basis-[35%]">
                {socialIconInfo
                  .filter(({ id }) => id !== 2)
                  .map(({ id, name, icon, href, download }) => {
                    return (
                      <SocialToolTip
                        key={id}
                        title={
                          <>
                            <p>{name}</p>
                          </>
                        }
                      >
                        <li className="text-blue transition duration-500 flex justify-center items-center">
                          <a
                            className="text-sm"
                            href={href}
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {icon}
                          </a>
                        </li>
                      </SocialToolTip>
                    );
                  })}
              </ul>

              {/* Mobile contact link */}
              <AnchorLink
                className="bg-white text-[0.7rem] text-blue font-bold hover:bg-blue hover:text-white transition duration-500 px-4 py-1 rounded-full xs:text-sm ss:text-[0.9rem] xs:px-5 ss:px-8 ss:py-2"
                onClick={() => setSelectedPage("contact")}
                href="#contact"
              >
                Let Talk
              </AnchorLink>
            </div>

            {/* Mobile nav links */}
            <div className="w-full bg-bluryBlue fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center">
              <div className="text-xs font-bold py-2 flex items-center justify-evenly w-11/12 mx-auto ss:text-sm">
                {pageLink.map(({ id, pageName, pageIcon }) => (
                  <NavLink
                    key={id}
                    page={pageName}
                    icon={pageIcon}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
