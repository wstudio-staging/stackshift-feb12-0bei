import React from "react";
import Link from "next/link";
import { urlFor } from "lib/sanity";
import { logoLink, ConditionalBtnOrLink } from "helper";
import { NavigationProps } from ".";

function VariantB({
  /*template , */ links,
  primaryButton,
  secondaryButton,
  logo,
}: NavigationProps) {
  const [menu, setMenu] = React.useState(false);
  const showMenu = () => {
    setMenu(prevState => !prevState);
  };

  return (
    <section>
      <nav className="relative bg-white py-6">
        <div className="container mx-auto flex items-center justify-between px-4">
          {logo?.image && (
            <Link
              aria-label={`Go to ${
                logoLink(logo) === "/" ? "home page" : logoLink(logo)
              }`}
              className="text-3xl font-bold leading-none"
              href={logoLink(logo)}
            >
              <img
                className="h-12"
                src={urlFor(logo?.image)}
                alt={logo?.alt ?? "navigation-logo"}
              />
            </Link>
          )}
          <div className="lg:hidden">
            <button
              aria-label="Navbar Menu button"
              className="navbar-burger flex items-center p-3 text-webriq-darkblue"
              onClick={showMenu}
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform lg:mx-auto lg:flex lg:w-auto lg:items-center lg:space-x-6">
            {links &&
              links?.map((link, index) => (
                <React.Fragment key={index}>
                  <li>
                    <ConditionalBtnOrLink
                      value={link}
                      style="text-sm text-gray-500 hover:text-gray-900"
                    />
                  </li>
                  {links.length !== index + 1 ? (
                    <li className="text-gray-500">
                      <svg
                        className="current-fill h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        ></path>
                      </svg>
                    </li>
                  ) : null}
                </React.Fragment>
              ))}
          </ul>
          {primaryButton?.label && (
            <ConditionalBtnOrLink
              value={primaryButton}
              style="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-l-xl rounded-t-xl transition duration-200"
            />
          )}
          {secondaryButton?.label && (
            <ConditionalBtnOrLink
              value={secondaryButton}
              style="hidden lg:inline-block py-2 px-6 bg-webriq-darkblue hover:bg-webriq-blue text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200"
            />
          )}
        </div>
      </nav>
      <div className={`${menu ? null : "hidden"} navbar-menu relative z-50`}>
        <div
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
          onClick={showMenu}
        ></div>
        <nav className="fixed bottom-0 left-0 top-0 flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-white px-6 py-6">
          <div className="mb-8 flex items-center">
            <button
              aria-label="Navbar Menu button"
              className="navbar-close"
              onClick={showMenu}
            >
              <svg
                className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              {links &&
                links?.map((link, index) => (
                  <li className="mb-1" key={index}>
                    <ConditionalBtnOrLink
                      value={link}
                      style="block p-4 text-sm font-semibold text-gray-700 hover:bg-webriq-lightblue hover:text-webriq-darkblue rounded"
                    />
                  </li>
                ))}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              {primaryButton?.label && (
                <ConditionalBtnOrLink
                  value={primaryButton}
                  style="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
                />
              )}
              {secondaryButton?.label && (
                <ConditionalBtnOrLink
                  value={secondaryButton}
                  style="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-webriq-darkblue hover:bg-webriq-blue rounded-l-xl rounded-t-xl"
                />
              )}
            </div>
            <p className="my-4 text-center text-xs text-gray-900">
              <span>{`© ${new Date().getFullYear()} All rights reserved.`}</span>
            </p>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default React.memo(VariantB);