import React from 'react';

const WaveBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
       <div className="absolute -top-[30%] -left-[20%] w-[150%] h-[150%] bg-gradient-to-br from-indigo-100/40 via-purple-100/40 to-blue-50/20 rounded-full blur-3xl animate-float"></div>
       
       <div className="absolute bottom-0 left-0 w-full h-[30vh]">
         {/* Wave 1 */}
         <div 
           className="absolute bottom-0 w-[200%] h-full opacity-40 animate-wave-slow"
           style={{
             backgroundImage: 'linear-gradient(to right, #93c5fd, #c4b5fd, #93c5fd)',
             maskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1000 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 50 C200 0 300 100 500 50 C700 0 800 100 1000 50 L1000 100 L0 100 Z\' fill=\'black\'/%3E%3C/svg%3E")',
             WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1000 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 50 C200 0 300 100 500 50 C700 0 800 100 1000 50 L1000 100 L0 100 Z\' fill=\'black\'/%3E%3C/svg%3E")',
             maskSize: '50% 100%',
             WebkitMaskSize: '50% 100%'
           }}
         />
         
         {/* Wave 2 */}
         <div 
           className="absolute bottom-0 w-[200%] h-[80%] opacity-30 animate-wave-fast"
           style={{
             backgroundImage: 'linear-gradient(to right, #818cf8, #a78bfa, #818cf8)',
             maskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1000 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 60 C250 20 350 110 500 60 C650 10 750 100 1000 60 L1000 100 L0 100 Z\' fill=\'black\'/%3E%3C/svg%3E")',
             WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1000 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 60 C250 20 350 110 500 60 C650 10 750 100 1000 60 L1000 100 L0 100 Z\' fill=\'black\'/%3E%3C/svg%3E")',
             maskSize: '50% 100%',
             WebkitMaskSize: '50% 100%',
             animationDirection: 'reverse'
           }}
         />
       </div>
    </div>
  );
};

export default WaveBackground;
