import type { NavItem, FooterColumn, SocialLink } from '@repo/base-ui';

export const HEADER_LOGO = {
  src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2023/11/cropped-cropped-ansco-registered-logo.png',
  alt: 'Ansco & Associates Logo',
};

export const FOOTER_LOGO = {
  src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/themes/understrap-child-1.0.1/images/ansco-logo-light.png',
  alt: 'Ansco logo',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Safety', href: '/safety' },
  { label: 'Quality', href: '/quality' },
  { label: 'Subcontractors', href: '/subcontractors' },
  {
    label: 'Careers',
    href: '/careers',
    children: [
      { label: 'Careers', href: '/careers' },
      { label: 'Opportunities', href: '/opportunities' },
      { label: 'Benefits', href: '/benefits' },
      { label: 'Life@Ansco', href: '/life' },
    ],
  },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Safety', href: '/safety' },
      { label: 'Quality', href: '/quality' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/AnscoLLC' },
  { label: 'Instagram', href: 'https://www.instagram.com/anscollc/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/ansco-&-associates-llc/' },
];

export const HEADQUARTERS = {
  address: '200 North Point Center East, Suite 400, Alpharetta, GA 30022',
  phone: '(404) 508-5700',
};

export const COPYRIGHT = `© ${new Date().getFullYear()} Ansco & Associates, LLC. All Rights Reserved.`;
