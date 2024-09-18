'use client';

import { Copy, CopyCheck, LoaderCircle } from 'lucide-react';
import React from 'react';

const Email = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText('YONATANE.M');
    setTimeout(() => {
      setCopied(false);
    }, 500);
  };

  return (
    <div
      onClick={handleCopy}
      className={`px-4 py-2 w-28 rounded-md  border ${
        copied ? 'border-accent' : 'border-bglighter '
      } text-sm text-text font-body font-medium cursor-pointer flex items-center gap-2 justify-center`}
    >
      {!copied ? (
        <Copy size={20} />
      ) : (
        <LoaderCircle size={20} className="animate-spin" />
      )}
      <p>{copied ? 'Copied!' : 'Email'}</p>
    </div>
  );
};

export default Email;
