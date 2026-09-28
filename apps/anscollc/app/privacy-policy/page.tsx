import type { Metadata } from 'next';

import { Container } from '@repo/base-ui';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'The privacy and security of your information is important to us.',
};

const INFO_CATEGORIES: { code: string; title: string; description: string; collected: 'YES' | 'NO' }[] = [
  {
    code: 'A',
    title: 'Identifiers.',
    description:
      'A real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol (IP) address, email address, account name.',
    collected: 'YES',
  },
  {
    code: 'B',
    title: 'Personal information categories listed in the California Customer Records statute (Cal. Civ. Code § 1798.80(e)).',
    description:
      'A name, address, telephone number, education, employment. Some personal information included in this category may overlap with other categories.',
    collected: 'YES',
  },
  {
    code: 'C',
    title: 'Protected classification characteristics under California or federal law.',
    description:
      'Age (40 years or older), race, color, ancestry, national origin, religion or creed, marital status, sex (including gender, gender identity, gender expression, pregnancy or childbirth and related medical conditions), veteran or military status.',
    collected: 'YES',
  },
  {
    code: 'D',
    title: 'Commercial information.',
    description:
      'Records of personal property, products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.',
    collected: 'NO',
  },
  {
    code: 'E',
    title: 'Biometric information.',
    description:
      'Genetic, physiological, behavioral, and biological characteristics, such as DNA sequences, fingerprints, facial geometry, voiceprints, iris or retina scans, and sleep, health or exercise data.',
    collected: 'NO',
  },
  {
    code: 'F',
    title: 'Internet or other similar network activity.',
    description:
      "Browsing history, search history, information on a consumer's interaction with a website, application, or advertisement.",
    collected: 'YES',
  },
  {
    code: 'G',
    title: 'Geolocation data.',
    description: 'Physical location or movements.',
    collected: 'NO',
  },
  {
    code: 'H',
    title: 'Sensory data.',
    description: 'Audio, electronic, visual, thermal, olfactory, or similar information.',
    collected: 'NO',
  },
  {
    code: 'I',
    title: 'Professional or employment-related information.',
    description: 'Current or past job history or performance evaluations.',
    collected: 'YES',
  },
  {
    code: 'J',
    title:
      'Non-public education information (per the Family Educational Rights and Privacy Act (20 U.S.C. Section 1232g, 34 C.F.R. Part 99)).',
    description:
      'Education records directly related to a student maintained by an educational institution or party acting on its behalf, such as grades, transcripts, class lists, student schedules, student identification codes, student financial information, or student disciplinary records.',
    collected: 'NO',
  },
  {
    code: 'K',
    title: 'Inferences drawn from other personal information.',
    description:
      "Profile reflecting a person's preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.",
    collected: 'NO',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <Container>
      <div className="mx-auto max-w-3xl py-12">
        <h1 className="mb-2 font-heading text-3xl font-semibold text-ink md:text-4xl">Privacy Policy</h1>
        <p className="mb-6 italic text-ink-muted">Last Updated: June 17, 2025</p>

        <div className="flex flex-col gap-4 text-ink-soft">
          <p>
            The privacy and security of your information is important to us. This Privacy Statement explains how
            Ansco &amp; Associates, LLC and its parent company, Dycom Industries, Inc. (&ldquo;Dycom,&rdquo;
            &ldquo;we&rdquo; or &ldquo;us&rdquo;) collects, uses, and shares your information. This Privacy Statement
            applies to information collected by us through any means, including through our website and our social
            media pages or accounts (collectively, &ldquo;Sites&rdquo;), through our subsidiaries, and through other
            third parties.
          </p>
          <p>
            By visiting or using our Sites, contacting us or otherwise providing information to us, you consent to
            our collection, use, storage, and sharing of your information as described in this Privacy Statement. If
            you disagree with anything in this Privacy Statement, you should not visit or use our Sites or provide
            your information to us.
          </p>
          <p>If you are under 13 years of age, please do not use our Sites and do not send us any information about yourself.</p>
          <p>
            If you are a California resident, you may have additional rights as described below in the section
            entitled{' '}
            <a href="#calipriv" className="underline">
              &ldquo;CALIFORNIA PRIVACY RIGHTS.&rdquo;
            </a>
          </p>
          <p>
            If you are outside the United States, by using our Sites or by providing your information to us, you
            consent to have your Personal Information transferred to and stored in the United States.
          </p>

          <h2 className="mt-6 font-heading text-2xl font-semibold text-ink">INFORMATION WE COLLECT</h2>
          <p>
            We collect certain information that identifies, relates to, describes, and is reasonably capable of
            being associated with a particular consumer or household (&ldquo;Personal Information&rdquo;). Personal
            Information does not include publicly available information in government records or de-identified,
            anonymized, or aggregated consumer information.
          </p>
          <p>
            We collect Personal Information and other information from or about you in a few different ways.
            Specifically, we may collect or receive information: (1) directly from you through information you
            provide; (2) indirectly from you by observing your actions on our website; and (3) from third parties
            such as Google, Facebook, and Instagram. Each of these is discussed in more detail below.
          </p>

          <h3 className="mt-2 font-heading text-xl font-semibold text-ink">Information You Provide</h3>
          <p>You may provide information to us in a number of ways:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>If you submit an inquiry through our website, we collect your name, email address, telephone number, and any other information you provide.</li>
            <li>
              When you sign up for Dycom email alerts, you are redirected to our service provider&rsquo;s site where
              our service provider collects your name, email, telephone number and company name, if provided. This
              information may be shared with us. You may unsubscribe to the alerts at any time by clicking the
              &ldquo;unsubscribe&rdquo; link that is included in each email alert.
            </li>
            <li>If you request investor materials, you are redirected to our service provider&rsquo;s site where our service provider collects your name, email, and other contact information you provide.</li>
            <li>
              If you post information on our social media pages, that information may be collected and used by us
              (as well as other users of those sites and the public generally). Please do not post any information
              on any site that allows strangers to identify or locate you or that you otherwise do not want to share
              with the public.
            </li>
            <li>When you submit a resume or application for employment, any information you provide will be collected and we may also obtain additional information through references, former employers, background checks, and credit reports.</li>
          </ul>
          <p>
            Please note that, if you are visiting our website from a location outside of the United States, you will
            be connected through and to servers located in the United States. All information you provide will be
            maintained in our web server(s) and internal systems located in the United States.
          </p>

          <h3 className="mt-2 font-heading text-xl font-semibold text-ink">Information Indirectly Collected from You</h3>
          <p>
            <strong className="text-ink">Cookies and Other Technologies.</strong> We automatically collect
            information from you using cookies and other technologies on our website.
          </p>
          <p>
            Cookies are small text files offered to your computer by servers in order to keep track of your browser
            as you navigate our website. We may use cookies and similar technologies to identify who you are and may
            use them when you visit our website or click on links in our emails. Cookies also enable us to remember
            your user preferences for our website. Cookies and other technologies may also be used for site
            maintenance and analysis, performing network communications, authenticating users, and protecting
            against fraud and theft.
          </p>
          <p>
            You can block or remove cookies using your Internet browser&rsquo;s settings. Each browser is different,
            so check the &ldquo;Help&rdquo; menu of your browser to learn how to change your cookie preferences. To
            manage flash cookies, please see Flash Player Help. If you block or remove cookies, you may not be able
            to use certain functionality or access certain content on our website.
          </p>
          <p>
            <strong className="text-ink">Clear GIFs</strong> (a.k.a. web beacons, web bugs or pixel tags), are tiny
            graphics with a unique identifier, similar in function to cookies. Clear GIFs are embedded invisibly on
            web pages. We may use clear GIFs, in connection with our website to, among other things, track the
            activities of visitors, help us manage content, and compile statistics about usage of the website. We
            and our third party service providers may also use clear GIFs in HTML emails to our clients, to help us
            track email response rates, identify when our emails are viewed, and track whether our emails are
            forwarded.
          </p>
          <p>
            &ldquo;Do Not Track&rdquo; is a privacy setting that users can set in certain web browsers. If turned on,
            this setting requests that website not track information about users. At this time, we do not respond
            to &ldquo;Do Not Track&rdquo; browser settings or signals.
          </p>
          <p>
            <strong className="text-ink">Traffic Data.</strong> We automatically track and collect general log
            information when you visit our website, including your: (a) Internet Protocol (IP) address; (b) browser
            type; (c) operating system; (d) time of visit; (e) the referring website page; and (f) the pages you
            visit on our website (collectively &ldquo;Traffic Data&ldquo;). Traffic Data does not personally
            identify you. We use the Traffic Data to report aggregated website activity and to better understand the
            needs of our users so we can make informed decisions regarding the content and design of our website. We
            may collect Traffic Data through various technologies including, but not limited to, cookies, IP
            addresses, and clear GIFs (Graphics Interchange Format, a software technology also known as a pixel
            tag).
          </p>
          <p>
            <strong className="text-ink">Third Party Websites and Social Media Services.</strong> Our website may
            include links to third party websites or social media services where you may be able to post comments,
            reviews or other information. We may monitor comments and reviews regarding us, our products, or our
            Sites that you publicly post on social media or customer review sites. In addition, please note that
            your use of these third party websites or social media services may result in those sites collecting
            information about you. We are not responsible for these third party websites or social media services
            and you should review their privacy policies to make sure you understand the information that may be
            collected, used, and shared by those sites.
          </p>

          <h3 className="mt-2 font-heading text-xl font-semibold text-ink">Information from Third Parties</h3>
          <p>
            <strong className="text-ink">Our Subsidiaries&rsquo; Websites.</strong> Our website includes links to
            our subsidiaries&rsquo; websites. If you submit information through any of those websites, it may be
            shared with us. Any information shared with us by our subsidiaries will be governed by this Privacy
            Statement.
          </p>
          <p>
            <strong className="text-ink">Social Media Sites.</strong> To the extent you post information on our
            social media sites, we may collect such information. We may also receive Personal Information about you
            from certain social media sites such as Facebook, Instagram, and LinkedIn.
          </p>
          <p>
            <strong className="text-ink">Third Party Analytics Services.</strong> We may work with third party
            analytics services such as Google Analytics to help us understand how our Sites are being used, such as
            tracking the number and frequency of visits to our website. These analytics services may use cookies and
            other technologies to collect this information. We receive reports of aggregated data from these
            services, but we do not receive Personal Information about individual users.
          </p>

          <h3 className="mt-2 font-heading text-xl font-semibold text-ink">Categories of Information Collected</h3>
          <p>
            In the 12 months preceding the Last Updated date of this Privacy Statement, we have collected or
            received the following categories of Personal Information about consumers:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2 pr-4 font-heading text-ink">Category</th>
                  <th className="py-2 pr-4 font-heading text-ink">Examples</th>
                  <th className="py-2 font-heading text-ink">Collected</th>
                </tr>
              </thead>
              <tbody>
                {INFO_CATEGORIES.map((row) => (
                  <tr key={row.code} className="border-b border-border align-top">
                    <td className="py-3 pr-4 font-semibold text-ink">
                      {row.code}. {row.title}
                    </td>
                    <td className="py-3 pr-4">{row.description}</td>
                    <td className="py-3">{row.collected}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-6 font-heading text-2xl font-semibold text-ink">HOW WE USE YOUR INFORMATION</h2>
          <p>We and our service providers may use Personal Information for the following purposes:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>To respond to your inquiries.</li>
            <li>To provide email alerts for which you sign up.</li>
            <li>To provide investor materials requested by you or required by applicable law to be sent to you.</li>
            <li>To manage any contractual relationship between us.</li>
            <li>To process orders from our customers and deliver products and services.</li>
            <li>To market and promote our products and services.</li>
            <li>To present our website and related content to you.</li>
            <li>To evaluate and make improvements to our website or social media presences.</li>
            <li>To diagnose and fix problems with our website.</li>
            <li>To secure our website and to prevent or detect criminal, unlawful, or harassing actions or conduct.</li>
            <li>To provide product updates, news, and event information.</li>
            <li>If you apply for a job, to evaluate your skills and experience, to verify previous employment, and to conduct background checks (as permitted by law).</li>
            <li>To provide any required reporting to governmental or regulatory entities.</li>
          </ul>
          <p>
            On other occasions where we ask you for consent, we will use the information for the purposes we provide
            at that time. You have the right to withdraw your consent at any time; however, we may have other legal
            grounds for storing and/or using your information, including those identified above.
          </p>

          <h2 className="mt-6 font-heading text-2xl font-semibold text-ink">SHARING AND DISCLOSURE OF PERSONAL INFORMATION</h2>
          <p>We do not sell your Personal Information. We may share your Personal Information as follows:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-ink">Subsidiaries.</strong> We may share Personal Information with our
              subsidiaries so they can respond to any inquiries or provide requested services.
            </li>
            <li>
              <strong className="text-ink">Service Providers.</strong> We may disclose Personal Information to third
              party vendors, contractors or agents who perform functions on our behalf (&ldquo;Service
              Providers&rdquo;). For example, we may contract with Service Providers to provide certain services,
              such as providing data storage and management, analytics services, marketing services, employee
              benefits services, payroll services, or payment processing services. We only provide our Service
              Providers with Personal Information necessary for them to perform these services on our behalf. Each
              Service Provider must agree to use commercially reasonable security procedures and practices,
              appropriate to the nature of the information involved, to protect your Personal Information from
              unauthorized acquisition, access, use, or disclosure. Service Providers may only use the Personal
              Information they obtain from us or collect on our behalf to provide services to us.
            </li>
            <li>
              <strong className="text-ink">Business Transfers.</strong> If we are acquired by, or merged with,
              another entity, if substantially all of our assets are transferred to another entity, or as part of a
              bankruptcy proceeding, or if we are evaluating or in negotiations with respect to any such
              transaction, we may transfer, or make available, the Personal Information we have collected from you
              to the other entity or resulting legal entity.
            </li>
            <li>
              <strong className="text-ink">Legal Process.</strong> We also may disclose the Personal Information we
              collect from you: to comply with applicable laws and regulations, a government investigation, a
              judicial proceeding, a court order, or other legal process (such as in response to a subpoena); or to
              respond to discovery requests or present evidence in a legal proceeding in which we are involved.
            </li>
            <li>
              <strong className="text-ink">To Protect Us and Others.</strong> We also may disclose the Personal
              Information we collect from you where we believe such disclosure is needed to investigate, prevent, or
              take action regarding illegal activities, suspected fraud, situations involving potential threats to
              the safety of any person, suspected violations of this Privacy Statement, and suspected violations of
              any applicable terms and conditions.
            </li>
            <li>
              <strong className="text-ink">Aggregated and De-Identified Information.</strong> We may share aggregate
              or de-identified Personal Information with our service providers and/or affiliated companies for
              marketing, advertising, research, or similar purposes.
            </li>
            <li>
              <strong className="text-ink">Job Applications.</strong> If you apply for a job position, some of your
              Personal Information may be shared with third parties in order to confirm your education, work
              history, and references, and to obtain background checks and credit reports if permitted by law.
            </li>
          </ul>
          <p>
            In the 12 months preceding the Last Updated dated of this Privacy Statement, we have disclosed the
            following categories of Personal Information for a business purpose as described above:
          </p>
          <p>
            <strong className="text-ink">Category A:</strong> Identifiers.
            <br />
            <strong className="text-ink">Category B:</strong> California Customer Records personal information
            categories.
            <br />
            <strong className="text-ink">Category C:</strong> Protected classification characteristics under
            California or federal law.
            <br />
            <strong className="text-ink">Category F:</strong> Internet or other similar network activity.
            <br />
            <strong className="text-ink">Category I:</strong> Professional or employment-related information.
          </p>
          <p>
            <strong className="text-ink">
              We will not share mobile information with third parties or their affiliates for marketing or
              promotional purposes.
            </strong>{' '}
            All other categories exclude text messaging originator opt-in data and consent; this information will
            not be shared with any third parties.
          </p>

          <h2 className="mt-6 font-heading text-2xl font-semibold text-ink">CHILDREN&rsquo;S PRIVACY</h2>
          <p>
            Our Sites, our products, and our services are not directed to children under the age of 13. Further, we
            do not knowingly collect Personal Information from children under the age of 13. If you become aware
            that your child has provided personally identifiable information without your consent and/or is under
            the age of 13, please contact us at{' '}
            <a href="mailto:privacy@dycomind.com" className="underline">
              privacy@dycomind.com
            </a>
            . If we become aware that we have unknowingly collected Personal Information from a child under the age
            of 13, we will take commercially reasonable efforts to delete such information from our records.
          </p>

          <h2 className="mt-6 font-heading text-2xl font-semibold text-ink">YOUR PRIVACY CHOICES</h2>
          <p>
            You may opt-out of receiving email communications and other marketing materials from us (or any
            third-party email marketing service we may use) via links provided in each email (usually at the bottom
            of the email).
          </p>

          <h2 className="mt-6 font-heading text-2xl font-semibold text-ink">USER-GENERATED CONTENT</h2>
          <p>
            You may be able to post content on our social media pages, including your comments, photos, or other
            information. Information you provide or post to any third party sites is subject to that site&rsquo;s
            privacy policy and practices. If you post such content on social media pages, all of the information or
            content that you post may be visible to other visitors or users and we cannot prevent such information
            from being used by others. Please carefully consider your content before posting. Further, please note
            that all such content is subject to removal if it violates any applicable law, poses a security risk,
            infringes the rights of someone else, or constitutes a threat, defamation, or harassment.
          </p>

          <h2 className="mt-6 font-heading text-2xl font-semibold text-ink">LINKS TO THIRD PARTY WEBSITES OR PLATFORMS</h2>
          <p>
            Our website may contain links to third party websites or platforms. These links are provided for your
            convenience. We are not responsible for and have no control over the content on these other websites or
            platforms. The inclusion of a link on our website is not an endorsement. Please note that when you click
            on one of these links, you will leave our website and will be subject to the policies and privacy
            practices of the other website or platform, which may differ significantly from our Privacy Statement.
            Please review such third parties&rsquo; privacy policies before providing any Personal Information to
            them.
          </p>
          <p>
            We make no representations or warranties, express or implied, regarding the content of any of these
            linked websites or platforms.{' '}
            <strong className="text-ink">
              WE EXPRESSLY DISCLAIM ANY AND ALL LIABILITY FOR YOUR INTERACTION WITH SUCH THIRD PARTY WEBSITES OR
              PLATFORMS.
            </strong>
          </p>

          <h2 className="mt-6 font-heading text-2xl font-semibold text-ink">SECURITY OF YOUR INFORMATION</h2>
          <p>
            We use commercially reasonable security safeguards to help protect Personal Information from
            unauthorized access, alteration, loss, or disclosure. Despite these efforts, please understand that no
            system is perfect and we cannot guarantee that unauthorized access, theft, or loss of data will not
            occur. Please advise us immediately at{' '}
            <a href="mailto:privacy@dycomind.com" className="underline">
              privacy@dycomind.com
            </a>{' '}
            of any incident involving Personal Information in our custody or control.
          </p>

          <h2 className="mt-6 font-heading text-2xl font-semibold text-ink">CHANGES TO THIS PRIVACY STATEMENT</h2>
          <p>
            We may revise this Privacy Statement at any time without advance notice to you. The most current version
            of our Privacy Statement will be posted on our website. Once posted, any changes to the Privacy
            Statement are effective immediately upon posting unless otherwise specifically noted. By continuing to
            access or use our Sites or otherwise provide any information to us after any changes are posted, you
            agree to be bound by the terms of the revised Privacy Statement.
          </p>

          <h2 className="mt-6 font-heading text-2xl font-semibold text-ink">SEVERABILITY</h2>
          <p>
            The provisions of this Privacy Statement are intended to be severable. If for any reason any provision
            of this Privacy Statement shall be held invalid or unenforceable in whole or in part in any
            jurisdiction, such provision shall, as to such jurisdiction, be ineffective to the extent of such
            invalidity or unenforceability without in any manner affecting the validity or enforceability thereof in
            any other jurisdiction or the remaining provisions hereof in any jurisdiction.
          </p>

          <h2 className="mt-6 font-heading text-2xl font-semibold text-ink">CHOICE OF LAW, JURISDICTION, AND VENUE</h2>
          <p>
            This Privacy Statement, your use of our Sites, and your provision of Personal Information to us shall be
            governed by and interpreted in accordance with the applicable laws of the United States and the State of
            Florida without giving effect to any choice of law or conflict of law provision or rule. By accessing or
            using our Sites or otherwise providing information to us, visitors from outside of the United States
            acknowledge that their access and/or use is subject to the laws and regulations of the United States and
            the State of Florida and waive any claims that may arise under other laws.
          </p>
          <p>
            Any disputes arising from this Privacy Statement or your access to or use of our Sites shall be subject
            to the exclusive jurisdiction of the state and federal courts of the State of Florida and venue shall
            lie in Palm Beach County. By accessing or using any of our Sites or by providing your Personal
            Information to us, you consent and submit to the personal jurisdiction of such courts for such purposes
            and waive any and all objections as to jurisdiction or venue in such courts.
          </p>

          <h2 id="calipriv" className="mt-6 font-heading text-2xl font-semibold text-ink">
            CALIFORNIA PRIVACY RIGHTS
          </h2>
          <p>
            The California Consumer Privacy Act (CCPA), California&rsquo;s &ldquo;Shine the Light&rdquo; law, and the
            California Online Privacy Protection Act provide consumers who are California residents with specific
            rights regarding their Personal Information. If you are a California resident, this section describes
            your rights and explains how to exercise those rights.
          </p>
          <p>
            <strong className="text-ink">Right to Information.</strong> Subject to certain limits, you may ask us to
            provide the following information for the 12-month period preceding your request:
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>The categories of Personal Information we collected about you;</li>
            <li>The categories of sources from which the Personal Information was collected;</li>
            <li>The business or commercial purpose for collecting the Personal Information;</li>
            <li>The categories of third parties with whom we shared the Personal Information;</li>
            <li>
              If we disclosed Personal Information for a business purpose, a list of the disclosures including the
              Personal Information categories that each category of recipient received; and
            </li>
            <li>The specific pieces of Personal Information we collected about you.</li>
          </ol>
          <p>We do not provide these information rights for Personal Information that we obtain through a business-to-business (B2B) relationship.</p>
          <p>
            <strong className="text-ink">Right to Delete.</strong> You also have the right to ask us to delete any
            Personal Information that we have collected about you, subject to certain limitations under CCPA. We may
            deny your deletion request if the information is necessary for us or our service providers to, among
            other things, provide a good or service you requested, take actions reasonably anticipated in the
            context of our business relationship with you, perform a contract we have with you, detect and protect
            against security incidents or illegal activity, comply with a legal obligation, or exercise a right
            provided for by law.
          </p>
          <p>
            <strong className="text-ink">Right to Nondiscrimination.</strong> We will not discriminate against you
            if you exercise your privacy rights under California law, including by:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Denying you goods or services.</li>
            <li>Charging you different prices or rates for goods or services, including through granting discounts or other benefits, or imposing penalties.</li>
            <li>Providing you a different level or quality of goods or services.</li>
            <li>Suggesting that you may receive a different price or rate for goods or services or a different level or quality of goods or services.</li>
          </ul>
          <p>
            However, the CCPA permits us to offer you certain financial incentives that can result in different
            prices, rates, or quality levels, which are related to your Personal Information&rsquo;s value. We do
            not currently offer financial incentives in exchange for Personal Information we collect.
          </p>
          <p>
            <strong className="text-ink">Submission of Requests for Information or to Delete.</strong> If you are a
            California resident, you may submit a request for information or a request to delete by:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Calling us at{' '}
              <a href="tel:8445331258" className="underline">
                (844) 533-1258
              </a>
              .
            </li>
            <li>
              Emailing us at{' '}
              <a href="mailto:privacy@dycomind.com" className="underline">
                privacy@dycomind.com
              </a>{' '}
              &ndash; please provide your name, telephone number, and type of request (that is, a request for
              categories of information, a request for specific pieces of information, and/or a request to delete).
            </li>
          </ul>
          <p>
            To protect your privacy and security, we will also take reasonable steps to verify your identity before
            providing your Personal Information and before deleting your information. Only you or someone legally
            authorized to act on your behalf may make a verifiable request related to your Personal Information. If
            you want to authorize someone else to make a request on your behalf, please contact us at{' '}
            <a href="mailto:privacy@dycomind.com" className="underline">
              privacy@dycomind.com
            </a>{' '}
            and provide your name, telephone number, the name of the person you want to authorize to make a request,
            and the type of request the person is authorized to make (that is, a request for categories of
            information, a request for specific pieces of information, and/or a request to delete). We will contact
            you if we need more information.
          </p>
          <p>
            <strong className="text-ink">Responses to Requests.</strong> We do not charge a fee to respond to your
            request unless it is repetitive (more than twice in a 12-month period) or excessive. We generally will
            respond to your request within 45 days of its receipt. If we need more time to respond, we will inform
            you of the reason and we may take up to an additional 45 days to respond.
          </p>

          <h2 className="mt-6 font-heading text-2xl font-semibold text-ink">CONTACT US</h2>
          <p>If you have any questions or comments about this Privacy Statement, please contact us at:</p>
          <h3 className="font-heading text-lg font-semibold text-ink">Email:</h3>
          <p>
            <a href="mailto:privacy@dycomind.com" className="underline">
              privacy@dycomind.com
            </a>
          </p>
          <h3 className="font-heading text-lg font-semibold text-ink">Mail:</h3>
          <ul className="list-none space-y-1 pl-0">
            <li>Dycom Industries, Inc.</li>
            <li>Attn: Privacy</li>
            <li>300 Banyan Boulevard, Suite 1101</li>
            <li>West Palm Beach, FL 33401</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
