import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { supabase, ContactSubmission } from '../lib/supabase';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Button from './Button';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service_interest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const submission: ContactSubmission = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        service_interest: formData.service_interest.trim(),
        message: formData.message.trim(),
      };

      if (submission.name.length < 2) {
        throw new Error('Name must be at least 2 characters');
      }
      if (submission.message.length < 10) {
        throw new Error('Message must be at least 10 characters');
      }
      if (!submission.email.includes('@') || !submission.email.includes('.')) {
        throw new Error('Please enter a valid email address');
      }

      const { error } = await supabase
        .from('contact_submissions')
        .insert([submission]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service_interest: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-dark-grey">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Get In Touch
          </h2>
          <p className="text-xl text-soft-grey max-w-2xl mx-auto">
            Ready to transform your business with intelligent technology?
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="glass-effect p-3 rounded-lg group-hover:bg-white/10 transition-all">
                    <Phone size={24} className="text-off-white" />
                  </div>
                  <div>
                    <p className="text-soft-grey text-sm mb-1">Phone</p>
                    <p className="text-lg">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="glass-effect p-3 rounded-lg group-hover:bg-white/10 transition-all">
                    <Mail size={24} className="text-off-white" />
                  </div>
                  <div>
                    <p className="text-soft-grey text-sm mb-1">Email</p>
                    <p className="text-lg">info@meetech.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="glass-effect p-3 rounded-lg group-hover:bg-white/10 transition-all">
                    <MapPin size={24} className="text-off-white" />
                  </div>
                  <div>
                    <p className="text-soft-grey text-sm mb-1">Location</p>
                    <p className="text-lg">Silicon Valley, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Office Hours</h3>
              <p className="text-soft-grey">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-soft-grey">Saturday - Sunday: Closed</p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  required
                  className="w-full px-6 py-4 glass-effect rounded-lg bg-transparent text-off-white placeholder-soft-grey focus:outline-none focus:ring-2 focus:ring-off-white/30 transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  required
                  className="w-full px-6 py-4 glass-effect rounded-lg bg-transparent text-off-white placeholder-soft-grey focus:outline-none focus:ring-2 focus:ring-off-white/30 transition-all"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-6 py-4 glass-effect rounded-lg bg-transparent text-off-white placeholder-soft-grey focus:outline-none focus:ring-2 focus:ring-off-white/30 transition-all"
                />
              </div>

              <div>
                <select
                  name="service_interest"
                  value={formData.service_interest}
                  onChange={handleChange}
                  className="w-full px-6 py-4 glass-effect rounded-lg bg-pure-black text-off-white focus:outline-none focus:ring-2 focus:ring-off-white/30 transition-all"
                >
                  <option value="">Select Service Interest</option>
                  <option value="AI & STEAM Education">AI & STEAM Education</option>
                  <option value="Custom Software">Custom Software</option>
                  <option value="AI Applications">AI Applications</option>
                  <option value="Robotics">Robotics</option>
                  <option value="Automation">Automation</option>
                  <option value="IoT Solutions">IoT Solutions</option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message *"
                  required
                  rows={5}
                  className="w-full px-6 py-4 glass-effect rounded-lg bg-transparent text-off-white placeholder-soft-grey focus:outline-none focus:ring-2 focus:ring-off-white/30 transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </Button>

              {submitStatus === 'success' && (
                <div className="p-4 glass-effect rounded-lg border border-green-500/30">
                  <p className="text-green-400 text-center">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 glass-effect rounded-lg border border-red-500/30">
                  <p className="text-red-400 text-center">
                    Something went wrong. Please try again later.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
