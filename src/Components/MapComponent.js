import React from 'react';

const MapComponent = () => {
  return (
    <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-xl border">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2911.5173785084016!2d80.96899716114233!3d24.317003006077776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847306c61e4fcf%3A0x578a0f3a87731725!2sUNIQ%20COLLEGE%20AMARPATAN!5e1!3m2!1sen!2sin!4v1747217446533!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="UNIQE College Amarpatan Location"
      ></iframe>
    </div>
  );
};

export default MapComponent;
