import type { Metadata } from 'next';

import { MediaHero, Container, FeatureCardGrid, Button } from '@repo/base-ui';

export const metadata: Metadata = {
  title: 'Benefits at Ansco & Associates | What We Offer',
};

const OPPORTUNITIES_URL = 'https://dycomind.jobs.hr.cloud.sap/ansco';
const ICON_BASE =
  'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2025/05';

export default function BenefitsPage() {
  return (
    <>
      <MediaHero
        background={{
          type: 'image',
          src: `${ICON_BASE}/LP-SKU-1-IMG-BG-en-us-1666338210612.jpg`,
          alt: 'Ansco team members on a job site',
        }}
        title="Connect to a Full Suite of Exceptional Benefits"
        cta={{
          label: 'Connect to Current Opportunities',
          href: OPPORTUNITIES_URL,
        }}
      />

      <section className="bg-[#28357a] py-10">
        <Container>
          <h2 className="text-center font-heading text-2xl font-semibold text-primary-foreground md:text-3xl">
            Our success depends on your health and well-being. As a member of
            our team, you&apos;ll enjoy a full suite of exceptional first-class
            benefits.
          </h2>
        </Container>
      </section>

      <Container>
        <FeatureCardGrid
          title="Health"
          columnsClassName="md:grid-cols-2 lg:grid-cols-3"
          items={[
            {
              title: 'Medical, Dental, Vision',
              imageSrc: `${ICON_BASE}/medical.png`,
              imageAlt: 'Medical, Dental, Vision',
              description:
                "Your health is important, and we're committed to providing you with a variety of comprehensive plans and programs to meet your health needs.",
            },
            {
              title: 'Surgery Plus',
              imageSrc: `${ICON_BASE}/surgery.png`,
              imageAlt: 'Surgery Plus',
              description:
                'An optional service that provides a dedicated care advocate, who will refer you to a network of Surgeons of Excellence, that may save you money on non-emergency surgical procedures.',
            },
            {
              title: 'Teledoc',
              imageSrc: `${ICON_BASE}/teledoc.png`,
              imageAlt: 'Teledoc',
              description:
                'You deserve to access the care you need whenever and wherever you need it. Connect with board-certified doctors by phone or video 24/7/365.',
            },
            {
              title: 'Flexible Spending',
              imageSrc: `${ICON_BASE}/flex.png`,
              imageAlt: 'Flexible Spending',
              description:
                'Contribute pre-tax money to cover eligible medical expenses.',
            },
            {
              title: 'Health Savings Account',
              imageSrc: `${ICON_BASE}/hsa.png`,
              imageAlt: 'health savings account',
              description:
                'You can use your HSA to pay for medical needs such as doctor visits, eyeglasses, hearing aids, and over-the-counter drugs. And because your balance carries over every year, you can also use your account to build a nest egg for health care expenses when you retire.',
            },
          ]}
        />

        <FeatureCardGrid
          title="Finance"
          columnsClassName="md:grid-cols-2 lg:grid-cols-3"
          items={[
            {
              title: '401(k)',
              imageSrc: `${ICON_BASE}/401k.png`,
              imageAlt: '401 (k)',
              description:
                'Your money works harder for you. Save money for your retirement - all your before-tax contributions and any money your contributions earn grow tax-deferred until you withdraw them.',
            },
            {
              title: 'Employee Stock Purchase',
              imageSrc: `${ICON_BASE}/stock.png`,
              imageAlt: 'employee stock purchase',
              description:
                'Employees may enroll in our Employee Stock Purchase plan to purchase common stock of Dycom Industries, Inc.',
            },
            {
              title:
                'Life Insurance, Critical Illness/Accident Insurance, Short- and Long-term Disability',
              imageSrc: `${ICON_BASE}/insurance.png`,
              imageAlt:
                'Life insurance, Critical Illness/Accident Insurance, Short- and Long-term disability',
              description:
                'Enjoy extra peace of mind knowing that you can support your family in the case of unexpected life event.',
            },
            {
              title: 'Education Assistance',
              imageSrc: `${ICON_BASE}/education.png`,
              imageAlt: 'Education Assistance',
              description:
                'We support your efforts to further your education by providing tuition reimbursement assistance when you pursue higher education in the form of an associates, bachelors, or masters-level degree.',
            },
            {
              title: 'Parental Leave',
              imageSrc: `${ICON_BASE}/parent.png`,
              imageAlt: 'Parental Leave',
              description:
                "At Dycom we understand the importance of a parents' time with their newly born or adopted child and offer paid leave for parents.",
            },
            {
              title: 'Dependent Care',
              imageSrc: `${ICON_BASE}/parent.png`,
              imageAlt: 'Dependent Care',
              description:
                'Contribute pre-tax money to cover eligible dependent care services that are required while you (and your spouse) work.',
            },
          ]}
        />

        <FeatureCardGrid
          title="Lifestyle"
          columnsClassName="md:grid-cols-2 lg:grid-cols-3"
          items={[
            {
              title: 'Employee Assistance Program',
              imageSrc: `${ICON_BASE}/assistance.png`,
              imageAlt: 'Employee Assistance Program',
              description:
                "Sometimes we know what a day brings, and sometimes we're challenged by the unexpected. The Employee Assistance Program provides access to a range of support and therapeutic services.",
            },
            {
              title: 'Paid Time Off and Holidays',
              imageSrc: `${ICON_BASE}/pto.png`,
              imageAlt: 'paid time off and holidays',
              description:
                'Enjoy accrued time off that increases with tenure and paid company holidays.',
            },
            {
              title: 'Retailer Discounts',
              imageSrc: `${ICON_BASE}/retailer.png`,
              imageAlt: 'Retailer discounts!',
              description: 'Enjoy several different retailer discounts!',
            },
          ]}
        />
      </Container>

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
