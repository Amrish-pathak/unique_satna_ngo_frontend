import { motion } from "framer-motion";
import { FaGraduationCap, FaGlobe, FaHome, FaBookOpen } from "react-icons/fa";

const services = [
  {
    icon: <FaGraduationCap />,
    title: "Skilled Instructors",
    desc: "Expert teachers helping students grow their digital skills.",
    delay: 0.1,
  },
  {
    icon: <FaGlobe />,
    title: "Online Classes",
    desc: "Access education from anywhere through our online programs.",
    delay: 0.3,
  },
  {
    icon: <FaHome />,
    title: "Home Projects",
    desc: "Learn by doing with project-based digital education at home.",
    delay: 0.5,
  },
  {
    icon: <FaBookOpen />,
    title: "Book Library",
    desc: "Explore a wide range of books and learning resources.",
    delay: 0.7,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md text-center p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="flex items-center justify-center mb-4 text-indigo-600 text-5xl">
                {service.icon}
              </div>
              <h5 className="text-lg font-semibold mb-2">{service.title}</h5>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
