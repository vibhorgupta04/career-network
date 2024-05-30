'use client';

import { fetchJobs } from '@/api/user';
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Link from 'next/link';
import { CiLocationOn } from 'react-icons/ci';
import { BsBriefcase } from 'react-icons/bs';
import { HiOutlineDocumentText } from 'react-icons/hi2';
import Image from 'next/image';

const JobList = () => {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState<any[]>([]);

  // useEffect(() => {
  //   const fetchAndSetJobs = async () => {
  //     setLoading(true);
  //     const res: any = await fetchJobs();
  //     setJobs(res);
  //     setLoading(false);
  //   };

  //   fetchAndSetJobs();
  // }, []);

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
    {
      job_id: '7oKm_SkxjLxpFtVuAAAAAA==',
      employer_name: 'SynergisticIT',
      employer_logo: null,
      employer_website: null,
      employer_company_type: null,
      job_publisher: 'ZipRecruiter',
      job_employment_type: 'FULLTIME',
      job_title: 'PYTHON DEVELOPER(ENTRY LEVEL)',
      job_apply_link:
        'https://www.ziprecruiter.com/c/SynergisticIT/Job/PYTHON-DEVELOPER(ENTRY-LEVEL)/-in-Austin,TX?jid=95b95b82c4f3b4bd',
      job_apply_is_direct: false,
      job_apply_quality_score: 0.5894,
      apply_options: [
        {
          publisher: 'ZipRecruiter',
          apply_link:
            'https://www.ziprecruiter.com/c/SynergisticIT/Job/PYTHON-DEVELOPER(ENTRY-LEVEL)/-in-Austin,TX?jid=95b95b82c4f3b4bd',
          is_direct: false,
        },
      ],
      job_description:
        "SynergisticIT is committed to fast track your career by increasing your career prospects. We provide a broad spectrum of career advancement solutions. Whether you are struggling to find a job or hustling to get noticed by the hiring managers, we can help you stand out in your professional endeavors.\nTrusted by thousands of tech enthusiasts, SynergisticIT can bridge your skill and knowledge gap to make you competent for high-tech jobs. Our invaluable business acumen helps us assist thriving job seekers in achieving their career goals.\nCurrently, we are looking for adept entry-level Python Developers to work with our elite group of clients, namely Client, PayPal, Expedia Group, Google, Apple, Cognizant, Ford, Cisco, Walmart Labs, etc.\n\nRequired Qualifications and Background\n• Bachelor's degree or Master's degree in Computer Science, Electrical Engineering, Computer Engineering, Information Systems, IT, Mathematics,\n• Mathematics or Statistics background\nSkills Required\n• 0 to 2 years of experience in Python development\n• Deep understanding of the software development life cycle\n• Knowledge of Linear Algebra, Statistics, and Mathematics concepts\n• Excellent written and verbal communication skills\n• Technically inquisitive, self-learner, team player, and highly motivated\n• Strong work ethics and creative problem-solving abilities\n\nPreferred Skills\n• Deep Learning\n• Data visualization\n• Scala\n• NLP\n• Django\n• Roles and Responsibilities\nAs an entry-level Python Developer, you need to perform the following duties:\n• Write server-side web application logic\n• Write scalable and effective codes in Python\n• Develop backend components to boost overall application's performance\n• Executing tests and fixing bugs in applications and software\n• Implement data protection and security solutions\n• Connect applications with third-party web services\n• Support frontend developers by integrating UI elements into Python applications\n\nBenefits\n• Competitive salary\n• Flexible work schedule & part-time off\n• E-verified\n• H1B Filing\n• No relocation\n• On job technical support\n• Skill Enhancement\n• Opportunity to work with Fortune 500 Companies\n\nWho can apply?\nThis job opportunity is best suited for recent IT graduates who want to make a mark in the tech industry and upskill their IT talent. Anyone with a basic knowledge of Python programming or having some experience in building Python software solutions can apply for this position.\nNo third-party candidates or c2c candidates\n\nIf you are interested, please apply to the posting.\n\nNo phone calls please, Shortlisted candidates would be reached out.",
      job_is_remote: false,
      job_posted_at_timestamp: 1627023600,
      job_posted_at_datetime_utc: '2021-07-23T07:00:00.000Z',
      job_city: 'Austin',
      job_state: 'TX',
      job_country: 'US',
      job_latitude: 30.267153,
      job_longitude: -97.74306,
      job_benefits: null,
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs&htidocid=7oKm_SkxjLxpFtVuAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=7oKm_SkxjLxpFtVuAAAAAA%3D%3D',
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
        degree_mentioned: true,
        degree_preferred: true,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          "Bachelor's degree or Master's degree in Computer Science, Electrical Engineering, Computer Engineering, Information Systems, IT, Mathematics,",
          'Mathematics or Statistics background',
          '0 to 2 years of experience in Python development',
          'Deep understanding of the software development life cycle',
          'Knowledge of Linear Algebra, Statistics, and Mathematics concepts',
          'Excellent written and verbal communication skills',
          'Technically inquisitive, self-learner, team player, and highly motivated',
          'Strong work ethics and creative problem-solving abilities',
          'Support frontend developers by integrating UI elements into Python applications',
        ],
        Responsibilities: [
          'As an entry-level Python Developer, you need to perform the following duties:',
          'Write server-side web application logic',
          'Write scalable and effective codes in Python',
          "Develop backend components to boost overall application's performance",
          'Executing tests and fixing bugs in applications and software',
          'Implement data protection and security solutions',
          'Connect applications with third-party web services',
        ],
        Benefits: [
          'Competitive salary',
          'Flexible work schedule & part-time off',
          'No relocation',
          'On job technical support',
          'Opportunity to work with Fortune 500 Companies',
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
    {
      job_id: 'YvdpgQjWGDbinEOyAAAAAA==',
      employer_name: 'Extend Information Systems Inc.',
      employer_logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOSK255X2-kDEDQwIAhqbXdSrPX_29Xs4WaYT&s=0',
      employer_website: null,
      employer_company_type: null,
      job_publisher: 'LinkedIn',
      job_employment_type: 'FULLTIME',
      job_title: 'Looking for python Developer -Houston,TX- Full-time',
      job_apply_link:
        'https://www.linkedin.com/jobs/view/looking-for-python-developer-houston-tx-full-time-at-extend-information-systems-inc-3888434864',
      job_apply_is_direct: false,
      job_apply_quality_score: 0.724,
      apply_options: [
        {
          publisher: 'LinkedIn',
          apply_link:
            'https://www.linkedin.com/jobs/view/looking-for-python-developer-houston-tx-full-time-at-extend-information-systems-inc-3888434864',
          is_direct: false,
        },
        {
          publisher: 'ZipRecruiter',
          apply_link:
            'https://www.ziprecruiter.com/c/Release-Manger-Project-Manager-The-Dignify-Solutions/Job/Python-Developer-Houston,-TX/-in-Houston,TX?jid=9b289debd6bcc216',
          is_direct: false,
        },
        {
          publisher: 'Job Leap',
          apply_link:
            'https://www.jobleap.co.uk/job/07uf6iwt/python-developer-houston-tx',
          is_direct: false,
        },
        {
          publisher: 'WhatJobs',
          apply_link:
            'https://www.whatjobs.com/job/Python-Developer/houston/1566462864',
          is_direct: false,
        },
        {
          publisher: 'IT Tech Careers',
          apply_link:
            'https://ittechcareers.com/job/python-developer-houston-tx/',
          is_direct: false,
        },
      ],
      job_description:
        "Hi, Jobseekers,\n\nI hope you are doing well!\n\nWe have an opportunity for Python Developer with one of our clients for Houston, TX.\n\nPlease see the job details below and let me know if you would be interested in this role.\n\nIf interested, please send me a copy of your resume, contact details, availability, and a good time to connect with you.\n\nTitle: Python Developer\n\nLocation: Houston, TX\n\nTerms: Full-time\n\nJob Details\n\n5+ years' experience as Python developer.\n\nHands on experience in Django framework.\n\nStrong exposure and development experience using Time series data.\n\nRegression models (simple and more advanced techniques, linear and non-linear),\n\nTime series modelling\n\nStandard array of statistical software packages (Python, R, EViews, SAS)\n\nAzure fundamentals\n\nPower BI foundation level knowledge\n\nThanks & Regards\n\nMonika Singh\n\nExtend Information System Inc\n\nPhone:571-622-3980\n\nEmail: monika@extendinfosys.com\n\n44258 Mercure Circle, UNIT 102 A, Sterling VA, USA 20166",
      job_is_remote: false,
      job_posted_at_timestamp: 1712657448,
      job_posted_at_datetime_utc: '2024-04-09T10:10:48.000Z',
      job_city: 'Houston',
      job_state: 'TX',
      job_country: 'US',
      job_latitude: 29.760427,
      job_longitude: -95.369804,
      job_benefits: null,
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs&htidocid=YvdpgQjWGDbinEOyAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=YvdpgQjWGDbinEOyAAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: '2024-06-05T16:11:32.000Z',
      job_offer_expiration_timestamp: 1717603892,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: 60,
        experience_mentioned: true,
        experience_preferred: false,
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: true,
        degree_mentioned: false,
        degree_preferred: false,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          "5+ years' experience as Python developer",
          'Hands on experience in Django framework',
          'Strong exposure and development experience using Time series data',
          'Power BI foundation level knowledge',
        ],
      },
      job_job_title: null,
      job_posting_language: 'en',
      job_onet_soc: '15113200',
      job_onet_job_zone: '4',
      job_occupational_categories: null,
      job_naics_code: null,
      job_naics_name: null,
    },
    {
      job_id: 'zUu7xQGsS73G02pLAAAAAA==',
      employer_name: 'Dellfor Technologies',
      employer_logo: null,
      employer_website: null,
      employer_company_type: null,
      job_publisher: 'ZipRecruiter',
      job_employment_type: 'CONTRACTOR',
      job_title: 'python developer',
      job_apply_link:
        'https://www.ziprecruiter.com/c/Dellfor-Technologies/Job/Python-Developer/-in-Texas-City,TX?jid=a179d64a86c79fc5',
      job_apply_is_direct: false,
      job_apply_quality_score: 0.7157,
      apply_options: [
        {
          publisher: 'ZipRecruiter',
          apply_link:
            'https://www.ziprecruiter.com/c/Dellfor-Technologies/Job/Python-Developer/-in-Texas-City,TX?jid=a179d64a86c79fc5',
          is_direct: false,
        },
        {
          publisher: 'SmartRecruiters Job Search',
          apply_link:
            'https://jobs.smartrecruiters.com/DellforTechnologies/112787871-python-developer',
          is_direct: false,
        },
        {
          publisher:
            'WhatJobs United States | Jobs, Recruitment, News And Career Advice Hub',
          apply_link:
            'https://www.whatjobs.com/job/python-developer/texas-city/1566337832',
          is_direct: false,
        },
      ],
      job_description:
        "Company Description\n\nDellfor Technologies is founded by software professionals with fresh approach, and ideas empowering clients and partners in meeting the unique challenges created by transforming business needs. Our technical, domain expertise across obust solutions. We strive to prove ourselves from project inception through completion... Our technical, domain expertise across industries and process oriented approach enables clients to develop cost effective and robust solutions. We strive to prove ourselves from project inception through completion...\n\nTo succeed in the Dellfor technologies, you need exceptional connections - to the right experts, the right opportunities and the right answers. You'll find Dellfor Technologies right in the center of this ever-changing technological world - uncovering opportunities and connecting possibilities.\n\nAs a global provider of IT staffing services, Dellfor Technologies connects the very best IT professionals to great opportunities at leading companies. And we do it every single day - for both temporary and permanent assignments and across virtually all industries. We use our insight, flexibility and expanded resources to anticipate the needs of leading tech companies and help them make exceptional connections with top tech talent.\n\nJob Description\n\nROLE :Python Developer\n\nDURATION: Contract\n\nJob description\n\n5+years of experience\n\nPython will be the primary language, using which developer would perform SQL/CRUD operations in DB, file extraction/transformation/generation (CSV, XML, JSON, PDF), email integration.\n\nWorked with onsite/offshore model.\n\nExcellent communication skills (written and verbal), interpersonal skills, as well as outstanding organizational skills.\n\nAbility to work well under pressure in high stress situations with a calm demeanor.\n\nAdditional Information\n\nHighlights and benefits\n• We are a registered E verified company\n• Starting salary between $ 60,000 with regular increments\n• Free classroom skill enhancement program\n• Relocation allowance\n• Referral bonus\n• On the job support from experienced professionals in the relative field\n• Travel allowance\n• Insurance- Medical, dental, vision and 401K\n• Health Benefits through Carefirst BCBS (Blue Cross Blue Shield)\n• Company paid Life Insurance\n\nPlease respond with your resume. US Citizens and all other parties authorized to work in the US are encouraged to apply.\n\nJob Type: Contract\n\nSalary: $80,000.00 /year\n\nRequired education:\n• Bachelor's\n\nRequired experience:\n• Developer: 5-12year",
      job_is_remote: false,
      job_posted_at_timestamp: 1716633000,
      job_posted_at_datetime_utc: '2024-05-25T10:30:00.000Z',
      job_city: 'Texas City',
      job_state: 'TX',
      job_country: 'US',
      job_latitude: 29.383844,
      job_longitude: -94.9027,
      job_benefits: [
        'health_insurance',
        'retirement_savings',
        'dental_coverage',
      ],
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs&htidocid=zUu7xQGsS73G02pLAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=zUu7xQGsS73G02pLAAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: '2024-06-24T00:00:00.000Z',
      job_offer_expiration_timestamp: 1719187200,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: 60,
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
        degree_mentioned: true,
        degree_preferred: false,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          'Python will be the primary language, using which developer would perform SQL/CRUD operations in DB, file extraction/transformation/generation (CSV, XML, JSON, PDF), email integration',
          'Excellent communication skills (written and verbal), interpersonal skills, as well as outstanding organizational skills',
          'Ability to work well under pressure in high stress situations with a calm demeanor',
          "Bachelor's",
          'Developer: 5-12year',
        ],
        Benefits: [
          'Starting salary between $ 60,000 with regular increments',
          'Free classroom skill enhancement program',
          'Relocation allowance',
          'Referral bonus',
          'On the job support from experienced professionals in the relative field',
          'Travel allowance',
          'Insurance- Medical, dental, vision and 401K',
          'Health Benefits through Carefirst BCBS (Blue Cross Blue Shield)',
          'Company paid Life Insurance',
          'Salary: $80,000.00 /year',
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
    {
      job_id: 'sbjwkx8pql3kAOkIAAAAAA==',
      employer_name: 'OSO Ventures Inc',
      employer_logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYyCml6THNspXNTWR538kXWGzaAeCO-BcZJowt&s=0',
      employer_website: 'http://www.osoventuresinc.com',
      employer_company_type: null,
      job_publisher: 'LinkedIn',
      job_employment_type: 'FULLTIME',
      job_title: 'Python  Developer',
      job_apply_link:
        'https://www.linkedin.com/jobs/view/python-developer-at-oso-ventures-inc-3928861369',
      job_apply_is_direct: false,
      job_apply_quality_score: 0.6281,
      apply_options: [
        {
          publisher: 'LinkedIn',
          apply_link:
            'https://www.linkedin.com/jobs/view/python-developer-at-oso-ventures-inc-3928861369',
          is_direct: false,
        },
        {
          publisher: 'Dallas - Americanlisted Classifieds',
          apply_link:
            'https://dallas-tx.americanlisted.com/jobs/python-developer_8996015994.html',
          is_direct: false,
        },
      ],
      job_description:
        'Hi,\n\nWe have urgent requirement of Python Developer at Remote Location.\n\nIf you are interested for this position or having suitable profile then, please share updated profile on amol1@osoventureinc.com\n\nPython Developer\n\nLocation : Remote\n\nFull Time : Remote\n\nClient Verizon.\n\nSkills.\n\n5+ Year Experience needed.\n\nStrong in python developing exp\n\nDjango.\n\nLinux',
      job_is_remote: false,
      job_posted_at_timestamp: 1716523942,
      job_posted_at_datetime_utc: '2024-05-24T04:12:22.000Z',
      job_city: 'Dallas',
      job_state: 'TX',
      job_country: 'US',
      job_latitude: 32.776665,
      job_longitude: -96.79699,
      job_benefits: null,
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs&htidocid=sbjwkx8pql3kAOkIAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=sbjwkx8pql3kAOkIAAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: '2024-06-05T16:12:39.000Z',
      job_offer_expiration_timestamp: 1717603959,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: 60,
        experience_mentioned: true,
        experience_preferred: false,
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: true,
        degree_mentioned: false,
        degree_preferred: false,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          '5+ Year Experience needed',
          'Strong in python developing exp',
        ],
        Benefits: ['Full Time : Remote'],
      },
      job_job_title: null,
      job_posting_language: 'en',
      job_onet_soc: '15113200',
      job_onet_job_zone: '4',
      job_occupational_categories: null,
      job_naics_code: null,
      job_naics_name: null,
    },
    {
      job_id: 'ure4TvkUCk0T0fIqAAAAAA==',
      employer_name: 'SynergisticIT',
      employer_logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-UrAK1LCetSvno8PT3nMB4vJV4VdEEPN7PrgC&s=0',
      employer_website: null,
      employer_company_type: null,
      job_publisher: 'LinkedIn',
      job_employment_type: 'CONTRACTOR',
      job_title: 'Entry Level Python Developer',
      job_apply_link:
        'https://www.linkedin.com/jobs/view/entry-level-python-developer-at-synergisticit-3833863754',
      job_apply_is_direct: false,
      job_apply_quality_score: 0.7414,
      apply_options: [
        {
          publisher: 'LinkedIn',
          apply_link:
            'https://www.linkedin.com/jobs/view/entry-level-python-developer-at-synergisticit-3833863754',
          is_direct: false,
        },
        {
          publisher: 'Jooble',
          apply_link: 'https://jooble.org/jdp/-3296229903946859997',
          is_direct: false,
        },
        {
          publisher: 'Talent.com',
          apply_link: 'https://www.talent.com/view?id=e7788afd836a',
          is_direct: false,
        },
        {
          publisher: 'Jobgether',
          apply_link:
            'https://jobgether.com/offer/657bacd84929449570ddacef-remote-machine-learning-engineer-entry-level',
          is_direct: false,
        },
        {
          publisher: 'Salary.com',
          apply_link:
            'https://www.salary.com/job/synergisticit/entry-level-java-cloud-developer-remote/j202307121436597686509',
          is_direct: false,
        },
        {
          publisher: 'Lensa',
          apply_link:
            'https://lensa.com/job/synergisticit/anderson-in/junior-aws-developer/bf59c3330232666f66e66148f018e9b5',
          is_direct: false,
        },
      ],
      job_description:
        "SYNERGISTICIT is aware that the Job Market is Challenging because of Tech Layoffs. The Job market is flooded with hundreds and thousands of laid-off Jobseekers competing with existing Jobseekers. For entry-level Job seekers to get client interviews and jobs they need to differentiate themselves by ensuring they have exceptional skills and technologies to be noticed by clients.\n\nSince 2010 we have helped Jobseekers differentiate themselves by providing clients with candidates who have the requisite skills and experience to outperform at interviews and clients. Here at SynergisticIT We just don't focus on getting you a Job we make careers. All Positions are open for all visas and US citizens We at Synergisticit understand the problem of the mismatch between employer's requirements and Employee skills and that's why since 2010 we have helped thousands of candidates get jobs at technology clients like Apple, Google, and Paypal, western union, Client, visa, Walmart labs, etc., to name a few. We have an excellent reputation with the clients. Currently, we are looking for Entry Level Python Programmer\n\nWho Should Apply Recent Computer Science/Engineering /Mathematics/Statistics or Science Graduates looking to make their careers in IT Industry We welcome candidates with all visas and citizens to apply. We assist in filing for STEM extension and also for H1b and Green card filing to Candidates\n\nWe also offer Skill enhancement programs for candidates who are either missing skills or lacking Industry/Client experience with Projects and skills. Candidates have difficulty finding jobs or cracking interviews or want to improve their skill portfolio. If they are qualified with enough skills and have hands-on project work with clients then no need for skill enhancement.\n\nCandidates can benefit from skill enhancement if they fall into the below categories.\n\nCandidates who Lack Experience or are fresher with No actual Job experience with projects with clients who Have had a break in careers Lack Technical Competency or skills being demanded by clients Different visa candidates (Like OPT/H4EAD/L2EAD) who want to get employed and settle down in the USA please check the below links to see success outcomes of our candidates https://www.synergisticit.com/candidate-outcomes/\n\nWatch the below videos of us participating in Industry events with the Top companies in Technology at Oracle Cloud World/Oracle Java One (Las Vegas) and at Gartner Data Analytics Summit (Florida)\n\nOracle Cloud World Event (OCW) Las Vegas 2022 | SynergisticIT - YouTube https://www.youtube.com/watch?v=OAFOhcGy9Z8\n\nhttps://www.youtube.com/watch?v=EmO7NrWHkLM https://www.youtube.com/watch?v=NVBU9RYZ6UI\n\nhttps://www.youtube.com/watch?v=Yy74yvjatVg SynergisticIT at Gartner Data and Analytics Summit 2023 - YouTube\n\nhttps://www.synergisticit.com/java-track/ https://www.synergisticit.com/data-science-track/ https://www.synergisticit.com/contact-us/\n\nIf you have relevant skills and industry experience, please apply if not then candidates can opt for Skill enhancement.\n\nFor getting help with interviews please visit\n\nhttps://www.synergisticit.com/interview-questions/\n\nREQUIRED SKILLS For Java /Software Programmers\n• Bachelor's degree or Master's degree in Computer Science, Computer Engineering, Electrical Engineering, Information Systems, IT\n• Highly motivated, self-learner, and technically inquisitive\n• Experience in programming language Java and understanding of the software development life cycle\n• Project work on the skills\n• Knowledge of Core Java, java script, C++ or software programming\n• Spring boot, Micro-services, Docker, Jenkins and REST API's experience\n• Excellent written and verbal communication skills\n\nFor data Science/Machine learning\n\nRequired Skills\n• Bachelor's degree or Master's degree in Computer Science, Computer Engineering, Electrical Engineering, Information Systems, IT\n• Project work on the technologies needed\n• Highly motivated, self-learner, and technically inquisitive\n• Experience in the programming language Java and understanding of the software development life cycle\n• Knowledge of Statistics, SAS, Python, Computer Vision, and data visualization tools\n• Excellent written and verbal communication skills\n\nPreferred skills: NLP, Text mining, Tableau, Power BI, Time series analysis\n\nPlease understand skills and relevant experience on real-world projects are required by clients for selection even if it's a Junior or entry-level position the additional skills and Project work with hands-on experience building projects at the client site are the only way a candidate can be picked by clients. If not having the skills or hands-on project work at the client site, candidates can opt for skill enhancement to gain the required skills and project work. No third-party candidates or c2c candidates\n\nplease only apply to the posting\n\nNo phone calls, please. Shortlisted candidates would be reached out to.",
      job_is_remote: true,
      job_posted_at_timestamp: 1708768205,
      job_posted_at_datetime_utc: '2024-02-24T09:50:05.000Z',
      job_city: 'Dallas',
      job_state: 'TX',
      job_country: 'US',
      job_latitude: 32.776665,
      job_longitude: -96.79699,
      job_benefits: null,
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs&htidocid=ure4TvkUCk0T0fIqAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=ure4TvkUCk0T0fIqAAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: '2024-06-23T15:58:08.000Z',
      job_offer_expiration_timestamp: 1719158288,
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
        bachelors_degree: true,
        degree_mentioned: true,
        degree_preferred: true,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          'REQUIRED SKILLS For Java /Software Programmers',
          "Bachelor's degree or Master's degree in Computer Science, Computer Engineering, Electrical Engineering, Information Systems, IT",
          'Highly motivated, self-learner, and technically inquisitive',
          'Experience in programming language Java and understanding of the software development life cycle',
          'Knowledge of Core Java, java script, C++ or software programming',
          "Spring boot, Micro-services, Docker, Jenkins and REST API's experience",
          'Excellent written and verbal communication skills',
          'For data Science/Machine learning',
          'Project work on the technologies needed',
          'Knowledge of Statistics, SAS, Python, Computer Vision, and data visualization tools',
          "Please understand skills and relevant experience on real-world projects are required by clients for selection even if it's a Junior or entry-level position the additional skills and Project work with hands-on experience building projects at the client site are the only way a candidate can be picked by clients",
          'If not having the skills or hands-on project work at the client site, candidates can opt for skill enhancement to gain the required skills and project work',
        ],
      },
      job_job_title: null,
      job_posting_language: 'en',
      job_onet_soc: '15113200',
      job_onet_job_zone: '4',
      job_occupational_categories: null,
      job_naics_code: null,
      job_naics_name: null,
    },
    {
      job_id: '3cfylwyhuS3UQ5AsAAAAAA==',
      employer_name: 'Cititec Talent',
      employer_logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTohFCMR2tCYroCZoHThvACT5WWJC6FpcUDtso&s=0',
      employer_website: null,
      employer_company_type: null,
      job_publisher: 'LinkedIn',
      job_employment_type: 'FULLTIME',
      job_title: 'Python Developer',
      job_apply_link:
        'https://www.linkedin.com/jobs/view/python-developer-at-cititec-talent-3932150447',
      job_apply_is_direct: false,
      job_apply_quality_score: 0.6297,
      apply_options: [
        {
          publisher: 'LinkedIn',
          apply_link:
            'https://www.linkedin.com/jobs/view/python-developer-at-cititec-talent-3932150447',
          is_direct: false,
        },
        {
          publisher: 'BeBee',
          apply_link:
            'https://us.bebee.com/job/162c51e1a3679b2535bde1f938e92781',
          is_direct: false,
        },
      ],
      job_description:
        "Python Application Developer\n\nHouston (hybrid 3 days in office)\n\n$150,00 - $170,000 + bonus (ranging 25-30%)\n\nJoin a Dynamic Commodities Trading Powerhouse\n\nThey are a rapidly growing commodities trading firm, transforming from a boutique player to a major industry force. Their global footprint spans the US, Europe, Africa, and Asia, and they are seeking a talented Python Application Developer to fuel their continued technological dominance.\n\nYou'll spearhead new Python-based development projects, streamlining middle and back office functions.\n\nWhat You'll Do\n• Craft and implement cutting-edge Python applications, optimising middle and back office processes.\n• Own the entire software development lifecycle: from needs gathering and system design to coding, testing, deployment, and maintenance.\n• Partner closely with business analysts and stakeholders to translate their needs into robust, scalable software solutions.\n\nIdeal Experience:\n• Extensive Python experience, adept at data manipulation and analysis with Pandas and data frames.\n• Experience building APIs with FAST API and interacting with databases using SQL.\n• Cloud-based development is ideal, particularly in AWS services.\n• Containerisation and orchestration experience in Docker and Kubernetes.\n• A minimum of 5 years in software development is a must, ideally within the commodities trading or financial services space.\n• You've demonstrably implemented solid software engineering practices in professional settings.",
      job_is_remote: false,
      job_posted_at_timestamp: 1716454268,
      job_posted_at_datetime_utc: '2024-05-23T08:51:08.000Z',
      job_city: 'Houston',
      job_state: 'TX',
      job_country: 'US',
      job_latitude: 29.760427,
      job_longitude: -95.369804,
      job_benefits: null,
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs&htidocid=3cfylwyhuS3UQ5AsAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=3cfylwyhuS3UQ5AsAAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: '2024-06-22T08:51:08.000Z',
      job_offer_expiration_timestamp: 1719046268,
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
        bachelors_degree: true,
        degree_mentioned: false,
        degree_preferred: false,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: 150000,
      job_max_salary: 170000,
      job_salary_currency: 'USD',
      job_salary_period: 'YEAR',
      job_highlights: {
        Qualifications: [
          'Extensive Python experience, adept at data manipulation and analysis with Pandas and data frames',
          'Experience building APIs with FAST API and interacting with databases using SQL',
          'Cloud-based development is ideal, particularly in AWS services',
          'Containerisation and orchestration experience in Docker and Kubernetes',
          'A minimum of 5 years in software development is a must, ideally within the commodities trading or financial services space',
          "You've demonstrably implemented solid software engineering practices in professional settings",
        ],
        Responsibilities: [
          'Craft and implement cutting-edge Python applications, optimising middle and back office processes',
          'Own the entire software development lifecycle: from needs gathering and system design to coding, testing, deployment, and maintenance',
          'Partner closely with business analysts and stakeholders to translate their needs into robust, scalable software solutions',
        ],
        Benefits: ['$150,00 - $170,000 + bonus (ranging 25-30%)'],
      },
      job_job_title: null,
      job_posting_language: 'en',
      job_onet_soc: '15113200',
      job_onet_job_zone: '4',
      job_occupational_categories: null,
      job_naics_code: null,
      job_naics_name: null,
    },
    {
      job_id: 'pKi67Lsp4_7y4nTeAAAAAA==',
      employer_name: 'Diverse Lynx',
      employer_logo:
        'https://prod-file-upload-store.s3.amazonaws.com/0XyiwpDMSTG5Piomqn0K_6460b6f687080e26f1c0ba43f0fbc060.jpg',
      employer_website: 'http://www.diverselynx.com',
      employer_company_type: null,
      job_publisher: 'LinkedIn',
      job_employment_type: 'FULLTIME',
      job_title: 'Python Engineer',
      job_apply_link:
        'https://www.linkedin.com/jobs/view/python-engineer-at-diverse-lynx-3934095481',
      job_apply_is_direct: false,
      job_apply_quality_score: 0.6286,
      apply_options: [
        {
          publisher: 'LinkedIn',
          apply_link:
            'https://www.linkedin.com/jobs/view/python-engineer-at-diverse-lynx-3934095481',
          is_direct: false,
        },
        {
          publisher: 'Monster',
          apply_link:
            'https://www.monster.com/job-openings/python-engineer-plano-tx--1a46bc43-02b1-4a04-8d1e-f472b8533ffb',
          is_direct: false,
        },
        {
          publisher: 'SimplyHired',
          apply_link:
            'https://www.simplyhired.com/job/k9NjXXnXacBjP4EDnLWol9D-nIS8in5y9YAnSRIBIkJKuYXOrfp3zg',
          is_direct: false,
        },
        {
          publisher: 'Ladders',
          apply_link:
            'https://www.theladders.com/job-listing/python-engineer-diverse-lynx-plano-tx-_v2_-7-3938849118.html',
          is_direct: false,
        },
        {
          publisher: 'BeBee',
          apply_link:
            'https://us.bebee.com/job/12bfa608162075341e4452bce9fdfae0',
          is_direct: false,
        },
        {
          publisher: 'Talentify',
          apply_link:
            'https://www.talentify.io/job/python-engineer-plano-texas-diverse-lynx-24-20974',
          is_direct: false,
        },
        {
          publisher: 'Adzuna',
          apply_link: 'https://www.adzuna.com/details/4708279535',
          is_direct: false,
        },
        {
          publisher: 'Jobg8',
          apply_link:
            'https://jobs.jobg8.com/job/python-engineer-in-plano-texas-5673-27662206878F',
          is_direct: false,
        },
      ],
      job_description:
        'Title: Python Engineer\n\nDuration: Contract or Full-Time\n\nLocation: Plano, TX and Columbus, OH (Onsite)\n\nInterview mode: Video Conference/IN- Person\n\nJoining: ASAP\n\nThis is the description .\n\nJob Description\n\npython hard core development experience, familiar with ananconda or py -test, Boto 3 NumPy. Pandas. Framework like Django/Flask IAM roles, Security group, S3, Lambda, EC2, ECS, EKS Python application deployment experience in AWS(Ec2, ECS, EKS or Lambda)\n\nDiverse Lynx LLC is an Equal Employment Opportunity employer. All qualified applicants will receive due consideration for employment without any discrimination. All applicants will be evaluated solely on the basis of their ability, competence and their proven capability to perform the functions outlined in the corresponding role. We promote and support a diverse workforce across all levels in the company.',
      job_is_remote: false,
      job_posted_at_timestamp: 1716696006,
      job_posted_at_datetime_utc: '2024-05-26T04:00:06.000Z',
      job_city: 'Plano',
      job_state: 'TX',
      job_country: 'US',
      job_latitude: 33.019844,
      job_longitude: -96.69888,
      job_benefits: null,
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs&htidocid=pKi67Lsp4_7y4nTeAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=pKi67Lsp4_7y4nTeAAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: '2024-06-25T04:00:06.000Z',
      job_offer_expiration_timestamp: 1719288006,
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
        bachelors_degree: true,
        degree_mentioned: true,
        degree_preferred: false,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          'python hard core development experience, familiar with ananconda or py -test, Boto 3 NumPy',
        ],
      },
      job_job_title: 'Engineer',
      job_posting_language: 'en',
      job_onet_soc: '15113200',
      job_onet_job_zone: '4',
      job_occupational_categories: null,
      job_naics_code: null,
      job_naics_name: null,
    },
    {
      job_id: 'Pc2Ivcauiql5YsuPAAAAAA==',
      employer_name: 'Cititec Talent',
      employer_logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTohFCMR2tCYroCZoHThvACT5WWJC6FpcUDtso&s=0',
      employer_website: null,
      employer_company_type: null,
      job_publisher: 'LinkedIn',
      job_employment_type: 'FULLTIME',
      job_title: 'Python Developer',
      job_apply_link:
        'https://www.linkedin.com/jobs/view/python-developer-at-cititec-talent-3932150475',
      job_apply_is_direct: false,
      job_apply_quality_score: 0.6297,
      apply_options: [
        {
          publisher: 'LinkedIn',
          apply_link:
            'https://www.linkedin.com/jobs/view/python-developer-at-cititec-talent-3932150475',
          is_direct: false,
        },
      ],
      job_description:
        'Python Developer - Commodity Trading - Houston - Up to $170,000 + 30% Bonus + Package\n\nCititec Talent has partnered with a global commodities firm who are looking for a talented Python Developer to join their cutting-edge technology team. In this position, you will be designing, developing, and maintaining robust Python applications.\n\nYou will work closely with cross-functional teams, to design and develop systems for middle and back-office commodities trading applications. This opportunity will also play a pivotal part in contributing to the ongoing improvement and development of these applications.\n\nExperience\n• 5-10 years of development experience, preferably in financial applications\n• Strong Python required, along with experience with pandas\n• To be able to build multithreaded applications and service-oriented architecture\n• Proficiency with SQL/NoSQL databases and messaging middleware like Kafka\n• Familiarity with API-based solutions, such as FastAPI, and DevOps tools including basic AWS knowledge like Kubernetes\n• Proficient in object-oriented programming languages with strong debugging skills\n• Bachelor’s degree in Computer Science or similar certification',
      job_is_remote: false,
      job_posted_at_timestamp: 1716454554,
      job_posted_at_datetime_utc: '2024-05-23T08:55:54.000Z',
      job_city: 'Houston',
      job_state: 'TX',
      job_country: 'US',
      job_latitude: 29.760427,
      job_longitude: -95.369804,
      job_benefits: null,
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs&htidocid=Pc2Ivcauiql5YsuPAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=Pc2Ivcauiql5YsuPAAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: '2024-06-22T08:55:53.000Z',
      job_offer_expiration_timestamp: 1719046553,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: 60,
        experience_mentioned: true,
        experience_preferred: false,
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: true,
        degree_mentioned: true,
        degree_preferred: true,
        professional_certification_mentioned: true,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: 150000,
      job_max_salary: 170000,
      job_salary_currency: 'USD',
      job_salary_period: 'YEAR',
      job_highlights: {
        Qualifications: [
          '5-10 years of development experience, preferably in financial applications',
          'Strong Python required, along with experience with pandas',
          'To be able to build multithreaded applications and service-oriented architecture',
          'Proficiency with SQL/NoSQL databases and messaging middleware like Kafka',
          'Familiarity with API-based solutions, such as FastAPI, and DevOps tools including basic AWS knowledge like Kubernetes',
          'Proficient in object-oriented programming languages with strong debugging skills',
          'Bachelor’s degree in Computer Science or similar certification',
        ],
        Responsibilities: [
          'In this position, you will be designing, developing, and maintaining robust Python applications',
          'You will work closely with cross-functional teams, to design and develop systems for middle and back-office commodities trading applications',
          'This opportunity will also play a pivotal part in contributing to the ongoing improvement and development of these applications',
        ],
      },
      job_job_title: null,
      job_posting_language: 'en',
      job_onet_soc: '15113200',
      job_onet_job_zone: '4',
      job_occupational_categories: null,
      job_naics_code: null,
      job_naics_name: null,
    },
    {
      job_id: 'iEHPUzeldSrrjg9aAAAAAA==',
      employer_name: 'Extend Information Systems Inc.',
      employer_logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOSK255X2-kDEDQwIAhqbXdSrPX_29Xs4WaYT&s=0',
      employer_website: null,
      employer_company_type: null,
      job_publisher: 'LinkedIn',
      job_employment_type: 'FULLTIME',
      job_title:
        'Python Developer || Austin,TX(Onsite) || Only USC and GC Candidate',
      job_apply_link:
        'https://www.linkedin.com/jobs/view/python-developer-austin-tx-onsite-only-usc-and-gc-candidate-at-extend-information-systems-inc-3888444116',
      job_apply_is_direct: false,
      job_apply_quality_score: 0.7316,
      apply_options: [
        {
          publisher: 'LinkedIn',
          apply_link:
            'https://www.linkedin.com/jobs/view/python-developer-austin-tx-onsite-only-usc-and-gc-candidate-at-extend-information-systems-inc-3888444116',
          is_direct: false,
        },
      ],
      job_description:
        'Job Profile : Python Developer\n\nJob Location : Austin,TX\n\nJob Type : Python Developer\n\nNote : Only Independent US-Authorized Candidate (USC and GC)\n\nJob Description\n\nPython Programming, App Development, Django, Flask\n\nThanks & Regards,\n\nShubham\n\nIT Recruiter\n\nShubham@extendinfosys.com\n\n(571)-547-2870\n\nExtend Information System INC',
      job_is_remote: false,
      job_posted_at_timestamp: 1712657473,
      job_posted_at_datetime_utc: '2024-04-09T10:11:13.000Z',
      job_city: 'Austin',
      job_state: 'TX',
      job_country: 'US',
      job_latitude: 30.267153,
      job_longitude: -97.74306,
      job_benefits: null,
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs&htidocid=iEHPUzeldSrrjg9aAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=iEHPUzeldSrrjg9aAAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: '2024-06-05T16:11:43.000Z',
      job_offer_expiration_timestamp: 1717603903,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: null,
        experience_mentioned: false,
        experience_preferred: false,
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: true,
        degree_mentioned: false,
        degree_preferred: false,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {},
      job_job_title: null,
      job_posting_language: 'en',
      job_onet_soc: '13107100',
      job_onet_job_zone: '4',
      job_occupational_categories: null,
      job_naics_code: null,
      job_naics_name: null,
    },
    {
      job_id: 'qfAIWn_GegaRyDlOAAAAAA==',
      employer_name: 'eTeam',
      employer_logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY0YOHbUaCSHkBk1QWE6FXA6zpAK61OOG6RO3Q&s=0',
      employer_website: 'http://www.eteaminc.com',
      employer_company_type: null,
      job_publisher: 'LinkedIn',
      job_employment_type: 'CONTRACTOR',
      job_title: 'React Developer',
      job_apply_link:
        'https://www.linkedin.com/jobs/view/react-developer-at-eteam-3933232732',
      job_apply_is_direct: false,
      job_apply_quality_score: 0.6281,
      apply_options: [
        {
          publisher: 'LinkedIn',
          apply_link:
            'https://www.linkedin.com/jobs/view/react-developer-at-eteam-3933232732',
          is_direct: false,
        },
        {
          publisher: 'Interlink Jobs',
          apply_link:
            'https://www.interlinkjobs.com/jobs/61207575-react-developer',
          is_direct: false,
        },
      ],
      job_description:
        'Job Title: Application Development - React Java Developer\n\nLocation: Irving, TX (Hybrid)\n\nDuration: 7 Months Contract\n\nHybrid would be ideal, 3 days a week. Irving office is the preference but would consider a different location or remote for a strong candidate.\n\nJob Description\n\nIs this a remote position? If not, what Client locations can a resource work and how many days a week will they be required to work onsite? Hybrid would be ideal, 3 days a week. Irving office is the preference but would consider a different location or remote for a strong candidate.\n\nResponsibilities:\n\n• Developing user interface components and implementing them following well-known React.js workflows (such as Flux or Redux)\n\n• Developing new user-facing features using React.js\n\n• Building reusable components and front-end libraries for future use\n\n• Developing and implementing highly responsive user interface components using react concepts.\n\n• Writing application interface codes using JavaScript following react.js workflows.\n\n• Troubleshooting interface software and debugging application codes.\n\n• Developing and implementing front-end architecture to support user interface concepts.\n\n• Monitoring and improving front-end performance.\n\n• Documenting application changes and developing updates.\n\n• Translating designs and wireframes into high quality code\n\n• Optimizing components for maximum performance across a vast array of web-capable devices and browsers\n\nPreferred Skills/Experience\n\n• Extensive hands on experience in ReactJS\n\n• Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model\n\n• Extensive experience on creating Micro front end applications\n\n• Modern JS (browser + Node.js), CSS,SCSS and HTML5\n\n• Front end state management Redux, ContextAPI and Hooks\n\n• Client API GrapQL and Fetch wrapper\n\n• Reusable ReactJS components creation\n\n• Extensive experience on Responsive design system\n\n• Webpack with the entire ecosystem\n\n• Understanding the architecture of web applications\n\n• Knowledge of OOP and patterns\n\n• Understanding of Web application performance\n\n• Leading team in design and development efforts\n\n• Good communication Skills\n\n• Working experience in Agile framework\n\nTools and libraries\n\n• React\n\n• Redux\n\n• GrapQL\n\n• Context API\n\n• SCSS / CSS 3 and above\n\n• HTML 5\n\n• Webpack 4 and above\n\n• Responsive Design\n\n• Jenkin\n\n• GitLab\n\n• Artifactory system',
      job_is_remote: false,
      job_posted_at_timestamp: 1716936624,
      job_posted_at_datetime_utc: '2024-05-28T22:50:24.000Z',
      job_city: 'Irving',
      job_state: 'TX',
      job_country: 'US',
      job_latitude: 32.81402,
      job_longitude: -96.94889,
      job_benefits: null,
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer+in+texas,+usa&start=0&ibp=htl;jobs&htidocid=qfAIWn_GegaRyDlOAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=react+developer+in+texas,+usa&htidocid=qfAIWn_GegaRyDlOAAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: '2024-06-27T22:50:23.000Z',
      job_offer_expiration_timestamp: 1719528623,
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
        bachelors_degree: true,
        degree_mentioned: false,
        degree_preferred: false,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: 70,
      job_max_salary: 78,
      job_salary_currency: 'USD',
      job_salary_period: 'HOUR',
      job_highlights: {
        Qualifications: ['HTML 5', 'Webpack 4 and above'],
        Responsibilities: [
          'Developing user interface components and implementing them following well-known React.js workflows (such as Flux or Redux)',
          'Developing new user-facing features using React.js',
          'Building reusable components and front-end libraries for future use',
          'Developing and implementing highly responsive user interface components using react concepts',
          'Writing application interface codes using JavaScript following react.js workflows',
          'Troubleshooting interface software and debugging application codes',
          'Developing and implementing front-end architecture to support user interface concepts',
          'Monitoring and improving front-end performance',
          'Documenting application changes and developing updates',
          'Translating designs and wireframes into high quality code',
          'Optimizing components for maximum performance across a vast array of web-capable devices and browsers',
        ],
      },
      job_job_title: null,
      job_posting_language: 'en',
      job_onet_soc: '15113400',
      job_onet_job_zone: '3',
      job_occupational_categories: null,
      job_naics_code: null,
      job_naics_name: null,
    },
    {
      job_id: 'UXCxxG24gYQBpD_FAAAAAA==',
      employer_name: 'HireMeFast LLC',
      employer_logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDtLo5Jlv-4lBuqoeVie8LlzUD_bf9h4XWCCz&s=0',
      employer_website: null,
      employer_company_type: null,
      job_publisher: 'LinkedIn',
      job_employment_type: 'FULLTIME',
      job_title: 'Junior React Developer',
      job_apply_link:
        'https://www.linkedin.com/jobs/view/junior-react-developer-at-hiremefast-llc-3936724102',
      job_apply_is_direct: false,
      job_apply_quality_score: 0.6242,
      apply_options: [
        {
          publisher: 'LinkedIn',
          apply_link:
            'https://www.linkedin.com/jobs/view/junior-react-developer-at-hiremefast-llc-3936724102',
          is_direct: false,
        },
        {
          publisher: 'Interlink Jobs',
          apply_link:
            'https://www.interlinkjobs.com/jobs/59695651-junior-react-developer',
          is_direct: false,
        },
      ],
      job_description:
        'This is a remote position.\n\nDISCLAIMER: This job posting is intended for active pooling of candidates who will become part of our talent pool. Your qualifications will be assessed against both current and future job openings. Should your application align with a role that corresponds to your skills and experience, and an opportunity arises, our recruitment team will reach out to you immediately. Please note that this does not guarantee immediate placement or contact. Additionally, we exclusively consider applications from individuals who are currently reside in the US/Canada during their application process.\n\nSalary: $65,000 - $75,000 per annum\n\nExperience Required: Minimum 1 year of project experience\n\nResponsibilities:\n• Develop and implement high-quality, scalable, and maintainable React components for our web applications.\n• Collaborate with the development team to translate design mock-ups into functional features.\n• Participate in code reviews and provide constructive feedback to enhance the overall code quality.\n• Debug and resolve software defects and issues.\n• Stay updated with the latest industry trends and best practices in front-end development.\n\nRequirements:\n• Proficiency in HTML, CSS, and JavaScript.\n• Strong understanding of React and its ecosystem.\n• Experience working with RESTful APIs and integrating backend services.\n• Familiarity with version control systems (e.g., Git).\n• Good problem-solving and analytical skills.\n• Excellent communication and collaboration abilities.\n• Ability to learn quickly and adapt to new technologies and frameworks.',
      job_is_remote: true,
      job_posted_at_timestamp: 1716902370,
      job_posted_at_datetime_utc: '2024-05-28T13:19:30.000Z',
      job_city: 'El Paso',
      job_state: 'TX',
      job_country: 'US',
      job_latitude: 31.761877,
      job_longitude: -106.48502,
      job_benefits: null,
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer+in+texas,+usa&start=0&ibp=htl;jobs&htidocid=UXCxxG24gYQBpD_FAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=react+developer+in+texas,+usa&htidocid=UXCxxG24gYQBpD_FAAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: '2024-06-27T13:19:30.000Z',
      job_offer_expiration_timestamp: 1719494370,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: 12,
        experience_mentioned: true,
        experience_preferred: false,
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: true,
        degree_mentioned: false,
        degree_preferred: false,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          'Experience Required: Minimum 1 year of project experience',
          'Proficiency in HTML, CSS, and JavaScript',
          'Strong understanding of React and its ecosystem',
          'Experience working with RESTful APIs and integrating backend services',
          'Familiarity with version control systems (e.g., Git)',
          'Good problem-solving and analytical skills',
          'Excellent communication and collaboration abilities',
          'Ability to learn quickly and adapt to new technologies and frameworks',
        ],
        Responsibilities: [
          'Develop and implement high-quality, scalable, and maintainable React components for our web applications',
          'Collaborate with the development team to translate design mock-ups into functional features',
          'Participate in code reviews and provide constructive feedback to enhance the overall code quality',
          'Debug and resolve software defects and issues',
          'Stay updated with the latest industry trends and best practices in front-end development',
        ],
        Benefits: ['Salary: $65,000 - $75,000 per annum'],
      },
      job_job_title: null,
      job_posting_language: 'en',
      job_onet_soc: '15113400',
      job_onet_job_zone: '3',
      job_occupational_categories: null,
      job_naics_code: null,
      job_naics_name: null,
    },
    {
      job_id: 'il_7L-8ltwh9BKXMAAAAAA==',
      employer_name: 'GivePulse',
      employer_logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLA4a7wWUBtSB1PHIElG1H41w7i9AwGNRGnWHH&s=0',
      employer_website: null,
      employer_company_type: null,
      job_publisher: 'Built In Austin',
      job_employment_type: 'FULLTIME',
      job_title: 'React.js Developers (UI)',
      job_apply_link:
        'https://www.builtinaustin.com/job/reactjs-developers-ui/51675',
      job_apply_is_direct: false,
      job_apply_quality_score: 0.6846,
      apply_options: [
        {
          publisher: 'Built In Austin',
          apply_link:
            'https://www.builtinaustin.com/job/reactjs-developers-ui/51675',
          is_direct: false,
        },
      ],
      job_description:
        "GivePulse is in need to grow our team of engineers and product evangelists. We are specifically looking for Software Engineer to help us scale and continue building civic technology to help address the toughest problems in the community.\n\nEveryone on the team needs to be entrepreneurial, wear a ton of different hats and work in a highly collaborative environment. You will tackle challenging, novel situations every day and will have the opportunity to redefine the volunteer and donation space.\n\nWe have a strong preference for those that live or is willing to move to Austin, TX (we got great breakfast tacos and bbq). We are also willing to make exceptions for candidates outside of Texas but within the US. Note: We also are willing to sponsor H1-B candidates or OPT F-1s. We would love to hear from you and invite qualified candidates to apply at this time via: https://www.givepulse.com/survey/take/mmiIulaqGxuOn9JwFkwB\n\nMore About Us\n\nWe are a social giving platform with a focus to help encourage people to donate and volunteer in the community. We work with over hundreds of thousands of groups, many of which range from your local Animal Center to Ivy Leagues, SMBs to Fortune 500's, Cities to Municipalities, and we engage with millions of active individuals who donate or volunteer.\n\nWe are an Austin based business and are experiencing rapid growth. We are looking for motivated, hungry individuals who want to help us scale further to support millions of volunteers and organizations. There are major opportunities for career advancement for qualified candidates ready to help the company grow and reach our performance goals.\n\nWe at GivePulse are committed to a policy of equal opportunity and non-discrimination on the basis of race, color, national origin, sexual orientation, religion, sex, gender, gender identity, veteran status, age or disability, as protected by law, in all programs and activities and conditions of employment. GivePulse is especially interested in candidates who will take ownership and responsibility to exceed expectations, contribute to open dialogue, build bridges and foster a climate supporting equity, diversity, and belonging. GivePulse is an anti-racist organization. All positions will actively promote diversity, belonging and equity through critical and compassionate communication and strategic outreach efforts to colleagues, partners and institutions (e.g., historically under-represented, first-generation, DACA recipients, LGBTQ community).\n\nRequirements\n• You are a trusted engineer with Computer Science, Computer Engineering or equivalent degree or has relevant work experience.\n• 3+ years of React JS experience (preferred).\n• 2+ years of MySQL and PHP (bonus).\n• Expert Knowledge of CSS, JavaScript and AJAX.\n• Experience with Material UI.\n• Experience with Typescript.\n• Experience Laravel experience a plus.\n• Experience with GIT version control.\n• Ability to create RESTful services.\n• Create unit and integration tests to fully test and regress software.\n• You find a work-around when there is no work-around\n• Great problem solving skills\n• Excellent attention to detail\n• Experience in a fast-paced work environment. You ship quality code quickly\n• A product-first approach to building software. You care about the real world functionality of your programming\n• Other startup experience is a plus\n\nBonuses\n• Likes to rewrite code and make it perform better than O(log n)\n• Likes to participate in tough design and business decisions\n• Cares deeply about social good and civic technology\n\nBenefits\n• Competitive Compensation w/ Fully Covered Medical & Health Benefits\n• Help guide company decisions and direction\n• Be part of the ground floor of a fast growing community focused startup\n• Scale the tech used by hundreds of thousands of groups (nonprofits, cities, businesses etc.,)\n• Scale the usage of a platform to millions more\n• Make an impact on the social good space\n\nPlease apply by submitting your resume and cover letter.\n\nQualified candidates will be invited to interview, do an engineer test, and to meet the team.\n\nhttps://www.givepulse.com/careers\n\n“Be the change that you wish to see in the world.”\n\n― Mahatma Gandhi\n\nAt GivePulse, we provide a fair and equal employment opportunity for all Team Members and candidates regardless of race, color, religion, national origin, gender, pregnancy, sexual orientation, gender identity/expression, age, marital status, disability, or any other legally protected characteristic. GivePulse hires and promotes individuals solely based on qualifications for the position to be filled and business needs.\n\nJob Types: Full-time\n\nSalary: $80,000.00 to $150,000.00/year",
      job_is_remote: true,
      job_posted_at_timestamp: 1714810800,
      job_posted_at_datetime_utc: '2024-05-04T08:20:00.000Z',
      job_city: 'Austin',
      job_state: 'TX',
      job_country: 'US',
      job_latitude: 30.267153,
      job_longitude: -97.74306,
      job_benefits: ['health_insurance'],
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer+in+texas,+usa&start=0&ibp=htl;jobs&htidocid=il_7L-8ltwh9BKXMAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=react+developer+in+texas,+usa&htidocid=il_7L-8ltwh9BKXMAAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: '2024-06-03T00:00:00.000Z',
      job_offer_expiration_timestamp: 1717372800,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: 36,
        experience_mentioned: true,
        experience_preferred: true,
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: true,
        degree_mentioned: false,
        degree_preferred: false,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          'You are a trusted engineer with Computer Science, Computer Engineering or equivalent degree or has relevant work experience',
          '2+ years of MySQL and PHP (bonus)',
          'Expert Knowledge of CSS, JavaScript and AJAX',
          'Experience with Material UI',
          'Experience with Typescript',
          'Experience with GIT version control',
          'Ability to create RESTful services',
          'Create unit and integration tests to fully test and regress software',
          'You find a work-around when there is no work-around',
          'Great problem solving skills',
          'Excellent attention to detail',
          'Experience in a fast-paced work environment',
          'You ship quality code quickly',
          'A product-first approach to building software',
          'You care about the real world functionality of your programming',
          'Likes to rewrite code and make it perform better than O(log n)',
          'Likes to participate in tough design and business decisions',
        ],
        Benefits: [
          'Competitive Compensation w/ Fully Covered Medical & Health Benefits',
          'Help guide company decisions and direction',
          'Salary: $80,000.00 to $150,000.00/year',
        ],
      },
      job_job_title: null,
      job_posting_language: 'en',
      job_onet_soc: '15113400',
      job_onet_job_zone: '3',
      job_occupational_categories: null,
      job_naics_code: null,
      job_naics_name: null,
    },
    {
      job_id: 'SXRzDniZI04DVsaGAAAAAA==',
      employer_name: 'McCall and Lee',
      employer_logo: null,
      employer_website: null,
      employer_company_type: null,
      job_publisher: 'ZipRecruiter',
      job_employment_type: 'FULLTIME',
      job_title: 'Front-End Developer - React',
      job_apply_link:
        'https://www.ziprecruiter.com/c/McCall-and-Lee/Job/Front-End-Developer-React/-in-Austin,TX?jid=a36c246a25c3b1b2',
      job_apply_is_direct: true,
      job_apply_quality_score: 0.7214,
      apply_options: [
        {
          publisher: 'ZipRecruiter',
          apply_link:
            'https://www.ziprecruiter.com/c/McCall-and-Lee/Job/Front-End-Developer-React/-in-Austin,TX?jid=a36c246a25c3b1b2',
          is_direct: true,
        },
        {
          publisher: 'MLee Healthcare',
          apply_link:
            'https://jobs.mleehealthcare.com/job/id/TX/Austin/Senior+Frontend+Developer',
          is_direct: true,
        },
        {
          publisher: 'Indeed',
          apply_link: 'https://www.indeed.com/viewjob?jk=df05428bf757f8e5',
          is_direct: true,
        },
        {
          publisher: 'Glassdoor',
          apply_link:
            'https://www.glassdoor.com/job-listing/senior-front-end-developer-mccall-and-lee-JV_IC1139761_KO0,26_KE27,41.htm?jl=1009259230560',
          is_direct: true,
        },
        {
          publisher: 'SimplyHired',
          apply_link:
            'https://www.simplyhired.com/job/UoVLtlhAgea39We9ovJLFh8auPQphTiYYRiPZ-hda57w7V9OEJSpEw',
          is_direct: false,
        },
        {
          publisher: 'PCRecruiter',
          apply_link:
            'https://host.pcrecruiter.net/pcrbin/jobboard/job/Front-End-Developer---React/b/XUPSHOII7UUSVRY2SUOAD2C6YLI7VFP5OPDI444QEQEWHSSTEWOLXZDRXYVWCPHUJHBTK67WJ23NO',
          is_direct: true,
        },
        {
          publisher: 'Trabajo.org',
          apply_link:
            'https://us.trabajo.org/job-2466-e20259dbdbe18bddee0877256521b7b2',
          is_direct: false,
        },
        {
          publisher: 'IT Tech Careers',
          apply_link:
            'https://ittechcareers.com/job/senior-frontend-developer-2/',
          is_direct: false,
        },
      ],
      job_description:
        'MLee Healthcare is a leading recruiting firm specializing in healthcare staffing solutions. Committed to excellence, we connect healthcare professionals with top-tier opportunities while providing exceptional service to our clients and maintaining a positive work culture.\n\nJob Overview:\nWe are seeking a talented Junior or Senior Front-End Developer to join our team that has a great understanding of JavaScript and React. As a Front-End Developer, you will be responsible for implementing visual elements that users see and interact with in a web application. If you are passionate about creating exceptional user experiences and have expertise in front-end technologies, we want to hear from you.\n\nResponsibilities:\n• Web Development: Collaborate with the design team to implement responsive and user-friendly web interfaces using JavaScript, HTML, and CSS.\n• User Experience: Ensure a seamless and enjoyable user experience by creating interactive and visually appealing features on the front end.\n• Cross-Browser Compatibility: Develop applications that work consistently across various browsers and devices.\n• Code Optimization: Write clean, efficient, and maintainable code, and contribute to continuous improvement initiatives.\n• Collaboration: Work closely with back-end developers and other team members to integrate front-end components with server-side logic.\n• Testing and Debugging: Conduct thorough testing and debugging to identify and fix issues, ensuring a high level of quality in the final product.\n\nRequirements:\n• Must be located in Austin, TX\n• Proven experience as a Front-End Developer (4+ years of experience) with expertise in JavaScript, HTML, and CSS.\n• Strong knowledge of front-end frameworks such as React, Angular, or Vue.js.\n• Experience with responsive design principles and mobile development.\n• Familiarity with version control systems (e.g., Git).\n• Excellent problem-solving and communication skills.\n• Ability to collaborate effectively in a team environment.\n\nBenefits:\n• Health, dental, and vision insurance options.\n• Retirement savings plan with company match.\n• Paid time off and holidays.\n• Opportunities for professional development and advancement within the company.',
      job_is_remote: false,
      job_posted_at_timestamp: 1716395189,
      job_posted_at_datetime_utc: '2024-05-22T16:26:29.000Z',
      job_city: 'Austin',
      job_state: 'TX',
      job_country: 'US',
      job_latitude: 30.267153,
      job_longitude: -97.74306,
      job_benefits: [
        'dental_coverage',
        'retirement_savings',
        'health_insurance',
        'paid_time_off',
      ],
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer+in+texas,+usa&start=0&ibp=htl;jobs&htidocid=SXRzDniZI04DVsaGAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=react+developer+in+texas,+usa&htidocid=SXRzDniZI04DVsaGAAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: '2024-06-27T00:00:00.000Z',
      job_offer_expiration_timestamp: 1719446400,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: 48,
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
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          'Must be located in Austin, TX',
          'Proven experience as a Front-End Developer (4+ years of experience) with expertise in JavaScript, HTML, and CSS',
          'Strong knowledge of front-end frameworks such as React, Angular, or Vue.js',
          'Experience with responsive design principles and mobile development',
          'Familiarity with version control systems (e.g., Git)',
          'Excellent problem-solving and communication skills',
          'Ability to collaborate effectively in a team environment',
        ],
        Responsibilities: [
          'As a Front-End Developer, you will be responsible for implementing visual elements that users see and interact with in a web application',
          'Web Development: Collaborate with the design team to implement responsive and user-friendly web interfaces using JavaScript, HTML, and CSS',
          'User Experience: Ensure a seamless and enjoyable user experience by creating interactive and visually appealing features on the front end',
          'Cross-Browser Compatibility: Develop applications that work consistently across various browsers and devices',
          'Code Optimization: Write clean, efficient, and maintainable code, and contribute to continuous improvement initiatives',
          'Collaboration: Work closely with back-end developers and other team members to integrate front-end components with server-side logic',
          'Testing and Debugging: Conduct thorough testing and debugging to identify and fix issues, ensuring a high level of quality in the final product',
        ],
        Benefits: [
          'Health, dental, and vision insurance options',
          'Retirement savings plan with company match',
          'Paid time off and holidays',
          'Opportunities for professional development and advancement within the company',
        ],
      },
      job_job_title: null,
      job_posting_language: 'en',
      job_onet_soc: '15113400',
      job_onet_job_zone: '3',
      job_occupational_categories: ['15-1134.00: Web Developers'],
      job_naics_code: null,
      job_naics_name: null,
    },
    {
      job_id: 'skiQsDUtHNtA1xpTAAAAAA==',
      employer_name: 'Acadia Technologies, Inc.',
      employer_logo: null,
      employer_website: null,
      employer_company_type: null,
      job_publisher: 'Dice',
      job_employment_type: 'FULLTIME',
      job_title: 'React JS Developer',
      job_apply_link:
        'https://www.dice.com/job-detail/08e8cd50-1914-4343-88a5-071b565768a0',
      job_apply_is_direct: true,
      job_apply_quality_score: 0.6933,
      apply_options: [
        {
          publisher: 'Dice',
          apply_link:
            'https://www.dice.com/job-detail/08e8cd50-1914-4343-88a5-071b565768a0',
          is_direct: true,
        },
        {
          publisher: 'BeBee',
          apply_link:
            'https://us.bebee.com/job/b7634c6be63fae5d28b46e2e6a1c3c22',
          is_direct: false,
        },
        {
          publisher: 'Jobs Trabajo.org',
          apply_link:
            'https://us.trabajo.org/job-2002-5e315bb35b0d7a730196f29d4a97260f',
          is_direct: false,
        },
      ],
      job_description:
        '1. HTML + CSS 2. JSX 3. JavaScript Fundamentals + ES6 4. Git 5. Node + npm 6. Redux.',
      job_is_remote: false,
      job_posted_at_timestamp: 1716237028,
      job_posted_at_datetime_utc: '2024-05-20T20:30:28.000Z',
      job_city: 'Texas City',
      job_state: 'TX',
      job_country: 'US',
      job_latitude: 29.383844,
      job_longitude: -94.9027,
      job_benefits: null,
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer+in+texas,+usa&start=0&ibp=htl;jobs&htidocid=skiQsDUtHNtA1xpTAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=react+developer+in+texas,+usa&htidocid=skiQsDUtHNtA1xpTAAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: '2024-06-22T17:16:28.000Z',
      job_offer_expiration_timestamp: 1719076588,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: null,
        experience_mentioned: false,
        experience_preferred: false,
      },
      job_required_skills: ['Git', 'Node'],
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
      job_min_salary: 60000,
      job_max_salary: 80000,
      job_salary_currency: 'USD',
      job_salary_period: 'YEAR',
      job_highlights: {},
      job_job_title: null,
      job_posting_language: 'en',
      job_onet_soc: '15113400',
      job_onet_job_zone: '3',
      job_occupational_categories: null,
      job_naics_code: null,
      job_naics_name: null,
    },
    {
      job_id: 'A8wXeL1JohfFeRApAAAAAA==',
      employer_name: 'MindPal',
      employer_logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvg1jwv3mc0IzreWl9Rhg99E1WoSfFn51ynzLu&s=0',
      employer_website: null,
      employer_company_type: null,
      job_publisher: 'LinkedIn',
      job_employment_type: 'FULLTIME',
      job_title: 'React Developer',
      job_apply_link:
        'https://www.linkedin.com/jobs/view/react-developer-at-mindpal-3764784093',
      job_apply_is_direct: false,
      job_apply_quality_score: 0.6488,
      apply_options: [
        {
          publisher: 'LinkedIn',
          apply_link:
            'https://www.linkedin.com/jobs/view/react-developer-at-mindpal-3764784093',
          is_direct: false,
        },
      ],
      job_description:
        'We are looking for React Developers with experience ranging from junior to senior level.\n\nJob Description\n• Creating and developing web applications using React and other front-end tools\n• Working with designers to translate graphical designs into visually appealing and intuitive user interfaces\n• Ensuring application performance and scalability through code optimization and problem-solving related to performance\n• Collaborating with the back-end team to integrate the front-end application with systems and databases\n• Testing and debugging applications to ensure reliability\n• Keeping up with the latest trends and tools in front-end development and improving skills to continuously enhance the quality of created applications\n• Collaborating with the project team and management to understand business requirements and adjust work to company goals\n\nRequirements\n• Minimum 2 years of experience working with React\n• Very good programming skills in JavaScript and TypeScript\n• Knowledge of software architecture, design patterns, and software development according to best practices\n• Communicative knowledge of English language\n• Additional advantage will be knowledge of other technologies\n\nWe Offer\n• B2B contract type\n• Full-time employment\n• Remote and flexible working hours',
      job_is_remote: false,
      job_posted_at_timestamp: 1699950607,
      job_posted_at_datetime_utc: '2023-11-14T08:30:07.000Z',
      job_city: 'Austin',
      job_state: 'TX',
      job_country: 'US',
      job_latitude: 30.267153,
      job_longitude: -97.74306,
      job_benefits: null,
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer+in+texas,+usa&start=0&ibp=htl;jobs&htidocid=A8wXeL1JohfFeRApAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=react+developer+in+texas,+usa&htidocid=A8wXeL1JohfFeRApAAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: '2024-06-21T08:29:07.000Z',
      job_offer_expiration_timestamp: 1718958547,
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
        bachelors_degree: true,
        degree_mentioned: false,
        degree_preferred: false,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          'Minimum 2 years of experience working with React',
          'Very good programming skills in JavaScript and TypeScript',
          'Knowledge of software architecture, design patterns, and software development according to best practices',
          'Communicative knowledge of English language',
          'Additional advantage will be knowledge of other technologies',
        ],
        Responsibilities: [
          'Creating and developing web applications using React and other front-end tools',
          'Working with designers to translate graphical designs into visually appealing and intuitive user interfaces',
          'Ensuring application performance and scalability through code optimization and problem-solving related to performance',
          'Collaborating with the back-end team to integrate the front-end application with systems and databases',
          'Testing and debugging applications to ensure reliability',
          'Keeping up with the latest trends and tools in front-end development and improving skills to continuously enhance the quality of created applications',
          'Collaborating with the project team and management to understand business requirements and adjust work to company goals',
        ],
        Benefits: [
          'B2B contract type',
          'Full-time employment',
          'Remote and flexible working hours',
        ],
      },
      job_job_title: null,
      job_posting_language: 'en',
      job_onet_soc: '15113400',
      job_onet_job_zone: '3',
      job_occupational_categories: null,
      job_naics_code: null,
      job_naics_name: null,
    },
    {
      job_id: 'pVBNi21A4FRUGK_NAAAAAA==',
      employer_name: 'Emblue',
      employer_logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPd-hps7yHu6ZmQPwa8QzKacpqKLbzwCNNoBVY&s=0',
      employer_website: 'http://www.embluemail.com',
      employer_company_type: null,
      job_publisher: 'OPTnation',
      job_employment_type: 'FULLTIME',
      job_title: 'React Developer',
      job_apply_link:
        'https://www.optnation.com/react-developer-job-in-dallas-tx-view-jobid-35286',
      job_apply_is_direct: false,
      job_apply_quality_score: 0.6947,
      apply_options: [
        {
          publisher: 'OPTnation',
          apply_link:
            'https://www.optnation.com/react-developer-job-in-dallas-tx-view-jobid-35286',
          is_direct: false,
        },
      ],
      job_description:
        'Responsibilities Optimize the existing code by providing solutions to positively impact the user experience and maximize performance. Support the development team through development testing and implementation stages and review the completed work effectively. Provide direction and technical expertise in design development and systems integration. Train junior team members when in capacity as a mentor. Provide realistic timelines for development cycle and milestones delivering projects in a timely manner and going the extra mile for mission critical deadlines. Have good understanding of mobile development for both iOS and Android. Collaborate with QA and customer support team members.\n\nRequirements 3+ years experience on ReactJS. 1+ years experience on React Native development experience. 3+ years experience on HTML CSS Bootstrap Javascript.. Experience working with a variety of SQL and NoSQL data stores. Familiar with or strong interest in artificial intelligence and machine learning. Team spirit; strong communication skills to collaborate with various stakeholders. Sharp analytical and problem-solving skills.\n\nKey Skills Core Fundamentals of HTML CSS and JavaScript. JavaScript Fundamentals + ES6. Variables and Scoping. Array and Objects. DOM and Eent Handling Facility.',
      job_is_remote: false,
      job_posted_at_timestamp: 1699228800,
      job_posted_at_datetime_utc: '2023-11-06T00:00:00.000Z',
      job_city: 'Dallas',
      job_state: 'TX',
      job_country: 'US',
      job_latitude: 32.776665,
      job_longitude: -96.79699,
      job_benefits: null,
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer+in+texas,+usa&start=0&ibp=htl;jobs&htidocid=pVBNi21A4FRUGK_NAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=react+developer+in+texas,+usa&htidocid=pVBNi21A4FRUGK_NAAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: null,
      job_offer_expiration_timestamp: null,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: 36,
        experience_mentioned: true,
        experience_preferred: false,
      },
      job_required_skills: ['HTML', 'CSS', 'JavaScript.'],
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
      job_min_salary: 61900,
      job_max_salary: 71300,
      job_salary_currency: 'USD',
      job_salary_period: 'YEAR',
      job_highlights: {
        Qualifications: [
          'Requirements 3+ years experience on ReactJS. 1+ years experience on React Native development experience',
          '3+ years experience on HTML CSS Bootstrap Javascript.',
          'Experience working with a variety of SQL and NoSQL data stores',
          'Familiar with or strong interest in artificial intelligence and machine learning',
          'Team spirit; strong communication skills to collaborate with various stakeholders',
          'Sharp analytical and problem-solving skills',
          'Key Skills Core Fundamentals of HTML CSS and JavaScript',
        ],
        Responsibilities: [
          'Responsibilities Optimize the existing code by providing solutions to positively impact the user experience and maximize performance',
          'Support the development team through development testing and implementation stages and review the completed work effectively',
          'Provide direction and technical expertise in design development and systems integration',
          'Train junior team members when in capacity as a mentor',
          'Provide realistic timelines for development cycle and milestones delivering projects in a timely manner and going the extra mile for mission critical deadlines',
          'Have good understanding of mobile development for both iOS and Android',
          'Collaborate with QA and customer support team members',
        ],
      },
      job_job_title: null,
      job_posting_language: 'en',
      job_onet_soc: '15113400',
      job_onet_job_zone: '3',
      job_occupational_categories: null,
      job_naics_code: null,
      job_naics_name: null,
    },
    {
      job_id: '--zsGlCnG9mDBQDkAAAAAA==',
      employer_name: 'Citi',
      employer_logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7faBQOdGUADCYL1U26nurqW3ff_-IXxzgyTrY&s=0',
      employer_website: 'http://www.citi.com',
      employer_company_type: 'Finance',
      job_publisher: 'Jobs And Careers At Citi',
      job_employment_type: 'FULLTIME',
      job_title: 'Java, Angular/React Developer  Lead Analyst - C13 - IRVING',
      job_apply_link:
        'https://jobs.citi.com/job/irving/java-angular-react-developer-lead-analyst-c13-irving/287/65726950768',
      job_apply_is_direct: false,
      job_apply_quality_score: 0.7968,
      apply_options: [
        {
          publisher: 'Jobs And Careers At Citi',
          apply_link:
            'https://jobs.citi.com/job/irving/java-angular-react-developer-lead-analyst-c13-irving/287/65726950768',
          is_direct: false,
        },
      ],
      job_description:
        'The Applications Development Technology Lead Analyst is a senior level position responsible for establishing and implementing new or revised application systems and programs in coordination with the Technology team. The overall objective of this role is to lead applications systems analysis and programming activities.\n\nResponsibilities:\n• Lead by example in bringing agility into software development by following agile best practices.\n• Be a liaison between development manager and the scrum team.\n• Coach/mentor team, eliminate the impediments.\n• Manage the stakeholders, partner to develop roadmap, releases / milestones, and be accountable to the delivery.\n• Develop frameworks, designs, data models, architecture diagrams etc., document, communicate within and outside the team.\n• Ensure best engineering standards are followed by team including DevOps and SRE.\n• Be the second level reviewer for the application design and implementation.\n• Provide inputs, review the test plans and test cases for adequate coverage to ensure the product quality.\n• Be accountable for the releases to go smoothly.\n• Be single point of contact for production incidents at L3 level, troubleshoot, perform root cause analysis, resolve issues permanently.\n• Ensure sprint deliverables are met.\n• Adjust the capacity and still be hands-on in addressing the stories as developer.\n\nQualifications:\n• 10+ years of software engineering experience in developing enterprise scale applications.\n• Expertise in building web applications using Java, Angular/React, and Oracle/PostgreSQL technology stack.\n• Expertise in enterprise integrations through RESTful APIs, Kafka messaging etc.\n• Expertise in Elastic Search, NoSQL databases, and Caching solutions.\n• Expertise in designing and optimizing the software solutions for performance and stability.\n• Expertise in troubleshooting and problem solving.\n• Expertise in site reliability engineering.\n• Expertise in Test driven development.\n• Expertise in Authentication, Authorization, and Security.\n• Familiarity with AWS cloud, prepare to migrate applications, services, and data to AWS.\n\nEducation:\n• Bachelor’s degree/University degree or equivalent experience\n• Master’s degree preferred\n\nThis job description provides a high-level review of the types of work performed. Other job-related duties may be assigned as required.\n\n------------------------------------------------------\n\nJob Family Group:\nTechnology\n\n------------------------------------------------------\n\nJob Family:\nApplications Development\n\n------------------------------------------------------\n\nTime Type:\nFull time\n\n------------------------------------------------------\n\nPrimary Location:\nIrving Texas United States\n\n------------------------------------------------------\n\nPrimary Location Full Time Salary Range:\n$125,760.00 - $188,640.00\n\nIn addition to salary, Citi’s offerings may also include, for eligible employees, discretionary and formulaic incentive and retention awards. Citi offers competitive employee benefits, including: medical, dental & vision coverage; 401(k); life, accident, and disability insurance; and wellness programs. Citi also offers paid time off packages, including planned time off (vacation), unplanned time off (sick leave), and paid holidays. For additional information regarding Citi employee benefits, please visit citibenefits.com. Available offerings may vary by jurisdiction, job level, and date of hire.\n\n------------------------------------------------------\n\nAnticipated Posting Close Date:\nJun 04, 2024\n\n------------------------------------------------------\n\nCiti is an equal opportunity and affirmative action employer.\n\nQualified applicants will receive consideration without regard to their race, color, religion, sex, sexual orientation, gender identity, national origin, disability, or status as a protected veteran.\n\nCitigroup Inc. and its subsidiaries ("Citi”) invite all qualified interested applicants to apply for career opportunities. If you are a person with a disability and need a reasonable accommodation to use our search tools and/or apply for a career opportunity review Accessibility at Citi.\n\nView the "EEO is the Law" poster. View the EEO is the Law Supplement.\n\nView the EEO Policy Statement.\n\nView the Pay Transparency Posting',
      job_is_remote: false,
      job_posted_at_timestamp: 1716854400,
      job_posted_at_datetime_utc: '2024-05-28T00:00:00.000Z',
      job_city: 'Irving',
      job_state: 'TX',
      job_country: 'US',
      job_latitude: 32.81402,
      job_longitude: -96.94889,
      job_benefits: [
        'retirement_savings',
        'dental_coverage',
        'health_insurance',
        'paid_time_off',
      ],
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer+in+texas,+usa&start=0&ibp=htl;jobs&htidocid=--zsGlCnG9mDBQDkAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=react+developer+in+texas,+usa&htidocid=--zsGlCnG9mDBQDkAAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: '2024-06-04T00:00:00.000Z',
      job_offer_expiration_timestamp: 1717459200,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: 120,
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
        degree_mentioned: true,
        degree_preferred: false,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          '10+ years of software engineering experience in developing enterprise scale applications',
          'Expertise in building web applications using Java, Angular/React, and Oracle/PostgreSQL technology stack',
          'Expertise in enterprise integrations through RESTful APIs, Kafka messaging etc',
          'Expertise in Elastic Search, NoSQL databases, and Caching solutions',
          'Expertise in designing and optimizing the software solutions for performance and stability',
          'Expertise in troubleshooting and problem solving',
          'Expertise in site reliability engineering',
          'Expertise in Test driven development',
          'Expertise in Authentication, Authorization, and Security',
          'Familiarity with AWS cloud, prepare to migrate applications, services, and data to AWS',
          'Bachelor’s degree/University degree or equivalent experience',
        ],
        Responsibilities: [
          'The overall objective of this role is to lead applications systems analysis and programming activities',
          'Lead by example in bringing agility into software development by following agile best practices',
          'Be a liaison between development manager and the scrum team',
          'Coach/mentor team, eliminate the impediments',
          'Manage the stakeholders, partner to develop roadmap, releases / milestones, and be accountable to the delivery',
          'Develop frameworks, designs, data models, architecture diagrams etc., document, communicate within and outside the team',
          'Ensure best engineering standards are followed by team including DevOps and SRE',
          'Be the second level reviewer for the application design and implementation',
          'Provide inputs, review the test plans and test cases for adequate coverage to ensure the product quality',
          'Be accountable for the releases to go smoothly',
          'Be single point of contact for production incidents at L3 level, troubleshoot, perform root cause analysis, resolve issues permanently',
          'Ensure sprint deliverables are met',
          'Adjust the capacity and still be hands-on in addressing the stories as developer',
        ],
        Benefits: [
          '$125,760.00 - $188,640.00',
          'In addition to salary, Citi’s offerings may also include, for eligible employees, discretionary and formulaic incentive and retention awards',
          'Citi offers competitive employee benefits, including: medical, dental & vision coverage; 401(k); life, accident, and disability insurance; and wellness programs',
          'Citi also offers paid time off packages, including planned time off (vacation), unplanned time off (sick leave), and paid holidays',
        ],
      },
      job_job_title: null,
      job_posting_language: 'en',
      job_onet_soc: '15113400',
      job_onet_job_zone: '3',
      job_occupational_categories: null,
      job_naics_code: '522110',
      job_naics_name: 'Commercial Banking',
    },
    {
      job_id: 'fVgcXHQxOO3OkUXfAAAAAA==',
      employer_name: 'HiveThrive LLC',
      employer_logo: null,
      employer_website: null,
      employer_company_type: null,
      job_publisher: 'Dice',
      job_employment_type: 'CONTRACTOR',
      job_title: 'React Developer _ Local To Houston, TX',
      job_apply_link:
        'https://www.dice.com/job-detail/6bf9f2f8-4c2f-43ac-b1a8-8683d5c1ee23',
      job_apply_is_direct: true,
      job_apply_quality_score: 0.696,
      apply_options: [
        {
          publisher: 'Dice',
          apply_link:
            'https://www.dice.com/job-detail/6bf9f2f8-4c2f-43ac-b1a8-8683d5c1ee23',
          is_direct: true,
        },
        {
          publisher: 'Salary.com',
          apply_link:
            'https://www.salary.com/job/hivethrive-llc/react-developer-local-to-houston-tx/j202404260404323048721',
          is_direct: false,
        },
        {
          publisher: 'React Jobs',
          apply_link:
            'https://reactjsjob.com/job/2fbXaEiDelHzSw3UC3eirl6N3KV/React%20Developer%20_%20Local%20To%20Houston,%20TX',
          is_direct: false,
        },
      ],
      job_description:
        'Our client is seeking a React Developer. Candidates must be local to Houston, TX.\n\nMust Have:\n• React, Redux, GraphQL\n• Excellent Communication\n\nJob Description:\n\nSolve business problems using software, specifically using modern web development tools like React, Redux, and JavaScript\n• Write and deploy software that is maintainable and readable by other software developers\n• Take general requirements from the business and turn into actionable items for the team\n\nREQUIRED SKILLS\n• Strong experience with modern and vanilla JavaScript techniques including ReactJS, Redux, and ES6/ES7 features\n• Familiarity connecting to Microservices, REST APIs, GraphQL APIs, and other database-driven web applications\n• Experience with third-party libraries and APIs\n• Modern web security methodologies & familiarity with both relational databases and non-relational databases (NoSQL, Elastic Search, Time Based DB)\n• Asynchronous programming including Promises, async/await, and ES7 generators, along with state management using Redux\n\nSKILLS & EXPERIENCE:\n• Server-side development (Node.js), Docker experience a plus\n• Comfort with modern git and GitHub workflows\n• Familiar with command line tools with Bash/ZSH (Linux or Mac)',
      job_is_remote: false,
      job_posted_at_timestamp: 1714061307,
      job_posted_at_datetime_utc: '2024-04-25T16:08:27.000Z',
      job_city: 'Houston',
      job_state: 'TX',
      job_country: 'US',
      job_latitude: 29.760427,
      job_longitude: -95.369804,
      job_benefits: null,
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer+in+texas,+usa&start=0&ibp=htl;jobs&htidocid=fVgcXHQxOO3OkUXfAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=react+developer+in+texas,+usa&htidocid=fVgcXHQxOO3OkUXfAAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: '2024-05-30T17:07:31.000Z',
      job_offer_expiration_timestamp: 1717088851,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: null,
        experience_mentioned: true,
        experience_preferred: true,
      },
      job_required_skills: [
        'GraphQL',
        'ReactJS',
        "API's",
        'Redux',
        'Elastic Search',
        'Docker',
        'JavaScript',
        'NoSQL',
        'Node . js',
        'Linux',
        'web development',
        'GitHub',
      ],
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
      job_min_salary: 50,
      job_max_salary: 55,
      job_salary_currency: 'USD',
      job_salary_period: 'HOUR',
      job_highlights: {
        Qualifications: [
          'React, Redux, GraphQL',
          'Excellent Communication',
          'Strong experience with modern and vanilla JavaScript techniques including ReactJS, Redux, and ES6/ES7 features',
          'Familiarity connecting to Microservices, REST APIs, GraphQL APIs, and other database-driven web applications',
          'Experience with third-party libraries and APIs',
          'Modern web security methodologies & familiarity with both relational databases and non-relational databases (NoSQL, Elastic Search, Time Based DB)',
          'Asynchronous programming including Promises, async/await, and ES7 generators, along with state management using Redux',
          'Comfort with modern git and GitHub workflows',
          'Familiar with command line tools with Bash/ZSH (Linux or Mac)',
        ],
        Responsibilities: [
          'Solve business problems using software, specifically using modern web development tools like React, Redux, and JavaScript',
          'Write and deploy software that is maintainable and readable by other software developers',
          'Take general requirements from the business and turn into actionable items for the team',
        ],
      },
      job_job_title: null,
      job_posting_language: 'en',
      job_onet_soc: '15113400',
      job_onet_job_zone: '3',
      job_occupational_categories: null,
      job_naics_code: null,
      job_naics_name: null,
    },
    {
      job_id: 'ehgQ4obkID8krK-AAAAAAA==',
      employer_name: 'Korn Ferry',
      employer_logo:
        'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100064451179355',
      employer_website: 'http://www.kornferry.com',
      employer_company_type: 'Consulting',
      job_publisher: 'ZipRecruiter',
      job_employment_type: 'FULLTIME',
      job_title: 'React Developer',
      job_apply_link:
        'https://www.ziprecruiter.com/c/Korn-Ferry/Job/React-Developer/-in-Houston,TX?jid=895394f0a53f824b',
      job_apply_is_direct: true,
      job_apply_quality_score: 0.7301,
      apply_options: [
        {
          publisher: 'ZipRecruiter',
          apply_link:
            'https://www.ziprecruiter.com/c/Korn-Ferry/Job/React-Developer/-in-Houston,TX?jid=895394f0a53f824b',
          is_direct: true,
        },
        {
          publisher: 'BeBee',
          apply_link:
            'https://us.bebee.com/job/aed0aa3ba11373f4c8f7d1b60d3bca7a',
          is_direct: false,
        },
        {
          publisher: 'Jobs Trabajo.org',
          apply_link:
            'https://us.trabajo.org/job-835-b1d33c7c302da42377b3ef7261eb8481',
          is_direct: false,
        },
        {
          publisher: 'Jobilize',
          apply_link:
            'https://www.jobilize.com/job/us-tx-houston-react-developer-infinity-consulting-solutions-hiring',
          is_direct: false,
        },
      ],
      job_description:
        "Job Description\n\nLong term- multiyear contract in Houston! Our client is looking for MULTIPLE React Developers to join their team! We are targeting Senior Level React developers and Leads. This role is 5 days a week onsite in Downtown, Houston.\n\nYou will be working on real-time operation applications, the React Developer will work with a team of mid to senior level software engineers on front-end, new application development, as well as enhancing and supporting existing in-house developed applications.\n\nThe role will involve working with the Solutions Engineers, Data Engineers and end users to help identify requirements. Will also be responsible for analyzing requirements, and to architect, design and present solutions to the business problems.\n\nReact.js - Experience & Skills\n• Must have development experience with React/Redux/Material-UI.\n• React + NodeJS or React + Python\n• Experience with building commercial and/or enterprise applications is preferred.\n• Oil and Gas exploration and production experience is a plus.\n• Individual should be flexible and able to adapt to a dynamic environment.\n• Individual should be self-motivated who can work independently with minimal supervision, and also work well as part of a team.\n• Should have good communication skills and the willingness and ability to jump into existing projects.\n• Bachelor's degree in related field is preferred; High school diploma or GED required.\n\nTitle: React Developer\n\nLocation: Houston Texas\n\nClient Industry: Oil & Gas\n\nAbout Korn Ferry\n\nKorn Ferry unleashes potential in people, teams, and organizations. We work with our clients to design optimal organization structures, roles, and responsibilities. We help them hire the right people and advise them on how to reward and motivate their workforce while developing professionals as they navigate and advance their careers. To learn more, please visit Korn Ferry at www.Kornferry.com",
      job_is_remote: false,
      job_posted_at_timestamp: 1714765933,
      job_posted_at_datetime_utc: '2024-05-03T19:52:13.000Z',
      job_city: 'Houston',
      job_state: 'TX',
      job_country: 'US',
      job_latitude: 29.760427,
      job_longitude: -95.369804,
      job_benefits: null,
      job_google_link:
        'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer+in+texas,+usa&start=0&ibp=htl;jobs&htidocid=ehgQ4obkID8krK-AAAAAAA%3D%3D#fpstate=tldetail&htivrt=jobs&htiq=react+developer+in+texas,+usa&htidocid=ehgQ4obkID8krK-AAAAAAA%3D%3D',
      job_offer_expiration_datetime_utc: '2024-06-27T00:00:00.000Z',
      job_offer_expiration_timestamp: 1719446400,
      job_required_experience: {
        no_experience_required: false,
        required_experience_in_months: null,
        experience_mentioned: true,
        experience_preferred: true,
      },
      job_required_skills: null,
      job_required_education: {
        postgraduate_degree: false,
        professional_certification: false,
        high_school: false,
        associates_degree: false,
        bachelors_degree: false,
        degree_mentioned: true,
        degree_preferred: true,
        professional_certification_mentioned: false,
      },
      job_experience_in_place_of_education: false,
      job_min_salary: null,
      job_max_salary: null,
      job_salary_currency: null,
      job_salary_period: null,
      job_highlights: {
        Qualifications: [
          'Must have development experience with React/Redux/Material-UI',
          'React + NodeJS or React + Python',
          'Individual should be flexible and able to adapt to a dynamic environment',
          'Individual should be self-motivated who can work independently with minimal supervision, and also work well as part of a team',
          'Should have good communication skills and the willingness and ability to jump into existing projects',
        ],
        Responsibilities: [
          'You will be working on real-time operation applications, the React Developer will work with a team of mid to senior level software engineers on front-end, new application development, as well as enhancing and supporting existing in-house developed applications',
          'The role will involve working with the Solutions Engineers, Data Engineers and end users to help identify requirements',
          'Will also be responsible for analyzing requirements, and to architect, design and present solutions to the business problems',
        ],
      },
      job_job_title: null,
      job_posting_language: 'en',
      job_onet_soc: '15113400',
      job_onet_job_zone: '3',
      job_occupational_categories: [
        '15-1132.00: Software Developers, Applications',
      ],
      job_naics_code: '561311',
      job_naics_name: 'Employment Placement Agencies',
    },
  ];

  return (
    <section>
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
        }) => (
          <div
            key={job_id}
            className="max-w-[700px] mx-2 md:mr-2 bg-white shadow-1 rounded-xl my-6 w-fit h-fit pt-6 pb-5 px-3 md:px-6"
          >
            <Link href="/jobs/description" key={job_id}>
              <h3 className="font-bold">{employer_name}</h3>
              <div className="text-xs">
                <span className="text-sm font-bold">{job_title} </span>
                <span className="font-bold">⭐ 3.6 </span>
                <span>| </span>
                <span className="font-medium">
                  {Math.floor(Math.random() * 999)} Reviews
                </span>
              </div>
              <div className="mt-6 font-medium">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-1">
                  <span className="flex items-center gap-2">
                    <BsBriefcase className="text-lg" />
                    0-5 Yrs
                  </span>
                  <span className="text-gray-400">|</span>
                  <span>
                    {job_salary_currency === 'USD' && '$'}

                    {job_min_salary
                      ? `${job_min_salary} - ${job_salary_currency === 'USD' && '$'}${job_max_salary}`
                      : '₹  Not Disclosed'} {job_salary_period && 'a'}  {job_salary_period?.toLowerCase()}
                  </span>
                  <span className="text-gray-400">|</span>
                  <span className='capitalize'>{job_employment_type}</span>
                  <span className="text-gray-400">|</span>
                  <span className="flex items-center gap-2">
                    <CiLocationOn className="text-lg" />
                    {job_city}, {job_country}
                  </span>
                </div>
                <div className="flex items-start lg:items-center gap-2">
                  <HiOutlineDocumentText className="min-w-4" />
                  <span className="text-gray-1 text-sm font-medium">
                    {job_description.slice(0, 100)}...
                  </span>
                </div>
              </div>
              <div className="text-gray-2 text-xs font-medium mt-4">
                <span>Physician</span>
                <span>Nuclear Medicine</span>
                <span>Nuclear Engineering</span>
                <span>Medicine</span>
              </div>
              <div className="text-[11px] text-gray-2 mt-4">30+ Day Ago</div>
              {/* <Image
                src={employer_logo  || null}
                alt="Job Listing"
                width={500} // specify the width of the image
                height={300} // specify the height of the image
              /> */}
            </Link>
          </div>
        )
      )}
    </section>
  );
};

export default JobList;
