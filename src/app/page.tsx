import Wrapper from '@/components/Wrapper';
import Image from 'next/image';
import profile from '../../public/profile.webp';
import ResumeDownload from '@/components/ResumeDownload';
import Email from '@/components/Email';
import Footer from '@/components/Footer';
import HomeNavs from '@/components/HomeNavs';
import BgPattern from '@/components/BgPattern';

export default function Home() {
  return (
    <div className="min-h-[100vh] pb-20 bg-bg">
      <BgPattern />
      <Wrapper className="relative min-h-screen pt-32 px-4">
        <div className="flex flex-col items-center gap-44">
          <div className="flex flex-col items-center w-full gap-20">
            <div className="w-max mx-auto flex flex-col items-center gap-8">
              <div className="w-max mx-auto flex flex-col items-center gap-8">
                <div className="relative min-[500px]:size-28 size-24 rounded-full overflow-clip cursor-pointer ring-2 ring-text ring-offset-4 ring-offset-bg">
                  <Image
                    src={profile}
                    alt="profile"
                    className="rounded-full object-cover object-center"
                    fill
                  />
                </div>
                <div className="space-y-2 text-center mx-auto">
                  <h1 className="min-[500px]:text-3xl text-2xl text-text font-heading font-semibold">
                    YONATANE.M
                  </h1>
                  <p className="min-[500px]:text-base text-sm text-textlighter font-body font-medium min-[500px]:max-w-[400px] max-w-[300px] mx-auto">
                    Frontend developer focused on creating responsive,
                    user-friendly interfaces.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <ResumeDownload />
                <Email />
              </div>
            </div>

            <HomeNavs />
          </div>

          <Footer />
        </div>
      </Wrapper>
    </div>
  );
}
