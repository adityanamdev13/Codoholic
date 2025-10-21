import React, { useState } from "react";
import { motion } from "framer-motion";
import Banner from "../components/Banner";
import {
  FaShieldAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaUserCheck,
  FaUserSecret,
  FaBalanceScale,
  FaHandsHelping,
  FaChartLine,
  FaCheckCircle,
  FaCogs,
  FaChild,
  FaSyncAlt,
} from "react-icons/fa";
import { LuCheckCheck } from "react-icons/lu";
import Accordion from "../components/Accordian";



const PrivacyPolicy = () => {
  return (
    <div>
      <Banner BreadCrumb="Privacy Policy" title="Privacy Policy" />

      <div className="flex flex-col justify-center text-lg">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 mb-8 text-center"
        >
          <strong>Last Updated:</strong>{" "}
          {new Date().toLocaleString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </motion.p>

        <div className="px-4 md:px-16">
          {/* Intro */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="p-6 rounded-2xl border border-gray-200 shadow-sm bg-white">
              <p className="text-gray-700 leading-relaxed">
                Welcome to{" "}
                <span className="font-medium">
                  <span className="text-[#E67817]">Co</span>doh
                  <span className="relative">
                    <LuCheckCheck
                      strokeWidth={2}
                      size={8}
                      color="#2F80ED"
                      className="absolute top-0.5 left-0"
                    />
                    o
                  </span>
                  lic
                </span>
                . Your privacy is important to us. This Privacy Policy explains
                how we collect, use, disclose, and protect your personal
                information when you access or use our website, digital
                services, or learning platforms. By using our services, you
                agree to the practices described in this policy.
              </p>
              <br />
              <p className="text-gray-700 leading-relaxed">
                This policy complies with applicable data protection laws,
                including the Information Technology Act, 2000, and its
                associated rules on reasonable security practices and
                procedures. We ensure your data is handled ethically, securely,
                and transparently at all times.
              </p>
            </div>
          </motion.section>

          {/* Core Privacy Principles */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Privacy Principles
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <FaBalanceScale />,
                  title: "Transparency",
                  text: "We clearly explain what data we collect and how we use it.",
                },
                {
                  icon: <FaShieldAlt />,
                  title: "Security",
                  text: "We apply encryption and strict security protocols.",
                },
                {
                  icon: <FaHandsHelping />,
                  title: "Consent",
                  text: "We collect and use your data only with your permission.",
                },
                {
                  icon: <FaUserSecret />,
                  title: "Confidentiality",
                  text: "Your personal information is never shared without your consent.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white transition-all"
                >
                  <div className="flex flex-col w-full">
                    <div className="md:text-4xl text-3xl text-[#E67817] mb-4 flex justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-xl text-center font-semibold mb-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-center text-sm">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Data Handling Steps */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              How We Handle Your Data
            </h2>
            <ol className="space-y-6 mt-6">
              {[
                {
                  step: 1,
                  title: "Data Collection",
                  desc: "We collect only essential data required for communication, analytics, and improving user experience.",
                },
                {
                  step: 2,
                  title: "Data Storage",
                  desc: "Your data is stored on secure, encrypted servers within trusted environments.",
                },
                {
                  step: 3,
                  title: "Data Usage",
                  desc: "We use your information solely to deliver services, personalize your learning experience, and enhance our platform.",
                },
                {
                  step: 4,
                  title: "Data Deletion",
                  desc: "You may request permanent deletion of your personal data at any time by contacting our support team.",
                },
              ].map((s, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="flex gap-4 items-center bg-gray-50 rounded-xl p-4 border border-gray-200 shadow-sm"
                >
                  <div className="bg-[#E67817] text-white w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full font-bold text-lg">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {s.title}
                    </h4>
                    <p className="text-gray-700 text-sm">{s.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </motion.section>

          {/* Accordion Sections */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Detailed Information
            </h2>
            <Accordion
              title={
                <div className="flex items-center gap-3">
                  <FaInfoCircle className="text-[#E67817] text-2xl" /> Information We
                  Collect
                </div>
              }
              defaultOpen
            >
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Details:</strong> Such as your full name,
                  email address, phone number, and any other details shared
                  during registration, inquiries, or purchases.
                </li>
                <li>
                  <strong>Usage Data:</strong> Includes your interactions with
                  our website, pages visited, time spent, IP address, browser
                  type, and device information.
                </li>
                <li>
                  <strong>Cookies and Tracking:</strong> We use cookies and
                  analytics tools to improve user experience and track website
                  performance.
                </li>
                <li>
                  <strong>Communication Data:</strong> Messages, feedback, or
                  support requests you send to us via forms, email, or chat.
                </li>
              </ul>
            </Accordion>

            <Accordion
              title={
                <div className="flex items-center gap-3 ">
                  <FaUserCheck className="text-[#E67817] text-2xl" /> How We Use Your
                  Information
                </div>
              }
            >
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  To provide and personalize our learning and career-related
                  services.
                </li>
                <li>
                  To respond to inquiries, support requests, and communicate
                  with you.
                </li>
                <li>
                  To send relevant updates, promotional materials, and
                  newsletters (optional).
                </li>
                <li>
                  To analyze website performance and enhance functionality
                  through analytics.
                </li>
                <li>
                  To comply with legal obligations and prevent fraudulent or
                  unauthorized activities.
                </li>
              </ul>
            </Accordion>

            <Accordion
              title={
                <div className="flex items-center gap-3">
                  <FaShieldAlt className="text-[#E67817] text-2xl" /> Security Measures
                </div>
              }
            >
              <p className="text-gray-700">
                We maintain strong administrative, technical, and physical
                safeguards to protect your data. This includes SSL encryption,
                firewalls, access control, and continuous monitoring to prevent
                unauthorized access or misuse.
              </p>
            </Accordion>
          </motion.section>

          {/* Children’s Privacy Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-14"
          >
            <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaChild className="text-[#E67817] text-2xl" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Children’s Privacy
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our website and services are not directed toward children under
                the age of 13. We do not knowingly collect or solicit personal
                information from minors. If we discover that we have
                inadvertently collected personal data from a child under 13, we
                will take immediate steps to delete that information. Parents or
                guardians who believe their child has provided us data can
                contact us directly to request deletion.
              </p>
            </div>
          </motion.section>

          {/* Data Lifecycle */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Your Data Lifecycle
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <FaCogs />,
                  title: "Collection",
                  text: "We collect minimal, purpose-driven data only.",
                },
                {
                  icon: <FaChartLine />,
                  title: "Processing",
                  text: "Your data is processed ethically and used for stated purposes.",
                },
                {
                  icon: <FaShieldAlt />,
                  title: "Storage",
                  text: "All personal information is securely stored with encryption and limited access.",
                },
                {
                  icon: <FaCheckCircle />,
                  title: "Deletion",
                  text: "Your data is permanently deleted when no longer needed or upon your request.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white border border-gray-200 p-6 rounded-xl text-center shadow-sm"
                >
                  <div className="text-3xl text-[#E67817] mb-3 flex justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Changes to This Policy */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-14"
          >
            <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaSyncAlt className="text-[#E67817] text-2xl" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Changes to This Policy
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We may occasionally update this Privacy Policy to reflect
                changes in our practices, legal requirements, or service
                features. Any updates will be posted on this page with a revised
                “Last Updated” date. We encourage you to review this policy
                periodically to stay informed about how we protect your
                information.
              </p>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-16 border-t border-gray-300 mt-14"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy, data
              handling, or your personal information, please reach out to us at:
            </p>
            <div className="bg-[#E67817] text-white p-6 rounded-lg shadow-md space-y-3">
              <div className="flex items-center gap-3 text-gray-200">
                <FaEnvelope className="text-xl" />
                <span>info@codoholic.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <FaPhone className="rotate-90 text-xl" />
                <span>+91-8120544147</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <FaMapMarkerAlt className="text-xl" />
                <span>
                  85-Tirupati Avenue, Near Nakshatra Hotel, Ujjain, Madhya
                  Pradesh
                </span>
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="py-10 text-center"
          >
            <p className="text-gray-700 leading-relaxed">
              By continuing to use our website, you acknowledge that you have
              read, understood, and agreed to our Privacy Policy.
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
