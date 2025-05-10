import React from "react";
import { motion } from "framer-motion";
import content from "../data/aboutContent.json";
import CountUp from 'react-countup';




export default function AboutUs() {
   const { hero, mission, vision, history, impact, team } = content;

   return (
      <main className="bg-white text-gray-800 scroll-smooth">
      
         {/* Hero Section */}
         <section className="bg-gradient-to-br from-indigo-800 to-indigo-600 text-white py-24 text-center px-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
               <h1 className="text-4xl sm:text-5xl font-bold mb-4">{hero.title}</h1>
               <p className="text-lg max-w-2xl mx-auto">{hero.description}</p>
            </motion.div>
         </section>

         {/* Content Section */}
         <section className="max-w-6xl mx-auto py-16 px-4 space-y-20">
            {/* Mission & Vision */}
            <motion.div
               className="grid md:grid-cols-2 gap-12"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               transition={{ staggerChildren: 0.3 }}
            >
               <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
                  <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Our Mission</h2>
                  <p className="leading-relaxed">{mission}</p>
               </motion.div>
               <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
                  <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Our Vision</h2>
                  <p className="leading-relaxed">{vision}</p>
               </motion.div>
            </motion.div>

            {/* History */}
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7 }}
            >
               <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Our Journey</h2>
               <p className="leading-relaxed">{history}</p>
            </motion.div>

            {/* Impact */}
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
               <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">Our Impact</h2>
               <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                  {impact.map((item, index) => (
                     <div key={index}>
                        <p className="text-3xl font-bold text-indigo-600">
                           <CountUp
                              end={parseInt(item.value.replace(/[^\d]/g, ""), 10)}
                              duration={2}
                              suffix={item.value.includes('+') ? '+' : ''}
                           />
                        </p>
                        

                        <p className="text-sm text-gray-700">{item.label}</p>
                     </div>
                  ))}
               </div>

            </motion.div>

            {/* Team */}
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
               <h2 className="text-2xl font-semibold text-indigo-700 mb-8 text-center">Meet Our Team</h2>
               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {team.map((member, index) => (
                     <div key={index} className="p-6 border rounded-md shadow hover:shadow-md transition text-center">
                        <div className="h-32 w-32 mx-auto rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-3xl font-bold">
                           {member.name[0]}
                        </div>
                        <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                        <p className="text-sm text-gray-600">{member.role}</p>
                     </div>
                  ))}
               </div>
            </motion.div>

            {/* CTA */}
            <motion.section
               className="text-center bg-indigo-50 p-10 rounded-md shadow mt-12"
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
               <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Be a Part of the Change</h2>
               <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
                  Every child taught, every family healed, every community empowered — it starts with people like you.
               </p>
               <a
                  href="/contact"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition font-medium"
               >
                  Get Involved
               </a>
            </motion.section>
         </section>
      
      </main>
   );
}
