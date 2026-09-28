import type { Metadata } from 'next';

import { Container, MediaHero, SplitPanel } from '@repo/base-ui';

import { ImageTileGrid } from '../../components/generated/image-tile-grid';
import { JobSearchBand } from '../../components/generated/job-search-band';

export const metadata: Metadata = {
  title: { absolute: 'Careers at Ansco & Associates | Telecom Construction Jobs' },
  description:
    'Explore careers with Ansco & Associates. Connect to a stable, long-lasting career in telecom construction with a company that prioritizes safety, security, and support.',
};

export default function CareersPage() {
  return (
    <>
      <MediaHero
        background={{
          type: 'image',
          src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2024/04/careersheader-wireless.png',
          alt: 'An Ansco lineman working from a bucket truck on utility equipment',
        }}
        title="Connecting People, Building Possibilities"
      />

      <JobSearchBand />

      <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <p className="text-center text-lg text-ink-soft">
          <strong className="text-ink">Connect to a career with purpose.</strong> The connections we make here are
          meaningful. Our teams connect communities, cities, and families across the country — and we&apos;re proud
          of that. Our people have stable, long-lasting careers because we prioritize safety, security, and support.
          People rely on us and we always show up.
        </p>

        <div className="mt-10">
          <ImageTileGrid
            align="center"
            items={[
              {
                title: 'Careers',
                imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2025/05/CMI_0993.jpg',
                imageAlt: 'Ansco lineman working on telecom equipment',
                description:
                  'We offer a wide variety of career opportunities. Connect to your potential; join a team that makes an impact nationwide.',
                href: '/opportunities',
              },
              {
                title: 'Benefits',
                imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2025/05/iStock-1282722001.jpg',
                imageAlt: 'Ansco team member forming a heart shape with their hands',
                description: 'Connect to a full suite of exceptional first-class benefits as a member of the Ansco family.',
                href: '/benefits',
              },
              {
                title: 'Life@Ansco',
                imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2025/05/Pole-School-7.jpg',
                imageAlt: 'Ansco crew members in hard hats and safety gear at a training session',
                description:
                  'We are an organization that values our people above all else. Our supportive environment ensures you can work with peace of mind. Discover and fulfill your career potential with our training and growth opportunities.',
                href: '/life',
              },
            ]}
          />
        </div>
      </Container>

      <section className="bg-[#f5f5f5] py-12">
        <Container>
          <div className="flex flex-col items-center gap-10 lg:flex-row">
            <div className="aspect-video w-full lg:w-1/2">
              <iframe
                className="h-full w-full rounded-lg"
                src="https://player.vimeo.com/video/758786817?h=2653ea595d"
                title="Life at Ansco & Associates"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                allowFullScreen
              />
            </div>
            <p className="m-0 text-xl leading-relaxed text-ink lg:w-1/2">
              We are an organization that values our people above all else. Our supportive environment ensures you
              can work with peace of mind. Discover and fulfill your career potential with our training and growth
              opportunities.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-primary/5 py-12">
        <Container>
          <SplitPanel
            image={{
              src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2025/05/RS163__CGC2944.jpg',
              alt: 'Ansco crew members standing beside a bucket truck',
            }}
            imagePosition="right"
            title={<span className="text-primary">Connecting You to Possibilities</span>}
            cta={{ label: 'Connect with us!', href: 'https://dycomind.jobs.hr.cloud.sap/ansco' }}
          >
            <p className="m-0">Join Our Talent Network!</p>
          </SplitPanel>
        </Container>
      </section>
    </>
  );
}
