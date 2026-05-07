import { motion } from 'motion/react';
import { Linkedin, Instagram, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const testimonials = [
  {
    name: "Suhel Mukadam",
    role: "Founder, U&M Design, Jodhpur",
    text: "We had an excellent experience last year, which is why we returned this year with a bigger space and a complete lifestyle setup. Our experience with WOFX has been excellent.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&fit=crop",
    color: "bg-brand-purple"
  },
  {
    name: "Amiet Barot",
    role: "President, AFMT & Managing Director, Krini Furniture",
    text: "WOFX has grown into a significant platform for the industry. The quality of buyers and the networking opportunities are top-notch.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&fit=crop",
    color: "bg-brand-magenta"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-brand-purple text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
           <span className="text-brand-light-lime font-bold uppercase tracking-widest text-sm">Exhibitor</span>
           <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mt-2">Testimonials</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={t.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`${t.color} p-10 md:p-14 relative group`}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex space-x-2">
                  <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-purple transition-all">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
              <h3 className="text-2xl font-black mb-1">{t.name}</h3>
              <p className="text-sm font-bold text-brand-light-lime uppercase mb-6">{t.role}</p>
              <p className="text-lg md:text-xl leading-relaxed text-white/80 italic font-medium">"{t.text}"</p>
            </motion.div>
          ))}
          
          <div className="bg-black/20 p-10 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-brand-magenta transition-all">
             <div className="w-24 h-24 rounded-full border-2 border-dashed border-white/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ArrowUpRight size={40} />
             </div>
             <span className="text-4xl font-black">More</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-24 px-6 relative overflow-hidden font-sans">
      {/* Background Text Overlay */}
      <h2 className="absolute bottom-0 left-0 text-[20vw] font-black text-white/[0.03] leading-none select-none -translate-x-12 translate-y-20">
        ADDRESS
      </h2>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
               <div className="flex items-center space-x-1">
                 <div className="w-10 h-10 bg-brand-light-lime flex items-center justify-center font-black text-black">W</div>
                 <div className="w-10 h-10 bg-brand-yellow flex items-center justify-center font-black text-black">O</div>
                 <div className="w-10 h-10 bg-brand-magenta flex items-center justify-center font-black text-black">F</div>
                 <div className="w-10 h-10 bg-brand-purple flex items-center justify-center font-black text-black">X</div>
               </div>
               <span className="text-3xl font-black tracking-tighter uppercase font-headline">Worldex India</span>
            </div>
            <div className="space-y-6 max-w-md">
              <div className="flex items-start space-x-4">
                <MapPin className="text-brand-light-lime shrink-0" />
                <p className="text-zinc-400 font-medium">309, Parvati Premises, Sun Mill Complex, Lower Parel (W), Mumbai - 400 013, India</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-brand-light-lime shrink-0" />
                <p className="text-zinc-400 font-medium">(+91) 022-4037-6700</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-brand-light-lime shrink-0" />
                <p className="text-zinc-400 font-medium">contactus@worldexindia.com</p>
              </div>
            </div>
          </div>

          <div>
             <h4 className="text-lg font-black mb-8 text-brand-light-lime uppercase tracking-widest">Quick Links</h4>
             <ul className="space-y-4 font-medium text-zinc-400">
               <li><a href="#" className="hover:text-white transition-colors">Exhibitor Enquiry Form</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Buyer Registration Form</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Exhibitor Profile</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Buyer Profile</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Terms and Conditions</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-lg font-black mb-8 text-brand-light-lime uppercase tracking-widest">About WOFX</h4>
             <p className="text-zinc-400 font-medium leading-relaxed mb-8">
               WOFX is a professional B2B trade show dedicated exclusively to the furniture + design industry in India.
             </p>
             <div className="flex space-x-4">
                {[Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-brand-light-lime hover:text-black transition-all">
                    <Icon size={20} />
                  </a>
                ))}
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
           <p className="text-zinc-500 text-sm font-medium">© WOFX 2026 | All Rights Reserved.</p>
           <button className="bg-brand-light-lime text-black px-10 py-4 rounded-sm font-black uppercase text-sm hover:bg-white transition-all">
              Register Now
           </button>
        </div>
      </div>
    </footer>
  );
}
