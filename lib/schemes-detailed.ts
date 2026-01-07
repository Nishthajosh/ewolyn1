export interface SchemeSection {
  id: string;
  title: string;
}

export interface EligibleEntity {
  title: string;
  description: string;
}

export interface EligibleProject {
  title: string;
  description: string;
  icon: string;
}

export interface BenefitHighlight {
  value: string;
  label: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  cta?: string;
}

export interface CommonMistake {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface DetailedScheme {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  heroDescription: string;
  heroStats: { value: string; label: string }[];
  readTime: string;
  lastUpdated: string;
  author: string;
  
  tableOfContents: SchemeSection[];
  
  introduction: {
    paragraphs: string[];
    quote?: string;
  };
  
  whatIs: {
    title: string;
    paragraphs: string[];
  };
  
  eligibility: {
    intro: string;
    entities: EligibleEntity[];
    checklist: string[];
  };
  
  eligibleProjects: {
    intro: string;
    projects: EligibleProject[];
  };
  
  benefits: {
    highlights: BenefitHighlight[];
    lendingInstitutions?: string[];
  };
  
  applicationProcess: {
    steps: ProcessStep[];
    timeline: string;
  };
  
  documents: {
    list: string[];
    note: string;
  };
  
  commonMistakes: CommonMistake[];
  
  faqs: FAQ[];
  
