import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

const TeamSection = () => {
  const teamMembers = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: 'Person 1',
      designation: 'Chief Executive Officer',
      src: '/jurica-koletic-7YVZYZeITc8-unsplash.jpg'
    },
    {
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: 'Person 2',
      designation: 'Chief Technology Officer',
      src: '/jurica-koletic-7YVZYZeITc8-unsplash.jpg'
    },
    {
      quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: 'Person 3',
      designation: 'Head of Research',
      src: '/jurica-koletic-7YVZYZeITc8-unsplash.jpg'
    },
    {
      quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      name: 'Person 4',
      designation: 'Lead Software Engineer',
      src: '/jurica-koletic-7YVZYZeITc8-unsplash.jpg'
    },
    {
      quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
      name: 'Person 5',
      designation: 'Clinical Director',
      src: '/jurica-koletic-7YVZYZeITc8-unsplash.jpg'
    },
    {
      quote: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt. Explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      name: 'Person 6',
      designation: 'Product Manager',
      src: '/jurica-koletic-7YVZYZeITc8-unsplash.jpg'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our diverse team of medical professionals, engineers, and researchers are united in our mission to revolutionize healthcare.
          </p>
        </motion.div>

        <AnimatedTestimonials 
          testimonials={teamMembers} 
          autoplay={true}
          className="max-w-6xl"
        />
      </div>
    </section>
  );
};

export default TeamSection;
