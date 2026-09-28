import type { Metadata } from 'next';

import { Container, MediaHero, SplitPanel, StatCounterRow } from '@repo/base-ui';

export const metadata: Metadata = {
  title: 'About Us',
};

const STATS = [
  { value: 38, label: 'Years in Business' },
  { value: 1286, label: 'Company Employees' },
  { value: 1536, label: 'Vehicle Fleet' },
  { value: 39, label: 'Strategic Locations' },
];

const VALUES = [
  {
    name: 'People',
    description:
      'Our people are at the heart of everything we do. They are our most important resource. Every day, we strive to create and maintain a healthy environment in which they can grow their skills, work collaboratively, and deliver high quality services to our customers.',
  },
  {
    name: 'Safety',
    description:
      'An instinctually safe culture is our goal, ensuring our teams, and everyone who comes in contact with our work, gets home safely each day.',
  },
  {
    name: 'Integrity',
    description:
      'We hold ourselves accountable to one another and treat others with respect. We are honest, forthright, and ethical in the work we perform and deliver every day.',
  },
  {
    name: 'Innovation',
    description:
      'We continually challenge ourselves to improve our performance and solve problems, driving innovation, informed but unconstrained by our past experiences.',
  },
  {
    name: 'Customers',
    description:
      'Customers are at the forefront of everything we do. By understanding their needs and exceeding their expectations, we strive to be valued partners, delivering the high quality our customers require and building enduring relationships.',
  },
  {
    name: 'Sustainability',
    description:
      'We manage all aspects of our operations with accountability, understanding the economic, environmental, and social impacts our operations create for our people, stakeholders and the communities in which we work.',
  },
];

const SERVICE_ROWS = [
  {
    title: 'Construction & Maintenance',
    image: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/Construction-and-Maintenance.webp',
    imagePosition: 'left' as const,
    body: "Whether it's an aerial or buried installation, Ansco can handle all telecom, wireless and wireline, construction and maintenance projects, along with civil and tower/antennae work. Our team delivers turnkey solutions for all types of builds. We adhere to a strict schedule of preventative upkeep, and in the event of inclement weather or other unforeseen disturbances, our team is ready to respond right away.",
  },
  {
    title: 'Wireless',
    image: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/wireless.webp',
    imagePosition: 'right' as const,
    body: "We've developed the specialized skills and approach necessary to create wireless systems that stand up to today's ever-rising standards. From real estate and site acquisition to cell tower construction and carrier upgrades, we cover every aspect of wireless installation, maintenance, and expansion.",
  },
  {
    title: 'Fiber Splicing',
    image: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/fiber-splicing.webp',
    imagePosition: 'left' as const,
    body: "Maintaining optimal system output requires strong connections that accommodate the fastest speeds. Our team of certified fiber splicing specialists use the industry's most modern equipment and methods to perform top tier splicing services for both copper and fiber cables. These skills are kept up to date year after year, with ongoing education that keeps our service on the cutting edge.",
  },
  {
    title: 'Engineering & Design',
    image: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/Engineering.webp',
    imagePosition: 'right' as const,
    body: 'Ansco offers comprehensive design and engineering services. Including estimates, surveys, CAD drafting – from planning to permitting, we address all engineering needs to prepare each project for construction.',
    bullets: [
      'Underground and aerial outside plant engineering (fiber, copper, and coax)',
      'Project planning and estimating',
      'High level desktop survey',
      'CAD Drafting',
      'Fiber Optic Design (FTTx, Cell Backhaul, Interoffice)',
    ],
    addContent:
      'Our engineering team participates in ongoing technical training to ensure our skills, tools and methodologies are always up to date with the latest best industry practices to best meet the expectations and specifications of our customers.',
  },
  {
    title: 'Project Management',
    image: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/project-managment.webp',
    imagePosition: 'left' as const,
    body: "Our team of professionals have the experience and insights necessary to plan and execute projects, as well as adapt to any changes and challenges that surface. No matter what obstacles arise, we'll be sure to overcome them on budget and time.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <MediaHero
        background={{
          type: 'image',
          src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/Aerial-perfect-shot-of-bucket-man.webp',
          alt: '',
        }}
        title="About Us"
        minHeightClassName="min-h-[280px] md:min-h-[360px]"
      />

      <Container>
        <section className="py-10 text-center">
          <h2 className="mb-4 font-heading text-2xl font-semibold text-ink md:text-3xl">Ansco & Associates</h2>
          <p className="mx-auto mb-10 max-w-3xl text-lg text-ink-soft">
            For the past 4 decades, Ansco & Associates, LLC has been a trusted name in the telecom industry. Starting
            in Greensboro, North Carolina, and now boasting a national network, we offer providers dependable service
            for engineering, constructing, and maintaining systems of all types.
          </p>
          <StatCounterRow items={STATS} />
        </section>

        <section className="flex flex-col gap-16 py-10">
          <SplitPanel
            image={{ src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/Linking-Southeast.webp', alt: '' }}
            imagePosition="left"
            title="Linking the United States Since 1979"
          >
            <p>
              After winning our first Master Contract with Southern Bell in 1981, Ansco has continued on a path of
              excellence by rapidly increasing both our geographical footprint and services offered. Our wireline
              services have grown to include a full suite of construction, engineering, and turnkey services for some
              of the largest telecommunications companies in the US.
            </p>
          </SplitPanel>
          <SplitPanel
            image={{ src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/Linking-Southeast-LOWER-PHOTO.webp', alt: '' }}
            imagePosition="right"
          >
            <p>
              Ansco wireless services have grown to include program and construction management, real estate and
              site acquisition, civil construction, tower construction, line and antenna installation, site testing,
              carrier upgrades, small cell construction, and site maintenance.
            </p>
            <p>
              Ansco is headquartered just outside of Atlanta, GA with over 40 field offices and over 1,400 skilled and
              talented employees.
            </p>
          </SplitPanel>
        </section>

        <section className="py-10">
          <h2 className="mb-6 font-heading text-2xl font-semibold text-ink md:text-3xl">Mission - Vision - Values</h2>
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-1 font-heading text-lg font-semibold text-ink">Mission</h3>
              <p className="text-ink-soft">Serve customers skillfully. Deliver results with discipline. Accountable in all we do.</p>
              <h3 className="mb-1 mt-4 font-heading text-lg font-semibold text-ink">Vision</h3>
              <p className="text-ink-soft">To connect America.</p>
            </div>
          </div>
          <h3 className="mb-4 font-heading text-lg font-semibold text-ink">Values</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {VALUES.map((value) => (
              <p key={value.name} className="text-ink-soft">
                <span className="font-heading font-semibold text-ink">{value.name}: </span>
                {value.description}
              </p>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-16 py-10">
          {SERVICE_ROWS.map((row) => (
            <SplitPanel key={row.title} image={{ src: row.image, alt: '' }} imagePosition={row.imagePosition} title={row.title}>
              <p>{row.body}</p>
              {row.bullets ? (
                <ul className="ml-5 list-disc">
                  {row.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
              {row.addContent ? <p>{row.addContent}</p> : null}
            </SplitPanel>
          ))}
        </section>
      </Container>
    </main>
  );
}
