import React from "react";

function NewsletterSignup() {
  return (
    <section className="py-16 px-8 bg-black text-white text-center">
      <h2 className="text-5xl font-bold mb-8">Stay Updated</h2>
      <p className="text-xl mb-12">
        Subscribe to our newsletter to get the latest news and exclusive offers.
      </p>
      <form className="flex flex-col md:flex-row items-center justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 w-full md:w-96 text-black text-lg"
          required
        />
        <button
          type="submit"
          className="px-8 py-2 bg-green-400 text-black font-medium text-lg hover:bg-green-500"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}

export default NewsletterSignup;
