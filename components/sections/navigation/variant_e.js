import { memo, useState, Fragment, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { urlFor, PortableText } from "lib/sanity";
import { EcwidContextProvider } from "context/EcwidContext";
import { logoLink } from "helper";

function VariantE({ banner, logo, links }) {
  const router = useRouter();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [productQuery, setProductQuery] = useState("");
  const prevQuery = useRef(); // the useRef React hook allows to persist data between renders

  // block styling as props to `serializers` of the PortableText component
  const blockStyle = {
    block: {
      normal: ({ children }) => {
        return (
          <p className="text-xs text-white font-bold font-heading">
            {children}
          </p>
        );
      },
    },
    code: ({ value }) => {
      <pre data-language={value.language}>
        <code>{value.code}</code>
      </pre>;
    },
    marks: {
      strong: ({ children }) => <strong>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
      code: ({ children }) => <code>{children}</code>,
      link: ({ children, value }) => (
        <Link
          aria-label={children ?? "external link"}
          className="hover:text-webriq-lightblue text-webriq-blue"
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <a>{children}</a>
        </Link>
      ),
    },
  };

  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu((prevState) => !prevState);
  };

  useEffect(() => {
    //assign the ref's current value to the productQuery hook
    prevQuery.current = productQuery;
  }, [productQuery]); //run this code when the value of productQuery changes

  // Add query param to /search page based on search input
  const handleSearchRouting = (e) => {
    const q = document.getElementById("query");
    e.preventDefault();

    setProductQuery(q.value);
    router.push(`/search?q=${productQuery}`, undefined, { shallow: true });
  };

  return (
    <EcwidContextProvider>
      <section className="relative">
        {banner && (
          <div className="py-2 bg-webriq-darkblue">
            <div className="flex items-center justify-center">
              <svg
                className="mr-2"
                width={18}
                height={11}
                viewBox="0 0 18 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="3.07129"
                  width={4}
                  height={10}
                  rx={2}
                  transform="rotate(-45 0 3.07129)"
                  fill="white"
                />
                <rect
                  x={8}
                  y="2.82861"
                  width={4}
                  height={10}
                  rx={2}
                  transform="rotate(-45 8 2.82861)"
                  fill="white"
                />
              </svg>
              <PortableText value={banner} components={blockStyle} />
            </div>
          </div>
        )}
        <nav className="relative flex justify-between">
          <div className="px-12 py-8 flex w-full items-center">
            {logo?.image && (
              <Link href={logoLink()} prefetch={false}>
                <a
                  aria-label={`Go to ${
                    logoLink() === "/" ? "home page" : logoLink()
                  }`}
                  className="text-3xl font-bold leading-none"
                >
                  <img
                    className="h-12"
                    src={urlFor(logo?.image)}
                    alt={logo?.alt ?? "navigation-logo"}
                  />
                </a>
              </Link>
            )}
            {/* larger screens navigation menu links */}
            <ul className="main-nav hidden lg:flex absolute top-1/2 transform lg:-translate-y-1/2 lg:-translate-x-1/2">
              {links &&
                links.map((link, index) => (
                  <Fragment key={index}>
                    <li>
                      {link.type === "linkInternal" ? (
                        <Link
                          href={`${
                            link.internalLink === "Home" ||
                            link.internalLink === "home"
                              ? "/"
                              : `/${
                                  link.internalLink === undefined
                                    ? "page-not-found"
                                    : link.internalLink
                                }`
                          }`}
                        >
                          <a
                            aria-label={`Navigation ${
                              link?.label ?? "Menu"
                            } links which directs to ${
                              link?.internalLink === undefined
                                ? "page-not-found"
                                : link?.internalLink
                            }`}
                            className="xl:mr-12 lg:mr-8 font-bold font-heading hover:text-gray-600"
                            target={link?.linkTarget}
                            rel={
                              link?.linkTarget === "_blank"
                                ? "noopener noreferrer"
                                : null
                            }
                          >
                            {link?.label}
                          </a>
                        </Link>
                      ) : (
                        <a
                          aria-label={`Navigation ${
                            link?.label ?? "Menu"
                          } links which directs to ${
                            link?.externalLink === undefined
                              ? "link-not-found"
                              : link?.externalLink
                          }`}
                          className="mr-12 font-bold font-heading hover:text-gray-600"
                          target={link?.linkTarget}
                          href={`${
                            link.externalLink === undefined
                              ? "link-not-found"
                              : link.externalLink
                          }`}
                          rel={
                            link?.linkTarget === "_blank"
                              ? "noopener noreferrer"
                              : null
                          }
                        >
                          {link?.label}
                        </a>
                      )}
                    </li>
                  </Fragment>
                ))}
            </ul>
          </div>
          {/* larger screens search, cart and account icons/buttons */}
          <div className="hidden xl:flex items-center justify-end mr-12">
            {/* Search button */}
            <button
              aria-label="search button"
              type="button"
              onClick={() => setShowSearchBar(!showSearchBar)}
            >
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
              </svg>
            </button>
            {/* Search bar */}
            {showSearchBar && (
              <form
                id="form"
                className="flex mr-auto mb-10 lg:mb-0 items-center pl-8 bg-white"
                method="get"
                role="search"
                onSubmit={handleSearchRouting}
              >
                <input
                  id="query"
                  name="query"
                  aria-label="Search product"
                  className="inline-block mt-1 w-40 h-full p-2 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-webriq-blue focus:ring-1 focus:ring-webriq-blue"
                  placeholder="Search..."
                  onChange={(e) => setProductQuery(e.target.value)}
                  type="search"
                />
                <button
                  aria-label="Submit product search"
                  className={`inline-flex items-center justify-center mt-1 w-10 h-[35px] bg-webriq-darkblue ${
                    productQuery === ""
                      ? "cursor-not-allowed opacity-50"
                      : "hover:bg-webriq-blue transition duration-200"
                  }`}
                  disabled={productQuery === ""}
                  type="submit"
                >
                  <svg
                    width={7}
                    height={12}
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.125 6.00252L0 1.87752L1.17801 0.699219L6.48102 6.00252L1.17801 11.3058L0 10.1275L4.125 6.00252Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </form>
            )}
            {/* Cart */}
            <div className="mx-10 cart-icon">
              <div data-icon="BAG" className="ec-cart-widget" />
              <a
                className="cart-link"
                href="/cart?store-page=cart"
                aria-label="cart button"
              />
            </div>
            {/* Account */}
            <a href="/cart?store-page=account">
              <svg
                width={32}
                height={31}
                viewBox="0 0 32 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0006 16.3154C19.1303 16.3154 21.6673 13.799 21.6673 10.6948C21.6673 7.59064 19.1303 5.07422 16.0006 5.07422C12.871 5.07422 10.334 7.59064 10.334 10.6948C10.334 13.799 12.871 16.3154 16.0006 16.3154Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.4225 23.8963C23.6678 22.3507 22.4756 21.0445 20.9845 20.1298C19.4934 19.2151 17.7647 18.7295 15.9998 18.7295C14.2349 18.7295 12.5063 19.2151 11.0152 20.1298C9.52406 21.0445 8.33179 22.3507 7.57715 23.8963"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          {/* nav menu sidebar button on mobile view */}
          <button
            className="navbar-burger self-center mr-12 xl:hidden"
            onClick={showMenu}
          >
            <svg
              width={20}
              height={12}
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </nav>
        <div
          className={`${
            menu ? null : "hidden"
          } mobile-nav fixed top-0 right-0 bottom-0 w-5/6 max-w-sm`}
          style={{ zIndex: 60 }}
        >
          <div
            className="fixed inset-0 bg-gray-800 opacity-25"
            onClick={showMenu}
          />
          <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              {logo?.image && (
                <Link href={logoLink()} prefetch={false} legacyBehavior>
                  <a
                    aria-label={`Go to ${
                      logoLink() === "/" ? "home page" : logoLink()
                    }`}
                    className="text-3xl font-bold leading-none"
                  >
                    <img
                      className="h-12"
                      src={urlFor(logo?.image)}
                      alt={logo?.alt ?? "navigation-logo"}
                    />
                  </a>
                </Link>
              )}
              <button
                aria-label="Navbar Close button"
                className="ml-auto"
                onClick={showMenu}
              >
                <svg
                  className="h-2 w-2 text-gray-500 cursor-pointer"
                  width={10}
                  height={10}
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00002 1L1 9.00002M1.00003 1L9.00005 9.00002"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            {/* show search bar on mobile view */}
            <form
              id="form"
              className="flex mt-3 bg-white"
              method="get"
              role="search"
              onSubmit={handleSearchRouting}
            >
              <input
                id="query"
                name="query"
                aria-label="Search product"
                className="inline-block w-full sm:w-60 h-full p-2 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-webriq-blue focus:ring-1 focus:ring-webriq-blue"
                placeholder="Search..."
                onChange={(e) => setProductQuery(e.target.value)}
                type="search"
              />
              <button
                aria-label="Submit product search"
                className={`inline-flex items-center justify-center w-10 h-full bg-webriq-darkblue ${
                  productQuery === ""
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-webriq-blue transition duration-200"
                }`}
                disabled={productQuery === ""}
                type="submit"
              >
                <svg
                  width={7}
                  height={12}
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.125 6.00252L0 1.87752L1.17801 0.699219L6.48102 6.00252L1.17801 11.3058L0 10.1275L4.125 6.00252Z"
                    fill="white"
                  />
                </svg>
              </button>
            </form>
            {/* mobile view navigation sidebar */}
            <ul className="mt-10 mb-5">
              {links &&
                links.map((link, index) => (
                  <Fragment key={index}>
                    <li className="mb-8">
                      {link.type === "linkInternal" ? (
                        <Link
                          href={`${
                            link.internalLink === "Home" ||
                            link.internalLink === "home"
                              ? "/"
                              : `/${
                                  link.internalLink === undefined
                                    ? "page-not-found"
                                    : link.internalLink
                                }`
                          }`}
                        >
                          <a
                            aria-label={`Navigation ${
                              link?.label ?? "Menu"
                            } links which directs to ${
                              link?.internalLink === undefined
                                ? "page-not-found"
                                : link?.internalLink
                            }`}
                            className="font-bold font-heading hover:text-gray-600"
                            target={link?.linkTarget}
                            rel={
                              link?.linkTarget === "_blank"
                                ? "noopener noreferrer"
                                : null
                            }
                          >
                            {link?.label}
                          </a>
                        </Link>
                      ) : (
                        <a
                          aria-label={`Navigation ${
                            link?.label ?? "Menu"
                          } links which directs to ${
                            link?.externalLink === undefined
                              ? "link-not-found"
                              : link?.externalLink
                          }`}
                          className="font-bold font-heading hover:text-gray-600"
                          target={link?.linkTarget}
                          href={`${
                            link.externalLink === undefined
                              ? "link-not-found"
                              : link.externalLink
                          }`}
                          rel={
                            link?.linkTarget === "_blank"
                              ? "noopener noreferrer"
                              : null
                          }
                        >
                          {link?.label}
                        </a>
                      )}
                    </li>
                  </Fragment>
                ))}
            </ul>
            <hr />
            {/* mobile view cart and account buttons */}
            <div className="flex mx-auto items-center mt-3">
              {/* Cart */}
              <a
                className="flex cart-icon cart-link mr-10"
                aria-label="cart button"
                href="/cart?store-page=cart"
              >
                <div data-icon="BAG" className="ec-cart-widget" />
                <span className="text-sm my-auto">Cart</span>
              </a>
              {/* Account */}
              <a
                className="flex"
                aria-label="account"
                href="/cart?store-page=account"
              >
                <svg
                  width={32}
                  height={31}
                  viewBox="0 0 32 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0006 16.3154C19.1303 16.3154 21.6673 13.799 21.6673 10.6948C21.6673 7.59064 19.1303 5.07422 16.0006 5.07422C12.871 5.07422 10.334 7.59064 10.334 10.6948C10.334 13.799 12.871 16.3154 16.0006 16.3154Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.4225 23.8963C23.6678 22.3507 22.4756 21.0445 20.9845 20.1298C19.4934 19.2151 17.7647 18.7295 15.9998 18.7295C14.2349 18.7295 12.5063 19.2151 11.0152 20.1298C9.52406 21.0445 8.33179 22.3507 7.57715 23.8963"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm my-auto">Account</span>
              </a>
            </div>
          </nav>
        </div>
      </section>
    </EcwidContextProvider>
  );
}
export default memo(VariantE);
