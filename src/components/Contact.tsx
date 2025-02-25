import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, XCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 text-white">
      <div className="container px-6 mx-auto">
        <h2 className="mb-10 text-3xl font-bold text-center text-white">Get in Touch</h2>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-8 text-lg text-white">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-indigo-600" size={24} />
                <div>
                  <h4 className="font-semibold">Mail</h4>
                  <p className="text-white">vivekvibhuti47@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-indigo-600" size={24} />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-white">+91 8521037825</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-indigo-600" size={24} />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-white">India</p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-6 border rounded-lg shadow-lg backdrop-blur-lg bg-white/10 border-white/20">
            {status.type && (
              <div
                className={`p-4 rounded-lg flex items-center gap-2 ${
                  status.type === 'success'
                    ? 'bg-green-50 text-green-700'
                    : 'bg-red-50 text-red-700'
                }`}
              >
                {status.type === 'success' ? (
                  <CheckCircle className="shrink-0" size={20} />
                ) : (
                  <XCircle className="shrink-0" size={20} />
                )}
                <p>{status.message}</p>
              </div>
            )}
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="text-white border form-input backdrop-blur-md bg-white/10 border-white/20"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-white border form-input backdrop-blur-md bg-white/10 border-white/20"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="text-white border form-input backdrop-blur-md bg-white/10 border-white/20"
                required
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white transition-transform rounded-lg shadow-md btn-primary disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-md bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
