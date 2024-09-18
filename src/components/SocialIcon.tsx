import { Twitter } from 'lucide-react';
import React from 'react';

const SocialIcon = () => {
  return (
    <div className="size-10 bg-bg border border-bglight rounded-md cursor-pointer grid place-content-center">
      <Twitter size={20} />
    </div>
  );
};

export default SocialIcon;
