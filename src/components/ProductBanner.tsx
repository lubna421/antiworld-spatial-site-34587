import bannerBg from "@/assets/product-banner-bg.jpg";

const ProductBanner = () => {
  return (
    <section 
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Discover Our Collection
        </h2>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
          Explore premium products crafted with excellence
        </p>
      </div>
    </section>
  );
};

export default ProductBanner;
