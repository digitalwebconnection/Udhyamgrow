import React, { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="bg-slate-50 py-32 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 bg-white rounded-3xl p-10 md:p-16 shadow-xl shadow-slate-100 border border-slate-100">
          <h1 className="font-display font-extrabold text-4xl text-blue-950 mb-8 border-b pb-6 border-slate-100">
            Privacy Policy
          </h1>
          <div className="space-y-6 text-slate-700 leading-relaxed text-sm md:text-base">
            <p className="text-xs text-slate-400">Last updated: June 24, 2026</p>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-blue-950">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us when filling out our contact and consultation request forms. This includes your name, email address, phone number, business stage, and any message content you share with us.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-blue-950">2. How We Use Your Information</h2>
              <p>
                We use the collected information to coordinate consultation sessions, assess your eligibility for government schemes and grants, provide support, and coordinate export configurations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-blue-950">3. Information Sharing and Disclosure</h2>
              <p>
                We do not sell, lease, or share your personal information with third parties. Your details are accessed only by certified growth specialists directly involved in coordinating your business setup.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-blue-950">4. Data Security</h2>
              <p>
                We implement technical and organizational security controls to protect your personal details from unauthorized access, modification, or exposure.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-blue-950">5. Your Choices and Rights</h2>
              <p>
                You may request access to, correction of, or deletion of the personal data we hold about you by contacting us at any time.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-blue-950">6. Changes to this Policy</h2>
              <p>
                We may update our privacy policy periodically. We will post the new policy on this page with an updated "last updated" date.
              </p>
            </section>

            <section className="space-y-3 pt-6 border-t border-slate-100">
              <h2 className="text-xl font-bold text-blue-950">Contact Us</h2>
              <p>
                If you have any questions or concerns about this privacy policy, please contact us at:{' '}
                <a href="mailto:support@udhyamgrow.co.in" className="text-gold hover:underline font-semibold">
                  support@udhyamgrow.co.in
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
