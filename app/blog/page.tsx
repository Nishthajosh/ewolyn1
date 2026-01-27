import { FaRegNewspaper, FaRegClock, FaChartLine, FaUniversity, FaCheckCircle } from "react-icons/fa";

const featuredPost = {
  category: "Funding",
  title: "How to Secure MSME Funding in 2026: A Step-by-Step Guide",
  summary: "Discover the latest strategies and eligibility criteria for MSME funding in India. Learn how to prepare your documents, choose the right scheme, and maximize your approval chances.",
  readTime: "5 min read",
  image: "/logos/featured-blog.jpg", // Placeholder
};

const blogPosts = [
  {
    category: "Registration",
    title: "Company Registration: What Every Founder Should Know",
    desc: "A practical guide to registering your business in India, including compliance tips and common pitfalls.",
    readTime: "4 min read",
    icon: <FaUniversity className="text-xl text-blue-500" />,
  },
  {
    category: "Compliance",
    title: "GST & Tax Compliance Simplified for Startups",
    desc: "Understand the basics of GST, tax filings, and how to stay compliant as your business grows.",
    readTime: "3 min read",
    icon: <FaChartLine className="text-xl text-emerald-500" />,
  },
  {
    category: "MSME",
    title: "Top Government Schemes for MSMEs in 2026",
    desc: "Explore the most beneficial government schemes and how to apply for them effectively.",
    readTime: "6 min read",
    icon: <FaRegNewspaper className="text-xl text-blue-400" />,
  },
  {
    category: "Digital",
    title: "Digital Solutions to Accelerate Business Growth",
    desc: "Leverage technology for marketing, operations, and customer engagement in the digital era.",
    readTime: "5 min read",
    icon: <FaChartLine className="text-xl text-emerald-400" />,
  },
];

const categories = ["Funding", "Registration", "Compliance", "MSME", "Digital"];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-emerald-50">
      {/* BLOG HERO */}
      <section className="py-16 px-4 md:px-0 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">Insights & Business Knowledge Hub</h1>
        <p className="text-lg text-blue-800/80 mb-8 max-w-2xl mx-auto">
          Latest updates, guides, and expert insights on business registrations, funding, compliance, and growth.
        </p>
      </section>

      {/* FEATURED BLOG POST */}
      <section className="max-w-4xl mx-auto mb-12 px-4">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-400/30 to-blue-400/20 flex flex-col md:flex-row items-stretch group transition-all duration-300">
          <div className="flex-1 p-8 flex flex-col justify-center relative z-10">
            <span className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1 rounded-full mb-3 text-xs animate-fade-in">{featuredPost.category}</span>
            <h2 className="text-2xl font-bold text-blue-900 mb-2 animate-fade-in delay-100">{featuredPost.title}</h2>
            <p className="text-blue-800/80 mb-4 animate-fade-in delay-200">{featuredPost.summary}</p>
            <div className="flex items-center gap-3 text-sm text-slate-500 animate-fade-in delay-300">
              <FaRegClock /> {featuredPost.readTime}
            </div>
            <a href="#" className="mt-6 inline-block bg-gradient-to-r from-emerald-400 to-blue-600 text-white font-semibold px-6 py-2 rounded-full shadow hover:from-emerald-500 hover:to-blue-700 hover:scale-105 transition animate-fade-in delay-400 focus:outline-none focus:ring-2 focus:ring-emerald-400">Read More</a>
          </div>
          <div className="flex-1 min-h-[220px] bg-slate-200 flex items-center justify-center relative overflow-hidden">
            {/* Placeholder for image */}
            <span className="text-blue-400 font-bold z-10">[Image]</span>
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200/40 to-blue-200/30 rounded-[2.5rem] scale-110 group-hover:scale-100 transition-all duration-500" />
          </div>
          {/* Decorative floating shape */}
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-emerald-200/30 rounded-full blur-2xl z-0" />
        </div>
      </section>

      {/* BLOG FILTERS & SEARCH */}
      <section className="max-w-4xl mx-auto mb-8 px-4 flex flex-col md:flex-row items-center gap-4">
        <nav className="flex gap-2 flex-wrap" aria-label="Blog categories">
          {categories.map((cat) => (
            <button key={cat} className="px-4 py-2 rounded-full bg-white shadow text-blue-700 font-medium hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition text-sm" aria-label={`Filter by ${cat}`} tabIndex={0}>
              {cat}
            </button>
          ))}
        </nav>
        <input type="text" placeholder="Search blog..." aria-label="Search blog" className="flex-1 rounded-full border border-blue-200 px-4 py-2 focus:ring-2 focus:ring-emerald-400 focus:outline-none bg-white shadow" />
        <select className="rounded-full border border-blue-200 px-4 py-2 bg-white shadow text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" aria-label="Sort blog posts">
          <option>Sort by Latest</option>
          <option>Sort by Popular</option>
        </select>
      </section>

      {/* BLOG LISTING GRID */}
      <section className="max-w-6xl mx-auto mb-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <div
              key={post.title}
              className={`relative flex flex-col bg-white rounded-[2.5rem] shadow-xl p-6 transition hover:scale-[1.03] hover:shadow-2xl group ${idx % 2 === 0 ? 'h-64' : 'h-80'} overflow-hidden`}
              tabIndex={0}
              aria-label={post.title}
            >
              <div className="flex items-center gap-2 mb-2">
                {post.icon}
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">{post.category}</span>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-1 group-hover:underline transition">{post.title}</h3>
              <p className="text-slate-600 text-sm mb-4 flex-1">{post.desc}</p>
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                <FaRegClock /> {post.readTime}
              </div>
              <a href="#" className="inline-block text-emerald-600 font-semibold hover:underline focus:underline transition">Read More</a>
              {/* Decorative floating shape */}
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-tr from-emerald-200 to-blue-200 rounded-full blur-xl opacity-60 -z-10 group-hover:scale-110 transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER SUBSCRIPTION */}
      <section className="max-w-2xl mx-auto mb-16 px-4">
        <div className="rounded-3xl bg-white/60 shadow-xl p-8 flex flex-col items-center backdrop-blur-md" style={{backdropFilter:'blur(8px)'}}>
          <h4 className="text-xl font-bold text-blue-900 mb-2">Subscribe for Updates</h4>
          <p className="text-blue-800/80 mb-4 text-center">Get the latest business insights and guides delivered to your inbox.</p>
          <form className="w-full flex flex-col sm:flex-row gap-3 items-center">
            <input type="email" required placeholder="Your Email Address" className="flex-1 rounded-full border border-blue-200 px-4 py-3 focus:ring-2 focus:ring-emerald-400 focus:outline-none bg-white shadow" />
            <button type="submit" className="bg-gradient-to-r from-emerald-400 to-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:from-emerald-500 hover:to-blue-700 hover:scale-105 transition">Subscribe</button>
          </form>
        </div>
      </section>

      {/* BLOG CTA STRIP */}
      <section className="py-10 px-4 flex flex-col items-center">
        <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 text-center">Have questions after reading? Talk to our experts.</h3>
        <a href="/contact" className="bg-gradient-to-r from-emerald-400 to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:from-emerald-500 hover:to-blue-700 hover:scale-105 transition text-lg">Contact Our Team</a>
      </section>
    </main>
  );
}
