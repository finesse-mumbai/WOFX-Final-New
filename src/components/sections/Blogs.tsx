import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';


const blogs = [
  {
    title: "Major Cooperation Signed! Worldex China & Guangdong furniture association",
    tag: "Publications",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "The Future of Smart Office Furniture in 2026",
    tag: "Latest Updates",
    date: "April 2026",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "WOFX 2026: What to expect from the Mumbai Edition",
    tag: "Event Glimpse",
    date: "March 2026",
    image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e01a?q=80&w=800&auto=format&fit=crop"
  }
];

export function Blogs() {
  const sectionRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });

  const titleY = useTransform(scrollYProgress, [0, 0.8], ["-120%", "0%"]);
  const smoothTitleY = useSpring(titleY, { stiffness: 60, damping: 20, mass: 0.4 });

  return (
    <section ref={sectionRef} className=" bg-white font-sans overflow-hidden">
      <div className="w-[90%] mx-auto border-x border-[#ABD14F] flex flex-col">
        {/* Row 1: Massive Title */}
        <div className="border-b border-t border-[#ABD14F] overflow-hidden text-center mt-28">
          <motion.h2
            style={{ y: smoothTitleY }}
            className="text-[18vw] font-black text-black leading-none tracking-tighter select-none whitespace-nowrap"
          >
            Blogs
          </motion.h2>
        </div>

        {/* Row 2: Blog Grid */}
        <div className="px-10 py-28 ">
          <div className="grid grid-cols-1 md:grid-cols-3 p-4 border-l border-[#ABD14F]">
            {blogs.map((blog, i) => (
              <motion.article
                key={blog.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`p-10 flex flex-col gap-8 items-start group cursor-pointer ${i !== 0 ? 'md:border-l' : ''} border-[#ABD14F] hover:bg-zinc-50 transition-colors duration-500`}
              >
                <motion.div
                  initial={{ borderRadius: "100%" }}
                  whileHover={{
                    borderRadius: "0%",
                    scale: 1.05
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1]
                  }}
                  className="flex-shrink-0 w-[100px] h-[100px] overflow-hidden border border-[#ABD14F]/20 bg-zinc-100"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>

                <div className="flex flex-col items-start text-left">
                  <h4 className="text-xl font-black leading-tight group-hover:text-brand-magenta transition-colors line-clamp-3 mb-6">
                    {blog.title}
                  </h4>

                  <button className="bg-[#ABD14F] text-black px-6 py-2 text-xs font-black tracking-widest capitalize hover:bg-black hover:text-[#ABD14F] transition-all duration-300">
                    Read Full
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
