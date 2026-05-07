import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

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
  return (
    <section className="py-24 px-6 bg-brand-off-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-8xl md:text-9xl font-black text-black/5 leading-none absolute -translate-y-12 select-none pointer-events-none font-display">
               Blogs
            </h2>
            <div className="relative pt-12">
               <span className="text-brand-magenta font-bold uppercase tracking-widest text-sm">Insights</span>
               <h3 className="text-5xl font-black tracking-tighter">Latest Updates</h3>
            </div>
          </div>
          <button className="text-brand-purple font-black uppercase tracking-widest flex items-center space-x-2 group">
             <span>View All News</span>
             <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
             <motion.article 
               key={blog.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group cursor-pointer"
             >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-6 bg-zinc-200">
                   <img 
                     src={blog.image} 
                     alt={blog.title} 
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                   />
                   <div className="absolute top-4 left-4 bg-brand-yellow px-3 py-1 text-[10px] font-black uppercase tracking-widest text-black">
                      {blog.tag}
                   </div>
                </div>
                <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">{blog.date}</p>
                <h4 className="text-2xl font-black leading-tight group-hover:text-brand-magenta transition-colors line-clamp-2">
                   {blog.title}
                </h4>
                <div className="mt-6 flex items-center font-black text-xs uppercase tracking-widest space-x-2 border-b-2 border-transparent group-hover:border-brand-magenta w-fit transition-all pb-1">
                   <span>Read More</span>
                   <ArrowRight size={14} />
                </div>
             </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
