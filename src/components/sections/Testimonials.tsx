import { motion } from 'framer-motion';
import { Plus, ArrowUpRight, Linkedin } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Suhel Mukadam",
    role: "Founder, U&M Design, Jodhpur",
    text: "We had an excellent experience last year, which is why we returned this year with a bigger space and a complete lifestyle setup. Our experience with WOFX has been excellent.",
    image: "/assets/Suhel Mukadam.jpg"
  },
  {
    id: 2,
    name: "Pulin Shah",
    role: "Director, Pulin Shah & Associates",
    text: "WOFX has grown into a significant platform for the industry. The quality of buyers and the networking opportunities are top-notch.",
    image: "/assets/Pulin Shah.jpg"
  },
  {
    id: 3,
    name: "Abhinav",
    role: "Lead Architect, Modern Spaces",
    text: "The response from professional visitors was overwhelming. WOFX is a must for anyone in the home and office decor space.",
    image: "/assets/Abhinav.jpg"
  },
  {
    id: 4,
    name: "Kavish",
    role: "Interior Design Consultant",
    text: "I found unique products that I haven't seen in other exhibitions. The curated profile of exhibitors is impressive.",
    image: "/assets/Kavish.jpg"
  },
  {
    id: 5,
    name: "Ranjit",
    role: "MD, Heritage Furniture",
    text: "The diversity of exhibitors and the focus on design make WOFX the premier show in India for furniture professionals.",
    image: "/assets/Ranjit.jpg"
  },
  {
    id: 6,
    name: "Anita Desai",
    role: "Lead Designer, Space & Style",
    text: "Every year we find new vendors and inspiration at WOFX. It's an essential date in our design calendar.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&h=800&fit=crop"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-purple overflow-hidden">
      <div className="w-full px-12">
        <div className="mb-16">
          <p className="text-lg font-bold uppercase tracking-widest text-[#ABD14F]">Exhibitor</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mt-2 text-white">
            Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {/* Row 1 */}
          <TestimonialCard testimonial={testimonials[0]} />
          <TestimonialCard testimonial={testimonials[1]} />
          <TestimonialCard testimonial={testimonials[2]} />

          {/* Row 2 */}
          <TestimonialCard testimonial={testimonials[3]} />
          <TestimonialCard testimonial={testimonials[4]} />

          <div className="flex flex-col w-[80%] mx-auto group">
            <div className="relative aspect-square flex items-center justify-center">
              <motion.div 
                initial="initial"
                whileHover="hover"
                variants={{
                  initial: { borderRadius: "0%", backgroundColor: "#000" },
                  hover: { 
                    borderRadius: "100%", 
                    scale: 0.95,
                    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] }
                  }
                }}
                className="relative w-full h-full flex flex-col items-center justify-center text-center p-6 cursor-pointer text-white overflow-hidden z-10"
              >
                {/* Text Layer */}
                <motion.span 
                  variants={{
                    initial: { y: 0, scale: 1 },
                    hover: { 
                      y: 0,
                      scale: 1.3,
                      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
                    }
                  }}
                  className="relative text-3xl font-black uppercase tracking-tighter leading-tight z-10 transition-colors duration-700 group-hover:text-[#ABD14F]"
                >
                  More
                </motion.span>
              </motion.div>
            </div>
            {/* Spacer to match text height of cards below image */}
            <div className="mt-6 opacity-0 pointer-events-none select-none">
              <h3 className="text-2xl font-black">Spacer</h3>
              <p className="text-base font-bold">Spacer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="flex flex-col group cursor-pointer w-[80%] mx-auto">
      <motion.div 
        className="relative aspect-square"
        initial="initial"
        whileHover="hover"
      >
        {/* Plus Icons Outside - Only visible on hover */}
        <motion.div
          variants={{
            initial: { opacity: 0, scale: 0.5, rotate: -45 },
            hover: { 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              transition: { 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1] 
              }
            }
          }}
          className="absolute inset-0 z-30 pointer-events-none"
        >
          <Plus className="absolute -top-6 -left-6 text-[#ABD14F] transition-transform duration-1000 group-hover:rotate-180" size={24} />
          <Plus className="absolute -top-6 -right-6 text-[#ABD14F] transition-transform duration-1000 group-hover:rotate-180" size={24} />
          <Plus className="absolute -bottom-6 -left-6 text-[#ABD14F] transition-transform duration-1000 group-hover:rotate-180" size={24} />
          <Plus className="absolute -bottom-6 -right-6 text-[#ABD14F] transition-transform duration-1000 group-hover:rotate-180" size={24} />
        </motion.div>

        <div className="absolute inset-0 overflow-hidden">
          {/* Initial Image with Reveal Animation */}
          {/* Unified Clip-Path Reveal Animation */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Hover View (Green Background) */}
          <motion.div 
            variants={{
              initial: { y: '100%' },
              hover: { y: 0 }
            }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="absolute inset-0 z-20 bg-[#ABD14F] p-8 flex flex-col justify-between"
          >
            <div className="mt-8">
              <h3 className="text-2xl font-black text-black leading-tight">{testimonial.name}</h3>
              <p className="text-base font-bold text-white mt-1 capitalize">{testimonial.role}</p>
              <p className="text-lg font-normal text-white leading-relaxed mt-2">
                "{testimonial.text}"
              </p>
            </div>

            <div className="self-start w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black group/icon transition-all duration-300">
              <Linkedin size={20} className="text-black group-hover/icon:text-[#ABD14F]" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Initial Text (Below Image) */}
      <div className="mt-6 transition-all duration-500 group-hover:opacity-0">
        <h3 className="text-2xl font-black text-white leading-tight tracking-tighter">{testimonial.name}</h3>
        <p className="text-base font-bold text-[#ABD14F] mt-1 capitalize tracking-tight">{testimonial.role}</p>
      </div>
    </div>
  );
}
