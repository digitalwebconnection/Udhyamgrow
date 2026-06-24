import React, { useEffect, useState } from "react";

/* ---------------- REVIEWS DATA ---------------- */
const reviews = [
  {
    quote: "Very helpful for shortlisting government grants and securing Startup India recognition. We got 80-IAC approval with ease!",
    name: "Ishita Gupta, Founder of Agritech Startup",
    rating: 5,
  },
  {
    quote: "The team is super patient and helped us register our Private Limited Company and obtain our ISO & ZED certifications.",
    name: "Dhriti Ahuja, Co-founder of MedTech Solutions",
    rating: 5,
  },
  {
    quote: "I found their consultation sessions very insightful. They matched us with the perfect Seed Fund Scheme.",
    name: "Rohan Patel, Tech Entrepreneur",
    rating: 4,
  },
  {
    quote: "The team provides practical and realistic advice for fundraising and registration. Smooth end-to-end support.",
    name: "Aarti Prasad, Founder of EcoPack",
    rating: 5,
  },
  {
    quote: "Very helpful with good suggestions on ZED certifications. Highly recommend Udhyamgrow.",
    name: "Mishal Kothari, Manufacturing Startup",
    rating: 5,
  },
  {
    quote: "Great mentorship and responsiveness. We secured MSME loan funding through their guidance.",
    name: "Vidya Nahar, Food Processing Startup",
    rating: 5,
  },
  {
    quote: "Good coaching and excellent guidance on DUNS and Gem registration.",
    name: "Hussain Mohammed, Govt Contractor",
    rating: 5,
  },
  {
    quote: "Udhyamgrow made our company incorporation and startup registration journey extremely simple.",
    name: "Tanay Gujarathi, FinTech Founder",
    rating: 5,
  },
];

/* DUPLICATE FOR INFINITE EFFECT */
const extendedReviews = [...reviews, ...reviews];

/* ---------------- COMPONENT ---------------- */
const Reviews = () => {
  const [index, setIndex] = useState(0);

  const visibleCards = 3;
  const total = reviews.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  /* RESET WITHOUT JUMP */
  useEffect(() => {
    if (index >= total) {
      const timeout = setTimeout(() => {
        setIndex(0);
      }, 600); // matches transition duration

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <p className="text-sm md:text  text-gold font-medium mb-2">
            STARTUP STORIES
          </p>

          <h2 className="font-display max-w   mx-auto text-3xl sm:text-5xl lg:text-6xl text-ink mb-5">
            Real Journeys. <br />
            <span className="text-gold">Real Results.</span>
          </h2>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(index * 260) / visibleCards}%)`,
            }}
          >
            {extendedReviews.map((review, i) => (
              <div key={i} className="md:w-1/3 w-60 shrink-0 px-3">
                <div className="bg-white p-6 border border-black/40 shadow-md     h-full hover:shadow   transition">
                  {/* STARS */}
                  <div className="flex mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`text  ${star <= review.rating ? "text-yellow-500" : "text-gray-300"
                          }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6 text-sm">
                    "{review.quote}"
                  </p>

                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">
                      {review.name}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reviews;