  conclusion: {
    paragraphs: string[];
    ctaTitle: string;
    ctaDescription: string;
  };
}

export const detailedSchemes: DetailedScheme[] = [
  {
    slug: "naif-scheme",
    title: "NAIF Scheme",
    subtitle: "Complete Guide to Eligibility, Benefits & Application",
    tags: ["Agriculture", "Infrastructure", "Finance"],
    heroDescription: "The National Agri Infra Financing Facility (NAIF) enables affordable financing for agricultural infrastructure such as cold storage, warehouses, processing units, and modern farming systems.",
    heroStats: [
      { value: "3%", label: "Interest Subvention" },
      { value: "₹2 Cr", label: "Max Loan" },
      { value: "7 Years", label: "Repayment Tenure" },
      { value: "2 Years", label: "Moratorium" }
    ],
    readTime: "8 min read",
    lastUpdated: "January 7, 2026",
    author: "Ewolyn Team",
    
    tableOfContents: [
      { id: "introduction", title: "Introduction" },
      { id: "what-is-naif", title: "What is NAIF?" },
      { id: "eligibility", title: "Eligibility" },
      { id: "eligible-projects", title: "Eligible Projects" },
      { id: "key-benefits", title: "Key Benefits" },
      { id: "application-process", title: "Application Process" },
      { id: "documents-required", title: "Documents Required" },
      { id: "common-mistakes", title: "Common Mistakes" },
      { id: "faqs", title: "FAQs" }
    ],
    
    introduction: {
      paragraphs: [
        "The NAIF Scheme (National Agri Infra Financing Facility) is a government initiative designed to boost the agricultural infrastructure in India.",
        "With the agriculture sector playing a crucial role in the Indian economy, improving infrastructure like cold storage, warehouses, and processing units is essential for enhancing productivity and reducing post-harvest losses.",
        "Through NAIF, entrepreneurs, startups, and businesses in the agriculture sector can access affordable loans to fund such projects, contributing to a more sustainable and efficient agriculture ecosystem."
      ],
      quote: "The NAIF Scheme aims to make the agricultural value chain more efficient, reduce waste, and increase farmers' income through improved infrastructure."
    },
    
    whatIs: {
      title: "What is the Agriculture Infrastructure Fund (NAIF / AIF)?",
      paragraphs: [
        "The Agriculture Infrastructure Fund (NAIF) is a financial scheme introduced by the Government of India to support the creation and modernization of agriculture infrastructure projects.",
        "This scheme aims to enhance the storage, processing, and logistics capacity of the agricultural sector. The ultimate goal is to make the agricultural value chain more efficient, reduce waste, and increase farmers' income.",
        "Through NAIF, financial assistance is provided for setting up new agriculture infrastructure such as cold storage, warehouses, processing units, and custom hiring centers. This initiative is vital for increasing the shelf life of agricultural products and improving market access for farmers."
      ]
    },
    
    eligibility: {
      intro: "The NAIF Scheme is available to a wide range of agricultural businesses and entrepreneurs:",
      entities: [
        {
          title: "FPOs (Farmer Producer Organizations)",
          description: "Registered farmer groups or organizations working towards enhancing agricultural productivity and improving market access."
        },
        {
          title: "Private Companies",
          description: "Private companies involved in the agriculture sector, aiming to build or upgrade infrastructure."
        },
        {
          title: "Individual Entrepreneurs",
          description: "Any individual looking to invest in agricultural infrastructure projects."
        },
        {
          title: "Startups",
          description: "New ventures in the agri-sector focused on innovation and modern infrastructure development."
        },
        {
          title: "MSMEs (Micro, Small, and Medium Enterprises)",
          description: "Small-scale businesses that contribute to agriculture-related processing and infrastructure."
        }
      ],
      checklist: [
        "The land for the project must be owned or leased for at least 7–8 years.",
        "The project must involve new agricultural infrastructure development."
      ]
    },
    
    eligibleProjects: {
      intro: "The NAIF Scheme primarily focuses on new agriculture infrastructure projects:",
      projects: [
        {
          title: "Cold Storage",
          description: "Establishment or modernization of cold storage units to preserve perishable products.",
          icon: "❄️"
        },
        {
          title: "Primary Processing Units",
          description: "Setting up processing units for raw agricultural produce, improving quality and marketability.",
          icon: "🏭"
        },
        {
          title: "Warehouses",
          description: "Construction of warehouses for storing agricultural products in bulk, reducing post-harvest losses.",
          icon: "🏢"
        },
        {
          title: "Custom Hiring Centers",
          description: "Establishing facilities where farmers can hire modern machinery at affordable rates.",
          icon: "🚜"
        },
        {
          title: "Green House & Poly House",
          description: "Setting up controlled environment farming structures for growing high-value crops.",
          icon: "🌿"
        },
        {
          title: "Vertical Farming",
          description: "Infrastructure for multi-layered farming systems that save space and water while increasing productivity.",
          icon: "🌱"
        }
      ]
    },
    
    benefits: {
      highlights: [
        {
          value: "3%",
          label: "Interest Subvention",
          description: "The borrower gets the benefit of a lower interest rate compared to standard market rates. Approximate ROI is around 9%.",
          icon: "💰"
        },
        {
          value: "7 Years",
          label: "Repayment Tenure",
          description: "With an additional 2-year moratorium period, allowing you to focus on setting up and running the infrastructure before starting repayments.",
          icon: "📅"
        }
      ],
      lendingInstitutions: [
        "National Bank for Agriculture and Rural Development (NABARD)",
        "Commercial Banks (State Bank of India, HDFC, etc.)",
        "Regional Rural Banks (RRBs)",
        "Scheduled Banks"
      ]
    },
    
    applicationProcess: {
      steps: [
        {
          title: "Prepare the Project Report (DPR)",
          description: "Create a detailed project report with technical, financial, and operational details of your agricultural infrastructure project.",
          cta: "Need help preparing your DPR? Contact us"
        },
        {
          title: "Eligibility Check",
          description: "The lender verifies land documents, business structure, financial stability, and project type to ensure you meet all criteria."
        },
        {
          title: "Submit Application",
          description: "Upload your DPR, supporting documents, and business details through the designated financing institution."
        },
        {
          title: "Loan Sanctioning",
          description: "Bank reviews the project, inspects the land if required, and approves the loan with interest subvention benefits."
        },
        {
          title: "Loan Disbursement",
          description: "Funds are released as per project milestones and bank guidelines. Approval typically takes 2–6 weeks."
        }
      ],
      timeline: "The approval process for the NAIF Scheme can take anywhere from 2 to 6 weeks, depending on the complexity of the project and the lender's internal processing time."
    },
    
    documents: {
      list: [
        "Project Report (DPR)",
        "Land Ownership/Lease Documents",
        "Identity Proof (Aadhar, PAN, etc.)",
        "Business Registration Documents",
        "GST Registration",
        "Bank Statements (6-12 months)",
        "Financial Statements"
      ],
      note: "A tailored document checklist is provided during onboarding along with DPR templates and financial formats."
    },
    
    commonMistakes: [
      {
        title: "Incomplete Project Reports",
        description: "Missing or unclear details in the project report can lead to delays or rejection."
      },
      {
        title: "Ineligible Land",
        description: "Using leased land with insufficient tenure (less than 7-8 years) can disqualify you from the scheme."
      },
      {
        title: "Incorrect Financial Documents",
        description: "Ensure all financial documents are accurate and up-to-date to avoid delays in loan disbursement."
      },
      {
        title: "Failure to Meet Eligibility",
        description: "Applicants sometimes assume they are eligible without checking the detailed criteria, leading to rejection."
      }
    ],
    
    faqs: [
      {
        question: "What is the full form of NAIF?",
        answer: "NAIF stands for National Agri Infra Financing Facility, a government initiative to fund agricultural infrastructure projects."
      },
      {
        question: "What types of projects are eligible for NAIF funding?",
        answer: "Eligible projects include cold storage, warehouses, processing units, polyhouse/greenhouse, vertical farming, and custom hiring centers."
      },
      {
        question: "How can I apply for the NAIF Scheme?",
        answer: "The application involves preparing a project report (DPR), checking eligibility, and submitting your application through an authorized financial institution like NABARD or commercial banks."
      },
      {
        question: "What is the interest rate on NAIF loans?",
        answer: "NAIF offers an interest subvention of 3%, with an approximate ROI of 9% on loans."
      },
      {
        question: "Who can apply for the NAIF Scheme?",
        answer: "Eligibility includes FPOs, startups, MSMEs, private companies, and individual entrepreneurs in the agriculture sector."
      },
      {
        question: "How long does it take to get approval under the NAIF scheme?",
        answer: "Loan approval can take 2 to 6 weeks depending on the project complexity and lender's processing time."
      }
    ],
    
    conclusion: {
      paragraphs: [
        "The NAIF Scheme offers a fantastic opportunity for agricultural businesses, startups, and MSMEs to improve their infrastructure with affordable financing options.",
        "With an attractive loan amount of up to ₹2 Crore, 3% interest subvention, and 7-year repayment tenure, this scheme can help enhance the agricultural value chain and drive innovation in the sector.",
        "Whether you're setting up cold storage, warehouses, or processing units, NAIF is a great resource for securing funding. If you need expert help in applying for the NAIF scheme, our consultancy team is ready to assist you from preparing your DPR to coordinating with banks for faster approval."
      ],
      ctaTitle: "Need Assistance With NAIF Application?",
      ctaDescription: "Get expert help to prepare your DPR, validate eligibility, and coordinate with banks for faster approval."
    }
  },
  {
    slug: "pm-mudra-yojana",
    title: "PM MUDRA Yojana",
    subtitle: "Complete Guide to Eligibility, Benefits & Application",
    tags: ["MSME", "Business Loan", "Finance"],
    heroDescription: "Pradhan Mantri MUDRA Yojana provides collateral-free loans up to ₹10 lakh to micro enterprises for business growth and expansion.",
    heroStats: [
      { value: "₹10L", label: "Max Loan" },
      { value: "0%", label: "Collateral" },
      { value: "5 Years", label: "Repayment" },
      { value: "3 Types", label: "Shishu/Kishore/Tarun" }
    ],
    readTime: "7 min read",
    lastUpdated: "January 7, 2026",
    author: "Ewolyn Team",
    
    tableOfContents: [
      { id: "introduction", title: "Introduction" },
      { id: "what-is-mudra", title: "What is MUDRA?" },
      { id: "eligibility", title: "Eligibility" },
      { id: "loan-categories", title: "Loan Categories" },
      { id: "key-benefits", title: "Key Benefits" },
      { id: "application-process", title: "Application Process" },
      { id: "documents-required", title: "Documents Required" },
      { id: "common-mistakes", title: "Common Mistakes" },
      { id: "faqs", title: "FAQs" }
    ],
    
    introduction: {
      paragraphs: [
        "Pradhan Mantri MUDRA Yojana (PMMY) is a flagship scheme launched by the Government of India to provide loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises.",
        "The scheme aims to bring millions of small businesses into the formal financial system and help them grow with affordable credit.",
        "MUDRA loans are available from banks, NBFCs, and MFIs across India, making it one of the most accessible funding options for small entrepreneurs."
      ],
      quote: "MUDRA Yojana is transforming the lives of small entrepreneurs by providing easy access to credit without the need for collateral."
    },
    
    whatIs: {
      title: "What is MUDRA (Micro Units Development & Refinance Agency)?",
      paragraphs: [
        "MUDRA is a refinancing institution that provides funding support to banks, NBFCs, and MFIs for on-lending to micro enterprises.",
        "The scheme categorizes loans into three segments: Shishu (up to ₹50,000), Kishore (₹50,001 to ₹5 lakh), and Tarun (₹5 lakh to ₹10 lakh).",
        "These categories help address different stages of business growth and varying funding requirements of micro entrepreneurs."
      ]
    },
    
    eligibility: {
      intro: "MUDRA loans are available to a wide range of business owners:",
      entities: [
        {
          title: "Small Business Owners",
          description: "Proprietors of small shops, vendors, and service providers."
        },
        {
          title: "Manufacturers",
          description: "Small manufacturing units and artisans producing goods."
        },
        {
          title: "Service Providers",
          description: "Tailors, salons, repair shops, and other service businesses."
        },
        {
          title: "Traders",
          description: "Small traders and shopkeepers involved in retail business."
        },
        {
          title: "Allied Agriculture",
          description: "Activities like dairy, poultry, beekeeping, and fishery."
        }
      ],
      checklist: [
        "Must be an Indian citizen above 18 years of age.",
        "Should have a viable business plan for non-farm income generating activity.",
        "Business should not be involved in agricultural activities directly."
      ]
    },
    
    eligibleProjects: {
      intro: "MUDRA loans can be used for various business purposes:",
      projects: [
        {
          title: "Working Capital",
          description: "Day-to-day business expenses, inventory purchase, and operational costs.",
          icon: "💵"
        },
        {
          title: "Machinery Purchase",
          description: "Buying equipment and machinery for manufacturing or service delivery.",
          icon: "⚙️"
        },
        {
          title: "Business Expansion",
          description: "Opening new outlets, expanding production capacity, or diversifying services.",
          icon: "📈"
        },
        {
          title: "Transport Vehicles",
          description: "Purchase of vehicles for goods transportation or passenger services.",
          icon: "🚛"
        },
        {
          title: "Shop Renovation",
          description: "Upgrading business premises, interiors, and facilities.",
          icon: "🏪"
        },
        {
          title: "Technology Upgrade",
          description: "Investing in computers, software, and digital infrastructure.",
          icon: "💻"
        }
      ]
    },
    
    benefits: {
      highlights: [
        {
          value: "₹10L",
          label: "Max Loan Amount",
          description: "Get loans up to ₹10 lakh under the Tarun category for established businesses.",
          icon: "💰"
        },
        {
          value: "0%",
          label: "Collateral Required",
          description: "No collateral or third-party guarantee required for MUDRA loans.",
          icon: "🔓"
        }
      ],
      lendingInstitutions: [
        "Public Sector Banks (SBI, PNB, BOB, etc.)",
        "Private Sector Banks (HDFC, ICICI, Axis, etc.)",
        "Regional Rural Banks",
        "Microfinance Institutions (MFIs)",
        "NBFCs"
      ]
    },
    
    applicationProcess: {
      steps: [
        {
          title: "Choose the Right Category",
          description: "Select Shishu (up to ₹50K), Kishore (up to ₹5L), or Tarun (up to ₹10L) based on your funding needs.",
          cta: "Need help choosing? Contact us"
        },
        {
          title: "Prepare Business Plan",
          description: "Create a simple business plan outlining your business model, revenue projections, and fund utilization."
        },
        {
          title: "Visit Bank/NBFC",
          description: "Approach any scheduled bank, NBFC, or MFI with your documents and business plan."
        },
        {
          title: "Application Submission",
          description: "Fill the MUDRA loan application form and submit with required documents."
        },
        {
          title: "Loan Disbursement",
          description: "After verification and approval, loan amount is disbursed to your account."
        }
      ],
      timeline: "MUDRA loans are typically processed within 7-15 working days depending on the loan amount and lender."
    },
    
    documents: {
      list: [
        "Identity Proof (Aadhaar, PAN, Voter ID)",
        "Address Proof (Utility bills, Aadhaar)",
        "Passport Size Photographs",
        "Business Proof/Registration",
        "Bank Statements (6 months)",
        "Business Plan or Project Report",
        "Quotations for machinery (if applicable)"
      ],
      note: "Document requirements may vary slightly between lenders. We help you prepare a complete documentation package."
    },
    
    commonMistakes: [
      {
        title: "Unclear Business Purpose",
        description: "Not clearly defining how the loan will be used can lead to rejection."
      },
      {
        title: "Incomplete Documentation",
        description: "Missing documents or incorrect information causes delays and rejections."
      },
      {
        title: "Poor Credit History",
        description: "Existing defaults or poor CIBIL score can affect loan approval."
      },
      {
        title: "Unrealistic Projections",
        description: "Overstating revenue or understating expenses in the business plan."
      }
    ],
    
    faqs: [
      {
        question: "What is the interest rate on MUDRA loans?",
        answer: "Interest rates vary between 8-12% depending on the lender and loan category. There is no fixed rate mandated by the government."
      },
      {
        question: "Can I apply for MUDRA loan online?",
        answer: "Yes, you can apply through the Udyamimitra portal or directly visit a bank branch."
      },
      {
        question: "Is there any subsidy on MUDRA loans?",
        answer: "MUDRA loans don't have direct subsidies, but some state governments offer interest subvention schemes."
      },
      {
        question: "Can I get a MUDRA loan for agriculture?",
        answer: "Direct agriculture is not covered, but allied activities like dairy, poultry, and fishery are eligible."
      },
      {
        question: "What is the repayment period for MUDRA loans?",
        answer: "Repayment period ranges from 3 to 5 years depending on the loan amount and lender terms."
      },
      {
        question: "Can existing business owners apply?",
        answer: "Yes, both new and existing businesses can apply for MUDRA loans."
      }
    ],
    
    conclusion: {
      paragraphs: [
        "PM MUDRA Yojana has revolutionized access to credit for small entrepreneurs across India.",
        "With collateral-free loans up to ₹10 lakh, flexible repayment options, and wide availability through banks and NBFCs, MUDRA makes business funding accessible to everyone.",
        "Whether you're starting a new venture or expanding an existing business, MUDRA can provide the financial support you need."
      ],
      ctaTitle: "Need Assistance With MUDRA Application?",
      ctaDescription: "Get expert help to prepare your application, choose the right lender, and ensure quick approval."
    }
  }
];

export function getDetailedSchemeBySlug(slug: string): DetailedScheme | undefined {
  return detailedSchemes.find((scheme) => scheme.slug === slug);
}
