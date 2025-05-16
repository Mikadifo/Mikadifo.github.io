export default function Contact() {
  return (
    <div className="w-[928px] mx-auto pt-48 pb-24 text-2xl" id="contact">
      <h3 className="mb-16 text-dark font-bold font-kufam text-5xl">
        Get in Touch
      </h3>

      <form className="flex flex-col bg-white rounded-xl drop-shadow-sm p-16 gap-16">
        <div className="text-dark flex flex-col gap-10">
          <label htmlFor="name">
            <b>Your name:</b>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Jane Doe"
              className="block py-4 px-6 bg-dark-04 rounded-xl w-full mt-4"
              required
            />
          </label>

          <label htmlFor="email">
            <b>Your email:</b>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="jane@example.com"
              className="block py-4 px-6 bg-dark-04 rounded-xl w-full mt-4"
              required
            />
          </label>

          <label htmlFor="message">
            <b>Message:</b>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me about your idea or project..."
              className="block py-4 px-6 bg-dark-04 rounded-xl w-full mt-4"
              required
            />
          </label>
        </div>

        <button className="cta-button text-white text-2xl font-bold w-72 bg-dark text-center py-4 rounded-[18px] leading-[100%] self-center cursor-pointer">
          Let's Talk
        </button>
      </form>
    </div>
  );
}
