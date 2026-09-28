'use client';

import { useState } from 'react';

import { MigratedForm } from '@repo/base-ui';

const STATES = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'U.S. Virgin Islands',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
  'Armed Forces Americas',
  'Armed Forces Europe',
  'Armed Forces Pacific',
];

const COUNTRIES: Array<[string, string]> = [
  ['AF', 'Afghanistan'],
  ['AX', 'Åland Islands'],
  ['AL', 'Albania'],
  ['DZ', 'Algeria'],
  ['AS', 'American Samoa'],
  ['AD', 'Andorra'],
  ['AO', 'Angola'],
  ['AI', 'Anguilla'],
  ['AQ', 'Antarctica'],
  ['AG', 'Antigua and Barbuda'],
  ['AR', 'Argentina'],
  ['AM', 'Armenia'],
  ['AW', 'Aruba'],
  ['AU', 'Australia'],
  ['AT', 'Austria'],
  ['AZ', 'Azerbaijan'],
  ['BS', 'Bahamas'],
  ['BH', 'Bahrain'],
  ['BD', 'Bangladesh'],
  ['BB', 'Barbados'],
  ['BY', 'Belarus'],
  ['BE', 'Belgium'],
  ['BZ', 'Belize'],
  ['BJ', 'Benin'],
  ['BM', 'Bermuda'],
  ['BT', 'Bhutan'],
  ['BO', 'Bolivia'],
  ['BQ', 'Bonaire, Sint Eustatius and Saba'],
  ['BA', 'Bosnia and Herzegovina'],
  ['BW', 'Botswana'],
  ['BV', 'Bouvet Island'],
  ['BR', 'Brazil'],
  ['IO', 'British Indian Ocean Territory'],
  ['BN', 'Brunei Darussalam'],
  ['BG', 'Bulgaria'],
  ['BF', 'Burkina Faso'],
  ['BI', 'Burundi'],
  ['CV', 'Cabo Verde'],
  ['KH', 'Cambodia'],
  ['CM', 'Cameroon'],
  ['CA', 'Canada'],
  ['KY', 'Cayman Islands'],
  ['CF', 'Central African Republic'],
  ['TD', 'Chad'],
  ['CL', 'Chile'],
  ['CN', 'China'],
  ['CX', 'Christmas Island'],
  ['CC', 'Cocos Islands'],
  ['CO', 'Colombia'],
  ['KM', 'Comoros'],
  ['CG', 'Congo'],
  ['CD', 'Congo, Democratic Republic of the'],
  ['CK', 'Cook Islands'],
  ['CR', 'Costa Rica'],
  ['CI', "Côte d'Ivoire"],
  ['HR', 'Croatia'],
  ['CU', 'Cuba'],
  ['CW', 'Curaçao'],
  ['CY', 'Cyprus'],
  ['CZ', 'Czechia'],
  ['DK', 'Denmark'],
  ['DJ', 'Djibouti'],
  ['DM', 'Dominica'],
  ['DO', 'Dominican Republic'],
  ['EC', 'Ecuador'],
  ['EG', 'Egypt'],
  ['SV', 'El Salvador'],
  ['GQ', 'Equatorial Guinea'],
  ['ER', 'Eritrea'],
  ['EE', 'Estonia'],
  ['SZ', 'Eswatini'],
  ['ET', 'Ethiopia'],
  ['FK', 'Falkland Islands'],
  ['FO', 'Faroe Islands'],
  ['FJ', 'Fiji'],
  ['FI', 'Finland'],
  ['FR', 'France'],
  ['GF', 'French Guiana'],
  ['PF', 'French Polynesia'],
  ['TF', 'French Southern Territories'],
  ['GA', 'Gabon'],
  ['GM', 'Gambia'],
  ['GE', 'Georgia'],
  ['DE', 'Germany'],
  ['GH', 'Ghana'],
  ['GI', 'Gibraltar'],
  ['GR', 'Greece'],
  ['GL', 'Greenland'],
  ['GD', 'Grenada'],
  ['GP', 'Guadeloupe'],
  ['GU', 'Guam'],
  ['GT', 'Guatemala'],
  ['GG', 'Guernsey'],
  ['GN', 'Guinea'],
  ['GW', 'Guinea-Bissau'],
  ['GY', 'Guyana'],
  ['HT', 'Haiti'],
  ['HM', 'Heard Island and McDonald Islands'],
  ['VA', 'Holy See'],
  ['HN', 'Honduras'],
  ['HK', 'Hong Kong'],
  ['HU', 'Hungary'],
  ['IS', 'Iceland'],
  ['IN', 'India'],
  ['ID', 'Indonesia'],
  ['IR', 'Iran'],
  ['IQ', 'Iraq'],
  ['IE', 'Ireland'],
  ['IM', 'Isle of Man'],
  ['IL', 'Israel'],
  ['IT', 'Italy'],
  ['JM', 'Jamaica'],
  ['JP', 'Japan'],
  ['JE', 'Jersey'],
  ['JO', 'Jordan'],
  ['KZ', 'Kazakhstan'],
  ['KE', 'Kenya'],
  ['KI', 'Kiribati'],
  ['KP', "Korea, Democratic People's Republic of"],
  ['KR', 'Korea, Republic of'],
  ['KW', 'Kuwait'],
  ['KG', 'Kyrgyzstan'],
  ['LA', "Lao People's Democratic Republic"],
  ['LV', 'Latvia'],
  ['LB', 'Lebanon'],
  ['LS', 'Lesotho'],
  ['LR', 'Liberia'],
  ['LY', 'Libya'],
  ['LI', 'Liechtenstein'],
  ['LT', 'Lithuania'],
  ['LU', 'Luxembourg'],
  ['MO', 'Macao'],
  ['MG', 'Madagascar'],
  ['MW', 'Malawi'],
  ['MY', 'Malaysia'],
  ['MV', 'Maldives'],
  ['ML', 'Mali'],
  ['MT', 'Malta'],
  ['MH', 'Marshall Islands'],
  ['MQ', 'Martinique'],
  ['MR', 'Mauritania'],
  ['MU', 'Mauritius'],
  ['YT', 'Mayotte'],
  ['MX', 'Mexico'],
  ['FM', 'Micronesia'],
  ['MD', 'Moldova'],
  ['MC', 'Monaco'],
  ['MN', 'Mongolia'],
  ['ME', 'Montenegro'],
  ['MS', 'Montserrat'],
  ['MA', 'Morocco'],
  ['MZ', 'Mozambique'],
  ['MM', 'Myanmar'],
  ['NA', 'Namibia'],
  ['NR', 'Nauru'],
  ['NP', 'Nepal'],
  ['NL', 'Netherlands'],
  ['NC', 'New Caledonia'],
  ['NZ', 'New Zealand'],
  ['NI', 'Nicaragua'],
  ['NE', 'Niger'],
  ['NG', 'Nigeria'],
  ['NU', 'Niue'],
  ['NF', 'Norfolk Island'],
  ['MK', 'North Macedonia'],
  ['MP', 'Northern Mariana Islands'],
  ['NO', 'Norway'],
  ['OM', 'Oman'],
  ['PK', 'Pakistan'],
  ['PW', 'Palau'],
  ['PS', 'Palestine, State of'],
  ['PA', 'Panama'],
  ['PG', 'Papua New Guinea'],
  ['PY', 'Paraguay'],
  ['PE', 'Peru'],
  ['PH', 'Philippines'],
  ['PN', 'Pitcairn'],
  ['PL', 'Poland'],
  ['PT', 'Portugal'],
  ['PR', 'Puerto Rico'],
  ['QA', 'Qatar'],
  ['RE', 'Réunion'],
  ['RO', 'Romania'],
  ['RU', 'Russian Federation'],
  ['RW', 'Rwanda'],
  ['BL', 'Saint Barthélemy'],
  ['SH', 'Saint Helena, Ascension and Tristan da Cunha'],
  ['KN', 'Saint Kitts and Nevis'],
  ['LC', 'Saint Lucia'],
  ['MF', 'Saint Martin'],
  ['PM', 'Saint Pierre and Miquelon'],
  ['VC', 'Saint Vincent and the Grenadines'],
  ['WS', 'Samoa'],
  ['SM', 'San Marino'],
  ['ST', 'Sao Tome and Principe'],
  ['SA', 'Saudi Arabia'],
  ['SN', 'Senegal'],
  ['RS', 'Serbia'],
  ['SC', 'Seychelles'],
  ['SL', 'Sierra Leone'],
  ['SG', 'Singapore'],
  ['SX', 'Sint Maarten'],
  ['SK', 'Slovakia'],
  ['SI', 'Slovenia'],
  ['SB', 'Solomon Islands'],
  ['SO', 'Somalia'],
  ['ZA', 'South Africa'],
  ['GS', 'South Georgia and the South Sandwich Islands'],
  ['SS', 'South Sudan'],
  ['ES', 'Spain'],
  ['LK', 'Sri Lanka'],
  ['SD', 'Sudan'],
  ['SR', 'Suriname'],
  ['SJ', 'Svalbard and Jan Mayen'],
  ['SE', 'Sweden'],
  ['CH', 'Switzerland'],
  ['SY', 'Syria Arab Republic'],
  ['TW', 'Taiwan'],
  ['TJ', 'Tajikistan'],
  ['TZ', 'Tanzania, the United Republic of'],
  ['TH', 'Thailand'],
  ['TL', 'Timor-Leste'],
  ['TG', 'Togo'],
  ['TK', 'Tokelau'],
  ['TO', 'Tonga'],
  ['TT', 'Trinidad and Tobago'],
  ['TN', 'Tunisia'],
  ['TR', 'Türkiye'],
  ['TM', 'Turkmenistan'],
  ['TC', 'Turks and Caicos Islands'],
  ['TV', 'Tuvalu'],
  ['UG', 'Uganda'],
  ['UA', 'Ukraine'],
  ['AE', 'United Arab Emirates'],
  ['GB', 'United Kingdom'],
  ['US', 'United States'],
  ['UY', 'Uruguay'],
  ['UM', 'US Minor Outlying Islands'],
  ['UZ', 'Uzbekistan'],
  ['VU', 'Vanuatu'],
  ['VE', 'Venezuela'],
  ['VN', 'Viet Nam'],
  ['VG', 'Virgin Islands, British'],
  ['VI', 'Virgin Islands, U.S.'],
  ['WF', 'Wallis and Futuna'],
  ['EH', 'Western Sahara'],
  ['YE', 'Yemen'],
  ['ZM', 'Zambia'],
  ['ZW', 'Zimbabwe'],
];

