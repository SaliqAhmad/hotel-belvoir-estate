import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Twitter, Facebook, MessageCircle } from 'lucide-react';

const pagesLinks = [
  { href: '/', label: 'Home' },
  { href: '/', label: 'About' },
  { href: '/', label: 'Rooms' },
  { href: '/', label: 'Contact' }];


const utilityLinks = [
  { href: '/password-protected', label: 'Password Protected' },
  { href: '/404', label: '404 Not Found' },
  { href: '/style-guide', label: 'Style Guide' },
  { href: '/changelog', label: 'Changelog' },
  { href: '/licenses', label: 'Licenses' }];


const cmsLinks = [
  { href: '/rooms/royal-sapphire-suite', label: 'Rooms Details' },
  { href: '/blog/how-to-plan-the-perfect-romantic-getaway', label: 'Blog Details' }];


const socialLinks = [
  { href: 'https://instagram.com', label: 'IG', icon: Instagram },
  { href: 'https://twitter.com', label: 'TW', icon: Twitter },
  { href: 'https://facebook.com', label: 'FB', icon: Facebook },
  { href: 'https://whatsapp.com', label: 'WS', icon: MessageCircle }];


const Footer = () => {
  return (
    <footer className="relative bg-[#0F1926] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3803ac6-8c4f-45bd-8330-882b643f54bd-luxorefi-webflow-io/assets/images/6784f8a1cbbb1f7bbe6ce52a_2F67949b119d9e3571bdb2ced-27.jpg">

          <source src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a%2F67949b119d9e3571bdb2cede_Footer-transcode.mp4" type="video/mp4" />
          <source src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a%2F67949b119d9e3571bdb2cede_Footer-transcode.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-[#0F1926] opacity-90"></div>
      </div>

      <div className="relative z-10 container pt-[120px] pb-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-x-8 gap-y-10">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/Logo.svg"
                alt="Belvoir Estate Logo"
                width={180}
                height={34}
                className="w-[140px] md:w-[180px] h-auto object-contain" />

            </Link>
            <p className="text-base text-[#B8B8B8] leading-[1.7]">
              Discover elegance beyond compare,
              <br />
              Where every detail is extraordinary,
              <br />
              Your luxury escape begins here.
            </p>
            <div className="flex items-center gap-2 mt-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#B8B8B8] bg-transparent hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </a>);

              })}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white text-xl mb-6 font-body">Pages</h3>
            <div className="flex flex-col space-y-4">
              {pagesLinks.map((link) =>
                <Link key={link.label} href={link.href} className="text-[#B8B8B8] hover:text-primary transition-colors">
                  {link.label}
                </Link>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white text-xl mb-6 font-body">Contact</h3>
            <div className="flex flex-col space-y-4">
              <a href="tel:8082111549" className="text-[#B8B8B8] hover:text-primary transition-colors">
                80821 11549
              </a>
              <a href="tel:6006248474" className="text-[#B8B8B8] hover:text-primary transition-colors">
                6006248474
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:justify-between items-center text-center md:text-left gap-4 md:gap-0 text-sm text-[#7A7A7A]">
            <p className="!whitespace-pre-line">COPYRIGHT © BELVIOR ESTATE</p>
            <p>
              Designed by{' '}
              <a
                href="https://evecture.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors">

                EVECTURE STUDIO
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;
