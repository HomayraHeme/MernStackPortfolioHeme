import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import { AnimatedButton } from '../ui/AnimatedButton';
import { PORTFOLIO_DATA } from '../../constants/data';

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Contact form submission failed:', error);
            setSubmitStatus('error');
        }
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
    };

    const ContactInfo = ({ icon: Icon, title, value, href }) => (
        <Reveal>
            <a
                href={href}
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block group"
            >
                <div className="flex items-center gap-5 p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 shadow-sm hover:shadow-xl hover:border-[#744B93]/30 hover:-translate-y-1 transition-all duration-300">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-[#744B93]/10 to-[#C889B5]/10 rounded-2xl flex items-center justify-center text-[#744B93] group-hover:from-[#744B93] group-hover:to-[#C889B5] group-hover:text-white transition-all duration-300">
                        <Icon size={26} className="transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="flex-grow">
                        <p className="text-sm font-semibold text-gray-400 dark:text-gray-500 mb-1 uppercase tracking-wide">{title}</p>
                        <p className="text-lg font-bold text-gray-900 dark:text-gray-100 break-all">{value}</p>
                    </div>
                </div>
            </a>
        </Reveal>
    );

    return (
        <Section id="contact" title="Get In Touch" subtitle="Let's work together">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <Reveal>
                        <div className="space-y-6">
                            <ContactInfo icon={Mail} title="Email" value={PORTFOLIO_DATA.email} href={`mailto:${PORTFOLIO_DATA.email}`} />
                            <ContactInfo icon={Phone} title="Phone" value={PORTFOLIO_DATA.phone} href={`tel:${PORTFOLIO_DATA.phone}`} />
                            <ContactInfo icon={MessageCircle} title="WhatsApp" value={PORTFOLIO_DATA.phone} href={`https://wa.me/${PORTFOLIO_DATA.phone.replace(/[^0-9]/g, '')}`} />
                        </div>
                    </Reveal>

                    <Reveal delay={100}>
                        <div className="pt-8 border-t border-white/20 dark:border-gray-700/30">
                            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Connect on Social</h4>
                            <div className="flex flex-wrap gap-4">
                                {PORTFOLIO_DATA.socials.map((social, index) => (
                                    <Reveal key={social.name} delay={index * 50}>
                                        <a
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-14 h-14 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-[#744B93] dark:text-[#C889B5] rounded-2xl shadow-lg border border-[#744B93]/10 dark:border-[#C889B5]/10 hover:bg-gradient-to-r hover:from-[#744B93] hover:to-[#C889B5] hover:text-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
                                            aria-label={social.name}
                                        >
                                            <social.icon size={26} className="transition-transform duration-300 group-hover:scale-110" />
                                        </a>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={100}>
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/30">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-[#744B93]/20 dark:border-[#C889B5]/20 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#744B93] focus:border-transparent transition-all backdrop-blur-sm placeholder-gray-400 dark:placeholder-gray-500"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Your Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-[#744B93]/20 dark:border-[#C889B5]/20 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#744B93] focus:border-transparent transition-all backdrop-blur-sm placeholder-gray-400 dark:placeholder-gray-500"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-[#744B93]/20 dark:border-[#C889B5]/20 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#744B93] focus:border-transparent transition-all backdrop-blur-sm placeholder-gray-400 dark:placeholder-gray-500"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg border border-[#744B93]/20 dark:border-[#C889B5]/20 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#744B93] focus:border-transparent transition-all backdrop-blur-sm placeholder-gray-400 dark:placeholder-gray-500 resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            {submitStatus === 'success' && (
                                <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm text-green-700 dark:text-green-300 rounded-lg text-center border border-green-500/20">
                                    ✓ Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="p-4 bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-sm text-red-700 dark:text-red-300 rounded-lg text-center border border-red-500/20">
                                    ✗ Failed to send message. Please try again later.
                                </div>
                            )}

                            <div className="pt-4">
                                <AnimatedButton
                                    type="submit"
                                    className={`w-full py-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <ArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </AnimatedButton>
                            </div>
                        </form>
                    </div>
                </Reveal>
            </div>
        </Section>
    );
};

export default ContactSection;
