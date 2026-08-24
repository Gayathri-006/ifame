import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, GraduationCap, Linkedin, X, Sparkles, ShieldCheck, Briefcase, ChevronRight } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/team';
import { TeamMember } from '../types';

interface TeamSectionProps {
  onContactTeamMember?: (member: TeamMember) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onContactTeamMember }) => {
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [activeModalMember, setActiveModalMember] = useState<TeamMember | null>(null);

  const departments = ['All', 'Leadership', 'Technology', 'Management', 'Process Engineering'];

  const filteredMembers = selectedDept === 'All'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter((m) => m.department === selectedDept);

  return (
    <section id="team" className="py-20 md:py-28 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
      {/* Black rays fading into the white background, top-left corner */}
      <div
        className="hidden md:block absolute -left-10 -top-10 w-[380px] h-[380px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'conic-gradient(from -20deg at 0% 0%, #0a0a0a 0deg 2deg, transparent 2deg 10deg, #0a0a0a 10deg 12deg, transparent 12deg 20deg, #0a0a0a 20deg 22deg, transparent 22deg 32deg, #0a0a0a 32deg 34deg, transparent 34deg 90deg)',
          maskImage: 'radial-gradient(circle at 0% 0%, black 0%, black 12%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 0% 0%, black 0%, black 12%, transparent 75%)',
          opacity: 0.06,
        }}
      />
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-slate-100 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-slate-100 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header - Left to Right Entry Transition */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LEADERSHIP & EXPERTISE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-950 tracking-tight font-['Outfit',sans-serif]">
              Architects of Transformation
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2.5 max-w-2xl leading-relaxed">
              Meet the veteran practitioners, PhD researchers, and strategic advisors guiding complex organizational evolution worldwide.
            </p>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-50 backdrop-blur-md rounded-xl border border-slate-200 overflow-x-auto max-w-full shadow-sm">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedDept === dept
                    ? 'bg-[#0a0a0a] text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Refined Team Grid with Ideal Medium-Sized Profile Images and Detailed Descriptions Below */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          <AnimatePresence mode="popLayout">
            {filteredMembers.map((member, idx) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, x: -40, y: 15 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group bg-white hover:bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-400 p-6 sm:p-7 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
                id={`team-card-${member.id}`}
              >
                <div>
                  {/* Top Profile Header: Medium-Sized Photo and Key Info */}
                  <div className="flex items-center gap-4 sm:gap-5 mb-5 pb-5 border-b border-slate-200">
                    {/* Medium-Sized Profile Image (Not too big, not too small) */}
                    <div className="relative w-22 h-22 sm:w-26 sm:h-26 rounded-2xl overflow-hidden border-2 border-slate-200 shrink-0 bg-slate-100 group-hover:border-slate-400 transition-colors shadow-sm">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Member Name, Role, and Department Tag */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200 uppercase tracking-wider">
                          {member.department}
                        </span>

                        <a
                          href={member.linkedinUrl || 'https://linkedin.com'}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-white hover:bg-[#111111] transition-colors"
                          title={`LinkedIn - ${member.name}`}
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-950 group-hover:text-slate-600 transition-colors mt-2 font-['Outfit',sans-serif] leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5 leading-snug">
                        {member.role}
                      </p>

                      <div className="flex items-center gap-2 mt-2 text-[11px] text-slate-500">
                        <span className="inline-flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                          <Award className="w-3 h-3 text-slate-500" />
                          {member.yearsExperience}+ Yrs
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description Section Below Profile Image */}
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Practitioner Bio
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed line-clamp-3 mb-4">
                      {member.shortBio}
                    </p>

                    {/* Expertise Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {member.expertise.slice(0, 3).map((exp, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] border border-slate-200 font-medium"
                        >
                          {exp}
                        </span>
                      ))}
                      {member.expertise.length > 3 && (
                        <span className="px-2 py-1 rounded-lg bg-slate-100 text-slate-500 text-[11px] font-medium">
                          +{member.expertise.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => setActiveModalMember(member)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-[#0a0a0a] border border-slate-200 hover:border-transparent text-slate-700 hover:text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer group/btn shadow-sm"
                >
                  <span>View Full Profile</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Banner with Left to Right Transition */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-[#0a0a0a] to-[#0a0a0a] border border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6 text-white"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white font-['Outfit',sans-serif]">
                Looking for specific sector domain advisors?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Our global bench comprises 180+ certified practice leads across 12 countries.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-[#0a0a0a] hover:bg-[#000000] text-white text-xs sm:text-sm font-semibold whitespace-nowrap transition-all shadow-lg shadow-neutral-950/50 cursor-pointer"
          >
            Request Specialist Team
          </a>
        </motion.div>
      </div>

      {/* Team Member Detail Modal */}
      <AnimatePresence>
        {activeModalMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalMember(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.94, x: -20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-[#0a1024] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden text-white z-10 max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalMember(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/80 backdrop-blur-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer border border-slate-700"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto p-6 sm:p-8">
                {/* Profile Header */}
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-neutral-500/80 shrink-0 shadow-lg bg-slate-950">
                    <img
                      src={activeModalMember.imageUrl}
                      alt={activeModalMember.name}
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-bold bg-neutral-950 text-[#52525b] border border-neutral-800/60 uppercase tracking-wide">
                      {activeModalMember.department}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1.5 font-['Outfit',sans-serif]">
                      {activeModalMember.name}
                    </h3>
                    <p className="text-sm text-neutral-300 font-medium">
                      {activeModalMember.role}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-slate-300">
                      <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-800">
                        <GraduationCap className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{activeModalMember.education}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-800">
                        <Briefcase className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{activeModalMember.yearsExperience} Years Practice</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Featured Quote */}
                {activeModalMember.featuredQuote && (
                  <div className="mt-5 p-4 rounded-xl bg-neutral-950/40 border-l-4 border-[#0a0a0a] italic text-xs sm:text-sm text-slate-200 leading-relaxed">
                    "{activeModalMember.featuredQuote}"
                  </div>
                )}

                {/* Full Bio */}
                <div className="mt-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Executive Profile & Experience
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeModalMember.fullBio}
                  </p>
                </div>

                {/* Expertise Matrix */}
                <div className="mt-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Core Advisory & Technical Domains
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalMember.expertise.map((exp, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-slate-800 text-neutral-300 text-xs border border-slate-700 font-medium"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal CTA */}
                <div className="mt-7 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <a
                    href={activeModalMember.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white hover:underline"
                  >
                    <Linkedin className="w-4 h-4 text-[#111111]" />
                    <span>Connect on LinkedIn</span>
                  </a>

                  <button
                    onClick={() => {
                      const member = activeModalMember;
                      setActiveModalMember(null);
                      if (onContactTeamMember) {
                        onContactTeamMember(member);
                      }
                    }}
                    className="px-5 py-2.5 rounded-xl bg-[#0a0a0a] hover:bg-[#000000] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-lg"
                  >
                    Book Strategic Advisory
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};