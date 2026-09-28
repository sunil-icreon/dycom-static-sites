import type { Metadata } from 'next';
import Image from 'next/image';

import { Container, MediaHero, SplitPanel, Button } from '@repo/base-ui';

import { DiagonalSection, CheckList } from '../../components/generated/diagonal-section';

export const metadata: Metadata = {
  title: 'Safety Training & Protocols',
  description:
    "Ansco & Associates believes safety is more than rules and procedures – it's a mindset. Headway™ safety program is the preferred path when mitigating risks.",
};

const ON_SITE_SAFETY_ITEMS = [
  {
    title: 'The Job Task Safety Assessment (JTSA)',
    description: 'Creation of a Safety Action Plan prior to commencement of any work to control the risk associated with each hazard.',
    imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/02/ccg-jtsa.jpg',
    imageAlt: 'Ansco team members reviewing a Job Task Safety Assessment on site',
  },
  {
    title: 'Job Safety Observation (JSO)',
    description: 'This evaluation is completed by supervisors and managers every 45 days at a minimum.',
    imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/02/ccg-jso.jpg',
    imageAlt: 'Supervisor performing a Job Safety Observation of a lineworker',
  },
  {
    title: 'Gate checks',
    description: 'Trucks, equipment, and all PPE are checked daily at field locations.',
    imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/gate-checks.jpg',
    imageAlt: 'Fleet trucks lined up for a daily gate check',
  },
  {
    title: 'Daily Vehicle Inspection Record (DVIR)',
    description: 'Drivers inspect their vehicles at every use ensuring vehicles are safe to be driven on roadways.',
    imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/02/ccg-dvir.jpg',
    imageAlt: 'Driver completing a Daily Vehicle Inspection Record',
  },
  {
    title: 'Jobsite Inspection',
    description: 'Performance of routine safety jobsite inspection for subcontractors.',
    imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/02/ccg-inspection.jpg',
    imageAlt: 'Inspector reviewing jobsite safety conditions',
  },
  {
    title: 'Post-incident Reviews',
    description: 'Review aimed to identify the cause of an incident for future prevention.',
    imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/02/ccg-post-incident.jpg',
    imageAlt: 'Binders labeled Safety Procedures and Work Safety used in post-incident review',
  },
  {
    title: 'Root Cause Analysis',
    description: 'Specialized proprietary tool developed to identify incident root causes.',
    imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/02/ccg-root-cause.jpg',
    imageAlt: 'Magnifying glass over a root cause analysis document',
  },
  {
    title: 'Deviation Notification',
    description: 'An automatic alert to notify supervisors that a deviation has occurred.',
    imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/02/ccg-deviation.jpg',
    imageAlt: 'Clock face reading "Time for Change" representing a deviation notification alert',
  },
];

