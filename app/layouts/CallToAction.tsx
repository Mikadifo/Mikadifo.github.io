import { Link, Outlet, useNavigate } from "react-router";

export default function Portfolio() {
  const navigate = useNavigate();

  return (
    <>
      <Outlet />

      <div className="mt-12 sm:mt-24 lg:mt-40 mb-12 sm:mb-16 lg:mb-24 bg-dark-04 px-4 sm:px-8 lg:px-0">
        <div className="lg:w-[928px] mx-auto py-16 sm:py-20 lg:py-24">
          <h1 className="mb-6 lg:mb-8 font-kufam font-bold text-3xl sm:text-[40px] lg:text-[56px] text-dark">
            Let’s Work Together
          </h1>
          <p className="mb-14 lg:mb-16 text-dark opacity-75 font-normal text-[28px] sm:text-[32px] lg:text-5xl leading-[33.6px] sm:leading-[38.4px] lg:leading-[57.6px]">
            I help startups and solo founders launch beautiful websites and web
            apps
          </p>

          <div className="flex gap-5 sm:gap-8 flex-col sm:flex-row">
            <button
              onClick={() => {
                navigate("/#contact");
                setTimeout(() => {
                  window.scrollTo({
                    top: document.body.scrollHeight - 1000,
                    behavior: "smooth",
                  });
                }, 100);
              }}
              type="button"
              className="cta-button text-white text-lg sm:text-xl lg:text-2xl font-bold w-full sm:w-64 lg:w-72 bg-dark text-center py-4 rounded-[18px] leading-[100%] cursor-pointer"
            >
              Get in Touch
            </button>

            <Link
              to="/#projects"
              className="text-dark text-lg sm:text-xl lg:text-2xl font-bold w-full sm:w-64 lg:w-72 bg-dark-10 text-center py-4 rounded-[18px] leading-[100%] hover:bg-[rgba(6,4,45,0.2)] hover:text-[rgba(6,4,45,0.85)]"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
