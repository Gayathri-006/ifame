import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, ShieldCheck, Mail, Building, User, Clock, MessageSquare } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, initialTopic = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    workEmail: '',
    organization: '',
    pillarOfInterest: 'all',
    message: initialTopic ? `Inquiring regarding ${initialTopic}...` : '',
    timeline: 'Within 30-60 days'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.workEmail.trim() || !formData.organization.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    if (!formData.workEmail.includes('@')) {
      setErrorMsg('Please enter a valid work email address.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      workEmail: '',
      organization: '',
      pillarOfInterest: 'all',
      message: '',
      timeline: 'Within 30-60 days'
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative bg-slate-900 border border-slate-800 text-white rounded-2xl md:rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
          id="contact-modal-dialog"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
            aria-label="Close contact dialog"
            id="contact-modal-close-btn"
          >
            <X className="w-5 h-5" />
          </button>

          {isSuccess ? (
            <div className="py-8 text-center" id="contact-success-view">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Consultation Request Received
              </h3>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed max-w-md mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. An IFAME Practice Director will review your requirements for <strong>{formData.organization}</strong> and contact you at <strong>{formData.workEmail}</strong>.
              </p>
              <div className="mt-8">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-[#0a0a0a] hover:bg-[#000000] text-white text-sm font-semibold transition-colors cursor-pointer"
                >
                  Close & Return
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#18181b] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                Strategic Practice Advisory
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Initiate Consultation
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                Connect with IFAME partners to discuss strategic, technological, or process transformation mandates.
              </p>

              {errorMsg && (
                <div className="mt-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
                {/* Name & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-[#18181b] transition-colors"
                        id="contact-form-name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="e.g. evance@organization.com"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-[#18181b] transition-colors"
                        id="contact-form-email"
                      />
                    </div>
                  </div>
                </div>

                {/* Organization & Consulting Area */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Organization Name *
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Apex Global Systems"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-[#18181b] transition-colors"
                        id="contact-form-org"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Primary Consulting Domain
                    </label>
                    <select
                      value={formData.pillarOfInterest}
                      onChange={(e) => setFormData({ ...formData, pillarOfInterest: e.target.value as any })}
                      className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-[#18181b] transition-colors"
                      id="contact-form-pillar"
                    >
                      <option value="all">Integrated Transformation (All)</option>
                      <option value="management">Management Consulting</option>
                      <option value="technology">Technology Consulting</option>
                      <option value="process">Process Consulting</option>
                    </select>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Target Transformation Timeline
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-[#18181b] transition-colors"
                      id="contact-form-timeline"
                    >
                      <option value="Immediate (< 30 days)">Immediate (&lt; 30 days)</option>
                      <option value="Within 30-60 days">Within 30-60 days</option>
                      <option value="Q3/Q4 Strategic Planning">Q3/Q4 Strategic Planning</option>
                      <option value="Exploratory Evaluation">Exploratory Evaluation</option>
                    </select>
                  </div>
                </div>

                {/* Message / Brief */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Transformation Context / Objectives
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline key challenges, systems to modernize, or target business outcomes..."
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-[#18181b] transition-colors resize-none"
                      id="contact-form-message"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-[#0a0a0a] hover:bg-[#000000] text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-neutral-900/40 disabled:opacity-50 cursor-pointer"
                    id="contact-form-submit-btn"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Consultation Request...</span>
                    ) : (
                      <>
                        <span>Submit Strategic Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};