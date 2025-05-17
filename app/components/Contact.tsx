import type React from "react";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

type Response = {
  data?: any;
  error?: string;
};

const apiUrl = import.meta.env.VITE_API_URL;
const apiToken = import.meta.env.API_TOKEN;
const captchaKey = import.meta.env.VITE_CAPTCHA_KEY;

export default function Contact() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Response | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string>("");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    (window as any).recaptchaCallback = (token: string) => {
      setCaptchaToken(token);
    };
  }, []);

  if (!hasMounted) {
    return null;
  }

  const handleSendEmail = async (evt: React.FormEvent<HTMLFormElement>) => {
    setData(null);
    setLoading(true);
    evt.preventDefault();

    if (!captchaToken) {
      setData({ error: "Please complete captcha" });
      setLoading(false);
      return;
    }

    const form = evt.currentTarget;
    const spam = form.elements.namedItem("_gotcha") as HTMLInputElement;
    const name = form.elements.namedItem("name") as HTMLInputElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const message = form.elements.namedItem("message") as HTMLInputElement;

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
      ALLOWED_TAGS: [],
    });
    let emailValue = DOMPurify.sanitize(email.value, {
      ALLOWED_ATTR: [],
      ALLOWED_TAGS: [],
    });
    let messageValue = DOMPurify.sanitize(message.value, {
      ALLOWED_ATTR: [],
      ALLOWED_TAGS: [],
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
        "captcha-token": captchaToken,
      },
      body: JSON.stringify({
        name: nameValue,
        email: emailValue,
        message: messageValue,
      }),
    });

    const json = await res.json();

    if (!res.ok) {
      setData({
        error: json.error || "Something went wrong, please try again later.",
      });
    } else {
      setData({ data: json.data });
      setTimeout(() => setData(null), 5000);
    }

    setLoading(false);
  };

  return (
    <div className="w-[928px] mx-auto pt-48 pb-24 text-2xl" id="contact">
      <h3 className="mb-16 text-dark font-bold font-kufam text-5xl">
        Get in Touch
      </h3>

      <form
        onSubmit={handleSendEmail}
        className="flex flex-col bg-white rounded-xl drop-shadow-sm p-16 gap-16"
      >
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

          <input type="hidden" name="_gotcha" className="hidden" />
        </div>
        <button
          className={`text-white text-2xl font-bold w-72 bg-dark text-center py-4 rounded-[18px] leading-[100%] self-center cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed ${
            loading ? "" : "cta-button"
          }`}
          disabled={loading}
        >
          {loading ? "Sending Email..." : "Let's Talk"}
        </button>

        <div
          className="g-recaptcha flex self-center"
          data-sitekey={captchaKey}
          data-callback="recaptchaCallback"
        ></div>

        <span className="text-red text-center">{data?.error}</span>
        <span className="text-green text-center">{data?.data}</span>
      </form>

      <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script>
    </div>
  );
}
