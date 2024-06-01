import Link from 'next/link';
import moment from 'moment';

import { IoTimeOutline } from 'react-icons/io5';
import { IoMdHome } from 'react-icons/io';
import { IoBookOutline } from 'react-icons/io5';
import { BsBriefcase } from 'react-icons/bs';
import Image from 'next/image';

const JobDescription = () => {
  const data = [
    {
      job_id: '70TAzH8W_MHzd5k5AAAAAA==',
      employer_name: 'Magnus Technology Solutions',
      employer_logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6jDxj9ijK5FI1q7aYX2LJr7YxTpzqyPhX_-tp&s=0',
      employer_website: 'http://www.magnustechnol.com',
      employer_company_type: null,
      job_publisher: 'ZipRecruiter',
      job_employment_type: 'FULLTIME',
      job_title: 'Python Developer Entry level',
      job_apply_link:
        'https://www.ziprecruiter.com/c/Magnus-Technology-Solutions/Job/Python-Developer-Entry-level/-in-Dallas,TX?jid=fd404ba337347616',
      job_apply_is_direct: true,
      job_apply_quality_score: 0.7118,
      apply_options: [
        {
          publisher: 'ZipRecruiter',
          apply_link:
            'https://www.ziprecruiter.com/c/Magnus-Technology-Solutions/Job/Python-Developer-Entry-level/-in-Dallas,TX?jid=fd404ba337347616',
          is_direct: true,
        },
        {
          publisher: 'Core Soft Technologies Careers',
          apply_link:
            'https://coresoftwaretech.betterteam.com/python-developer-%28-entrylevel-%29',
          is_direct: true,
        },
        {
          publisher: 'Monster',
          apply_link:
            'https://www.monster.com/job-openings/python-developer-entry-level-san-jose-ca--769e5a30-093e-4d5f-a63b-f6a7715be2b2',
          is_direct: true,
        },
      ],
      job_description:
        'We are seeking a Python Developer Entry Level to become an integral part of our team! You will be responsible for creating and modifying computer application software or specialized utility programs.\n\nResponsibilities:\n• Analyze user needs and develop software solutions\n• Work with project manager or product owner to meet specification needs\n• Recommend software upgrades to optimize operational efficiency\n• Collaborate with other developers to design and optimize code\n• Create flowcharts and user guides for new and existing programs\n• Document all programming tasks and procedures\n• Perform routine software maintenance\n\nQualifications:\n• Previous experience in software development, computer engineering, or other related fields\n• Knowledge of Java, Python, or other programming languages\n• Familiarity with relational databases such as MySQL, Oracle, and SQL Server\n• Deadline and detail-oriented\n• Strong analytical and critical thinking skills\n\nCompany DescriptionMagnus Technology Solutions provide quick orientation / training for professionals & placement for candidates having work authorization in USA. We work on #Selenium, #QA_Testing, #QA_Automation, #Manual_Testing #Dotnet, #java, #j2ee, #java_UI, #Angular, #React, #Python, #DevOps, #Salesforce, #Hadoop, #IOS, #Android, #RPA, #Mulesoft and any #Developer related #Technologies.',
      job_is_remote: true,
      job_posted_at_timestamp: 1715801391,
      job_posted_at_datetime_utc: '2024-05-15T19:29:51.000Z',
      job_city: 'Dallas',
      job_state: 'TX',
      job_country: 'US',
      job_latitude: 32.776665,
      job_longitude: -96.79699,
      job_benefits: null,
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs&htidocid=70TAzH8W_MHzd5k5AAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=70TAzH8W_MHzd5k5AAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: '2024-06-26T00:00:00.000Z',
      job_offer_expiration_timestamp: 1719360000,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: null,
        experience_mentioned: true,
        experience_preferred: false,
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: false,
        degree_mentioned: false,
        degree_preferred: false,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: 80000,
      job_max_salary: 100000,
      job_salary_currency: 'USD',
      job_salary_period: 'YEAR',
      job_highlights: {
        Qualifications: [
          'Previous experience in software development, computer engineering, or other related fields',
          'Knowledge of Java, Python, or other programming languages',
          'Familiarity with relational databases such as MySQL, Oracle, and SQL Server',
          'Deadline and detail-oriented',
          'Strong analytical and critical thinking skills',
          'Company DescriptionMagnus Technology Solutions provide quick orientation / training for professionals & placement for candidates having work authorization in USA',
        ],
        Responsibilities: [
          'You will be responsible for creating and modifying computer application software or specialized utility programs',
          'Analyze user needs and develop software solutions',
          'Work with project manager or product owner to meet specification needs',
          'Recommend software upgrades to optimize operational efficiency',
          'Collaborate with other developers to design and optimize code',
          'Create flowcharts and user guides for new and existing programs',
          'Document all programming tasks and procedures',
          'Perform routine software maintenance',
        ],
      },
      job_job_title: null,
      job_posting_language: 'en',
      job_onet_soc: '15113200',
      job_onet_job_zone: '4',
      job_occupational_categories: [
        '15-1132.00: Software Developers, Applications',
      ],
      job_naics_code: null,
      job_naics_name: null,
    },
  ];
  return (
    <section className="max-w-6xl mx-auto">
      {data.map(
        ({
          employer_name,
          job_id,
          job_city,
          job_description,
          job_min_salary,
          job_salary_currency,
          job_max_salary,
          job_title,
          job_salary_period,
          job_employment_type,
          job_country,
          employer_logo,
          job_highlights,
          job_google_link,
          apply_options,
          job_required_skills,
          job_posted_at_datetime_utc,
          job_is_remote,
        }) => (
          <>
            <div
              key={job_id}
              className="w-full mx-2 md:mr-2 bg-white shadow-1 rounded-xl my-6 h-fit pt-6 pb-5 px-3 md:px-6"
            >
              <Link href={`/jobs/description/${job_id}`} key={job_id}>
                <h3 className="font-bold">{employer_name}</h3>
                <div className="text-xs">
                  <span className="text-sm font-bold">{job_title} </span>
                  <span className="font-bold">⭐ 3.6 </span>
                  <span>| </span>
                  <span className="font-medium">
                    {Math.floor(Math.random() * 999)} Reviews
                  </span>
                </div>
                <div className="mb-2 md:mb-4 flex flex-wrap items-center gap-2 md:gap-3 text-sm text-gray-1">
                  <div className=" text-gray-2 mt-4 flex items-center gap-1">
                    <IoTimeOutline className="text-lg" />
                    {moment().diff(moment(job_posted_at_datetime_utc), 'days')}
                    days ago
                  </div>
                  {job_is_remote && (
                    <div className=" text-gray-2 mt-4 flex items-center gap-1">
                      <IoMdHome className="text-lg" />
                      Work From Home
                    </div>
                  )}
                  {job_employment_type && (
                    <div className=" text-gray-2 mt-4 flex items-center gap-1">
                      <BsBriefcase className="text-lg" />
                      {job_employment_type}
                    </div>
                  )}
                  {!job_required_skills && (
                    <div className=" text-gray-2 mt-4 flex items-center gap-1">
                      <IoBookOutline className="text-lg" />
                      {!job_required_skills
                        ? 'No degree mentioned'
                        : 'Degree Required'}
                    </div>
                  )}
                </div>
                <Image
                src={employer_logo}
                alt="Job Listing"
                width={40} // specify the width of the image
                height={40} // specify the height of the image
                className='absolute w-6 h-6'
              />
              </Link>
              <div className="border-b my-6"></div>
              <div className="flex flex-col md:flex-row justify-end">
                <div className="flex gap-2">
                  <div className="flex flex-wrap md:flex-row items-center gap-2">
                    {apply_options &&
                      apply_options.map(({ apply_link, publisher }) => (
                        <a
                          className="rounded-full ring-1 ring-blue-1 px-4 py-2 text-blue-1"
                          href={apply_link}
                        >
                          Apply on {publisher}
                        </a>
                      ))}
                    {job_google_link && (
                      <div className="ml-2 w-fit bg-blue-1 text-white px-4 py-2 rounded-full font-semibold ">
                        <a href={job_google_link} target="_blank">
                          See On Google
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mx-2 md:mr-2 bg-white shadow-1 rounded-xl my-6 h-fit pt-6 pb-5 px-3 md:px-6">
              <h3 className="text-xl font-bold">Job Description</h3>
              <div className="mt-4">{job_description}</div>
            </div>
            <div className="w-full mx-2 md:mr-2 bg-white shadow-1 rounded-xl my-6 h-fit pt-6 pb-5 px-3 md:px-6">
              <h3 className="text-xl font-bold">Qualification</h3>
              <div className="mt-4">{job_highlights?.Qualifications}</div>
            </div>
            <div className="w-full mx-2 md:mr-2 bg-white shadow-1 rounded-xl my-6 h-fit pt-6 pb-5 px-3 md:px-6">
              <h3 className="mt-6 text-xl font-bold">Responsibilities</h3>
              <div className="mt-4">{job_highlights?.Responsibilities}</div>
            </div>
          </>
        )
      )}
    </section>
  );
};

export default JobDescription;
