import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState<'default' | 'logo-hover'>('default');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleSetCursorType = (e: any) => {
      setCursorType(e.detail || 'default');
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('setCursorType', handleSetCursorType as EventListener);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('setCursorType', handleSetCursorType as EventListener);
    };
  }, []);

  const text = "Hover on Logo to See Category • ";

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[10000] flex items-center justify-center w-0 h-0 ${cursorType === 'default' ? 'mix-blend-difference' : ''}`}
        animate={{ 
          x: mousePosition.x, 
          y: mousePosition.y,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {cursorType === 'default' ? (
            <motion.div
              key="default"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="w-4 h-4 bg-brand-magenta rounded-full"
            />
          ) : (
            <motion.div
              key="logo-hover"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="relative flex items-center justify-center"
            >
              {/* Big Circle (Static) */}
              <div className="w-32 h-32 border-2 border-[#FCF640] rounded-full bg-[#FCF640]/10 backdrop-blur-sm shadow-[0_0_20px_rgba(252,246,64,0.2)]" />
              
              {/* Rotating Text (Outside) */}
              <motion.div
                className="absolute w-48 h-48 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
                  <path
                    id="circlePath"
                    d="M 60, 60 m -46, 0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
                    fill="transparent"
                  />
                  <text className="text-[7px] fill-[#FCF640] font-bold uppercase tracking-[0.3em]">
                    <textPath xlinkHref="#circlePath" startOffset="0%">
                      {text}{text}
                    </textPath>
                  </text>
                </svg>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Outer Ring (Only in default mode) */}
      <AnimatePresence>
        {cursorType === 'default' && (
          <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-brand-magenta pointer-events-none z-[9999] mix-blend-difference"
            animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.5 }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
