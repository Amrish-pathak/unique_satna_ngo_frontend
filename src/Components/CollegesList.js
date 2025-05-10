import { FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';
import content from '../data/siteContent.json';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function CollegesList() {
  const colleges = content.ngoInfo.colleges;

  if (!colleges || colleges.length === 0) {
    return (
      <section className="py-12 bg-gray-50 text-center text-gray-500">
        <p>No institutions found.</p>
      </section>
    );
  }

  return (
    <section
      className="relative py-16 bg-cover bg-center text-gray-800"
      style={{
        backgroundImage: `url('./students.jpg')`,
        backgroundAttachment: 'fixed', // Fix the background image
        backgroundPosition: 'center center', // Keep the image centered
        backgroundSize: 'cover', // Ensure the image covers the entire section
      }}
    >
      {/* Overlay for dark background */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white drop-shadow">
          Our Institutions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {colleges.map((college, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-90 backdrop-blur-md border border-gray-200 shadow-lg rounded-xl p-6 hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              custom={index}
            >
              <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
                {college.name}
              </h3>

              <div className="flex items-center text-sm text-gray-700 mb-2">
                <FaMapMarkerAlt className="mr-2 text-indigo-500" />
                {college.location}
              </div>

              <div className="flex items-start text-sm text-gray-700">
                <FaGraduationCap className="mt-1 mr-2 text-indigo-500" />
                <span>{college.courses.join(', ')}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
