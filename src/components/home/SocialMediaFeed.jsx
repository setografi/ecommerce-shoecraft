import React from "react";

const socialPosts = [
  { id: 1, image: "/path/to/post1.jpg", alt: "Post 1" },
  { id: 2, image: "/path/to/post2.jpg", alt: "Post 2" },
  { id: 3, image: "/path/to/post3.jpg", alt: "Post 3" },
  { id: 4, image: "/path/to/post4.jpg", alt: "Post 4" },
];

function SocialMediaFeed() {
  return (
    <section className="py-16 px-8 bg-zinc-900 text-white">
      <h2 className="text-5xl font-bold mb-8 text-center">
        Follow Us on Instagram
      </h2>
      <p className="text-xl mb-12 text-center">
        Stay connected with us! Check out our latest posts and tag us to be
        featured.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {socialPosts.map((post) => (
          <div key={post.id} className="relative group">
            <img
              src={post.image}
              alt={post.alt}
              className="w-full h-64 object-cover border-4 border-white"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href="#"
                className="text-lg font-bold uppercase text-white underline"
              >
                View Post
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <a
          href="https://www.instagram.com/shoecraft"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-400 text-black font-medium text-lg hover:bg-green-500"
        >
          Follow Us on Instagram
        </a>
      </div>
    </section>
  );
}

export default SocialMediaFeed;
