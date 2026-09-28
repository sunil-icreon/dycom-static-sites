export type JobOpening = {
  title: string;
  location: string;
  applyHref: string;
};

type JobOpeningsListProps = {
  jobs: JobOpening[];
};

/**
 * Static snapshot of the "Check Out These Jobs!" widget captured in the source DOM
 * (`.job-openings` / `.nectar-hor-list-item`) — five real openings, each linking to its actual
 * SAP SuccessFactors posting. This list reflects openings live at capture time and will go stale;
 * pair it with a CTA to the live job board (see the "Explore all openings" link) rather than
 * treating it as an evergreen feed.
 */
export function JobOpeningsList({ jobs }: JobOpeningsListProps) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {jobs.map((job) => (
        <div key={job.applyHref} className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <span className="font-heading text-lg text-ink-soft">{job.title}</span>
          <span className="font-ui text-sm text-ink-muted sm:ml-auto sm:mr-6">{job.location}</span>
          <a
            href={job.applyHref}
            target="_blank"
            rel="noreferrer"
            className="font-ui text-sm font-bold uppercase tracking-wide text-primary hover:underline"
          >
            Apply Now
          </a>
        </div>
      ))}
    </div>
  );
}
