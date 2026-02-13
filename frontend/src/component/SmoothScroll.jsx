import React, { useEffect, useRef } from 'react';

const SmoothScroll = ({ children }) => {
  const scrollContainer = useRef(null);

  useEffect(() => {
    // Enable smooth scrolling for the whole page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <div className="relative" ref={scrollContainer}>
      {/* Navigation dots - optional */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {React.Children.map(children, (child, index) => {
            if (child.props.id) {
              return (
                <button
                  onClick={() => scrollToSection(child.props.id)}
                  className="group flex items-center"
                  aria-label={`Scroll to ${child.props.id}`}
                >
                  <span className="w-3 h-3 bg-gray-400 rounded-full group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300"></span>
                  <span className="ml-2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {child.props.id.replace(/-/g, ' ')}
                  </span>
                </button>
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* Main content with smooth scroll sections */}
      <div className="relative">
        {React.Children.map(children, (child, index) => (
          <div
            className="scroll-section"
            style={{
              animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Add keyframe animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .scroll-section {
          opacity: 0;
          animation: slideIn 0.8s ease-out forwards;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
};

export default SmoothScroll;