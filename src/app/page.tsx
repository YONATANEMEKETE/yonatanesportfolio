import Wrapper from '@/components/Wrapper';
import Image from 'next/image';
import profile from '../../public/profile.webp';
import Button from '@/components/Button';
import ResumeDownload from '@/components/ResumeDownload';
import Email from '@/components/Email';
import { homeNavs } from '@/Services/data';
import HomeNav from '@/components/HomeNav';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-[100vh] pb-20 bg-bg">
      <Navigation />
      <Wrapper className="min-h-screen pt-32 px-4">
        <div className="flex flex-col items-center gap-44">
          <div className="flex flex-col items-center w-full gap-20">
            <div className="w-max mx-auto flex flex-col items-center gap-8">
              <div className="w-max mx-auto flex flex-col items-center gap-8">
                <div className="relative size-28 rounded-full bg-bg overflow-clip cursor-pointer ring-2 ring-text ring-offset-4 ring-offset-bg">
                  <Image
                    src={profile}
                    alt="profile"
                    className="rounded-full object-cover object-center"
                    fill
                  />
                </div>
                <div className="space-y-2 text-center mx-auto">
                  <h1 className="text-3xl text-text font-heading font-semibold">
                    YONATANE.M
                  </h1>
                  <p className="text-base text-textlighter font-body font-medium max-w-[400px] mx-auto">
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

            <div className="w-full max-w-[500px] flex flex-col gap-6">
              {homeNavs.map((nav) => (
                <HomeNav text={nav.text} link={nav.link} key={nav.id} />
              ))}
            </div>
          </div>

          <Footer />
        </div>
      </Wrapper>
    </div>
  );
}
