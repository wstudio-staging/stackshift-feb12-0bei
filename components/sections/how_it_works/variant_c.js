import React from "react";

function VariantC({ subtitle, title, steps }) {
  return (
    <section>
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="mb-8 mx-auto max-w-md text-center">
            <span className="text-webriq-darkblue font-bold">{subtitle}</span>
            <h1 className="text-4xl lg:text-5xl font-bold font-heading">
              {title}
            </h1>
          </div>
          <div className="flex flex-wrap -mx-4 justify-center">
            {steps &&
              steps?.map((step, index) => (
                <div
                  className="mt-8 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4"
                  key={index}
                >
                  <div className="py-10 px-6 bg-white shadow rounded text-center">
                    <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-webriq-lightblue rounded text-2xl text-webriq-darkblue font-bold">
                      {index + 1}
                    </span>
                    <p className="mb-4 text-2xl font-bold font-heading">
                      {step?.title}
                    </p>
                    <p className="text-gray-500 leading-loose">
                      {step?.plainText}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default React.memo(VariantC);
