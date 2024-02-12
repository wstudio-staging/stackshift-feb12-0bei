import React from "react";
import Image from "next/image";
import { urlFor } from "lib/sanity";

function VariantB({ team }) {
  const [activeTab, setActiveTab] = React.useState(team?.[0]?.name); // default active tab is the first tab

  const filterMember = team?.filter((member) => member?.name === activeTab);

  return (
    <section>
      {team && (
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center -mx-3">
              <div className="w-full lg:w-1/3 px-3 mb-8 lg:mb-0">
                <ul className="flex flex-wrap flex-row lg:flex-col justify-center lg:justify-start space-x-6 lg:space-x-0">
                  {team &&
                    team?.map((item) => (
                      <li key={item?.name}>
                        <button
                          aria-label={`Team member ${item?.name}`}
                          className={`text-2xl lg:text-4xl mb-4 ${
                            item?.name === activeTab
                              ? "text-gray-900"
                              : "text-gray-500"
                          } hover:text-gray-500 font-bold focus:outline-none`}
                          onClick={() => setActiveTab(item?.name)}
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
              {team && (
                <div className="w-full lg:w-2/3 px-3">
                  {filterMember?.map((member, index) => (
                    <div className="flex p-6 bg-white shadow" key={index}>
                      {member?.mainImage?.image?.asset?._ref && (
                        <div className="w-1/2 h-auto rounded-lg overflow-hidden">
                          <Image
                            src={urlFor(member?.mainImage?.image)}
                            layout="responsive"
                            width="329px"
                            height="494px"
                            objectFit="cover"
                            alt={
                              member?.mainImage?.alt ??
                              `team-member-${member?.name}-profile-image`
                            }
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                            placeholder="blur"
                          />
                        </div>
                      )}
                      <div className="w-1/2 pt-6 pl-6 mt-6 order-last">
                        <p className="text-2xl font-bold font-heading">
                          {member?.name}
                        </p>
                        <p className="mb-6 text-gray-500">{member?.jobTitle}</p>
                        <p className="mb-6 text-gray-500 text-justify">
                          {member?.plainText}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
export default React.memo(VariantB);
