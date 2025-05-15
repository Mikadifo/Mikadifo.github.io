import FullLogo from "./../assets/imgs/fullLogo.svg?react";
import GithubIcon from "./../assets/icons/githubIcon.svg?react";
import LinkedInIcon from "./../assets/icons/linkedInIcon.svg?react";
import InstagramIcon from "./../assets/icons/instagramIcon.svg?react";

export default function Navbar() {
  return (
    <div className="w-screen border-b border-[rgba(6,4,45,0.12)] py-6 sticky top-0 bg-light">
      <div className="flex justify-between w-[928px] mx-auto">
        <FullLogo />
        <div className="flex gap-8">
          <a
            href="https://github.com/Mikadifo"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80"
          >
            <GithubIcon />
          </a>
          <a
            href="https://linkedin.com/in/mikadifo"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://instagram.com/mikadifo"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
