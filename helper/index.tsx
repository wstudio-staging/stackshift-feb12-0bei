import Link from "next/link";
import { Logo } from "types";

// WebriQ form redirect thank you page on successful submission
export const thankYouPageLink = link => {
  if (!link) {
    return "/thank-you";
  } else {
    if (link?.linkType === "linkInternal") {
      return `/${link?.internalLink}`;
    } else {
      return link?.externalLink;
    }
  }
};

// Logo link
export const logoLink = (logo: Logo) => {
  if (logo?.internalLink && logo?.type === "linkInternal") {
    if (logo?.internalLink?.toLowerCase()?.includes("home")) {
      return "/";
    }
    return `/${logo.internalLink}`;
  } else if (logo?.externalLink && logo?.type === "linkExternal") {
    return logo?.externalLink ?? "/";
  } else {
    return "/";
  }
};

// Conditional links
export const ConditionalBtnOrLink = ({ value, style }) => {
  const defaultStyle =
    "inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-webriq-darkblue hover:bg-webriq-blue text-gray-50 font-bold leading-loose outline-none transition duration-200";

  if (
    (value?.internalLink || value?.linkInternal) &&
    value?.type === "linkInternal"
  ) {
    // internal link
    if (value?.internalLink?.toLowerCase() === "home") {
      return (
        <Link
          aria-label={value?.label}
          className={style ?? defaultStyle}
          target={value?.linkTarget}
          rel={value?.linkTarget === "_blank" ? "noopener noreferrer" : null}
          href={`/`}
        >
          {value?.label}
        </Link>
      );
    } else {
      return (
        <Link
          aria-label={value?.label}
          className={style ?? defaultStyle}
          target={value?.linkTarget}
          rel={value?.linkTarget === "_blank" ? "noopener noreferrer" : null}
          href={`/${value.internalLink}`}
        >
          {value?.label}
        </Link>
      );
    }
  } else if (
    (value?.externalLink || value?.linkExternal) &&
    value?.type === "linkExternal"
  ) {
    // external link (includes mailto and tel)
    return (
      <a
        aria-label={value?.label}
        className={style ?? defaultStyle}
        target={value?.linkTarget}
        href={value?.externalLink}
        rel={value?.linkTarget === "_blank" ? "noopener noreferrer" : null}
      >
        {value?.label}
      </a>
    );
  } else {
    return (
      <a className={style ?? defaultStyle} href="/link-not-found">
        {value?.label}
      </a>
    );
  }
};
