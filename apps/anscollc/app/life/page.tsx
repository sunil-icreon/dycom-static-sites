import type { Metadata } from 'next';

import { MediaHero, Container, SplitPanel, Button } from '@repo/base-ui';

import { DiagonalSection } from '../../components/generated/diagonal-section';
import { JobSearchBand } from '../../components/generated/job-search-band';
import { MediaTextRow } from '../../components/generated/media-text-row';

export const metadata: Metadata = {
  title: 'Life at Ansco & Associates | Our Team & Values',
};

const OPPORTUNITIES_URL = 'https://dycomind.jobs.hr.cloud.sap/ansco';
const UPLOADS_BASE =
  'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2025/05';

// Vimeo "Company Video" embed, captured from migration/captures/anscollc/life/dom.html
// (iframe title="Company Video", src includes the required `h` hash for this unlisted video).
const COMPANY_VIDEO_SRC =
  'https://player.vimeo.com/video/739742155?h=f0b26043ab&badge=0&autopause=0&player_id=0&app_id=58479';

export default function LifePage() {
  return (
    <>
      <MediaHero
        background={{
          type: 'image',
          src: `${UPLOADS_BASE}/LP-SKU-1-IMG-BG-en-us-1666338390508-e1747933494181.jpg`,
          alt: 'Ansco field technician at work',
        }}
        title="Connect to a Career With a Purpose"
        cta={{
          label: 'Connect to Current Opportunities',
          href: OPPORTUNITIES_URL,
        }}
      />

      <JobSearchBand />

      <DiagonalSection className="py-12 md:py-16">
        <Container>
          <SplitPanel
            image={{
              src: `${UPLOADS_BASE}/Ansco.png`,
              alt: 'What We Stand For Image',
            }}
            imagePosition="right"
            title="What We Stand For"
          >
            <p className="mb-4">
              We share a common vision of connecting America. Our ability to
              deliver to our customers and connect communities online relies on
              our engaged workforce. The values we hold define our culture. The
              values guide us in our dealings with one another, with our
              customers, and with the communities where we live.
            </p>
            <p className="mb-4">
              Team members strive to treat each other with respect, value
              different perspectives and experiences; keep our and others&apos;
              safety at the forefront of our minds, and uphold the highest
              ethical standards.
            </p>
            <p className="mb-4">
              What we do and how we do it is based on a set of six core values:
              safety, people, innovation, integrity, customer focus and
              sustainability.
            </p>
            <p>
              We take time to ensure these values inform every aspect of our
              operations and are embedded in systems, processes and policies to
              drive employee engagement, organizational performance, customer
              satisfaction and loyalty.
            </p>
          </SplitPanel>
        </Container>
      </DiagonalSection>

      <Container style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          <div className="aspect-video w-full overflow-hidden rounded-lg lg:w-1/2">
            <iframe
              className="h-full w-full"
              title="Company Video"
              src={COMPANY_VIDEO_SRC}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              frameBorder="0"
            />
          </div>
          <div className="lg:w-1/2">
            <h3 className="mb-3 font-heading text-2xl font-semibold text-ink md:text-3xl">
              We Want You to Work with Us!
            </h3>
            <p className="text-lg text-ink-soft">
              Ansco is a great place to work! But don&apos;t just take our word
              for it, hear what some of our employees have to say.
            </p>
          </div>
        </div>
      </Container>

      <section className="bg-[#28357a] py-12">
        <Container>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-semibold text-primary-foreground md:text-3xl">
              Talent Development and Growth
            </h2>
            <p className="mt-3 text-primary-foreground/90">
              We provide opportunities for our people to learn and develop the
              skills and knowledge to be successful in their current role as
              well as to prepare them for future growth within the company.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            <MediaTextRow
              image={{
                src: `${UPLOADS_BASE}/LP-SKU-27-IMG_1-en-us-1663221195222.jpg`,
                alt: 'Education Assistance Program',
              }}
              title="Education Assistance Program"
            >
              <p>
                Employees with more than 6 months of service can participate in
                the company&apos;s Education Assistance Program, which provides
                reimbursement for associate, bachelor&apos;s and master&apos;s
                degree programs for any employee. Participants are eligible for
                a maximum of $7,500 annually, with uncapped reimbursement for
                each degree program.
              </p>
            </MediaTextRow>

            <MediaTextRow
              image={{
                src: `${UPLOADS_BASE}/LP-SKU-27-IMG_2-en-us-1666524551519.jpg`,
                alt: 'Online Professional Development Resources and Training Programs',
              }}
              title="Online Professional Development Resources and Training Programs"
            >
              <p>
                Our entire team has access to LinkedIn Learning&apos;s Library
                of over 10,000 professional development courses.
              </p>
            </MediaTextRow>

            <MediaTextRow
              image={{
                src: `${UPLOADS_BASE}/LP-SKU-27-IMG_3-en-us-1666524590263.jpg`,
                alt: 'On-the-Job Training',
              }}
              title="On-the-Job Training"
            >
              <p>
                Continuous learning is the surest path to continuous success.
                Learn everyday from the best of the best. Our team is made up of
                both tenured professionals and newcomers alike. All our
                employees are provided with opportunities to enhance their
                skills and expand their expertise.
              </p>
            </MediaTextRow>
          </div>
        </Container>
      </section>

      <DiagonalSection className="py-12 md:py-16">
        <Container>
          <SplitPanel
            image={{
              src: `${UPLOADS_BASE}/LP-SKU-D4-2-IMG-en-us-1658739310614.png`,
              alt: 'Diverse Workforce',
            }}
            imagePosition="left"
            title="Our Workforce"
          >
            <p className="mb-4">
              We believe in fostering a work environment where our people are
              treated with respect, can be productive, and are empowered to
              thrive personally and professionally. As a company that operates
              across the U.S., we live in, work in, and serve a wide variety of
              communities and it is important to us that our workforce reflects
              these communities.
            </p>
            <p className="mb-4">
              Our people bring their own experiences, backgrounds and talents to
              work every day. Our commitment is to provide an engaging
              environment that attracts the very best talent and provides
              opportunities for them to develop and grow with us.
            </p>
            <p>
              We hold ourselves accountable to one another and treat others with
              respect. This respect takes the form of our commitment to fair
              safety and employment conditions, as well as the fundamental
              protections that empower our company.
            </p>
          </SplitPanel>
        </Container>
      </DiagonalSection>

      <section className="bg-primary py-16 text-center">
        <Container>
          <h2 className="font-heading text-3xl font-semibold text-primary-foreground md:text-4xl">
            Connecting You to Possibilities
          </h2>
          <p className="mt-2 text-lg text-primary-foreground">
            Join Our Talent Network!
          </p>
          <div className="mt-6 flex justify-center">
            <Button href={OPPORTUNITIES_URL}>Connect with us!</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
