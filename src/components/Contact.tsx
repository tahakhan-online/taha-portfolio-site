
import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const Contact = React.memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_ar8vc9i',
        'template_2sv6kpu',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Taha Khan',
        },
        'vjatjppjrNgp_5ulA'
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Let's <span className="text-cyan-400">Connect</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
            <p className="text-gray-300 mb-8">
              Ready to bring your ideas to life? Let's discuss how we can work together 
              to create something amazing.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Mail className="text-black w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a 
                    href="mailto:khantaha636@gmail.com" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    khantaha636@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Phone className="text-black w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a 
                    href="tel:+916307248338" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    +91 63072 48338
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold">in</span>
                </div>
                <div>
                  <p className="text-white font-medium">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/taha-khan-251a27216" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    linkedin.com/in/taha-khan-251a27216
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed will-change-transform"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
