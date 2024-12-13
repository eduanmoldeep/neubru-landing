export const Contact = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-neubrutalism-red text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-grotesk font-bold mb-12">Get in Touch</h2>
        <form className="max-w-2xl space-y-6">
          <div className="space-y-2">
            <label className="text-lg font-medium">Name</label>
            <input
              type="text"
              className="w-full p-4 text-black neu-border bg-white"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-lg font-medium">Email</label>
            <input
              type="email"
              className="w-full p-4 text-black neu-border bg-white"
              placeholder="your@email.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-lg font-medium">Message</label>
            <textarea
              className="w-full p-4 text-black neu-border bg-white min-h-[150px]"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="neu-border bg-black text-white px-8 py-4 hover:translate-x-1 hover:-translate-y-1 transition-transform"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};