import FullLogo from "./../assets/imgs/fullLogo.svg?react";
import GithubIcon from "./../assets/icons/githubIcon.svg?react";
import LinkedInIcon from "./../assets/icons/linkedInIcon.svg?react";
import InstagramIcon from "./../assets/icons/instagramIcon.svg?react";
import { useEffect, useState } from "react";
import { mapValue } from "~/utils/math";

const MIN_HEIGHT_RATIO = 0.64;
const SCROLL_LIMIT = 256;

export default function Navbar() {
  const [shrinkRatio, setShrinkRatio] = useState(1);

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
  });

  return (
    <nav
      className="w-full border-b border-[rgba(6,4,45,0.12)] sticky top-0 bg-light z-50"
      style={{
        padding: `${shrinkRatio * 24}px 0 ${shrinkRatio * 24}px 0`,
      }}
    >
      <div className="flex justify-between w-full px-4 lg:px-0 lg:w-[928px] mx-auto">
        <FullLogo
          className="w-auto"
          style={{ height: `${56 * shrinkRatio}px` }}
        />

        <div
          className="flex"
          style={{
            gap: `${shrinkRatio * 32}px`,
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
              style={{ height: `${48 * shrinkRatio}px` }}
            />
          </a>
          <a
            href="https://linkedin.com/in/mikadifo"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80"
          >
            <LinkedInIcon
              className="w-auto"
              style={{ height: `${48 * shrinkRatio}px` }}
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
              style={{ height: `${48 * shrinkRatio}px` }}
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
