import type { Metadata } from 'next';

import { Container, MediaHero } from '@repo/base-ui';

import { SubcontractorRequestForm } from '../../components/generated/subcontractor-request-form';

export const metadata: Metadata = {
  title: 'Subcontractor Request',
};

export default function SubcontractorRequestPage() {
  return (
    <main>
      <MediaHero
        background={{
          type: 'image',
          src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2022/02/banner-subcontractor-requests.jpg',
          alt: '',
        }}
        title="Subcontractor Information Request"
        minHeightClassName="min-h-[280px] md:min-h-[360px]"
      />

      <Container>
        <section className="flex justify-center py-10">
          <SubcontractorRequestForm />
        </section>
      </Container>
    </main>
  );
}
