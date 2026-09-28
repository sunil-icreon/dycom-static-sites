import type { Metadata } from 'next';

import { Container, MediaHero, SplitPanel } from '@repo/base-ui';

import { DiagonalSection } from '../../components/generated/diagonal-section';

export const metadata: Metadata = {
  title: "Doing Things the RIGHTWAY™ | Ansco's Quality Management System",
  description:
    "RIGHTWAY™ is Ansco's Quality Management System, ensuring excellence, safety, and customer satisfaction through training, compliance, and execution.",
};

const RIGHTWAY_PRINCIPLES: { word: string; description: string }[] = [
  { word: 'Responsible.', description: 'We are capable.  We understand and take great pride in our obligation to our customers and communities.' },
  { word: 'Innovative.', description: 'We continuously challenge ourselves to improve our performance and solve problems.' },
  { word: 'Goal-oriented.', description: 'We are committed to accomplishing the targets set by both our internal and external customers.' },
  { word: 'High Standards.', description: 'We adhere to the highest standards and strive for excellence in all areas of our work.' },
  { word: 'Thorough.', description: 'At our core, we are committed to executing every task with precision and thoroughness, regardless of its scale or timeframe.' },
  { word: 'Well Managed.', description: 'Our teams are effectively managed, from planning to execution, with the right controls and competencies in place.' },
  { word: 'Accurate.', description: 'Our work is carefully reviewed to ensure accuracy and attention to detail.' },
  { word: 'Yielding Excellence.', description: 'We are committed to achieving excellence in all aspects and areas of our work.' },
];

export default function QualityPage() {
  return (
    <>
      <MediaHero
        background={{
          type: 'image',
          src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2024/09/quality-hero.png',
          alt: 'Ansco lineworker performing utility work from a bucket truck',
        }}
        title="Deliver excellence, exceed expectations"
      />

      <DiagonalSection className="py-12 md:py-16">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="lg:w-2/5">
              <div className="relative aspect-video overflow-hidden rounded-lg shadow">
                <iframe
                  src="https://player.vimeo.com/video/1084752315?h=e389982bdf&dnt=1&app_id=122963"
                  title="Dycom - Quality (English)"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </div>
            <div className="lg:w-3/5">
              <h3 className="font-heading text-2xl font-semibold text-ink">
                At Ansco, We Prioritize Doing Things the RIGHTWAY™
              </h3>
              <p className="mt-2 text-ink-soft">
                RIGHTWAY™, is our Quality Management System (QMS) and it is our preferred framework for ensuring
                excellence in our operations. Our structured approach and comprehensive training empower our
                workforce to proactively maintain and improve quality in all aspects of our business. We adhere to
                all legal requirements and policies governing health and safety, sustainability, and codes of conduct
                for our employees and the contractors we hire.
              </p>
              <p className="mt-4 text-ink-soft">
                Our commitment is to meet our customers&rsquo; expectations while maintaining a superior standard of
                execution. Our staff and personnel are highly qualified through experience and training. We recognize
                that quality is crucial to our success, and we will educate our employees to ensure our work meets
                our customers&rsquo; satisfaction.  We are proud of our teams and stand behind our work.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <SplitPanel
              image={{
                src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2024/10/quality-picture-1.png',
                alt: 'Ansco crew member operating a compactor on a paving job site',
              }}
              imagePosition="right"
            >
              <div className="space-y-4">
                {RIGHTWAY_PRINCIPLES.map((item) => (
                  <p key={item.word}>
                    <strong className="text-ink">{item.word}</strong>
                    <br />
                    {item.description}
                  </p>
                ))}
              </div>
            </SplitPanel>
          </div>
        </Container>
      </DiagonalSection>

      <section className="border-y border-border py-12 md:py-16">
        <Container>
          <SplitPanel
            image={{
              src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/careers.webp',
              alt: 'Ansco crew member operating equipment on a job site',
            }}
            imagePosition="left"
            title="We are Committed to Quality"
          >
            <p>
              The team&rsquo;s goal is to provide a high-quality project while minimizing rework and expediting
              schedules. We have several processes in place to ensure our quality goals are met.
            </p>
            <p className="mt-4">
              At the heart of our philosophy is a commitment to provide the highest level of professionalism and the
              best value to our customers on every project. Ansco repeatedly demonstrates that commitment, completing
              all our projects on time, within budget and to the highest of quality standards. That level of
              performance doesn&rsquo;t happen by accident.
            </p>
          </SplitPanel>
        </Container>
      </section>

      <DiagonalSection className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <SplitPanel
              variant="overlay"
              image={{
                src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2024/10/quality-picture-3.png',
                alt: 'Ansco crew member on a bucket truck',
              }}
              title="Careers"
              cta={{ label: 'Learn More', href: 'https://careers.anscollc.com/ansco' }}
            >
              <p>Want to join our team? Discover Ansco Careers</p>
            </SplitPanel>
            <SplitPanel
              variant="overlay"
              image={{
                src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2024/10/quality-picture-4.png',
                alt: 'Ansco crew members in safety gear conferring on a job site',
              }}
              title="Contact Us"
              cta={{ label: 'Learn More', href: '/contact' }}
            >
              <p>The team at Ansco is eager to hear from you.</p>
            </SplitPanel>
          </div>
        </Container>
      </DiagonalSection>
    </>
  );
}
