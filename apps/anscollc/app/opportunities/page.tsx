import type { Metadata } from 'next';

import { Button, Container, MediaHero } from '@repo/base-ui';

import { ImageTileGrid } from '../../components/generated/image-tile-grid';
import { JobOpeningsList } from '../../components/generated/job-openings-list';

export const metadata: Metadata = {
  title: { absolute: 'Job Opportunities | Ansco & Associates' },
  description:
    'Browse current job openings at Ansco & Associates and explore our job categories across corporate support, operations, wireless construction, OSP construction, engineering, and splicing.',
};

export default function OpportunitiesPage() {
  return (
    <>
      <MediaHero
        background={{
          type: 'image',
          src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2025/05/LP-SKU-1-IMG-BG-en-us-1664477108107-scaled-e1746813618950.jpg',
          alt: 'Ansco crew members in safety vests and hard hats',
        }}
        title="Connecting You to Possiblities"
        cta={{ label: 'Connect to Current Opportunities', href: 'https://dycomind.jobs.hr.cloud.sap/ansco' }}
      />

      <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <h2 className="text-center font-heading text-2xl font-semibold text-ink md:text-3xl">Check Out These Jobs!</h2>

        <div className="mt-8">
          <JobOpeningsList
            jobs={[
              {
                title: 'Journeyman Fiber Splicer',
                location: 'Alpharetta, GA, US, 30005',
                applyHref:
                  'https://dycomind.jobs.hr.cloud.sap/ansco/job/Alpharetta-Journeyman-Fiber-Splicer-GA-30005/1434118200/?feedId=430600&utm_source=CareerSite',
              },
              {
                title: 'Foreman Telecom Pole Anchors Operator',
                location: 'Florence, SC, US, 29501',
                applyHref:
                  'https://dycomind.jobs.hr.cloud.sap/ansco/job/Florence-Foreman-Telecom-Pole-Anchors-Operator-SC-29501/1434078500/?feedId=430600&utm_source=CareerSite',
              },
              {
                title: 'Laborer Telecom Underground',
                location: 'Florence, SC, US, 29501',
                applyHref:
                  'https://dycomind.jobs.hr.cloud.sap/ansco/job/Florence-Laborer-Telecom-Underground-SC-29501/1434062700/?feedId=430600&utm_source=CareerSite',
              },
              {
                title: 'Laborer Telecom Underground',
                location: 'Alpharetta, GA, US, 30004',
                applyHref:
                  'https://dycomind.jobs.hr.cloud.sap/ansco/job/Alpharetta-Laborer-Telecom-Underground-GA-30004/1433807900/?feedId=430600&utm_source=CareerSite',
              },
              {
                title: 'Technician Engineering Field',
                location: 'Denver, CO, US, 80239',
                applyHref:
                  'https://dycomind.jobs.hr.cloud.sap/ansco/job/Denver-Technician-Engineering-Field-CO-80239/1433556400/?feedId=430600&utm_source=CareerSite',
              },
            ]}
          />
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://dycomind.jobs.hr.cloud.sap/ansco/search/"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-md bg-primary px-8 py-3 font-ui font-medium uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            Explore all openings
          </a>
        </div>
      </Container>

      <Container style={{ paddingTop: '1rem', paddingBottom: '3rem' }}>
        <h2 className="text-center font-heading text-2xl font-semibold text-ink md:text-3xl">Job Categories Just for You</h2>

        <div className="mt-8">
          <ImageTileGrid
            columnsClassName="md:grid-cols-3"
            items={[
              {
                title: 'Corporate Support',
                imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2025/05/Corporate-Support-scaled.jpg',
                imageAlt: 'Corporate support team member at a desk',
                description:
                  'Our Corporate Support teams provide expertise to ensure success across the company, positions including human resources and finance.',
              },
              {
                title: 'Operations',
                imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2025/05/Operations.jpg',
                imageAlt: 'Operations team members reviewing plans on site',
                description:
                  'Our Operations team provides expertise in the following areas: program and project management, safety, fleet and business development.',
              },
              {
                title: 'Wireless Construction',
                imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2025/05/Wireless-Option1.png',
                imageAlt: 'Technician working on a wireless tower at sunset',
                description:
                  'Complete wireless construction including: site acquisition and testing, new site builds, civil work, line and antenna.',
              },
              {
                title: 'OSP Construction',
                imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2025/05/OSP-Construction-scaled.png',
                imageAlt: 'Outside plant construction equipment on a job site',
                description:
                  'Complete OSP construction including: aerial installations and underground construction – street cutting, rock sawing and manhole placement, directional boring and emergency restoration.',
              },
              {
                title: 'Engineering',
                imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2025/05/Engineering-scaled.jpg',
                imageAlt: 'Engineer reviewing mapping data on a monitor',
                description:
                  'Complete mapping, engineering and design services including, field services, CAD services, on-site staff support and subscriber service installations.',
              },
              {
                title: 'Splicing',
                imageSrc: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2025/05/Splicing-scaled.jpg',
                imageAlt: 'Technician splicing fiber optic cable',
                description: 'Splicing, testing and cutover of copper, coax and fiber optics.',
              },
            ]}
          />
        </div>
      </Container>

      <section className="bg-primary py-14 text-center text-primary-foreground">
        <Container>
          <h2 className="font-heading text-3xl font-semibold md:text-4xl">Connecting You to Possibilities</h2>
          <p className="mt-3 text-lg">Join Our Talent Network!</p>
          <div className="mt-6">
            <Button href="https://dycomind.jobs.hr.cloud.sap/ansco">Connect with us!</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
