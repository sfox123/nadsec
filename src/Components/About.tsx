import React from "react";

const About : React.FC = ()  => {
  return (
    <section className="py-20 bg-white">
        <div className="flex flex-row container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">About Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                NADSEC (National Association of Software and Development Engineers and Coders) is a premier organization dedicated to fostering innovation, collaboration, and excellence in the field of software development and coding. Our mission is to empower developers, engineers, and coders by providing them with the resources, community, and opportunities they need to thrive in the ever-evolving tech landscape.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                At NADSEC, we believe in the power of technology to transform lives and drive progress. We are committed to creating an inclusive environment where professionals from diverse backgrounds can come together to share knowledge, exchange ideas, and collaborate on cutting-edge projects. Whether you're a seasoned developer or just starting your coding journey, NADSEC offers a platform for growth, learning, and networking.
            </p>
        </div>
    </section>
  );
}
export default About;