import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import photoStripsImage from "../assets/images/photo-strips.jpg";
import galleryWedding from "../assets/images/gallery-wedding.jpg";
import galleryCorporate from "../assets/images/gallery-corporate.jpg";
import galleryBirthday from "../assets/images/gallery-birthday.jpg";
import galleryGroup from "../assets/images/gallery-group.jpg";

export default function Experience() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <SectionHeader title="The Experience" subtitle="What to Expect" />
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              We believe a photo booth should be more than a box in the corner. It should be a beautiful focal point that invites guests to engage, laugh, and create art.
            </p>
          </div>

          <div className="space-y-32">
            {/* Section 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {/* Photo by Jeremy Wong Weddings on Unsplash */}
                <img 
                  src="https://pixabay.com/get/g07d4e756cee71f04544562b9ab33ee6ca5079fec4c0387a573ce4c9673d123994c5ed4674a322be8fc161597fff0f48ca9d7fa95869a7bebaa63cddfccedab74_1280.jpg" 
                  alt="Couple laughing" 
                  className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3]"
                />
              </motion.div>
              <div className="space-y-6">
                <h3 className="font-serif text-3xl font-bold">Unmatched Aesthetic</h3>
                <p className="text-muted-foreground text-lg leading-relaxed font-light">
                  Our Photoma Mini booth is handcrafted with a mid-century modern design. Featuring warm wood tones and brass accents, it seamlessly blends into the most elegant venues, from historic ballrooms to modern art galleries.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed font-light">
                  No plastic boxes or messy wires. Just pure, vintage elegance.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
              <div className="space-y-6 order-2 md:order-1">
                <h3 className="font-serif text-3xl font-bold">Studio Quality Lighting</h3>
                <p className="text-muted-foreground text-lg leading-relaxed font-light">
                  Great photos start with great light. We use professional beauty dishes and flashes to ensure every guest looks radiant. Our proprietary "Glam" filter mimics the high-end look of celebrity portraits—smoothing skin while keeping details sharp (black & white option).
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="order-1 md:order-2"
              >
                <img 
                  src={photoStripsImage}
                  alt="Custom photo strips from events" 
                  className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3]"
                />
              </motion.div>
            </div>
            
            {/* Gallery Grid */}
            <div>
              <SectionHeader title="Captured Moments" subtitle="Gallery" className="mb-12" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
                <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-lg">
                  <img src={galleryWedding} alt="Wedding guests enjoying photo booth" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-lg">
                  <img src={galleryCorporate} alt="Corporate event attendees" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-lg">
                  <img src={galleryBirthday} alt="Birthday celebration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="col-span-2 row-span-1 relative group overflow-hidden rounded-lg">
                  <img src={galleryGroup} alt="Friends posing at gala event" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
