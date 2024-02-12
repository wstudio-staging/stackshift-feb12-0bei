import React from "react";
import Image from "next/image";
import { urlFor } from "lib/sanity";

function VariantC({ subtitle, title, description, features, images }) {
  return (
    <section>
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="mb-12 lg:mb-0 w-full lg:w-1/2 px-4">
              <div className="max-w-xl">
                <p className="text-left mb-5 text-sm md:text-lg lg:text-xl text-webriq-darkblue font-bold">
                  {subtitle}
                </p>
                <h1 className="text-left mb-4 text-xl md:text-4xl lg:text-5xl font-bold font-heading">
                  {title}
                </h1>
                <p className="text-left mb-6 text-sm md:text-lg lg:text-xl text-gray-500 leading-loose">
                  {description}
                </p>
                <ul className="mb-8 text-gray-500 font-bold">
                  {features &&
                    features.map((feature, index) => (
                      <li className="mb-3 flex items-center" key={index}>
                        <svg
                          className="w-5 h-5 mr-2 text-webriq-blue"
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
                        <span className="text-sm md:text-lg lg:text-xl">
                          {feature}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="transform -rotate-12 flex items-center w-full lg:w-1/2">
              <div className="w-full">
                {images?.[0]?.image?.asset?._ref && (
                  <Image
                    src={urlFor(images[0]?.image)}
                    layout="responsive"
                    width="500px"
                    height="850px"
                    objectFit="cover"
                    alt={images[0]?.alt ?? "appPromo-variantC-image1"}
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    placeholder="blur"
                  />
                )}
              </div>
              <div className="w-full">
                {images?.[1]?.image?.asset?._ref && (
                  <Image
                    src={urlFor(images[1]?.image)}
                    layout="responsive"
                    width="500px"
                    height="850px"
                    objectFit="cover"
                    alt={images[1]?.alt ?? "appPromo-variantC-image2"}
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    placeholder="blur"
                  />
                )}
                {images?.[2]?.image?.asset?._ref && (
                  <Image
                    src={urlFor(images[2]?.image)}
                    layout="responsive"
                    width="500px"
                    height="850px"
                    objectFit="cover"
                    alt={images[2]?.alt ?? "appPromo-variantC-image3"}
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    placeholder="blur"
                  />
                )}
              </div>
              <div className="w-full">
                {images?.[3]?.image?.asset?._ref && (
                  <Image
                    src={urlFor(images[3]?.image)}
                    layout="responsive"
                    width="500px"
                    height="850px"
                    objectFit="cover"
                    alt={images[3]?.alt ?? "appPromo-variantC-image4"}
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    placeholder="blur"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default React.memo(VariantC);
