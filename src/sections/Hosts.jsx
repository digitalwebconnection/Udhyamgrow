import React from "react";
import imranji from "../assets/imranji.png";
import taranjit from "../assets/taranjit.png";

const hosts = [
  {
    name: "Krishnkumar Agath",
    role: "Co-Founder & Director, Udhyamgrow Services",
    bio: "Krishnkumar Agath brings extensive experience in business consultancy, government schemes, and startup services. He has guided hundreds of startups through the process of obtaining registration, certifications, and government grants, helping them establish a solid foundation and accelerate growth. Known for his customized approach, Krishnkumar focuses on transparency, accuracy, and helping entrepreneurs realize their growth potential by leveraging government schemes and opportunities.",
    img: 'https://img.magnific.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-657.jpg?semt=ais_hybrid&w=740&q=80',
  },
  {
    name: "Raviraj Odedara",
    role: "Co-Founder & Director, Udhyamgrow Services",
    bio: "Raviraj Odedara is a corporate strategist and startup mentor specializing in financial planning, compliance, and international market entry. He ensures that startups remain compliant with government regulations while optimizing their operations for both domestic expansion and global export markets. With deep expertise in international trade, Raviraj guides businesses through every stage of their business expansion journey.",
    img: 'https://img.magnific.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-657.jpg?semt=ais_hybrid&w=740&q=80',
  },
];

const Hosts = () => {
  return (
    <section className="bg-[#f6f1e9] py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* HEADER */}
        <div className="mb-10">
          <p className="text   font-bold tracking-widest text-gold mb-1">
            OUR LEADERSHIP
          </p>

          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
            Expert Guidance. <br /> <span className=" text-gold font-bold">Co-Founder Support.</span>
          </h2>

          <p className="text-gray-900 mt-4 text-md">
            Guiding you with expert insights and proven experience to make your startup growth clear and successful.
          </p>
        </div>

        {/* HOST GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">

          {hosts.map((host, i) => (
            <div key={i} className="text-left p-4 ">

              {/* IMAGE */}
              <div className="overflow-hidden  -t   ">
                <img
                  src={host.img}
                  alt={host.name}
                  className="w-full bg-white h-105 md:h-100 object-cover object-top"
                />
              </div>

              {/* TEXT */}
              <div className="mt-4">
                <h3 className="text    font-serif text-black">
                  {host.name}
                </h3>

                <p className="text-sm tracking-widest uppercase text-yellow-700 mt-1">
                  {host.role}
                </p>

                <p className="text-sm text-justify text-gray-900 mt-3 leading-relaxed">
                  {host.bio}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Hosts;