import { ArrowDown, ArrowDownToLine, ChevronDown, Minus } from 'lucide-react';
import React from 'react';

const ResumeDownload = () => {
  return (
    <a
      href="../../public/resume.pdf"
      download
      className="group w-28 px-4 py-2 bg-bglight/30 rounded-md border border-bglighter text-sm text-text font-body font-medium cursor-pointer flex items-center gap-2 justify-center"
    >
      <ArrowDownToLine size={20} />
      <p>Resume</p>
    </a>
  );
};

export default ResumeDownload;
