// import { useState } from "react";
// import { X, Sparkles } from "lucide-react";

// export const AnnouncementBar = () => {
//   const [visible, setVisible] = useState(true);

//   if (!visible) return null;

//   return (
//     <div className="bg-foreground text-background text-center py-2 px-4 relative z-[60]">
//       <div className="container mx-auto flex items-center justify-center gap-2 text-xs font-sans tracking-wider">
//         <Sparkles className="w-3 h-3 text-primary" />
//         <span>FREE SHIPPING on orders over $75 — Use code <strong>GLOW15</strong> for 15% off</span>
//         <Sparkles className="w-3 h-3 text-primary" />
//       </div>
//       <button
//         onClick={() => setVisible(false)}
//         className="absolute right-3 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity"
//         aria-label="Close announcement"
//       >
//         <X className="w-3.5 h-3.5" />
//       </button>
//     </div>
//   );
// };
