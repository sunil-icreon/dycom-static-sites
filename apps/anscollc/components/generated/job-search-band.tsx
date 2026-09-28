'use client';

import { useState } from 'react';

/**
 * Recreates the careers page's "Connect to Your Next Opportunity" keyword/location search box
 * (`.dycom-job-search-form` / `dycomJobSearch()` in the captured DOM). The source builds a URL to
 * the SAP SuccessFactors job board from the two inputs and navigates to it — reproduced here as a
 * small client component rather than the original inline `onclick` script.
 */
export function JobSearchBand() {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  function handleSearch() {
    const params = new URLSearchParams({
      q: keyword,
      locationsearch: location,
      searchResultView: 'LIST',
      pageNumber: '0',
    });
    window.location.href = `https://dycomind.jobs.hr.cloud.sap/ansco/search/?${params.toString()}`;
  }

  return (
    <section className="bg-[#28357a] py-12 text-white">
      <div className="mx-auto max-w-[1120px] px-6 text-center">
        <h2 className="font-heading text-2xl font-semibold md:text-3xl">Connect to Your Next Opportunity</h2>
        <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <input
            type="search"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="Search by Keyword"
            aria-label="Search by Keyword"
            maxLength={50}
            className="rounded-md border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white sm:w-64"
          />
          <input
            type="search"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Search by Location"
            aria-label="Search by Location"
            maxLength={50}
            className="rounded-md border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white sm:w-64"
          />
          <button
            type="button"
            onClick={handleSearch}
            className="rounded-md bg-primary px-6 py-3 font-ui font-semibold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            Search Jobs
          </button>
        </div>
      </div>
    </section>
  );
}
