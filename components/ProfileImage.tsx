import React, { useEffect, useState } from 'react';
import { generateProfileImage } from '../services/geminiService';

const ProfileImage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;

    const fetchImage = async () => {
      // Check local storage first to save API calls during dev
      const cached = localStorage.getItem('profile_image_cache_v1');
      if (cached) {
        setImageUrl(cached);
        setLoading(false);
        return;
      }

      const generatedUrl = await generateProfileImage();
      
      if (mounted) {
        if (generatedUrl) {
          setImageUrl(generatedUrl);
          try {
            localStorage.setItem('profile_image_cache_v1', generatedUrl);
          } catch (e) {
            console.warn("Storage full, could not cache image");
          }
        } else {
          // Fallback if API fails or no key
          setImageUrl("https://picsum.photos/400/400?grayscale"); 
        }
        setLoading(false);
      }
    };

    fetchImage();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
      {/* Decorative ring */}
      <div className="absolute inset-0 rounded-full border border-slate-200 scale-105"></div>
      
      {/* Loading State / Image */}
      <div className="w-full h-full rounded-full overflow-hidden shadow-2xl bg-slate-100 relative group">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
             <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
             <span className="ml-3 text-sm text-slate-500">Generating AI Portrait...</span>
          </div>
        ) : (
          <img 
            src={imageUrl || "https://picsum.photos/400/400"} 
            alt="Wei Xiaofan" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>

      {/* Floating Badge */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-slate-100 animate-float" style={{ animationDelay: '1s' }}>
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
           <span className="text-xs font-semibold text-slate-700">Open to Work</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
