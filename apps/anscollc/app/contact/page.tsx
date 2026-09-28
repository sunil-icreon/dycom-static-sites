import type { Metadata } from 'next';

import { Container, MediaHero } from '@repo/base-ui';

import { ContactForm } from '../../components/generated/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us',
};

const SUPPORT_LOCATIONS = [
  { state: 'Arizona', phone: '1-855-520-1757', phoneHref: 'tel:1-855-520-1757' },
  { state: 'Georgia', phone: '1-877-245-6660', phoneHref: 'tel:1-877-245-6660' },
  { state: 'North Carolina', phone: '1-877-245-6660', phoneHref: 'tel:1-877-245-6660' },
  { state: 'South Carolina', phone: '1-877-245-6660', phoneHref: 'tel:1-877-245-6660' },
  { state: 'Texas', phone: '1-855-520-1757', phoneHref: 'tel:1-855-520-1757' },
];

export default function ContactPage() {
  return (
    <main>
      <MediaHero
        background={{
          type: 'image',
          src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2023/08/contact-banner.webp',
          alt: '',
        }}
        title="Contact Us"
        minHeightClassName="min-h-[280px] md:min-h-[360px]"
      />

      <Container>
        <section className="py-10">
          <h2 className="mb-4 font-heading text-2xl font-semibold text-ink md:text-3xl">Contact Ansco &amp; Associates</h2>
          <p className="mb-8 max-w-3xl text-lg text-ink-soft">
            The team at Ansco is eager to hear from you. Whether you&rsquo;ve got questions about our services, our
            people or our equipment, we welcome your inquiries. Please complete the contact form below and we&rsquo;ll
            reach out to you at our earliest opportunity.
          </p>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="overflow-hidden rounded-lg shadow-md">
                <iframe
                  title="Ansco &amp; Associates headquarters location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.114769049871!2d-84.2988729235705!3d34.05522232309257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5950c2d4d209f%3A0x18f57e6d50d3b57b!2s200%20North%20Point%20Center%20E%20Suite%20400%2C%20Alpharetta%2C%20GA%2030022!5e0!3m2!1sen!2sus!4v1726405178725!5m2!1sen!2sus"
                  className="h-64 w-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <h3 className="mb-2 mt-6 font-heading text-lg font-semibold text-primary">Headquarters</h3>
              <p className="m-0 text-ink-soft">
                Phone:{' '}
                <a href="tel:(404) 508-5700" className="text-primary underline">
                  (404) 508-5700
                </a>
              </p>
              <p className="mt-2 text-ink-soft">
                Address:
                <br />
                200 North Point Center East, Suite 400
                <br />
                Alpharetta, GA 30022
              </p>

              <h3 className="mb-2 mt-6 font-heading text-lg font-semibold text-primary">Customer Service</h3>
              <div className="flex flex-col gap-4">
                {SUPPORT_LOCATIONS.map((location) => (
                  <div key={location.state}>
                    <p className="m-0 font-semibold text-ink">{location.state}</p>
                    <p className="m-0 text-ink-soft">
                      Phone{' '}
                      <a href={location.phoneHref} className="text-primary underline">
                        {location.phone}
                      </a>
                    </p>
                    <p className="m-0 text-ink-soft">
                      Email:{' '}
                      <a href="mailto:CustomerCare@Anscollc.com" className="text-primary underline">
                        CustomerCare@Anscollc.com
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="py-10">
          <h2 className="mb-3 font-heading text-2xl font-semibold text-ink md:text-3xl">Locations</h2>
          <p className="max-w-2xl text-ink-soft">
            Our locations are operating offices and not open to the public. For assistance, please fill out the form
            above to get in touch.
          </p>
        </section>
      </Container>
    </main>
  );
}
