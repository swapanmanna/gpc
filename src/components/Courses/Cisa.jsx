import React from 'react';
import { Link } from 'react-router-dom';

const Cisa = () => {
  return (
    <div className="mt-[68px] bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-brand-blue text-white py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Certified Information Systems Auditor (CISA)
        </h1>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* About Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl md:text-5xl font-semibold text-brand-blue mb-4 md:mb-8">
            About the CISA Course
          </h2>
          <p className="text-gray-700 text-xl mb-4">
            Become a certified expert in information systems auditing with our CISA course. This comprehensive program prepares you for the CISA certification exam, covering IT audit, control, and assurance.
          </p>
          <p className="text-gray-700 text-xl mb-4">
            Gain expertise in assessing and evaluating IT systems, identifying risks, and ensuring compliance with industry standards.
          </p>
          <div className="bg-blue-50 border-l-4 border-brand-blue p-4 rounded">
            <p className="text-gray-800 text-xl">
              Upon completion, participants will be equipped to excel in IT auditing roles, ensuring robust system security and compliance.
            </p>
          </div>
        </section>

        {/* Course Highlights Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl md:text-5xl font-semibold text-brand-blue mb-4 md:mb-8">
            Course Highlights
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-xl space-y-2">
            <li className="marker:text-brand-blue marker:text-xl">Complete everything in recorded class itself - detailed discussion of every topic, Mock Tests, MCQs discussion</li>
            <li className="marker:text-brand-blue marker:text-xl">Get access to LMS Portal which includes recorded sessions + PPT notes + MCQs (with no validity period)</li>
            <li className="marker:text-brand-blue marker:text-xl">Get guidance from one of the best CISA faculty in India, Mr. Arpit Garg</li>
            <li className="marker:text-brand-blue marker:text-xl">Enroll with us and get our end-to-end support till you clear all your exams</li>
          </ul>
        </section>

        {/* Enrollment Section */}
        <section className="flex justify-around items-center bg-orange-100 rounded-lg shadow-lg p-8 text-center">
            <div className="flex md:flex-col">
                <h2 className="text-3xl md:text-5xl font-semibold text-brand-blue mb-4">
                    Enroll Now
                </h2>
                <p className="text-gray-700 text-2xl mb-4">
                    Enrollment Cost: <span className="font-bold">INR 19,999 + GST</span>
                </p>
            </div>
            <Link
                to="https://rzp.io/rzp/VuvF84x"
                target="_blank"
                className="inline-block bg-orange-500 text-white py-3 px-6 rounded-lg md:text-2xl font-semibold hover:bg-orange-800 transition-colors"
            >
                Join the Course
            </Link>
        </section>
      </main>
    </div>
  );
};

export default Cisa;