import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import * as React from "react";
import { createElement, useState, useEffect } from "react";
import DOMPurify from "dompurify";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const SvgFullLogo = (props) => /* @__PURE__ */ React.createElement("svg", { width: 289, height: 56, viewBox: "0 0 289 56", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { d: "M66.1734 0.0458293V0H48.301H66.1734V0.0458293Z", fill: "#0473FF" }), /* @__PURE__ */ React.createElement("path", { d: "M34.0945 0L26.9914 18.8805L26.9456 18.9264H26.9914L27.3122 19.5221L41.1518 43.2602V43.3519L41.1976 43.3061L41.2434 43.3519V43.2602L55.4038 19.1097L55.358 19.018L55.3122 18.9722L48.2549 0.0916586L41.1518 12.3273L34.0945 0Z", fill: "#0473FF" }), /* @__PURE__ */ React.createElement("path", { d: "M66.1748 0.0458293V0H48.3024L57.2386 15.7185L57.5594 16.2226L64.2042 27.9542L48.2566 55.9542H66.4039L82.3974 28L66.1748 0.0458293Z", fill: "#0515FF" }), /* @__PURE__ */ React.createElement("path", { d: "M25.1588 15.6727L34.0949 0H16.2226L0 28L15.9935 56H34.1408L18.1473 28L25.1588 15.6727Z", fill: "#0515FF" }), /* @__PURE__ */ React.createElement("path", { d: "M124.235 25.1589V45.3684H132.438V13.6106H124.281L114.245 28.5042L104.209 13.6106H96.0518V45.3684H104.255V25.1589L111.358 35.8365H117.132L124.235 25.1589Z", fill: "#06042D" }), /* @__PURE__ */ React.createElement("path", { d: "M147.515 22.1348H139.541V45.3688H147.515V22.1348Z", fill: "#06042D" }), /* @__PURE__ */ React.createElement("path", { d: "M140.183 17.0478C141.008 17.7352 142.108 18.056 143.528 18.056C144.949 18.056 146.049 17.7352 146.874 17.0478C147.698 16.3604 148.111 15.3522 148.111 14.0233C148.111 12.6943 147.698 11.6861 146.874 10.9987C146.049 10.3113 144.949 9.99054 143.528 9.99054C142.108 9.99054 141.008 10.3113 140.183 10.9987C139.358 11.6861 138.946 12.6943 138.946 14.0233C138.946 15.3522 139.358 16.3604 140.183 17.0478Z", fill: "#06042D" }), /* @__PURE__ */ React.createElement("path", { d: "M177.119 45.3679L175.744 38.7689C175.286 36.5234 174.461 34.782 173.27 33.6363C172.078 32.4907 170.658 31.7575 168.962 31.4825L176.615 22.1339H168.55L161.813 31.2534V10.5398H153.839V45.3679H161.813V38.4481L163.738 36.3401C164.104 36.3401 164.517 36.3859 164.929 36.4776C165.342 36.5692 165.708 36.7067 166.029 36.9358C166.396 37.165 166.671 37.4399 166.946 37.8524C167.221 38.219 167.404 38.7689 167.541 39.4105L168.641 45.3679H177.119Z", fill: "#06042D" }), /* @__PURE__ */ React.createElement("path", { d: "M185.917 45.5975C187.2 45.8266 188.575 45.9641 190.087 45.9641C191.095 45.9641 192.058 45.9183 193.112 45.7808C194.12 45.6891 195.128 45.5517 196.09 45.3684C197.053 45.2309 197.923 45.0018 198.748 44.8185C199.573 44.5893 200.261 44.406 200.811 44.1769V29.4207C200.811 27.9543 200.536 26.717 199.94 25.7088C199.39 24.7006 198.565 23.8757 197.557 23.28C196.549 22.6384 195.357 22.226 194.028 21.951C192.653 21.6761 191.187 21.5386 189.629 21.5386C188.254 21.5386 186.833 21.6302 185.321 21.8594C183.809 22.0885 182.48 22.3176 181.38 22.5926L181.701 27.9543C182.755 27.6793 183.946 27.4502 185.321 27.2669C186.696 27.0378 187.933 26.9461 189.125 26.9461C190.408 26.9461 191.37 27.1294 191.966 27.4502C192.562 27.8168 192.837 28.55 192.837 29.6499V31.0247C192.241 30.933 191.599 30.8414 190.958 30.7955C190.316 30.7497 189.675 30.7039 188.987 30.7039C187.796 30.7039 186.65 30.8414 185.504 31.0705C184.359 31.2996 183.351 31.7121 182.48 32.262C181.609 32.8119 180.876 33.5451 180.372 34.4617C179.822 35.3782 179.547 36.5239 179.547 37.9445C179.547 39.5026 179.822 40.7857 180.326 41.8397C180.83 42.8937 181.563 43.6728 182.526 44.3143C183.534 44.9101 184.634 45.3226 185.917 45.5975ZM188.071 35.9281C188.712 35.5157 189.537 35.2865 190.545 35.2865C190.912 35.2865 191.279 35.2865 191.645 35.3324C192.058 35.3782 192.424 35.424 192.837 35.4698V40.8774C192.058 41.0149 191.233 41.1065 190.454 41.1065C189.537 41.1065 188.758 40.9232 188.071 40.5107C187.429 40.0983 187.108 39.3651 187.108 38.3111C187.108 37.1654 187.429 36.3864 188.071 35.9281Z", fill: "#06042D" }), /* @__PURE__ */ React.createElement("path", { d: "M219.69 21.9047C219.048 21.7673 218.452 21.6756 217.811 21.6298C217.215 21.584 216.665 21.5381 216.161 21.5381C214.466 21.5381 212.862 21.7673 211.487 22.1797C210.066 22.5921 208.875 23.2795 207.912 24.1961C206.904 25.1126 206.171 26.3499 205.621 27.8164C205.071 29.3286 204.796 31.1159 204.796 33.2697C204.796 35.6527 205.071 37.6691 205.667 39.273C206.263 40.8769 207.087 42.2059 208.096 43.1682C209.15 44.1306 210.341 44.818 211.762 45.2763C213.182 45.6887 214.74 45.9178 216.436 45.9178C217.215 45.9178 218.086 45.872 219.094 45.7804C220.102 45.6887 221.156 45.597 222.21 45.4596C223.264 45.3221 224.272 45.1388 225.235 45.0013C226.197 44.818 227.022 44.6347 227.709 44.4514V10.5398H219.69V21.9047ZM219.736 40.0979C219.186 40.2353 218.636 40.327 218.177 40.3728C217.719 40.3728 217.169 40.4187 216.665 40.4187C216.024 40.4187 215.474 40.327 215.015 40.0979C214.557 39.8687 214.191 39.5021 213.916 38.9064C213.641 38.3565 213.412 37.6232 213.274 36.7525C213.137 35.8818 213.091 34.7362 213.091 33.4072C213.091 32.1241 213.182 31.07 213.32 30.291C213.457 29.4661 213.732 28.8245 214.053 28.3663C214.374 27.908 214.74 27.5414 215.245 27.4039C215.703 27.2206 216.253 27.129 216.849 27.129C217.307 27.129 217.857 27.1748 218.361 27.2206C218.911 27.2664 219.369 27.3581 219.781 27.4497V40.0979H219.736Z", fill: "#06042D" }), /* @__PURE__ */ React.createElement("path", { d: "M241.184 10.9987C240.359 10.3113 239.259 9.99054 237.839 9.99054C236.418 9.99054 235.318 10.3113 234.493 10.9987C233.668 11.6861 233.256 12.6943 233.256 14.0233C233.256 15.3522 233.668 16.3604 234.493 17.0478C235.318 17.7352 236.418 18.056 237.839 18.056C239.259 18.056 240.359 17.7352 241.184 17.0478C242.009 16.3604 242.421 15.3522 242.421 14.0233C242.421 12.6943 242.009 11.6861 241.184 10.9987Z", fill: "#06042D" }), /* @__PURE__ */ React.createElement("path", { d: "M241.824 22.1348H233.851V45.3688H241.824V22.1348Z", fill: "#06042D" }), /* @__PURE__ */ React.createElement("path", { d: "M259.24 9.99054C256.169 9.99054 253.695 10.6779 251.862 12.0985C250.029 13.4733 249.112 15.673 249.112 18.6059V22.1346H245.583V27.5879H249.112V45.3686H257.086V27.5879H263.135V22.1346H257.086V18.6059C257.086 17.4144 257.361 16.5896 257.957 16.1771C258.552 15.7647 259.285 15.5355 260.202 15.5355C260.752 15.5355 261.302 15.5814 261.852 15.6272C262.402 15.673 262.952 15.7188 263.547 15.8105L264.235 10.4946C263.547 10.3571 262.722 10.2197 261.852 10.128C260.981 10.0364 260.11 9.99054 259.24 9.99054Z", fill: "#06042D" }), /* @__PURE__ */ React.createElement("path", { d: "M285.819 24.4257C283.757 22.5009 280.778 21.5386 276.928 21.5386C273.033 21.5386 270.1 22.5009 268.038 24.4257C265.976 26.3504 264.968 29.4666 264.968 33.7284C264.968 37.9903 265.976 41.1065 268.038 43.0312C270.1 44.9559 273.079 45.9641 276.928 45.9641C280.824 45.9641 283.757 45.0017 285.819 43.0312C287.881 41.1065 288.889 37.9903 288.889 33.7284C288.889 29.4666 287.881 26.3504 285.819 24.4257ZM279.816 38.9068C279.266 39.915 278.303 40.3733 276.928 40.3733C275.554 40.3733 274.591 39.8692 274.041 38.9068C273.491 37.8986 273.217 36.2031 273.217 33.6826C273.217 31.208 273.491 29.4666 274.041 28.5042C274.591 27.5419 275.554 27.0378 276.928 27.0378C278.303 27.0378 279.266 27.5419 279.816 28.5042C280.365 29.4666 280.64 31.208 280.64 33.6826C280.64 36.2031 280.365 37.9445 279.816 38.9068Z", fill: "#06042D" }));
const SvgGithubIcon = (props) => /* @__PURE__ */ React.createElement("svg", { width: 48, height: 48, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { d: "M24 0C10.74 0 0 11.0188 0 24.6094C0 35.4846 6.876 44.707 16.41 47.9575C17.61 48.1892 18.05 47.4284 18.05 46.7742C18.05 46.1897 18.03 44.6414 18.02 42.5906C11.344 44.0754 9.936 39.2888 9.936 39.2888C8.844 36.4485 7.266 35.6897 7.266 35.6897C5.092 34.1639 7.434 34.1947 7.434 34.1947C9.844 34.367 11.11 36.7295 11.11 36.7295C13.25 40.4926 16.728 39.4057 18.1 38.7761C18.316 37.1847 18.934 36.0999 19.62 35.4846C14.29 34.8694 8.688 32.753 8.688 23.3235C8.688 20.637 9.618 18.4427 11.158 16.72C10.888 16.0986 10.078 13.5967 11.368 10.2067C11.368 10.2067 13.378 9.54638 17.968 12.7292C19.888 12.1816 21.928 11.9109 23.968 11.8986C26.008 11.9109 28.048 12.1816 29.968 12.7292C34.528 9.54638 36.538 10.2067 36.538 10.2067C37.828 13.5967 37.018 16.0986 36.778 16.72C38.308 18.4427 39.238 20.637 39.238 23.3235C39.238 32.7776 33.628 34.8591 28.288 35.4641C29.128 36.2024 29.908 37.7118 29.908 40.0169C29.908 43.3104 29.878 45.9559 29.878 46.7557C29.878 47.4017 30.298 48.1708 31.528 47.9247C41.13 44.6967 48 35.4682 48 24.6094C48 11.0188 37.254 0 24 0Z", fill: "#06042D" }));
const SvgLinkedInIcon = (props) => /* @__PURE__ */ React.createElement("svg", { width: 48, height: 48, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { d: "M48 41.3333C48 45.016 45.016 48 41.3333 48H6.66667C2.98533 48 0 45.016 0 41.3333V6.66667C0 2.984 2.98533 0 6.66667 0H41.3333C45.016 0 48 2.984 48 6.66667V41.3333Z", fill: "#06042D" }), /* @__PURE__ */ React.createElement("path", { opacity: 0.05, d: "M32.0001 41.3333V27.868C32.0001 25.616 30.9081 24.2707 29.0774 24.2707C27.9907 24.2707 27.1921 24.8827 26.7054 26.0893C26.6827 26.1747 26.6507 26.5227 26.6641 27.5747L26.6667 41.3333H17.3334V16H26.6667V17.4147C28.0294 16.4747 29.7001 16 31.6507 16C37.7134 16 41.3321 20.124 41.3321 27.032L41.3334 41.3333H32.0001ZM6.66675 41.3333V16H11.2761C8.60541 16 6.66675 14.0373 6.66675 11.332C6.66675 8.62934 8.63741 6.66667 11.3521 6.66667C14.0347 6.66667 15.9454 8.57467 16.0001 11.3053C16.0001 14.0307 14.0281 16 11.3134 16H16.0001V41.3333H6.66675Z", fill: "#06042D" }), /* @__PURE__ */ React.createElement("path", { opacity: 0.07, d: "M32.6666 40.6667V27.868C32.6666 25.2373 31.2919 23.604 29.0773 23.604C27.3506 23.604 26.4973 24.82 26.0866 25.84C25.9773 26.1053 25.9919 27.1587 25.9972 27.608L25.9999 40.6667H17.9999V16.6667H25.9999V18.8507C27.0599 17.7533 28.7666 16.6667 31.6506 16.6667C37.2946 16.6667 40.6652 20.5413 40.6652 27.032L40.6666 40.6667H32.6666ZM7.33325 40.6667V16.6667H15.3333V40.6667H7.33325ZM11.2759 15.3333C8.99192 15.3333 7.33325 13.6507 7.33325 11.332C7.33325 9.01466 9.02392 7.33333 11.3519 7.33333C13.6506 7.33333 15.2866 8.972 15.3333 11.3187C15.3333 13.6507 13.6426 15.3333 11.3133 15.3333H11.2759Z", fill: "#06042D" }), /* @__PURE__ */ React.createElement("path", { d: "M8 17.3333H14.6667V40H8V17.3333ZM11.3133 14.6667H11.276C9.28667 14.6667 8 13.184 8 11.332C8 9.44 9.32667 8 11.352 8C13.38 8 14.6293 9.44 14.6667 11.332C14.6667 13.1827 13.38 14.6667 11.3133 14.6667ZM40 40H33.3333V27.868C33.3333 24.9373 31.7 22.9373 29.0773 22.9373C27.076 22.9373 25.9933 24.2867 25.468 25.5907C25.276 26.0573 25.3333 27.348 25.3333 28V40H18.6667V17.3333H25.3333V20.8213C26.2947 19.3333 27.8 17.3333 31.6507 17.3333C36.4213 17.3333 39.9987 20.3333 39.9987 27.032L40 40Z", fill: "#F5F6FF" }));
const SvgInstagramIcon = (props) => /* @__PURE__ */ React.createElement("svg", { width: 48, height: 48, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { d: "M37.3496 47.9747L10.697 48C4.83345 48.0053 0.0319876 43.2132 0.0253245 37.3496L4.44274e-06 10.697C-0.00532608 4.83345 4.78681 0.0319876 10.6504 0.0253245L37.303 4.44274e-06C43.1665 -0.00532608 47.968 4.78681 47.9747 10.6504L48 37.303C48.0067 43.1679 43.2132 47.9693 37.3496 47.9747Z", fill: "#06042D" }), /* @__PURE__ */ React.createElement("path", { d: "M24.0008 33.3291C18.8582 33.3291 14.6724 29.1446 14.6724 24.0007C14.6724 18.8567 18.8582 14.6723 24.0008 14.6723C29.1434 14.6723 33.3292 18.8567 33.3292 24.0007C33.3292 29.1446 29.1434 33.3291 24.0008 33.3291ZM24.0008 17.3375C20.3267 17.3375 17.3376 20.3266 17.3376 24.0007C17.3376 27.6747 20.3267 30.6638 24.0008 30.6638C27.6748 30.6638 30.6639 27.6747 30.6639 24.0007C30.6639 20.3266 27.6748 17.3375 24.0008 17.3375Z", fill: "#F5F6FF" }), /* @__PURE__ */ React.createElement("path", { d: "M33.9953 16.0049C35.0993 16.0049 35.9942 15.1099 35.9942 14.0059C35.9942 12.902 35.0993 12.007 33.9953 12.007C32.8913 12.007 31.9963 12.902 31.9963 14.0059C31.9963 15.1099 32.8913 16.0049 33.9953 16.0049Z", fill: "#F5F6FF" }), /* @__PURE__ */ React.createElement("path", { d: "M31.9965 41.3249H16.0049C10.8623 41.3249 6.67651 37.1404 6.67651 31.9965V16.0049C6.67651 10.8609 10.8623 6.67648 16.0049 6.67648H31.9965C37.1391 6.67648 41.3249 10.8609 41.3249 16.0049V31.9965C41.3249 37.1404 37.1391 41.3249 31.9965 41.3249ZM16.0049 9.34174C12.3309 9.34174 9.34177 12.3308 9.34177 16.0049V31.9965C9.34177 35.6705 12.3309 38.6596 16.0049 38.6596H31.9965C35.6705 38.6596 38.6596 35.6705 38.6596 31.9965V16.0049C38.6596 12.3308 35.6705 9.34174 31.9965 9.34174H16.0049Z", fill: "#F5F6FF" }));
const mapValue = (x, inMin, inMax, outMin, outMax) => {
  const newValue = (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  if (x > inMax) {
    return outMax;
  }
  if (x < inMin) {
    return outMin;
  }
  return newValue;
};
const MIN_HEIGHT_RATIO = 0.64;
const SCROLL_LIMIT = 256;
function Navbar() {
  const [shrinkRatio, setShrinkRatio] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      setShrinkRatio(
        mapValue(
          Math.round(window.scrollY),
          0,
          SCROLL_LIMIT,
          1,
          MIN_HEIGHT_RATIO
        )
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return /* @__PURE__ */ jsx(
    "nav",
    {
      className: "w-full border-b border-[rgba(6,4,45,0.12)] sticky top-0 bg-light z-50",
      style: {
        padding: `${shrinkRatio * 24}px 0 ${shrinkRatio * 24}px 0`
      },
      children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between w-[928px] mx-auto", children: [
        /* @__PURE__ */ jsx(
          SvgFullLogo,
          {
            className: "w-auto",
            style: { height: `${56 * shrinkRatio}px` }
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex",
            style: {
              gap: `${shrinkRatio * 32}px`
            },
            children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://github.com/Mikadifo",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "hover:opacity-80",
                  children: /* @__PURE__ */ jsx(
                    SvgGithubIcon,
                    {
                      className: "w-auto",
                      style: { height: `${48 * shrinkRatio}px` }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://linkedin.com/in/mikadifo",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "hover:opacity-80",
                  children: /* @__PURE__ */ jsx(
                    SvgLinkedInIcon,
                    {
                      className: "w-auto",
                      style: { height: `${48 * shrinkRatio}px` }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://instagram.com/mikadifo",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "hover:opacity-80",
                  children: /* @__PURE__ */ jsx(
                    SvgInstagramIcon,
                    {
                      className: "w-auto",
                      style: { height: `${48 * shrinkRatio}px` }
                    }
                  )
                }
              )
            ]
          }
        )
      ] })
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxs("div", { className: "text-dark opacity-50 text-center py-4 border-t border-[rgba(6,4,45,0.12)] font-normal text-xl", children: [
    "© ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " Mikadifo"
  ] });
}
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root
}, Symbol.toStringTag, { value: "Module" }));
function Hero() {
  return /* @__PURE__ */ jsxs("div", { className: "mt-44 mb-52 w-[928px] mx-auto", children: [
    /* @__PURE__ */ jsx("h1", { className: "mb-8 font-kufam font-bold text-[56px] text-dark", children: "Website Designer & Developer" }),
    /* @__PURE__ */ jsx("h2", { className: "mb-16 text-dark opacity-75 font-normal text-5xl leading-[57.6px]", children: "Helping startups and solo founders launch beautiful websites and web apps" }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-8", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#contact",
          className: "cta-button text-white text-2xl font-bold w-72 bg-dark text-center py-4 rounded-[18px] leading-[100%]",
          children: "Get in Touch"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#projects",
          className: "text-dark text-2xl font-bold w-72 bg-dark-10 text-center py-4 rounded-[18px] leading-[100%] hover:bg-[rgba(6,4,45,0.2)] hover:text-[rgba(6,4,45,0.85)]",
          children: "Portfolio"
        }
      )
    ] })
  ] });
}
function About() {
  return /* @__PURE__ */ jsx("div", { className: "bg-dark-04 py-48", children: /* @__PURE__ */ jsxs("div", { className: "w-[928px] mx-auto", children: [
    /* @__PURE__ */ jsx("h3", { className: "mb-16 text-dark font-bold font-kufam text-5xl", children: "About Me" }),
    /* @__PURE__ */ jsxs("p", { className: "text-2xl font-normal text-dark leading-[36px]", children: [
      "Hi there! I’m a software engineer with over 3 years of experience. As a freelance front end developer I help small businesses and solo founders reach more customers by building custom landing pages and web apps.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      "I always wanted to know how things work and that curiosity helped me learn new technologies faster. All started by creating a game with python following the instructions in a book. Then I learned how to build websites, which I didn’t know how to design, so I learned UI/UX. Now I’m working with hardware, understanding how computers work.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      "My main goal is to build tools, apps, and websites that can actually have an impact in the world and help people achieve their goals. I also like to help in non-profit organizations, so feel free to contact me about these types of projects."
    ] })
  ] }) });
}
const SvgWaveDivider = (props) => /* @__PURE__ */ React.createElement("svg", { width: 1440, height: 121, viewBox: "0 0 1440 121", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("rect", { width: 1440, height: 121, fill: "#06042D" }), /* @__PURE__ */ React.createElement("path", { d: "M385.668 56.3541C455.268 45.5805 522.66 26.27 592.068 14.5578C690.936 -2.13674 793.896 -3.14521 892.608 14.1684C988.536 30.9528 1088 71.8904 1182.79 92.6887C1266.85 111.141 1358.63 118.739 1440 95.6841V0H0V27.3084C122.959 66.1034 256.336 76.1484 385.668 56.3541Z", fill: "#EBECF7" }));
const SvgRoundedDivider = (props) => /* @__PURE__ */ React.createElement("svg", { width: 1440, height: 113, viewBox: "0 0 1440 113", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { d: "M889.2 110.23C349.2 111.43 0 21.57 0 0V114H1440V0C1440 21.93 1423.68 113.83 889.2 110.23Z", fill: "#EBECF7" }));
const getYearsAndMonths = (start, end) => {
  const startDate = new Date(start);
  const endDate = end === "Present" ? /* @__PURE__ */ new Date() : new Date(end);
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  months++;
  if (months < 0) {
    years--;
    months += 12;
  }
  let differenceString = "";
  if (years === 1) {
    differenceString += years + " year ";
  }
  if (years > 1) {
    differenceString += years + " years ";
  }
  if (months === 1) {
    differenceString += months + " month";
  }
  if (months > 1) {
    differenceString += months + " months";
  }
  return differenceString;
};
const SvgCalendarIcon = (props) => /* @__PURE__ */ React.createElement("svg", { width: 23, height: 24, viewBox: "0 0 23 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { d: "M7.94332 10.8H5.49887V13.2H7.94332V10.8ZM12.8322 10.8H10.3878V13.2H12.8322V10.8ZM17.7211 10.8H15.2767V13.2H17.7211V10.8ZM20.1655 2.4H18.9433V0H16.4989V2.4H6.7211V0H4.27665V2.4H3.05443C1.69776 2.4 0.622208 3.48 0.622208 4.8L0.609985 21.6C0.609985 22.92 1.69776 24 3.05443 24H20.1655C21.51 24 22.61 22.92 22.61 21.6V4.8C22.61 3.48 21.51 2.4 20.1655 2.4ZM20.1655 21.6H3.05443V8.4H20.1655V21.6Z", fill: "#F5F6FF" }));
function Experience({ title, data }) {
  return /* @__PURE__ */ jsx("div", { className: "bg-dark mt-[-1px] py-48", children: /* @__PURE__ */ jsxs("div", { className: "w-[928px] mx-auto", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-5xl font-bold font-kufam text-white mb-16", children: title }),
    /* @__PURE__ */ jsx("div", { className: "text-white leading-none flex flex-col gap-10", children: data.map((item) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex justify-between bg-light-05 px-6 py-6 rounded-xl",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: item.img,
                alt: item.heading + " company logo",
                className: "rounded-xl me-4 w-[72px] h-[72px]"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-[32px]", children: item.heading }),
              /* @__PURE__ */ jsx("span", { className: "font-normal text-2xl opacity-75", children: item.subheading })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3 w-[212px]", children: [
            /* @__PURE__ */ jsx(SvgCalendarIcon, { className: "mt-1.5" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col text-xl font-normal", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                item.start,
                " - ",
                item.end
              ] }),
              /* @__PURE__ */ jsx("span", { className: "opacity-50 mt-[-4px]", children: getYearsAndMonths(item.start, item.end) })
            ] })
          ] })
        ]
      },
      item.id
    )) })
  ] }) });
}
const movement = "data:image/webp;base64,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";
const mikadifo = "data:image/webp;base64,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";
const swc = "data:image/webp;base64,UklGRv4DAABXRUJQVlA4IPIDAACQGwCdASrIAMgAPlEokUajoqGhINQImHAKCWlu4XVRGbiH2fQHoQ26fPj+knG2aaPrHPicsj9v/0PtF7AdqT+37wRlD/S+r95n5gdtPxgxjPPC9J+wb+r3WU8kAJYkhSSl/P/n7N1IUkpfz/5+zdSFJKX8/+fs3UhSSl+Mlfa6t1DPatjiSdoI+yDSIlb1UOeM7tdYn+i4mJ0YQxgKGhHwfzai2QLEjK2YRtsDeEnKjRGOE9Wer/n+nQSF55DMro/er7DL4ezdSFfWtiY26kKSUv5/8/ZupCklL+f/P2bqQpJS/nwAAP7/eiD//nb8QfqCln//W345/NZfAAAEgzUplrageJwE2/RsABaP2lq1+qfcms98DAEELOtehWeJazy9WiHWnpAs22QUV3GYPS53mdoAm/nPswaJAW8Hhi6nqZf9Z4R1gdTZ/z4x235ssaYTiVQKQFm1O4n38Tkc6sUskOdDyFs/kuQrv+bGDej5BJxzjDB5LRGIIZdtVxP4t1RUMBz91vDgNRgGyI0Wro6EWhBdDc91NU9lb+T/72v+9CbzscNBHRIS5uTV29g8sdfWtglQ7/GZZlgbQkqI3Ia6OEKsAJrVixyEEkB6XXFhEPSwWieu8OY+oE/KuZLNE314P6f0N1VLO65FM9FVvvNkXev8OPt7WI3MOimp+S7Dnj3IECZ/wEUIZY5w4hWx0p3n6KzfAI9QTf7jaqccOK8cL7Qt+8DT63KJgur3M/EWgUXAQ30GohSV+vGF2xpdaWP38uQ1ODktV/s9x5Lt5q3MeKgA4fdPivHowTICnqnAFJiYOKb9jpfMvRrznitNkt6P69e/8YnDiHCiPI1Il1lWyeGS5Ru8c48Glcbcz5Etd8OlVYkhF3K0dvHjc3Bqf99whWPjlvkif7Ap6PvLRln4eG1eb8iQ0vapK0FNs4CxWE81VV4JUihf9wXfeeXyC5N5j7n9dScUwEI99o4JE2nCT2Wxp16ybPD/N+C37wL3Gxq43U0HGnO9N5q/+q9fstSP+Jj8tTwNf9WJlyn4CULthIm4hO9RQuARv0DpaeLELYn7nCOA+xe/0lfKK/Ml/g6i4CPg3OgqHBE2kyLwGxtqvWUDZM0qvoH4o+Z/RcJmAs2vjtO5CP1useieJmJzN7g5w2qKOLwsWdAi2lDgP46RcWurC29MnYz89B+qKuxlth5P6ofabbM+fnhPFY9UYGrcKKp2otSUAMuQHMg32uAZUdrhF90VlPtUF6Y5/HyAsPPdVP/6nh3K3vjkY8QNc0lmuizeI5iUYTmOAm3DTFfZ65bYruE8/KAdkZARL4ax2tmWHunEfgEK9gflmiU4AAAAAA==";
const libelula = "/Mikadifo.github.io/assets/libelula-B5Uj9Put.webp";
const experienceData = [
  {
    id: "mov_vault",
    img: movement,
    heading: "Movement Vault",
    subheading: "Software Engineer Intern",
    start: "Mar 2025",
    end: "Present"
  },
  {
    id: "freelance",
    img: mikadifo,
    heading: "Freelance",
    subheading: "Front End Developer",
    start: "Apr 2022",
    end: "Present"
  },
  {
    id: "swc",
    img: swc,
    heading: "Students Who Code",
    subheading: "Software Engineer Intern",
    start: "Mar 2024",
    end: "Apr 2024"
  },
  {
    id: "libelula",
    img: libelula,
    heading: "Libélula Soft",
    subheading: "Full Stack Software Developer",
    start: "Jul 2021",
    end: "Jan 2022"
  }
];
const pennypath = "data:image/webp;base64,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";
const ismael = "/Mikadifo.github.io/assets/ismael-DrK_fuck.webp";
const marcfashion = "/Mikadifo.github.io/assets/marcfashion-DL3ke_Xy.webp";
const moneymoon = "/Mikadifo.github.io/assets/moneymoon-B1CTPrLK.webp";
const projects = [
  {
    id: "penny_path",
    img: pennypath,
    title: "PennyPath",
    type: "Hackathon Project",
    date: "May 2025",
    brief: "PennyPath is a web app that offers smart and personalized AI suggestions based on an estimated budget, location and category."
  },
  {
    id: "ismael_sarmiento",
    img: ismael,
    title: "Ismael Sarmiento",
    type: "Website & Business Card",
    date: "February 2025",
    brief: "A landing/personal portfolio web for Dr. Ismael Sarmiento, a psychologist based in Cuenca, Ecuador."
  },
  {
    id: "money_moon",
    img: moneymoon,
    title: "MoneyMoon",
    type: "Side Project",
    date: "April 2024",
    brief: "MoneyMoon is a personal financial tracker that allows you to take control of your money. It helps you to create groups of transactions to have a more organized money management."
  },
  {
    id: "marcfashion",
    img: marcfashion,
    title: "Marcfashion",
    type: "Startup Website",
    date: "April 2023",
    brief: "Marcfashion is a taylor shop based in Ecuador that creates personalized, modern and hight-quality suits for their clients."
  }
];
const SvgArrowIcon = (props) => /* @__PURE__ */ React.createElement("svg", { width: 24, height: 40, viewBox: "0 0 24 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { d: "M0.986546 39.0134C0.328848 38.3558 0 37.5187 0 36.5022C0 35.4858 0.328848 34.6487 0.986546 33.991L14.9776 20L0.986546 6.00897C0.328848 5.35127 0 4.5142 0 3.49776C0 2.48131 0.328848 1.64424 0.986546 0.986546C1.64424 0.328848 2.48131 0 3.49776 0C4.5142 0 5.35127 0.328848 6.00897 0.986546L22.5112 17.4888C22.87 17.8475 23.1247 18.2362 23.2753 18.6547C23.4236 19.0732 23.4978 19.5217 23.4978 20C23.4978 20.4783 23.4236 20.9268 23.2753 21.3453C23.1247 21.7638 22.87 22.1525 22.5112 22.5112L6.00897 39.0134C5.35127 39.6711 4.5142 40 3.49776 40C2.48131 40 1.64424 39.6711 0.986546 39.0134Z", fill: "#06042D" }));
function Portfolio() {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "w-[928px] mx-auto py-48 text-dark flex flex-col leading-none",
      id: "projects",
      children: [
        /* @__PURE__ */ jsx("h3", { className: "text-5xl font-bold font-kufam mb-16", children: "What I've Built" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-10 mb-16", children: projects.map((project) => /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#TODO",
            className: "bg-white px-6 py-6 rounded-xl drop-shadow-sm w-[444px] group hover:drop-shadow-xl transition-all duration-700",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: project.img,
                  alt: project.title + " project preview",
                  className: "rounded-xl"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-4", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-bold text-[32px] mb-2", children: project.title }),
                  /* @__PURE__ */ jsx("span", { className: "font-normal text-xl opacity-60", children: project.type })
                ] }),
                /* @__PURE__ */ jsx(SvgArrowIcon, { className: "self-center opacity-0 group-hover:opacity-10 transition-opacity duration-700" })
              ] })
            ]
          },
          project.id
        )) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "text-dark text-2xl font-bold px-[72px] bg-dark-10 text-center py-4 rounded-[18px] leading-[100%] w-72 self-center hover:bg-[rgba(6,4,45,0.2)] hover:text-[rgba(6,4,45,0.85)] cursor-pointer",
            children: "Show More"
          }
        )
      ]
    }
  );
}
const hunter = "data:image/webp;base64,UklGRvgCAABXRUJQVlA4WAoAAAAQAAAASAAASAAAQUxQSBoAAAABF3Cg/4iIgEzAYvRPIukCOCL6PwGIPVETA1ZQOCC4AgAAMBAAnQEqSQBJAD6FNJJHpSMhoTmU2ZigEIlAGVUJasB5dHQA55bzzL6AyFwLv9u8YNrlvAxB+Mn0Bs+r0x7BRr2xoc+aRlSfK4sfFF2hmsxcuYsTlLZTUk171/hK1T0Z3jRwcRRXNk89RrjFKAuVZxYbyr3qjO7dV0mBpi+NKTIMtTULIsLtgz1gAP71Sv/PXuXH5zaNp6bAF19/5m6Hv/CbN+kqbXEXDqlsn0xojoBo0eO7VzmsLTNFxbKkU2FZ/jle7eL2QiTuf+pKD3QcmOcvH2TMMzRTpLhO8Ie50LYaAoDvzK/29qT80QDNlN75Zw3SLGXt04oXyhb/39XI26YIgezyBjC2Q/UyDf7nGrlemJf6CwIPNYin9y/cxvxW1k++o8ta7ZIyOFeZhjXx9fQdle2CqiUy4ss93noyMBOyqfPv3D712ACVz3GhtSC9H/Bp3udg4s+k4Ff35IPa7cp9u//wxP0+2uMsK/Kp8Yt2jnE+8X/ZmfNbr5WL/WPhMN6E2i+BtxTh5jJORdFayIkdTnvqL7T6dWYezXgam6GeqdSzpn++04Np6NGqZ2plR85L9Y9lh2iFVtazRXq/b1FfsIppTfPw20OcV9ljUYoMEb/gwRf9WoI4qB16D4hecgQf3dI6EZLE84ZzH8QlJWnfbREmZok7hXsUnGVwanqWe2NyBBHZYcwzsw1WidQyY6jI39G1PTD2P0RfapVtXZO0EPjTNwjYhUw3VT/gBu/8DM4BWv9/j9t32yL9vtY6/B0up3P8nu/s2V24R4ysfjN7jql1p5Etjuob1vq8DvL/5vydvO/XpqBboseWQrfHJuCXaJzg+D2ZS1v4uKOnDCwPAID/KCv+YyKcA6FNy+JM/G4qWueQehLgvYs+98JwRc30cJzkX2d86fN4d7wb3i0C0XT31AAA";
const codepath = "data:image/webp;base64,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";
const tecazuay = "data:image/webp;base64,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";
const educationData = [
  {
    id: "hunter",
    img: hunter,
    heading: "Hunter College",
    subheading: "Computer Science",
    start: "Jan 2023",
    end: "Dec - 2025"
  },
  {
    id: "codepath",
    img: codepath,
    heading: "CodePath",
    subheading: "Intro to Cybersecurity",
    start: "Jan 2023",
    end: "Apr 2023"
  },
  {
    id: "tecazuay",
    img: tecazuay,
    heading: "TecAzuay",
    subheading: "Software Development",
    start: "May 2019",
    end: "Oct 2021"
  }
];
const SvgQuoteIcon = (props) => /* @__PURE__ */ React.createElement("svg", { width: 93, height: 64, viewBox: "0 0 93 64", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { d: "M76.5797 64C73.6734 64 71.4453 62.7646 69.8953 60.2938C68.3453 57.8192 68.2484 55.2727 69.6047 52.6545L75.5625 40.7273H63.9375C60.7406 40.7273 58.0049 39.5869 55.7303 37.3062C53.4518 35.0293 52.3125 32.2909 52.3125 29.0909V11.6364C52.3125 8.43636 53.4518 5.69794 55.7303 3.42109C58.0049 1.14036 60.7406 0 63.9375 0H81.375C84.5719 0 87.3096 1.14036 89.5881 3.42109C91.8627 5.69794 93 8.43636 93 11.6364V37.9636C93 38.8364 92.9264 39.7343 92.7791 40.6575C92.6357 41.5767 92.3219 42.4242 91.8375 43.2L83.5547 59.6364C82.8766 60.9939 81.9078 62.0606 80.6484 62.8364C79.3891 63.6121 78.0328 64 76.5797 64ZM24.2672 64C21.3609 64 19.1328 62.7646 17.5828 60.2938C16.0328 57.8192 15.9359 55.2727 17.2922 52.6545L23.25 40.7273H11.625C8.42813 40.7273 5.69237 39.5869 3.41775 37.3062C1.13925 35.0293 0 32.2909 0 29.0909V11.6364C0 8.43636 1.13925 5.69794 3.41775 3.42109C5.69237 1.14036 8.42813 0 11.625 0H29.0625C32.2594 0 34.9971 1.14036 37.2756 3.42109C39.5502 5.69794 40.6875 8.43636 40.6875 11.6364V37.9636C40.6875 38.8364 40.6158 39.7343 40.4724 40.6575C40.3252 41.5767 40.0094 42.4242 39.525 43.2L31.2422 59.6364C30.5641 60.9939 29.5953 62.0606 28.3359 62.8364C27.0766 63.6121 25.7203 64 24.2672 64Z", fill: "#06042D" }));
const reviews = [
  {
    id: "alexis-marcfashion",
    author: "Alexis Toala",
    role: "Marcfashion's CEO",
    content: "The service quality was excellent — every detail I needed for my website was handled with care. It was also very efficient, completed within a reasonable timeframe. Ultimately, this new website will help boost sales and increase awareness of our product, allowing us to get more involved in online sales."
  },
  {
    id: "isabel-centeravid",
    author: "Isabel Padilla",
    role: "Technical Director at Centeravid",
    content: "Perfect service and great kindness. They helped us with the content, advised us on the photos and the rest of the website elements. They were also very fast and efficient. We are delighted — we gained many benefits from the website; it significantly increased the reach of CENTERAVID."
  }
];
function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);
  const handlePrevious = () => {
    if (currentReview - 1 < 0) {
      setCurrentReview(reviews.length - 1);
    } else {
      setCurrentReview(currentReview - 1);
    }
  };
  const handleNext = () => {
    if (currentReview + 1 >= reviews.length) {
      setCurrentReview(0);
    } else {
      setCurrentReview(currentReview + 1);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "py-48 bg-dark-04", children: [
    /* @__PURE__ */ jsx("h3", { className: "mb-16 text-dark font-bold font-kufam text-5xl w-[928px] mx-auto", children: "What Clients Say" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex items-center flex-col", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-12 items-center relative", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "w-20 h-20 hover:bg-[rgba(6,4,45,0.03)] rounded-full flex items-center justify-center hover:cursor-pointer",
            onClick: handlePrevious,
            children: /* @__PURE__ */ jsx(SvgArrowIcon, { className: "opacity-75 rotate-180 ms-[-6px]" })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex w-[928px] h-[380px] top-0 left-0 relative overflow-hidden rounded-xl", children: reviews.map((review, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `absolute transition-all duration-500 ease-in-out flex flex-col gap-8 px-8 py-6 bg-blue-04 rounded-xl text-dark w-[928px] shadow-md ${index === currentReview ? "scale-100 translate-x-0 rotate-0" : "scale-85 translate-x-full rotate-8"}`,
            children: [
              /* @__PURE__ */ jsx(SvgQuoteIcon, { className: "opacity-10" }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl font-normal leading-[36px]", children: review.content }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col font-bold", children: [
                /* @__PURE__ */ jsx("span", { className: "text-center text-xl", children: review.author }),
                /* @__PURE__ */ jsx("span", { className: "text-center text-lg opacity-50", children: review.role })
              ] })
            ]
          },
          review.id
        )) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "w-20 h-20 hover:bg-[rgba(6,4,45,0.03)] rounded-full flex items-center justify-center cursor-pointer",
            onClick: handleNext,
            children: /* @__PURE__ */ jsx(SvgArrowIcon, { className: "opacity-75 ms-1.5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-4 mt-10", children: reviews.map((review, index) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: `w-4 h-4 rounded-full cursor-pointer ${index === currentReview ? "bg-blue" : "bg-dark opacity-25 hover:opacity-15"}`,
          onClick: () => setCurrentReview(index)
        },
        review.id
      )) })
    ] })
  ] });
}
const apiUrl = void 0;
const apiToken = void 0;
const captchaKey = void 0;
function Contact() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [captchaToken, setCaptchaToken] = useState("");
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
    window.recaptchaCallback = (token) => {
      setCaptchaToken(token);
    };
  }, []);
  if (!hasMounted) {
    return null;
  }
  const handleSendEmail = async (evt) => {
    setData(null);
    setLoading(true);
    evt.preventDefault();
    if (!captchaToken) {
      setData({ error: "Please complete captcha" });
      setLoading(false);
      return;
    }
    const form = evt.currentTarget;
    const spam = form.elements.namedItem("_gotcha");
    const name = form.elements.namedItem("name");
    const email = form.elements.namedItem("email");
    const message = form.elements.namedItem("message");
    if (spam && spam.value) {
      setLoading(false);
      return;
    }
    if (!name && !email && !message) {
      setData({ error: "Please fill in all required fields." });
      setLoading(false);
      return;
    }
    let nameValue = DOMPurify.sanitize(name.value, {
      ALLOWED_ATTR: [],
      ALLOWED_TAGS: []
    });
    let emailValue = DOMPurify.sanitize(email.value, {
      ALLOWED_ATTR: [],
      ALLOWED_TAGS: []
    });
    let messageValue = DOMPurify.sanitize(message.value, {
      ALLOWED_ATTR: [],
      ALLOWED_TAGS: []
    });
    nameValue = nameValue.trim();
    emailValue = emailValue.trim();
    messageValue = messageValue.trim();
    if (!nameValue || !emailValue || !messageValue) {
      setData({ error: "Please fill in all required fields." });
      setLoading(false);
      return;
    }
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-form-token": apiToken,
        "captcha-token": captchaToken
      },
      body: JSON.stringify({
        name: nameValue,
        email: emailValue,
        message: messageValue
      })
    });
    const json = await res.json();
    if (!res.ok) {
      setData({
        error: json.error || "Something went wrong, please try again later."
      });
    } else {
      setData({ data: json.data });
      setTimeout(() => setData(null), 5e3);
    }
    setLoading(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-[928px] mx-auto pt-48 pb-24 text-2xl", id: "contact", children: [
    /* @__PURE__ */ jsx("h3", { className: "mb-16 text-dark font-bold font-kufam text-5xl", children: "Get in Touch" }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSendEmail,
        className: "flex flex-col bg-white rounded-xl drop-shadow-sm p-16 gap-16",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "text-dark flex flex-col gap-10", children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "name", children: [
              /* @__PURE__ */ jsx("b", { children: "Your name:" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  id: "name",
                  name: "name",
                  placeholder: "Jane Doe",
                  className: "block py-4 px-6 bg-dark-04 rounded-xl w-full mt-4",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("label", { htmlFor: "email", children: [
              /* @__PURE__ */ jsx("b", { children: "Your email:" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  id: "email",
                  name: "email",
                  placeholder: "jane@example.com",
                  className: "block py-4 px-6 bg-dark-04 rounded-xl w-full mt-4",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("label", { htmlFor: "message", children: [
              /* @__PURE__ */ jsx("b", { children: "Message:" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  id: "message",
                  name: "message",
                  rows: 5,
                  placeholder: "Tell me about your idea or project...",
                  className: "block py-4 px-6 bg-dark-04 rounded-xl w-full mt-4",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsx("input", { type: "hidden", name: "_gotcha", className: "hidden" })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: `text-white text-2xl font-bold w-72 bg-dark text-center py-4 rounded-[18px] leading-[100%] self-center cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed ${loading ? "" : "cta-button"}`,
              disabled: loading,
              children: loading ? "Sending Email..." : "Let's Talk"
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "g-recaptcha flex self-center",
              "data-sitekey": captchaKey,
              "data-callback": "recaptchaCallback"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-red text-center", children: data == null ? void 0 : data.error }),
          /* @__PURE__ */ jsx("span", { className: "text-green text-center", children: data == null ? void 0 : data.data })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "script",
      {
        src: "https://www.google.com/recaptcha/api.js",
        async: true,
        defer: true
      }
    )
  ] });
}
function meta({}) {
  return [{
    title: "Mikadifo"
  }, {
    name: "description",
    content: "I help startups and solo founders create landing pages"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Hero, {}), /* @__PURE__ */ jsx(About, {}), /* @__PURE__ */ jsx(SvgWaveDivider, {
      className: "w-full h-auto"
    }), /* @__PURE__ */ jsx(Experience, {
      title: "Experience",
      data: experienceData
    }), /* @__PURE__ */ jsx(Portfolio, {}), /* @__PURE__ */ jsx(Experience, {
      title: "How I Got Started",
      data: educationData
    }), /* @__PURE__ */ jsx(SvgRoundedDivider, {
      className: "w-full h-auto bg-dark"
    }), /* @__PURE__ */ jsx(Reviews, {}), /* @__PURE__ */ jsx(Contact, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/Mikadifo.github.io/assets/entry.client-CZDxUVNh.js", "imports": ["/Mikadifo.github.io/assets/chunk-D4RADZKF-Br10xN1u.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/Mikadifo.github.io/assets/root-CUdWi8El.js", "imports": ["/Mikadifo.github.io/assets/chunk-D4RADZKF-Br10xN1u.js", "/Mikadifo.github.io/assets/with-props-BEgMdNwM.js"], "css": ["/Mikadifo.github.io/assets/root-BdTjLezy.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/Mikadifo.github.io/assets/home-CsVG5hWW.js", "imports": ["/Mikadifo.github.io/assets/with-props-BEgMdNwM.js", "/Mikadifo.github.io/assets/chunk-D4RADZKF-Br10xN1u.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/Mikadifo.github.io/assets/manifest-9e222c18.js", "version": "9e222c18", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/Mikadifo.github.io/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
