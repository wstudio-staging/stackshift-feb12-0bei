import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "lib/sanity";
import { logoLink } from "helper";
import { NavigationProps } from ".";
import { ConditionalLink } from "components/ui/ConditionalLink";

function VariantC({
  /*template , */ links,
  primaryButton,
  secondaryButton,
  logo,
}: NavigationProps) {
  const [menu, setMenu] = React.useState(false);
  const showMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <section>
      <nav className="relative py-6 bg-white">
        <div className="container flex items-center px-4 mx-auto">
          <ul className="hidden lg:flex lg:w-auto lg:items-center lg:space-x-6">
            {links &&
              links?.map((link, index) => (
                <React.Fragment key={index}>
                  <li>
                    <ConditionalLink
                      variant="link"
                      ariaLabel={link?.label}
                      link={link}
                      className="text-sm text-gray-500 hover:text-gray-900"
                    >
                      {link?.label}
                    </ConditionalLink>
                  </li>
                  {links.length !== index + 1 ? (
                    <li className="text-gray-500">
                      <svg
                        className="w-4 h-4 current-fill"
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
          <div className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform">
            {logo?.image && (
              <Link
                aria-label={`Go to ${
                  logoLink(logo) === "/" ? "home page" : logoLink(logo)
                }`}
                className="text-3xl font-bold leading-none"
                href={logoLink(logo)}
              >
                <Image
                  src={urlFor(logo?.image)}
                  alt={logo?.alt ?? "navigation-logo"}
                  width={60}
                  height={60}
                  quality={100}
                />
              </Link>
            )}
          </div>
          <div className="hidden text-right lg:ml-auto lg:block lg:w-1/3">
            {primaryButton?.label && (
              <ConditionalLink
                ariaLabel={primaryButton?.label}
                link={primaryButton}
                className="hidden px-6 py-2 text-sm font-bold text-gray-900 transition duration-200 lg:inline-block lg:ml-auto lg:mr-3 bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
              >
                {primaryButton?.label}
              </ConditionalLink>
            )}
            {secondaryButton?.label && (
              <ConditionalLink
                ariaLabel={secondaryButton?.label}
                link={secondaryButton}
                className="hidden px-6 py-2 text-sm font-bold text-white transition duration-200 lg:inline-block bg-brand-primary hover:bg-brand-primary-foreground rounded-l-xl rounded-t-xl"
              >
                {secondaryButton?.label}
              </ConditionalLink>
            )}
          </div>
          <div className="ml-auto lg:hidden">
            <button
              aria-label="Navigation menu"
              className="flex items-center p-3 navbar-burger text-brand-primary"
              onClick={showMenu}
            >
              <svg
                className="block w-4 h-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div className={`${menu ? null : "hidden"} navbar-menu relative z-50`}>
        <div
          className="fixed inset-0 bg-gray-800 opacity-25 navbar-backdrop"
          onClick={showMenu}
        ></div>
        <nav className="fixed top-0 bottom-0 left-0 flex flex-col w-5/6 max-w-sm px-6 py-6 overflow-y-auto bg-white border-r">
          <div className="flex items-center mb-8">
            <button
              aria-label="Navigation menu"
              className="navbar-close"
              onClick={showMenu}
            >
              <svg
                className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-500"
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
                    <ConditionalLink
                      variant="link"
                      ariaLabel={link?.label}
                      link={link}
                      className="block p-4 text-sm font-semibold text-gray-700 rounded hover:bg-brand-secondary-foreground hover:text-brand-primary"
                    >
                      {link?.label}
                    </ConditionalLink>
                  </li>
                ))}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              {primaryButton?.label && (
                <ConditionalLink
                  ariaLabel={primaryButton?.label}
                  link={primaryButton}
                  className="block px-4 py-3 mb-3 text-xs font-semibold leading-loose text-center text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
                >
                  {primaryButton?.label}
                </ConditionalLink>
              )}
              {secondaryButton?.label && (
                <ConditionalLink
                  ariaLabel={secondaryButton?.label}
                  link={secondaryButton}
                  className="block px-4 py-3 mb-2 text-xs font-semibold leading-loose text-center text-white bg-brand-primary hover:bg-brand-primary-foreground rounded-l-xl rounded-t-xl"
                >
                  {secondaryButton?.label}
                </ConditionalLink>
              )}
            </div>
            <p className="my-4 text-xs text-center text-gray-700">
              <span>{`© ${new Date().getFullYear()} All rights reserved.`}</span>
            </p>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default React.memo(VariantC);
