import { memo, useState, useEffect } from "react";
import { urlFor } from "lib/sanity";
import Link from "next/link";
import { useRouter } from "next/router";

function VariantB({ products }) {
  const [productQuery, setProductQuery] = useState("");
  const [activeTab, setActiveTab] = useState(products?.[0]?.name); // initial value will be the first option from the list of collections

  const router = useRouter();

  useEffect(() => {
    // temp: on first render always return to the search page
    router.push("/search", undefined, { shallow: true });
  }, []);

  // reads the param from the router object to get the query
  useEffect(() => {
    if (router.query.q && typeof router.query.q == "string") {
      setProductQuery(router.query.q);
    }
  }, [router.query.q]);

  // filtered products array based on select input
  const filterProductsByCollection =
    products && products?.filter(product => product?.name === activeTab);

  // filtered products array based on search query input
  const filterProductsByQuery = products?.reduce((newArr, currArr) => {
    if (newArr?.indexOf(currArr) === -1) {
      newArr?.push(...currArr?.products);
    }

    return newArr?.filter(product =>
      product?.name?.toLowerCase()?.includes(productQuery?.toLowerCase())
    );
  }, []);

  // set products array to display based on conditions met
  let displayProducts = products;

  // set array to display
  if (productQuery) {
    displayProducts = filterProductsByQuery;
  } else {
    displayProducts = filterProductsByCollection?.[0];
  }

  return (
    <section className="pt-20">
      <div className="container mx-auto bg-white px-4">
        <div className="-mx-3 mb-24 flex flex-wrap">
          {!productQuery && (
            <div className="block w-full px-3 sm:w-1/3 lg:w-1/4">
              <div className="font-custom bg-gray-50 px-6 py-5 lg:mb-6 lg:px-12 lg:py-10">
                <h1 className="font-heading mb-8 text-2xl font-bold">
                  Category
                </h1>
                {products && (
                  <ul>
                    {products?.map((collection, index) => (
                      <li
                        className={`mb-4 ${
                          activeTab === collection?.name
                            ? " font-bold text-webriq-darkblue"
                            : "hover:text-webriq-blue"
                        }`}
                        key={index}
                      >
                        <button
                          className="lg:text-lg"
                          type="button"
                          onClick={() => setActiveTab(collection?.name)}
                        >
                          {collection?.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
          {displayProducts && (
            <div className={`w-full ${!productQuery && "lg:w-3/4"} px-3`}>
              {productQuery && (
                <h1 className="font-heading text-4xl font-bold">
                  {`Showing ${displayProducts?.length} results for "${productQuery}"`}
                </h1>
              )}
              {displayProducts?.length !== 0 ? (
                <div className="-mx-3 flex flex-wrap">
                  {(displayProducts?.products ?? displayProducts)?.map(
                    (product, index) => (
                      <div
                        className={`w-full sm:w-1/2 ${
                          !productQuery ? "md:w-1/3" : "md:w-1/4"
                        } mb-8 px-3`}
                        key={index}
                      >
                        <div className="p-6">
                          <Link
                            className="mb-2 mt-6 block px-6 text-center"
                            href={`/products/${product?.slug?.current}`}
                          >
                            {product?.productInfo?.images ? (
                              <img
                                className="mx-auto mb-5 h-56 w-full object-contain transition-all duration-700 hover:scale-110"
                                src={urlFor(
                                  product?.productInfo?.images?.[0]?.image
                                )}
                                alt={
                                  product?.productInfo?.images?.[0]?.alt ??
                                  `product-image-${index + 1}`
                                }
                              />
                            ) : (
                              <img
                                className="mx-auto mb-5 h-56 w-full object-contain transition-all duration-700 hover:scale-110"
                                src="https://cdn.sanity.io/images/9itgab5x/production/9523d40461371b7b4948456c57bb663bd8998c4a-500x362.png"
                                alt={
                                  product?.productInfo?.images?.[0]?.alt ??
                                  `product-image-${index + 1}`
                                }
                              />
                            )}
                            {product?.name && (
                              <h2 className="font-heading mb-2 text-xl">
                                {product?.name}
                              </h2>
                            )}
                            {product?.price && (
                              <p className="font-heading text-lg font-bold text-webriq-darkblue">
                                ${product?.price}
                              </p>
                            )}
                          </Link>
                        </div>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <div className="text-center">
                  <img
                    className="mx-auto h-96 w-96 object-contain"
                    src="https://cdn.sanity.io/images/9itgab5x/production/951b1f5f26048374711fa6800e0b542528240432-982x638.png"
                    alt="no-query-results"
                  />
                  <span className="mb-6 text-4xl font-bold text-webriq-darkblue">
                    Whoops!
                  </span>
                  <p className="my-8 text-gray-700">
                    {`No results for query "${productQuery}". Kindly try another keyword.`}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
export default memo(VariantB);
