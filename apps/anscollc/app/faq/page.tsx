import type { Metadata } from 'next';
import Image from 'next/image';

import { Container, MediaHero, Button } from '@repo/base-ui';

import { FaqAccordion } from '../../components/generated/faq-accordion';

export const metadata: Metadata = {
  title: 'Hello Neighbor!',
  description:
    'Our company is planning to lay fiber optic cables underground throughout your community for a major telecommunications provider.',
};

const FAQ_ITEMS = [
  {
    question: 'When Will the Work Take Place?',
    answer:
      'Generally, the work begins within two weeks of the residents being notified. In most cases residents will receive a door hanger with details.',
  },
  {
    question: 'Where Will the Work Take Place?',
    answer: 'Work will take place in the right of way area of properties.',
  },
  {
    question: 'How Long Will The Work Last?',
    answer:
      'The installation timeline is projected at 30 to 45 days. Our commitment is to minimize any inconvenience for you and your neighbors while maintaining exceptional quality standards.',
  },
  {
    question: 'Will You Be Digging On My Property?',
    answer:
      "There might be some, but rest easy. Our professionals will handle everything with expertise, restoring your yard's original condition after installation.",
  },
  {
    question: 'Will I Need To Repair My Own Property?',
    answer: (
      <>
        <p className="m-0">
          No - Our professionals take survey pictures before and after any digging or installation occurs to ensure
          everything is restored to its original condition.
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <Image
            src="https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2024/04/before-300x276-1.jpeg"
            alt="Before installation"
            width={300}
            height={276}
            className="h-auto w-[300px] max-w-full"
          />
          <Image
            src="https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2024/04/after-300x276-1.jpeg"
            alt="After installation"
            width={300}
            height={276}
            className="h-auto w-[300px] max-w-full"
          />
        </div>
      </>
    ),
  },
  {
    question: 'What Happens If Something Is Damaged?',
    answer: (
      <>
        Please contact our Customer Service Line:{' '}
        <a href="tel:877-245-6660" className="underline">
          877-245-6660
        </a>{' '}
        or email us at{' '}
        <a href="mailto:customercare@anscollc.com" className="underline">
          customercare@anscollc.com
        </a>
      </>
    ),
  },
  {
    question: 'Can I Deny Access To My Yard To Stop This Work?',
    answer:
      'No, work takes place in the right of way area. Permission to work in this area is governed by the city or municipality via a Utility Easement.',
  },
  {
    question: 'What Is A Utility Easement?',
    answer:
      'A utility easement/P.U.E. or Right-of-Way, often called ROW, is a legal right allowing utilities access to specified property portions for infrastructure. Utility easements are vital for maintaining essential services while allowing land use. Restrictions include no obstruction within the easement.',
  },
  {
    question: 'What Is A Back Lot Easement?',
    answer:
      "A back lot easement is where one piece of land doesn't have access to the road to the public roadway, ie. like a backyard and requires entry through the front yard or driveway.",
  },
  {
    question: 'Why Are There Paint Markings on My Property?',
    answer:
      'To ensure underground infrastructure is protected when excavation activity occurs, utility companies are required to locate their existing utilities in the area prior to excavation. You may notice several paint markings on or near your property. These markings help to guide our crews so that they know what is going on under the surface even before a shovel hits the ground. Paint markings will gradually fade over time.',
  },
  {
    question: 'What Type of Equipment Will You Be Using?',
    answer: (
      <>
        <p className="m-0">
          Here are the of equipment you can expect to see in your neighborhood when fiber optic cables are being
          buried underground.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong>Shovel</strong>: Essential for initial trench excavation.
          </li>
          <li>
            <strong>Backhoe or Excavator</strong>: Utilized for challenging soil conditions or larger trenches.
          </li>
          <li>
            <strong>Microtrenching machine</strong>: This machine easily cuts through concrete or asphalt, utilizing
            a large circular blade for fiber placement. The removal debris is vacuumed using a vacuum excavator,
            which is like an extremely large commercial vacuum.
          </li>
          <li>
            <strong>Directional Drill</strong>: Specialized for creating underground paths with minimal surface
            disruption.
          </li>
          <li>
            <strong>Missile Boring Equipment:</strong> Perfect for shorter distances, creating tunnels with minimal
            surface impact.
          </li>
          <li>
            <strong>Bucket Truck:</strong> Often referred to as a cherry picker or boom truck, is a type of aerial
            lift or work platform essential to hang fiber optic cables.
          </li>
          <li>
            <strong>Cable Pulling Equipment</strong>: Ensures smooth, secure cable installation.
          </li>
          <li>
            <strong>Fiber Optic Splicing Equipment</strong>: Joins individual strands for network integrity.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: 'What is Microtrenching?',
    answer: (
      <>
        <p className="m-0">
          Microtrenching is a minimally invasive technology which enhances the ability to place fiber optic cable
          quickly and effectively in challenging construction environments including existing roadway beds and
          dense urban areas. Microtrenching process includes:
        </p>
        <ul className="my-3 list-disc space-y-2 pl-5">
          <li>Cutting a narrow trench in the existing surface to create a void;</li>
          <li>Evacuating debris;</li>
          <li>Laying cable;</li>
          <li>Flowing a non-shrinking composition into the void; and</li>
          <li>Applying a topping material.</li>
        </ul>
        <p className="m-0">
          The process involves making a narrow cut in the existing surface and then removing the debris from the
          trench at the same time using a specially designed vacuum system. Fiber conduit is then placed in the
          trench with a backfill of custom flowable material.
        </p>
      </>
    ),
  },
  {
    question: 'What Is This Utility Box Buried in My Yard?',
    answer:
      'In certain cases, we may need to place a Hand Hole on your property – this is an in-ground box for fiber splicing. We are granted permission to do this from the Utility Easement.',
  },
];

const SUPPORT_LOCATIONS = [
  { state: 'Arizona', phone: '1-855-520-1757', phoneHref: 'tel:1-855-520-1757' },
  { state: 'Georgia', phone: '1-877-245-6660', phoneHref: 'tel:1-877-245-6660' },
  { state: 'North Carolina', phone: '1-877-245-6660', phoneHref: 'tel:1-877-245-6660' },
  { state: 'South Carolina', phone: '1-877-245-6660', phoneHref: 'tel:1-877-245-6660' },
  { state: 'Texas', phone: '1-855-520-1757', phoneHref: 'tel:1-855-520-1757' },
];

export default function FaqPage() {
  return (
    <>
      <MediaHero
        background={{
          type: 'image',
          src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2023/08/contact-banner.webp',
          alt: '',
        }}
        title="Hello Neighbor"
        minHeightClassName="min-h-[280px] md:min-h-[360px]"
      />

      <Container>
        <div className="mx-auto max-w-3xl py-12 text-center">
          <h2 className="mb-3 font-heading text-2xl font-semibold text-ink md:text-3xl">
            We Are Helping Bring Fiber To Your Community
          </h2>
          <p className="text-ink-soft">
            Exciting news for your community. Our company, Ansco is planning to lay fiber optic cables underground
            throughout the entire community for a major telecommunications provider.
          </p>
          <p className="text-ink-soft">
            Fiber optic cables provide the fastest and most reliable internet connection available today. With this
            technology, you&rsquo;ll experience blazing-fast internet speeds, seamless video streaming, and
            crystal-clear voice calls.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <Button href="/contact">Questions? Call Our Team</Button>
            <Button href="/faq-es">Para español haga clic aquí</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 border-y border-border py-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <h3 className="mb-3 font-heading text-xl font-semibold text-ink">Installation</h3>
            <p className="text-ink-soft">
              Our team has designed a seamless installation process that won&rsquo;t disrupt your day-to-day life.
            </p>
            <p className="text-ink-soft">
              Whether we are burying the fiber optic cables underground or using existing utility poles the work
              will be carried out as discreetly and efficiently as possible.
            </p>
            <p className="font-semibold text-ink">Watch Our Informational Video To Learn More About Our Process.</p>
          </div>
          <div className="md:col-span-2">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                title="ANSCO - Mesa Arizona - Long"
                src="https://player.vimeo.com/video/884943374?h=70d9f89a24&dnt=1&app_id=122963"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="mb-6 font-heading text-2xl font-semibold text-ink md:text-3xl">
              Frequently Asked Questions
            </h2>
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
          <div className="md:col-span-1">
            <div className="flex flex-col gap-6">
              {SUPPORT_LOCATIONS.map((location) => (
                <div key={location.state}>
                  <h4 className="mb-1 font-heading text-lg font-semibold text-ink">{location.state}</h4>
                  <p className="m-0 text-ink-soft">
                    Please contact our Customer Service Line:{' '}
                    <a href={location.phoneHref} className="underline">
                      {location.phone}
                    </a>
                    <br />
                    Email:
                    <br />
                    <a href="mailto:CustomerCare@Anscollc.com" className="underline">
                      CustomerCare@Anscollc.com
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
