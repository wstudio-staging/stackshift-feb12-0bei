import React from "react";
import Image from "next/image";
import { urlFor } from "lib/sanity";
function VariantG({ caption, title, description, images, tags }) {
  return (
    <section>
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="mb-12 lg:mb-0 w-full lg:w-1/2 px-4">
              <div className="max-w-md">
                {caption && (
                  <span className="text-webriq-darkblue font-bold">
                    {caption}
                  </span>
                )}
                {title && (
                  <h1 className="mb-3 text-4xl lg:text-5xl font-bold font-heading">
                    {title}
                  </h1>
                )}
                {description && (
                  <p className="mb-6 max-w-sm text-gray-500 leading-loose">
                    {description}
                  </p>
                )}
                <ul className="text-gray-500 font-bold">
                  {tags &&
                    tags.map((item) => (
                      <li className="mb-2 flex items-center" key={item}>
                        <svg
                          className="mr-2 w-5 h-5 text-webriq-blue"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            {images && (
              <div className="w-full lg:w-1/2">
                <div className="mb-4 items-end lg:flex lg:flex-wrap xl:flex xl:flex-wrap 2xl:flex 2xl:flex-wrap">
                  <div className="mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 lg:w-2/3 xl:w-2/3 2xl:w-2/3 h-full px-3">
                    {images?.[0]?.image && (
                      <div className="rounded overflow-hidden">
                        <Image
                          className="w-full h-[269px] object-cover"
                          src={urlFor(images[0]?.image)}
                          sizes="100vw" 
                          width={356}
                          height={192}
                          alt={images[0]?.alt ?? "features-image-1"}
                        />
                      </div>
                    )}
                  </div>
                  <div className="lg:w-1/3 xl:w-1/3 2xl:w-1/3 h-full px-3">
                    {images?.[1]?.image && (
                      <div className="rounded overflow-hidden">
                        <Image
                          className="w-full h-auto object-cover"
                          src={urlFor(images[1]?.image)}
                          sizes="100vw" 
                          width={166}
                          height={128}
                          alt={images[1]?.alt ?? "features-image-2"}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-4 items-start lg:flex lg:flex-wrap xl:flex xl:flex-wrap 2xl:flex 2xl:flex-wrap">
                  <div className="mb-4 lg:mb-0 xl:mb-0 2xl:mb-0 lg:w-1/3 xl:w-1/3 2xl:w-1/3 h-full px-3">
                    {images?.[2]?.image && (
                      <div className="rounded overflow-hidden">
                        <Image
                          className="w-full h-[269px] lg:h-[126px] object-cover"
                          src={urlFor(images[2]?.image)}
                          width={166}
                          height={128}
                          sizes="100vw" 
                          alt={images[2]?.alt ?? "features-image-3"}
                        />
                      </div>
                    )}
                  </div>
                  <div className="lg:w-2/3 xl:w-2/3 2xl:w-2/3 h-full px-3">
                    {images?.[3]?.image && (
                      <div className="rounded overflow-hidden">
                        <Image
                          className="w-full h-auto object-cover"
                          src={urlFor(images[3]?.image)}
                          width={356}
                          height={192}
                          sizes="100vw" 
                          alt={images[3]?.alt ?? "features-image-4"}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export default React.memo(VariantG);
