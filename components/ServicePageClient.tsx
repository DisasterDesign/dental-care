'use client';

import { motion } from 'framer-motion';
import { Calendar, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import GalleryImage from '@/components/GalleryImage';
import { getServiceBySlug, services } from '@/lib/services';
import { getServiceImages } from '@/lib/gallery';

interface ServicePageClientProps {
  slug: string;
}

export default function ServicePageClient({ slug }: ServicePageClientProps) {
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1A2B3C] mb-4">השירות לא נמצא</h1>
          <Link href="/" className="text-[#26BEFF] hover:underline">
            חזרה לדף הבית
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <Header />
      <main className="relative z-10 pt-32 pb-20">
        {/* Hero Section */}
        <section className="container-custom mb-16">
          <motion.div
            className="glass-card-lg p-8 md:p-12 lg:p-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Icon */}
              <motion.div
                className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#26BEFF] to-[#9B6AF1] flex items-center justify-center flex-shrink-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              >
                <Icon className="w-16 h-16 md:w-20 md:h-20 text-white" />
              </motion.div>

              {/* Content */}
              <div className="text-center lg:text-right flex-1">
                <motion.h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2B3C] mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {service.title}
                </motion.h1>
                <motion.p
                  className="text-lg md:text-xl text-[#6B7280] mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {service.fullDescription}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <a
                    href="https://wa.me/972525212118"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#26BEFF] to-[#9B6AF1] text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                  >
                    <Calendar className="w-5 h-5" />
                    {service.ctaText}
                  </a>
                  <a
                    href="tel:074-740-22-33"
                    className="px-6 py-3 rounded-xl bg-white/50 backdrop-blur-md border border-white/60 text-[#1A2B3C] font-medium flex items-center justify-center gap-2 hover:bg-white/70 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    התקשרו עכשיו
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="container-custom mb-16">
          <motion.div
            className="glass-card p-8 md:p-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B3C] mb-8 text-center">
              מה כולל השירות?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/30 backdrop-blur-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <CheckCircle className="w-6 h-6 text-[#26BEFF] flex-shrink-0" />
                  <span className="text-[#1A2B3C] font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Gallery Section */}
        <section className="container-custom mb-16">
          <motion.div
            className="glass-card p-8 md:p-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B3C] mb-8 text-center">
              מהמרפאה שלנו
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {getServiceImages(slug).map((img, index) => (
                <GalleryImage
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  aspectRatio="video"
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Other Services */}
        <section className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B3C] mb-8 text-center">
              שירותים נוספים
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {services
                .filter(s => s.slug !== slug)
                .slice(0, 4)
                .map((otherService) => {
                  const OtherIcon = otherService.icon;
                  return (
                    <Link
                      key={otherService.slug}
                      href={`/services/${otherService.slug}`}
                      className="glass-card p-4 text-center hover:scale-105 transition-transform group"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#26BEFF]/20 to-[#9B6AF1]/20 flex items-center justify-center group-hover:from-[#26BEFF]/40 group-hover:to-[#9B6AF1]/40 transition-colors">
                        <OtherIcon className="w-6 h-6 text-[#26BEFF]" />
                      </div>
                      <h3 className="text-sm font-medium text-[#1A2B3C]">
                        {otherService.title}
                      </h3>
                    </Link>
                  );
                })}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 text-[#26BEFF] hover:underline font-medium"
              >
                לכל השירותים
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
