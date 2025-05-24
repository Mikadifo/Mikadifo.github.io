import FullLogo from "./../assets/imgs/fullLogo.svg?react";
import GithubIcon from "./../assets/icons/githubIcon.svg?react";
import LinkedInIcon from "./../assets/icons/linkedInIcon.svg?react";
import InstagramIcon from "./../assets/icons/instagramIcon.svg?react";
import { useEffect, useState } from "react";
import { mapValue } from "./../utils/math";
import { useLocation } from "react-router";

const MIN_HEIGHT_RATIO = 0.64;
const SCROLL_LIMIT = 256;

export default function Navbar() {
  const [shrinkRatio, setShrinkRatio] = useState(1);
  const [clientWidth, setClientWidth] = useState(
    document.documentElement.clientWidth,
  );
  const location = useLocation();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash.startsWith("#/")) {
      window.history.replaceState(
        null,
        "",
        location.pathname ? location.pathname : "/",
      );
    }
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setClientWidth(document.documentElement.clientWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShrinkRatio(
        mapValue(
          Math.round(window.scrollY),
          0,
          SCROLL_LIMIT,
          1,
          MIN_HEIGHT_RATIO,
        ),
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLogoHeight = () => {
    let height = 56 * shrinkRatio;

    if (clientWidth < 1024) {
      height = 40 * shrinkRatio;
    }

    if (clientWidth < 640) {
      height = 32;
    }

    return `${height}px`;
  };

  const getIconHeight = () => {
    let height = 48 * shrinkRatio;

    if (clientWidth < 1024) {
      height = 40 * shrinkRatio;
    }

    if (clientWidth < 640) {
      height = 32;
    }

    return `${height}px`;
  };

  return (
    <nav
      className="w-full border-b border-[rgba(6,4,45,0.12)] sticky top-0 bg-light z-50"
      style={{
        padding: `${clientWidth < 640 ? 16 : shrinkRatio * 24}px 0 ${
          clientWidth < 640 ? 16 : shrinkRatio * 24
        }px 0`,
      }}
    >
      <div className="flex justify-between w-full px-4 sm:px-8 lg:px-0 lg:w-[928px] mx-auto">
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FullLogo
            className="w-auto"
            style={{
              height: getLogoHeight(),
            }}
          />
        </button>

        <div
          className="flex"
          style={{
            gap: `${clientWidth < 640 ? 16 : 32 * shrinkRatio}px`,
          }}
        >
          <a
            href="https://github.com/Mikadifo"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80"
          >
            <GithubIcon
              className="w-auto"
              style={{
                height: getIconHeight(),
              }}
            />
          </a>
          <a
            href="https://linkedin.com/in/mikadifo"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80"
          >
            <LinkedInIcon
              style={{
                height: getIconHeight(),
              }}
              className="w-auto"
            />
          </a>
          <a
            href="https://instagram.com/mikadifo"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80"
          >
            <InstagramIcon
              className="w-auto"
              style={{
                height: getIconHeight(),
              }}
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
