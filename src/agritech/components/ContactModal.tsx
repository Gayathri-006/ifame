import React, { useState } from 'react';
import { X, CheckCircle2, Send, Calendar, Sparkles, Building, User, Mail, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, defaultTopic = 'General Agri-Tech Advisory' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    topic: defaultTopic,
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate success
    }, 400);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      organization: '',
      topic: defaultTopic,
      message: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-stone-900 border border-stone-900/60 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 text-stone-100 overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-stone-600/20 rounded-full blur-3xl pointer-events-none" />

            <button
              onClick={onClose}
              id="close-contact-modal-btn"
              className="absolute top-4 right-4 text-stone-400 hover:text-white p-2 rounded-full hover:bg-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center space-x-2 text-stone-400 text-xs font-semibold tracking-wider uppercase mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Strategic Agri-Tech Advisory</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                  Talk to Our Agri-Tech Experts
                </h3>
                <p className="text-stone-300 text-sm mb-6 leading-relaxed">
                  Connect with our senior agricultural technologists and strategy consultants to evaluate your digital roadmap.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 w-4 h-4 text-stone-400" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Evelyn Vance"
                        className="w-full bg-stone-950/80 border border-stone-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1">Work Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 w-4 h-4 text-stone-400" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="evelyn@agri-enterprise.com"
                          className="w-full bg-stone-950/80 border border-stone-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1">Organization</label>
                      <div className="relative">
                        <Building className="absolute left-3 top-2.5 w-4 h-4 text-stone-400" />
                        <input
                          type="text"
                          required
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="Global Agro Corp / Ministry"
                          className="w-full bg-stone-950/80 border border-stone-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">Primary Area of Interest</label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full bg-stone-950/80 border border-stone-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-all"
                    >
                      <option value="Agri-Tech Strategy & Transformation">Agri-Tech Strategy & Transformation</option>
                      <option value="Precision Farming & IoT Deployment">Precision Farming & IoT Deployment</option>
                      <option value="AI & Predictive Analytics for Agriculture">AI & Predictive Analytics for Agriculture</option>
                      <option value="Capability Maturity Assessment">Capability Maturity Assessment</option>
                      <option value="Sustainable & ESG Agricultural Systems">Sustainable & ESG Agricultural Systems</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">Project Summary / Inquiry</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-2.5 w-4 h-4 text-stone-400" />
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your operational goals, regional scope, and current challenges..."
                        className="w-full bg-stone-950/80 border border-stone-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-all resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    id="submit-advisory-request-btn"
                    className="w-full bg-stone-600 hover:bg-stone-500 text-white font-medium py-2.5 px-4 rounded-lg flex items-center justify-center space-x-2 shadow-lg shadow-stone-950 transition-all cursor-pointer"
                  >
                    <span>Schedule Advisory Briefing</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-stone-900/60 border border-stone-500/50 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-400">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Advisory Request Received</h4>
                <p className="text-stone-300 text-sm max-w-xs mx-auto mb-6">
                  Thank you, {formData.name || 'Partner'}. A senior ISAME agricultural transformation partner will review your inquiry and connect with you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2 bg-stone-800 hover:bg-stone-700 text-white rounded-lg text-sm transition-colors"
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};