const WORK_TYPES = [
  'Aerial Construction',
  'Tower Maintenance/Upgrades',
  'Engineering',
  'Fiber',
  'MDU Construction',
  'Tree Trimming',
  'Underground Construction',
];

const labelClass = 'mb-1 block text-sm font-medium text-ink';
const subLabelClass = 'mt-1 text-xs text-ink-muted';
const inputClass =
  'w-full rounded-md border border-border bg-surface px-3 py-2 text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-primary';
const sectionHeadingClass = 'mb-3 border-b border-border pb-2 font-heading text-xl font-semibold text-ink';

function RequiredMark() {
  return <span className="text-primary"> *</span>;
}

export function SubcontractorRequestForm() {
  const [previouslyProvided, setPreviouslyProvided] = useState<'Yes' | 'No' | ''>('');

  return (
    <MigratedForm
      className="flex max-w-2xl flex-col gap-5"
      submitLabel="Submit"
      confirmation={
        // TODO(migration): placeholder confirmation copy pending a real capture
        <p className="m-0 text-ink">Thank you — we'll be in touch soon.</p>
      }
    >
      <h3 className={sectionHeadingClass}>Company Information</h3>

      <div>
        <label className={labelClass} htmlFor="input_10">
          Company Name
          <RequiredMark />
        </label>
        <input type="text" name="input_10" id="input_10" required className={inputClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="input_21">
          Company Website
        </label>
        <input type="text" name="input_21" id="input_21" className={inputClass} />
      </div>

      <fieldset>
        <legend className={labelClass}>
          Address
          <RequiredMark />
        </legend>
        <div className="flex flex-col gap-3">
          <div>
            <input type="text" name="input_11.1" id="input_11_1" required aria-label="Street Address" className={inputClass} />
            <p className={subLabelClass}>Street Address</p>
          </div>
          <div>
            <input type="text" name="input_11.2" id="input_11_2" aria-label="Address Line 2" className={inputClass} />
            <p className={subLabelClass}>Address Line 2</p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <input type="text" name="input_11.3" id="input_11_3" required aria-label="City" className={inputClass} />
              <p className={subLabelClass}>City</p>
            </div>
            <div>
              <input type="text" name="input_11.4" id="input_11_4" required aria-label="State / Province / Region" className={inputClass} />
              <p className={subLabelClass}>State / Province / Region</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <input type="text" name="input_11.5" id="input_11_5" required aria-label="ZIP / Postal Code" className={inputClass} />
              <p className={subLabelClass}>ZIP / Postal Code</p>
            </div>
            <div>
              <select name="input_11.6" id="input_11_6" required aria-label="Country" defaultValue="" className={inputClass}>
                <option value=""></option>
                {COUNTRIES.map(([code, name]) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))}
              </select>
              <p className={subLabelClass}>Country</p>
            </div>
          </div>
        </div>
      </fieldset>

      <h3 className={sectionHeadingClass}>Contact Information</h3>

      <div>
        <span className={labelClass}>
          Name
          <RequiredMark />
        </span>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <input type="text" name="input_13.3" id="input_13_3" required aria-label="First" placeholder="First" className={inputClass} />
            <p className={subLabelClass}>First</p>
          </div>
          <div>
            <input type="text" name="input_13.6" id="input_13_6" required aria-label="Last" placeholder="Last" className={inputClass} />
            <p className={subLabelClass}>Last</p>
          </div>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="input_14">
          Mobile Phone
          <RequiredMark />
        </label>
        <input type="tel" name="input_14" id="input_14" required placeholder="(999) 999-9999" className={inputClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="input_15">
          Office Phone
        </label>
        <input type="tel" name="input_15" id="input_15" placeholder="(999) 999-9999" className={inputClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="input_16">
          Email
        </label>
        <input type="email" name="input_16" id="input_16" className={inputClass} />
      </div>

      <fieldset>
        <legend className={labelClass}>
          Have you previously provided services for Ansco &amp; Associates, LLC and/or NeoCom Solutions, LLC under
          another company name?
          <RequiredMark />
        </legend>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-ink">
            <input
              type="radio"
              name="input_26"
              value="Yes"
              required
              checked={previouslyProvided === 'Yes'}
              onChange={() => setPreviouslyProvided('Yes')}
            />
            Yes
          </label>
          <label className="flex items-center gap-2 text-ink">
            <input
              type="radio"
              name="input_26"
              value="No"
              required
              checked={previouslyProvided === 'No'}
              onChange={() => setPreviouslyProvided('No')}
            />
            No
          </label>
        </div>
      </fieldset>

      {previouslyProvided === 'Yes' ? (
        <div>
          <label className={labelClass} htmlFor="input_27">
            If yes, provide your previous company name.
          </label>
          <input type="text" name="input_27" id="input_27" className={inputClass} />
        </div>
      ) : null}

      <div>
        <label className={labelClass} htmlFor="input_25">
          States You Would Like to Work
          <RequiredMark />
        </label>
        <select multiple name="input_25[]" id="input_25" required size={8} className={inputClass}>
          {STATES.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <p className={subLabelClass}>Hold Ctrl (Cmd on Mac) to select multiple states.</p>
      </div>

      <div>
        <label className={labelClass} htmlFor="input_17">
          Cities / Counties You Would Like to Work
          <RequiredMark />
        </label>
        <input type="text" name="input_17" id="input_17" required className={inputClass} />
      </div>

      <fieldset>
        <legend className={labelClass}>
          Type(s) Of Work You Do
          <RequiredMark />
        </legend>
        <div className="flex flex-col gap-2">
          {WORK_TYPES.map((type, index) => (
            <label key={type} className="flex items-center gap-2 text-ink">
              <input type="checkbox" name={`input_18.${index + 1}`} value={type} />
              {type}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className={labelClass} htmlFor="input_19">
          Comments, Questions or Concerns
        </label>
        <textarea name="input_19" id="input_19" rows={10} className={inputClass} />
      </div>

      {/* g-recaptcha-response is a reCAPTCHA (third-party script) field from the source form —
          intentionally not rendered per migration rules excluding third-party tracking/verification scripts. */}

      <p className="m-0 text-sm text-ink-muted">
        By clicking submit below, you consent to be contacted by Dycom Industries and its subsidiaries at the email
        address and phone number provided in an effort to respond to your inquiry.
      </p>
    </MigratedForm>
  );
}
