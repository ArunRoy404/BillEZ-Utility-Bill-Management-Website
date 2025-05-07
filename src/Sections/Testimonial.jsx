import React from 'react';
import ReviewSlider from '../components/ReviewSlider/ReviewSlider';

const Testimonial = () => {

  return (
    <section className="bg-white text-black py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="font-bold opacity-70 mb-6 max-w-lg">
            Join thousands of users who trust BillEZ for fast, secure, and hassle-free utility bill payments.
          </p>
          <p className="text-gray-500 italic bg-gray-200 py-1 max-w-max px-2">
            "A smarter way to manage your bills — all in one place."
          </p>
        </div>

        <ReviewSlider></ReviewSlider>
        
      </div>
    </section>
  );
};

export default Testimonial;