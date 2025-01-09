import React from 'react';
import Navbar from './../componets/Navbar/WithOutSearch';
import Menu from './../componets/Navbar/Menu';
import Footer from './../componets/Footer/Footer';
import ProfileImage from '../image/Profile.jpg';

function AboutPage({}) {
  return (
    <>
      <Navbar />
      <Menu/>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 min-w-[50px] w-full">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-center text-secondary mb-12">About JBR Computer Shop</h1>

          {/* Introduction Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At <span className="font-bold text-secondary">JBR Computer Shop</span>, our mission is to provide high-quality, reliable, and affordable computer hardware and services to tech enthusiasts and businesses alike. Whether you're building your dream gaming PC or upgrading your office workstations, we have the expertise and the right products to help you achieve your goals.
            </p>
          </div>

          {/* Values Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Our Values</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><span className="font-bold">Customer Satisfaction:</span> We prioritize our customers' needs and ensure that they get the best possible service and support.</li>
              <li><span className="font-bold">Quality Products:</span> We only stock products from trusted manufacturers, ensuring reliability and performance in every build.</li>
              <li><span className="font-bold">Expert Support:</span> Our team consists of experienced professionals who are passionate about technology and dedicated to helping you make the best decisions for your setup.</li>
              <li><span className="font-bold">Innovation:</span> We stay on top of the latest trends and technologies, bringing cutting-edge components and solutions to our customers.</li>
            </ul>
          </div>

          {/* Services Overview */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-semibold text-secondary mb-4">What We Offer</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              JBR Computer Shop offers a wide range of services and products to cater to all your computer needs:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><span className="font-bold">Custom PC Builds:</span> We help you build the PC of your dreams, whether it's for gaming, work, or creative projects.</li>
              <li><span className="font-bold">PC Upgrades:</span> From RAM upgrades to high-performance GPUs, we provide the best components to enhance your system's performance.</li>
              <li><span className="font-bold">Repair and Maintenance:</span> We offer fast and reliable repair services to get your system back up and running.</li>
              <li><span className="font-bold">Peripherals and Accessories:</span> Explore our wide range of peripherals, including monitors, keyboards, mice, and more.</li>
            </ul>
          </div>

          {/* Team Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Meet the Team</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our dedicated team of professionals is here to support you every step of the way. With years of experience in the technology industry, we are passionate about helping customers find the right solutions for their unique needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="flex flex-col items-center">
                <img src={ProfileImage} alt="Team Member 1" className="w-32 h-32 rounded-full mb-4" />
                <h3 className="text-lg font-semibold text-secondary">Anand Maurya</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
              {/* Team Member 2 */}
              <div className="flex flex-col items-center">
                <img src={ProfileImage} alt="Team Member 2" className="w-32 h-32 rounded-full mb-4" />
                <h3 className="text-lg font-semibold text-secondary">Knox</h3>
                <p className="text-gray-600">Lead Technician</p>
              </div>
              {/* Team Member 3 */}
              <div className="flex flex-col items-center">
                <img src={ProfileImage} alt="Team Member 3" className="w-32 h-32 rounded-full mb-4" />
                <h3 className="text-lg font-semibold text-secondary">Anand</h3>
                <p className="text-gray-600">Customer Support Specialist</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-secondary p-8 rounded-lg shadow-lg text-third text-center">
            <h2 className="text-2xl font-semibold mb-4">Join the JBR Family</h2>
            <p className="text-lg leading-relaxed mb-6">
              Whether you're looking for a new custom build or need help upgrading your current setup, JBR Computer Shop is your go-to destination. Visit us today or contact us to learn more about how we can help you achieve your tech goals.
            </p>
            <a href="/contact" className="bg-primary font-semibold text-secondary px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
