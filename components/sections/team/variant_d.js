import React from "react";
import Image from "next/image";
import { urlFor } from "lib/sanity";

function VariantD({ caption, title, team }) {
  return (
    <section>
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="mb-8 lg:mb-16 text-center mx-auto max-w-xl">
            {caption && (
              <span className="text-webriq-darkblue font-bold">{caption}</span>
            )}
            {title && (
              <h1 className="text-4xl lg:text-5xl font-bold font-heading">
                {title}
              </h1>
            )}
          </div>
          <div className="flex flex-wrap -mx-4">
            {team &&
              team.map((member, index) => (
                <div className="mb-6 w-full lg:w-1/2 px-4" key={index}>
                  <div className="sm:flex lg:block xl:flex sm:flex-wrap items-center bg-white rounded shadow overflow-hidden">
                    {member.mainImage?.image && (
                      <div >
                        <Image
                          className="w-full sm:w-[179px] lg:w-full xl:w-[179px] h-[320px] object-cover"
                          sizes="100vw"
                          src={urlFor(member?.mainImage?.image)}
                          width={179}
                          height={320}
                          alt={
                            member?.mainImage?.alt ??
                            `team-member-${member?.name}-profile-image`
                          }
                        />
                      </div>
                    )}
                    <div className="sm:w-2/3 lg:w-full xl:w-2/3 lg:pl-6 p-4">
                      <p className="mb-2 text-2xl font-bold font-heading">
                        {member?.name}
                      </p>
                      <p className="mb-4 text-gray-500 leading-loose">
                        {member?.plainText}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default React.memo(VariantD);
