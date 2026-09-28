import type { Metadata } from 'next';
import Image from 'next/image';

import { Container, MediaHero, SplitPanel, FeatureCardGrid } from '@repo/base-ui';

export const metadata: Metadata = {
  title: { absolute: 'Ansco & Associates - Premium National Telecom Service Provider' },
};

const WHAT_WE_DO = [
  { title: 'OSP Construction & Maintenance', imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/ansco-construction-icon.png' },
  { title: 'Wireless', imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/05/ansco-wireless.png' },
  { title: 'Fiber Splicing', imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/04/tcs-cable-splicing.png' },
  { title: 'Engineering & Design', imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/04/tcs-engineering.png' },
];

const SERVICES = [
  {
    title: 'OSP Construction & Maintenance',
    description:
      "We at Ansco have spent decades working on some of the country's most impressive projects. Our veterans leverage this experience to provide our customers with swift, smart, high quality construction services that keep our projects on schedule and on budget.",
    imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/ansco-construction-icon.png',
  },
  {
    title: 'Wireless',
    description:
      "Our specialized team has been in the wireless game since its inception, so we've had the opportunity to develop our skills and learn about the industry's best-kept secrets. This allows us to provide our customers with wireless infrastructure of the highest quality.",
    imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/05/ansco-wireless.png',
  },
  {
    title: 'Fiber Splicing',
    description:
      'Fostering the strongest connections takes careful work by skilled experts. We train our people to perform fiber and copper splicing operations with the most advanced degree of speed and efficiency.',
    imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/04/tcs-cable-splicing.png',
  },
  {
    title: 'Engineering & Design',
    description:
      'We are prepared to deliver all of the design planning and documentation for any telecom project. Drafting, specification, and permitting is all taken care of, eliminating worry over technicalities.',
    imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/04/tcs-engineering.png',
  },
];

export default function HomePage() {
  return (
    <main>
      <MediaHero
        background={{ type: 'video', embedSrc: 'https://player.vimeo.com/video/723335998?h=209daa55e0&background=1&autoplay=1&loop=1&muted=1' }}
        title="A Leading Telecommunications Service Provider"
        cta={{ label: 'Our Company', href: '/about' }}
      />

      <Container>
        <section className="py-10 text-center">
          <h2 className="mb-2 font-heading text-2xl font-semibold text-ink md:text-3xl">What We Do</h2>
          <p className="mx-auto mb-8 max-w-3xl text-ink-soft">
            Ansco & Associates, LLC supplies all of the expertise needed to take telecom projects from planning to
            execution. Offering full turnkey solutions, we can take on all of the heavy lifting required to build a
            successful telecommunications system.
          </p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {WHAT_WE_DO.map((item) => (
              <a key={item.title} href="#services" className="flex flex-col items-center gap-2">
                <Image src={item.imageSrc} alt="" width={64} height={64} className="h-16 w-16 object-contain" />
                <h3 className="font-heading text-base font-semibold text-ink">{item.title}</h3>
              </a>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 py-10 lg:grid-cols-2">
          <SplitPanel
            variant="overlay"
            image={{ src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/home-who-we-are.jpg', alt: 'Who We Are' }}
            title="Who We Are"
            cta={{ label: 'Learn More', href: '/about' }}
            minHeightClassName="min-h-[400px] lg:min-h-[560px]"
          >
            <p>
              Our Atlanta-based firm continues to expand its foothold, with over 40 locations and 1,400 crew members
              to date. We&apos;ve recruited and continue to seek out the industry&apos;s best talent, dedicating our
              resources to actively nurturing their skills through ongoing education, training and field experience.
            </p>
          </SplitPanel>
          <div className="grid grid-cols-1 gap-4">
            <SplitPanel
              variant="overlay"
              image={{ src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/home-careers.jpg', alt: 'Careers' }}
              title="Careers"
              cta={{ label: 'Learn More', href: '/careers' }}
            >
              <p>
                Ansco is always on the lookout for extraordinary talent. Our workforce, tenured and newcomers alike,
                are dedicated to jobsite safety, quality workmanship, and continued industry education and
                experience. Learn more about Ansco and consider applying to join our team.
              </p>
            </SplitPanel>
            <SplitPanel
              variant="overlay"
              image={{ src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/home-subs.jpg', alt: 'Subcontractors' }}
              title="Subcontractors"
              cta={{ label: 'Learn More', href: '/subcontractors' }}
            >
              <p>Grow your business under the Ansco banner. Discover our opportunities for subcontractors.</p>
            </SplitPanel>
          </div>
        </section>

        <div id="services">
          <FeatureCardGrid
            title="Our Services"
            lead="Ansco offers comprehensive telecom services, covering everything from system conceptualization to turnkey construction."
            items={SERVICES}
            columnsClassName="md:grid-cols-2"
          />
        </div>

        <section className="py-10">
          <SplitPanel
            image={{ src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/home-contact.jpg', alt: '' }}
            title="Contact Us"
          >
            <p>
              The team at Ansco is eager to hear from you. Whether you&apos;ve got questions about our services, our
              people or our equipment, we welcome your inquiries.
            </p>
            <h4 className="mt-4 font-heading text-lg font-semibold text-ink">Ansco & Associates, LLC</h4>
            <p className="m-0">
              Phone:{' '}
              <a href="tel:(404) 508-5700" className="text-primary underline">
                (404) 508-5700
              </a>
            </p>
            <p className="m-0">Address: 200 North Point Center East, Suite 400, Alpharetta, GA 30022</p>
          </SplitPanel>
        </section>
      </Container>
    </main>
  );
}
