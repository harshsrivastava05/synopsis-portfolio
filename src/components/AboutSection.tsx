import React from 'react';
import { motion } from 'framer-motion';
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[60vw] h-[40vw] bg-gradient-to-br from-blue-800/30 via-blue-400/10 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6 drop-shadow-lg">
            About Synopsis Medical
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] transition-colors duration-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Suspendisse potenti. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.
          </p>
        </motion.div>
        <FeaturesSectionWithHoverEffects />
      </div>
    </section>
  );
};

export default AboutSection;
