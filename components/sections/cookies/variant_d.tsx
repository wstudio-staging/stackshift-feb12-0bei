import React from "react";
import { PortableText } from "lib/sanity";
import { setCookie, getCookie } from "utils/cookies";
import { cookiesBlockStyling } from "./variant_a";

import { CookiesProps } from ".";
import { Button } from "components/ui/Button";
import { Container } from "components/layout/Container";
import { Flex } from "components/layout/Flex/Flex";
import { Text } from "components/ui/Text";

function VariantD({
  title,
  block,
  allowCookieBtn,
  denyCookieBtn,
}: CookiesProps) {
  const cookie = getCookie();
  const [showCookie, setShowCookie] = React.useState(!!cookie);

  return (
    <div className="fixed bottom-0 z-50">
      {!showCookie ? (
        <Container maxWidth={906}>
          <Flex
            align="center"
            className="flex-col p-6 mb-6 bg-gray-800 rounded-lg sm:flex-row"
          >
            {(title || block) && (
              <div className="w-full px-4 ">
                <Text weight="bold" className="text-white">
                  {title}
                </Text>
                {block && (
                  <PortableText
                    value={block}
                    components={cookiesBlockStyling}
                  />
                )}
              </div>
            )}
            <Flex>
              {allowCookieBtn && (
                <Button
                  as="button"
                  ariaLabel={allowCookieBtn}
                  type="button"
                  className="m-2 "
                  onClick={() => {
                    setCookie("allow");
                    setShowCookie(!showCookie);
                  }}
                >
                  {allowCookieBtn}
                </Button>
              )}
              {denyCookieBtn && (
                <Button
                  as="button"
                  ariaLabel={denyCookieBtn}
                  variant="outline"
                  type="button"
                  className="m-2 font-normal text-white bg-transparent outline-gray-400 hover:bg-gray-700"
                  onClick={() => {
                    setCookie("dismiss");
                    setShowCookie(!showCookie);
                  }}
                >
                  {denyCookieBtn}
                </Button>
              )}
            </Flex>
          </Flex>
        </Container>
      ) : null}
    </div>
  );
}
export default React.memo(VariantD);