export default function SafetyPage() {
  return (
    <>
      <MediaHero
        background={{
          type: 'image',
          src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/safety-banner.jpg',
          alt: 'Ansco crew operating a bucket truck on a job site',
        }}
        title="Moving Forward In Safety Excellence"
      />

      <DiagonalSection className="py-12 md:py-16">
        <Container>
          <SplitPanel
            image={{
              src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/Safety-content-top-1.jpg',
              alt: 'Ansco safety personnel reviewing procedures in the field',
            }}
            imagePosition="left"
            title="Safety"
          >
            <p>
              Ansco believes safety is more than rules and procedures – it&rsquo;s a mindset. Headway™ safety program is
              the preferred path when mitigating risk on the job. Our multi-step strategy and intensive training
              empowers workers to recognize and enforce natural safety techniques, so they always get home safe.
            </p>
            <p className="mt-4">
              It&rsquo;s just one of the ways we take care of the most talented people in the field. We are well known
              for industry-leading innovation and superior quality of work, and our Headway™ safety program reinforces
              our commitment to the people, places and environments we touch every day.
            </p>
          </SplitPanel>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h3 className="font-heading text-2xl font-semibold text-ink">Safety Vision</h3>
              <p className="mt-2 text-ink-soft">
                Lead with an instinctually safe culture, ensuring the utmost protection for our employees, customers,
                and the communities in which we work.
              </p>

              <div className="mt-6">
                <h4 className="font-heading text-lg font-semibold text-ink">A.L.W.A.Y.S.</h4>
                <p className="mt-2 text-ink-soft">
                  We believe that to create a best-in-class safety program, all employees must commit to a core list
                  of safeguards. The safeguards are designed to protect against the most common causes of severe
                  injury. They are foundational to our safety culture.
                </p>
                <div className="mt-4">
                  <Button href="https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/10/ALWAYS.pdf">
                    Click to View
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:col-span-4">
              <Image
                src="https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/02/headway-logo.png"
                alt="Headway - Your connection to safety excellence"
                width={280}
                height={280}
                className="h-auto w-full max-w-[260px] object-contain"
              />
            </div>
          </div>
        </Container>
      </DiagonalSection>

      <section className="border-y border-border py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <SplitPanel
              variant="overlay"
              image={{
                src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/careers.webp',
                alt: 'Ansco crew member operating equipment on a job site',
              }}
              title="Careers"
              cta={{ label: 'Learn More', href: 'https://careers.anscollc.com/ansco' }}
            >
              <p>Want to join our team? Discover careers!</p>
            </SplitPanel>
            <SplitPanel
              variant="overlay"
              image={{
                src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/Subcontractors.webp',
                alt: 'Subcontractor wearing safety gear on a job site',
              }}
              title="Subcontractors"
              cta={{ label: 'Learn More', href: '/subcontractors' }}
            >
              <p>Want to be a subcontractor? Find out how here!</p>
            </SplitPanel>
          </div>
        </Container>
      </section>

      <DiagonalSection className="py-12 md:py-16">
        <Container>
          <SplitPanel
            image={{
              src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/training.webp',
              alt: 'Ansco crew members climbing utility poles during training',
            }}
            imagePosition="left"
            title="Training"
          >
            <p>
              Our employees are actively engaged in training, reporting, and auditing safety programs and protocols
              daily. Employee training spans several phases, beginning at their onboarding.
            </p>
            <CheckList
              className="mt-4"
              items={[
                'New Hire Safety Orientation',
                'Task and job-specific documented safety qualification training',
                'Third-party safety certifications',
                'Field mentoring with Qualified Person',
                'Ongoing evaluation and continued education as identified via recurring documented field visits (JSO, Gatecheck, etc)',
              ]}
            />
          </SplitPanel>

          <div className="mt-12">
            <SplitPanel
              image={{
                src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/saftey-2-use-right-side-of-image-if-need-a-taller-image-dude-covered-in-safety-gear.webp',
                alt: 'Ansco employee in full safety gear working near an underground vault',
              }}
              imagePosition="right"
            >
              <h4 className="font-heading text-lg font-semibold text-ink">
                Specialized job focused safety training, for all construction and infrastructure job functions and
                work types:
              </h4>
              <CheckList
                className="mt-3"
                items={[
                  'Emergency Work (Line strikes, natural disaster recovery, etc)',
                  'Working around utility and power poles',
                  'Fire Prevention',
                  'Stop work Authority (for example: No reprisal policy)',
                  'Aerial construction',
                  'Underground construction',
                ]}
              />

              <div className="mt-6">
                <h4 className="font-heading text-lg font-semibold text-ink">Other programs include:</h4>
                <h5 className="mt-3 font-heading text-base font-semibold text-ink">Driver Safety Program</h5>
                <h5 className="mt-3 font-heading text-base font-semibold text-ink">CertusLearn Training</h5>
                <p className="mt-1 text-ink-soft">
                  Internally developed digital training content is tailored to our industry&rsquo;s specific tasks,
                  hazards, and regulations.
                </p>
                <h5 className="mt-3 font-heading text-base font-semibold text-ink">OSHA</h5>
                <p className="mt-1 text-ink-soft">
                  To ensure the safety and wellness of all our team, at a minimum we adopt and follow all OSHA
                  standards and training regulations.
                </p>
              </div>
            </SplitPanel>
          </div>
        </Container>
      </DiagonalSection>

      <section className="border-t border-border py-12 md:py-16">
        <Container>
          <h2 className="font-heading text-2xl font-semibold text-ink md:text-3xl">On-site Safety</h2>
          <p className="mt-3 max-w-3xl text-ink-soft">
            Along with a detailed and descriptive safety manual, we employ several techniques to ensure we are
            continuously evaluating and minimizing our risk.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {ON_SITE_SAFETY_ITEMS.map((item) => (
              <div key={item.title}>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-ink-soft">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
