import React from 'react';
import { Wheat, Fish, FlaskConical, Globe2, Phone, Mail, MapPin } from 'lucide-react';

const PILLARS = [
  { icon: Wheat, label: ['AGRICULTURE', 'INNOVATION'] },
  { icon: Fish, label: ['AQUACULTURE', 'SUSTAINABILITY'] },
  { icon: FlaskConical, label: ['RESEARCH &', 'DEVELOPMENT'] },
  { icon: Globe2, label: ['GLOBAL', 'COLLABORATION'] },
];

interface AgriInfoStripProps {
  phone?: string;
  email?: string;
  addressLines?: string[];
}

export const AgriInfoStrip: React.FC<AgriInfoStripProps> = ({
  phone = '+60 3-1234 5678',
  email = 'info@ifameconsulting.com',
  addressLines = [
    'F-2-11, 2ND FLOOR, BLOCK F',
    'PUSAT KOMERSIL JALAN KUCHING',
    'NO.115 JALAN KEPAYANG OFF JALAN KUCHING',
    '51200 KUALA LUMPUR, MALAYSIA',
  ],
}) => {
  return (
    <div className="py-10 border-b border-slate-200">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Left: 4 Pillars + Tagline */}
        <div className="w-full lg:flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
            {PILLARS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center">
                  <Icon className="w-9 h-9 text-[#3f7f93] mb-2.5" strokeWidth={1.5} />
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wide leading-tight uppercase">
                    {p.label[0]}
                    <br />
                    {p.label[1]}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="h-[3px] w-full rounded-full bg-gradient-to-r from-[#2c5e6e] via-[#4f97ab] to-[#bcdbe3] mt-5" />

          <p className="text-[11px] sm:text-xs font-bold tracking-wide text-slate-800 uppercase mt-4">
            Empowering Nations Through Agri Innovation, Research &amp; Sustainability Development
          </p>
        </div>

        {/* Right: Contact Block */}
        <div className="w-full lg:w-auto flex flex-col gap-4 shrink-0 lg:items-end">
          <div className="flex items-center gap-3 justify-between w-full lg:w-64">
            <span className="text-sm font-bold text-slate-900">Contact No</span>
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2c5e6e] to-[#4f97ab] flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 text-white" />
            </span>
          </div>
          <a
            href={`tel:${phone.replace(/[^+\d]/g, '')}`}
            className="text-xs text-slate-500 -mt-3 hover:text-slate-800 transition-colors lg:self-end"
          >
            {phone}
          </a>

          <div className="flex items-center gap-3 justify-between w-full lg:w-64">
            <span className="text-sm font-bold text-slate-900">Email address</span>
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2c5e6e] to-[#4f97ab] flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4 text-white" />
            </span>
          </div>
          <a
            href={`mailto:${email}`}
            className="text-xs text-slate-500 -mt-3 hover:text-slate-800 transition-colors lg:self-end"
          >
            {email}
          </a>

          <div className="flex items-start gap-3 justify-between w-full lg:w-64">
            <p className="text-sm font-bold text-slate-900 text-left lg:text-right leading-relaxed">
              {addressLines.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < addressLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2c5e6e] to-[#4f97ab] flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-4 h-4 text-white" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
