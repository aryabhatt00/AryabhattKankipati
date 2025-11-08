// © 2025 Aryabhatt Narasimha Rao Kankipati | GitHub: @aryabhatt00 | LinkedIn: aryabhatt-narasimha-rao-kankipati
// Built with ❤️ using React, Tailwind CSS, and Framer Motion

"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Loader2, CheckCircle, Terminal } from "lucide-react";

export default function Contact() {
  const [step, setStep] = useState(0);
  const [botMessage, setBotMessage] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [typing, setTyping] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const typingRef = useRef(null);

  const assistantName = "Natasha";

  const baseQuestions = [
    `Hey, I'm ${assistantName} — Arya's engineering assistant. What should I call you?`,
    `Got it! Could you share your contact email so Arya can reach out?`,
    `Awesome. What would you like to share with Arya?`,
  ];

  const getQuestion = (index) => {
    if (index === 1 && form.name)
      return `Got it, ${form.name}! Could you share your contact email so Arya can reach out?`;
    return baseQuestions[index] || "";
  };

  // 🧠 Typing Effect
  useEffect(() => {
    if (sent || step >= baseQuestions.length) return;

    const message = getQuestion(step);
    if (!message || typeof message !== "string") return;

    if (typingRef.current) clearTimeout(typingRef.current);

    let i = 0;
    const bufferRef = { current: "" };
    setTyping(true);
    setBotMessage("");

    typingRef.current = setTimeout(function type() {
      if (i >= message.length) {
        setTyping(false);
        return;
      }

      bufferRef.current += message.charAt(i);
      setBotMessage(bufferRef.current);
      i++;

      const delay = [".", ",", "!", "?"].includes(message[i - 1]) ? 220 : 35;
      typingRef.current = setTimeout(type, delay);
    }, 150);

    return () => clearTimeout(typingRef.current);
  }, [step]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleNext = (e) => {
    e.preventDefault();
    if (typing) return;
    if (step === 0 && !form.name.trim()) return;
    if (step === 1 && !form.email.trim()) return;
    if (step < 2) setStep((prev) => prev + 1);
    else handleSubmit();
  };

  const handleSubmit = () => {
    setLoading(true);

    fetch("https://formsubmit.co/ajax/kankipatiarya@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === "true" || data.success === true) {
          setSent(true);
        } else {
          alert("Something went wrong: " + data.message);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("FormSubmit error:", err);
        setLoading(false);
        alert("Error sending message.");
      });
  };

  const resetConversation = () => {
    setStep(0);
    setForm({ name: "", email: "", message: "" });
    setBotMessage("");
    setTyping(false);
    setSent(false);
  };

  return (
    <section
      id="contact"
      className="relative z-[5] w-full px-6 sm:px-10 md:pl-20 md:pr-36 pt-6 pb-32 flex flex-col justify-start text-left space-y-6"
    >
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20 blur-[100px]" />
      </div>

      {/* Title */}
      <motion.h2
        className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text text-center flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Chat with Natasha 💬
      </motion.h2>

      {/* Chat + Form card */}
      <div
        className="
          relative z-10
          flex flex-col md:flex-row items-stretch justify-center
          w-full max-w-5xl mx-auto
          rounded-3xl
          bg-gradient-to-br from-zinc-900/70 to-indigo-950/30
          border border-indigo-800/40
          shadow-[0_0_40px_rgba(99,102,241,0.3)]
          backdrop-blur-2xl
          overflow-hidden overflow-x-hidden
          px-2 sm:px-4
        "
      >
        {/* Natasha Chat Panel */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-between relative">
          <div className="absolute top-16 left-12 w-[250px] h-[250px] bg-gradient-to-br from-indigo-500/20 via-purple-400/20 to-pink-400/10 blur-[90px] rounded-full animate-pulse" />

          <div className="flex-1 space-y-4 relative z-10">
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="relative bg-gradient-to-br from-indigo-800/40 to-purple-700/30 text-gray-100 px-5 py-4 rounded-2xl shadow-md border border-indigo-700/30 w-fit"
                >
                  <div className="flex items-start gap-3">
                    <Terminal className="w-4 h-4 text-indigo-400 mt-1" />
                    <p>{botMessage}</p>
                    {typing && (
                      <motion.span
                        className="inline-block w-2 h-4 ml-1 bg-gray-300 rounded-sm"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-gray-300 text-lg mt-10 text-center"
                >
                  <CheckCircle className="text-green-400 w-10 h-10 mb-3 mx-auto" />
                  <p>
                    Natasha: “Your message has been logged successfully in Arya’s
                    workspace. He’ll connect soon.” ⚙️
                  </p>
                  <motion.button
                    onClick={resetConversation}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-6 py-2 bg-gradient-to-r from-pink-500 to-indigo-500 text-white rounded-full text-sm font-medium shadow-md hover:shadow-pink-500/40 transition-all"
                  >
                    Start New Chat
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {typing && (
            <div className="text-xs text-gray-400 mt-6">
              <p>{assistantName} is typing...</p>
            </div>
          )}
        </div>

        {/* Form Side */}
        {!sent && (
          <div className="w-full md:w-1/2 p-6 sm:p-8 border-t md:border-t-0 md:border-l border-indigo-800/40 bg-zinc-950/40 md:rounded-tr-3xl md:rounded-br-3xl">
            <form onSubmit={handleNext} className="flex flex-col gap-6 relative z-[20]">
              {step >= 0 && (
                <motion.div
                  key="name"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className={step > 0 ? "opacity-60" : ""}
                >
                  <label className="text-sm text-gray-400">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    disabled={step > 0}
                    placeholder="Enter your name"
                    required
                    className="w-full bg-black/20 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all text-gray-200"
                  />
                </motion.div>
              )}
              {step >= 1 && (
                <motion.div
                  key="email"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className={step > 1 ? "opacity-60" : ""}
                >
                  <label className="text-sm text-gray-400">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    disabled={step > 1}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-black/20 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all text-gray-200"
                  />
                </motion.div>
              )}
              {step >= 2 && (
                <motion.div
                  key="message"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <label className="text-sm text-gray-400">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Your message..."
                    required
                    className="w-full bg-black/20 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all resize-none text-gray-200"
                  />
                </motion.div>
              )}

              {step < 2 ? (
                <motion.button
                  type="button"
                  onClick={handleNext}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="self-end flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-6 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-pink-500/30 transition-all"
                >
                  <Mail size={16} /> Next
                </motion.button>
              ) : (
                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="self-end flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-6 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-pink-500/30 transition-all disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin w-4 h-4" /> Sending...
                    </>
                  ) : (
                    <>
                      <Mail size={16} /> Send
                    </>
                  )}
                </motion.button>
              )}
            </form>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="text-xs text-gray-500 text-center mt-12">
        © 2025 Aryabhatt Kankipati
      </footer>
    </section>
  );
}

// End of Contact.jsx — © Arya Kankipati, 2025
