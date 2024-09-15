import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailJs from "@emailjs/browser";

const Contact = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const form = useRef<HTMLFormElement>(null);

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // console.log({ inputTitle, inputEmail, inputContent });
    if (
      inputTitle.trim() === "" ||
      inputEmail.trim() === "" ||
      inputContent.trim() === ""
    ) {
      setError("※全ての項目を入力してください。");
      setIsLoading(false);
      return;
    }

    if (form.current) {
      try {
        // メール送信機能
        await emailJs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          }
        );

        console.log("SUCCESS");
        alert("メールを送信しました🚀");
      } catch (error) {
        console.error("FAILED...", error);
        setError("メール送信に失敗しました。もう一度お試しください。");
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
      setError("フォームが利用できません");
      console.error("Form is not available");
    }
  };

  return (
    <section id="contact" ref={ref} className="lg:py-14 py-2">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center space-y-6 lg:max-w-[65rem] mx-auto px-4"
      >
        <motion.h2
          className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl lg:leading-[3.5rem] font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Contact Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:text-xl text-sm lg:leading-8"
        >
          Contact Me! We are waiting for your messages! Thank you for watching!
        </motion.p>

        {/* form section */}
        <div className="">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="space-y-5 text-left max-w-[40rem] mx-auto"
          >
            <div className="mt-4">
              <label htmlFor="title" className="font-medium">
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="ex. Web Development Advice"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                onChange={(e) => setInputTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="ex. xxxxxxx@gmail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                onChange={(e) => setInputEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" className="font-medium">
                Content
              </label>
              <textarea
                name="message"
                placeholder="ex. Please help me."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 h-[20rem]"
                onChange={(e) => setInputContent(e.target.value)}
              ></textarea>
            </div>
            {error && (
              <span className="text-red-500 font-semibold">{error}</span>
            )}
            <div>
              <button
                type="submit"
                className="border-2 border-gray-500 px-5 py-2 rounded-md hover:border-orange-300 duration-150 transition"
                disabled={isLoading}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
