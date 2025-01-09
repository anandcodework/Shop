import React, { useState } from 'react';
import Navbar from './../componets/Navbar/WithOutSearch';
import Menu from './../componets/Navbar/Menu';
import Footer from './../componets/Footer/Footer';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        setSuccess(true);
        setError('');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setError('Error sending message. Please try again later.');
      setSuccess(false);
    }
  };

  return (
    <>
    <Navbar/>
    <Menu/>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-secondary mb-12">Contact  Computer Shop</h1>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              Have any questions or need assistance with your tech? Get in touch with the experts at{' '}
              <span className="font-bold text-secondary"> Computer Shop</span>. We are here to help you with custom PC builds, repairs, upgrades, and more. Reach out using the form below or visit us at our store.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-secondary mb-6">Get In Touch</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 font-medium">Your Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Anand"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Your Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="example@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Service Inquiry"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    rows="5"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary transition duration-300"
                >
                  Send Message
                </button>
                {success && <p className="text-green-500">Message sent successfully!</p>}
                {error && <p className="text-red-500">{error}</p>}
              </form>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-secondary mb-6">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                <span className="font-bold"> Computer Shop</span>
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-bold">Address:</span> Ramabai Colony, Ghatkopar East, Mumbai, MH - 400075, India
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-bold">Email:</span> <a href="mailto:am6429975@gmail.com" className="text-blue-500 hover:underline">am6429975@gmail.com</a>
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-bold">Phone:</span> +91 12345 67890
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-bold">Website:</span> <a href="https://www.shop.in" className="text-blue-500 hover:underline">www.shop.in</a>
              </p>
              <div className="mt-8">
                <iframe
                  className="w-full h-64 rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.754092058262!2d72.8862!3d19.1116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c64caaa!2sRamabai%20Colony!5e0!3m2!1sen!2sin!4v16181234567"
                  allowFullScreen=""
                  loading="lazy"
                  title=" Shop Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ContactPage;
