import type { Metadata } from 'next';

import { Container, MediaHero, SplitPanel } from '@repo/base-ui';

export const metadata: Metadata = {
  title: { absolute: 'Subcontractors - Work with Our Team' },
};

export default function SubcontractorsPage() {
  return (
    <main>
      <MediaHero
        background={{
          type: 'image',
          src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/subs-banner.jpg',
          alt: '',
        }}
        title="Come Work With The Best Of The Best"
        minHeightClassName="min-h-[280px] md:min-h-[360px]"
      />

      <Container>
        <section className="flex flex-col gap-16 py-10">
          <SplitPanel
            image={{
              src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/subcontractor-1-updated.jpg',
              alt: '',
            }}
            imagePosition="left"
            title="Become a Partner"
            cta={{ label: 'Fill Out Your Information', href: '/subcontractor-request' }}
          >
            <p>
              Ansco utilizes experienced partners for many phases of telecommunication infrastructure process across
              all the locations where we operate.
            </p>
            <p>
              If you are a contractor and would like to be considered for future projects, please complete and
              submit the Subcontractor Information form.
            </p>
            <p>
              Your information will be sent to the Regional Project Manager in the location(s) you specified your
              company is available to work and someone will get back to you within 24-48 hours.
            </p>
          </SplitPanel>

          <SplitPanel
            image={{
              src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/06/subcontractors-3-just-in-case-u-need-it.webp',
              alt: '',
            }}
            imagePosition="right"
            title="Requirements for Subcontractor Onboarding"
          >
            <ol className="ml-5 list-decimal space-y-2">
              <li>An executed Subcontractor Agreement and Non Disclosure.</li>
              <li>Compliance with ICP employee audit for employment eligibility prior to performing work on our project(s).</li>
              <li>
                Provide certificates of insurance that assure full compliance with flow-down contract insurance
                requirements in our customer contracts.
              </li>
              <li>Participation in Dycom&rsquo;s Pollution Program, with an estimated charge of $475 per year.</li>
              <li>Adhere to all industry, regulatory, local and company construction and safety requirements.</li>
              <li>Compliance with our customer&rsquo;s badging requirements.</li>
            </ol>
            <p>
              We are committed to conducting business with the highest standards of integrity and ethics, and with
              abiding respect for corporate citizenship and sustainability. Please{' '}
              <strong>
                <a
                  href="https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/12/Ansco_Subsidiary-Supplier-Code-of-Conduct-October-2025.pdf"
                  className="text-primary underline"
                >
                  click here to download our supplier code of conduct.
                </a>
              </strong>
            </p>
            <p>
              To report Supplier concerns or issues, please contact us at{' '}
              <a href="tel:8888181480" className="text-primary underline">
                888-818-1480
              </a>
              .
            </p>
          </SplitPanel>
        </section>
      </Container>
    </main>
  );
}
