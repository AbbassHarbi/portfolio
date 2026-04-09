export const portfolioData = {
  hero: {
    name: "Abbass Harbi",
    title: "Cybersecurity Specialist & SOC Engineer",
    short_description: "Cybersecurity specialist with a solid foundation in network defense, threat intelligence, and SOC engineering. Committed to furthering knowledge in offensive and defensive security.",
    cta_buttons: [
      { label: "View Projects", action_type: "scroll", target: "#projects" },
      { label: "Contact Me", action_type: "scroll", target: "#contact" }
    ]
  },
  about: {
    summary: "Cybersecurity specialist with a solid foundation in network defense, threat intelligence, and SOC engineering, including professional experience in security operations. Certified in CompTIA Security+ (awarded by ITU) and currently advancing expertise through the Certified Cybersecurity Technician (CCT) program. Honored to be selected from thousands of applicants worldwide for the CCT Scholarship program. Committed to furthering knowledge in offensive and defensive security through academic and practical applications.",
    highlights: [
      "BACHELOR OF SCIENCE IN COMPUTER SCIENCE — Lebanese University (Equivalent GPA: 3.6/4.0 | EQF level 6)",
      "Focus Areas: Computer Networks, Operating Systems, Data Structures & Algorithms",
      "Language Skills: Arabic (Native), English (B2 Proficient User)"
    ],
    download_cv: "/Abbass_Harbi_Resume.pdf"
  },
  skills: {
    categories: [
      {
        category_name: "Security Operations & Analysis",
        items: [
          "SOC Operations", "Threat Detection", "Threat Hunting", "Incident Response", 
          "Vulnerability Assessment", "Security Monitoring", "Attack Surface Analysis", 
          "Log Analysis", "MITRE ATT&CK", "SIEM", "Security Event Investigation"
        ]
      },
      {
        category_name: "Security Technologies & Tools",
        items: [
          "EDR", "XDR", "Intrusion Detection Systems (IDS)", "Intrusion Prevention Systems (IPS)"
        ]
      },
      {
        category_name: "IT Skills & Infrastructure",
        items: [
          "Linux", "Windows", "Virtualization Technologies", "Operating Systems", 
          "Networking", "Security Automation"
        ]
      },
      {
        category_name: "Programming Languages",
        items: [
          "Python", "Bash Scripting", "JavaScript", "Flutter", "Dart", "C", "C++", 
          "C#", "Solidity", "React", "JSON", "Java"
        ]
      },
      {
        category_name: "Analytical & Soft Skills",
        items: [
          "Analytical Thinking", "Problem Solving", "Teaching / Knowledge Sharing", "Team Collaboration"
        ]
      }
    ]
  },
  projects: {
    items: [
      {
        title: "Cybran Aether – AI-Driven SOC Log Enrichment & Analysis Platform",
        type: "engineering_project",
        description: "Engineered an AI-driven modular SOC platform integrating log collection, enrichment, and triage automation.",
        problem: "",
        solution: "Deployed and configured a Dockerized Suricata IDS with optimized YAML rulesets and automated community rule updates for real-time threat detection. Built a Python-based collector service to continuously ingest and normalize Suricata EVE JSON logs into structured dictionaries. Integrated AlienVault OTX API for automated enrichment of network observables with global threat intelligence data. Designed a rule-based triage mechanism to classify and prioritize alerts, improving detection accuracy and analyst efficiency. Implemented an LLM-powered analytic layer to provide contextual understanding and automated threat reasoning for enriched logs. Developed the Elasticsearch integration layer to store, query, and visualize enriched data for largescale analysis and dashboards.",
        technologies: [
          "Python", "Suricata", "Docker", "AlienVault OTX API", "Elasticsearch", 
          "JSON", "Linux", "AI-driven automation", "Threat Intelligence", "SOC Engineering"
        ],
        skills: ["SOC Engineering", "Threat Intelligence", "Log Enrichment"],
        mitre_mapping: [],
        links: {}
      }
    ]
  },
  labs: {
    items: [
      {
        title: "Bitwise Club – Cybersecurity Project Contributor",
        type: "lab",
        description: "Developed two hands-on cybersecurity projects to enhance community awareness and skills: Built a phishing website for security awareness training and penetration testing. Designed a honeypot with detailed logging to analyze attack methods and improve threat intelligence.",
        technologies: ["Honeypot Deployment", "Phishing Simulation", "Logging"],
        links: {}
      },
      {
        title: "Code with Sara – Cybersecurity Educator",
        type: "lab",
        description: "Delivered educational sessions to introduce cybersecurity concepts. Taught participants how to create an AI-based phishing email detector and led a workshop on fundamental cybersecurity principles for beginners.",
        technologies: ["AI Detection", "Instructional Leadership", "Phishing Detection"],
        links: {}
      },
      {
        title: "Department of College of Science – Cybersecurity Event Organizer",
        type: "lab",
        description: "Organized and delivered a physical cybersecurity event featuring cryptography challenges and puzzles to engage participants in problem-solving. Deployed a simulated compromised website to demonstrate real-world cyber risks and defense strategies.",
        technologies: ["Cryptography", "Web Defense", "Simulations"],
        links: {}
      }
    ]
  },
  experience: [
    {
      role: "MSOC INTERN",
      company: "ATRIA SOLUTIONS",
      duration: "14/09/2025 – 12/01/2026 (BEIRUT, LEBANON)",
      description_points: [
        "Contributed to SOC automation and security monitoring, adopting new tools and frameworks to enhance detection and response workflows.",
        "Developed and deployed a custom Suricata image to standardize alert generation across multiple SOC agents, improving detection consistency.",
        "Integrated Wazuh monitoring agents for real-time event forwarding and centralized security visibility.",
        "Designed a dynamic entrypoint script to auto-detect networks and interfaces, reducing manual configuration time.",
        "Built a centralized alert parsing system, aggregating logs from all endpoints into a unified database for improved monitoring and incident response.",
        "Streamlined SOC agent onboarding, enabling plug-and-play integration for faster deployment.",
        "Deployed multiple honeypots using the T-POT platform to strengthen threat visibility and support attack surface analysis."
      ],
      tools: ["Suricata", "Wazuh", "T-POT", "SOC Automation", "Log Analysis"]
    },
    {
      role: "FOUNDER AND MENTOR",
      company: "CYBRAN CYBERSECURITY COMMUNITY",
      duration: "04/01/2025 – Current (SARAFAND, LEBANON)",
      description_points: [
        "Founded and lead a global cybersecurity community of 400+ members, promoting knowledge sharing and hands-on learning.",
        "Designed and delivered workshops, webinars, and practical exercises on phishing detection, network defense, and AI driven security simulations.",
        "Mentored members through real-world projects and challenges, building skills in both offensive and defensive cybersecurity techniques."
      ],
      tools: ["Mentorship", "Community Management", "Training Delivery"]
    },
    {
      role: "INDEPENDENT CYBERSECURITY INSTRUCTOR",
      company: "SELF-EMPLOYED",
      duration: "14/03/2025 – Current (SARAFAND, LEBANON)",
      description_points: [
        "Developed and delivered a comprehensive cybersecurity course covering network defense, threat detection, and practical security tools.",
        "Conducted hands-on exercises, including deploying honeypots and analyzing phishing attacks, to reinforce applied learning.",
        "Prepared instructional materials and assessments to strengthen participants’ understanding of core cybersecurity concepts."
      ],
      tools: ["Curriculum Development", "Honeypots", "Phishing Analysis"]
    }
  ],
  certifications: [
    {
      name: "CompTIA Security+ (SY0-701)",
      issuer: "International Telecommunication Union (ITU)",
      status: "completed"
    },
    {
      name: "CCT Scholarship Selection",
      issuer: "EC-Council",
      status: "in_progress"
    }
  ],
  soc_methodology: {
    title: "Security Approach",
    steps: [
      "Log Collection & Ingestion",
      "Data Normalization & Enrichment",
      "Automated Alert Generation",
      "Threat Intel Contextualization",
      "Triage & Incident Response"
    ]
  },
  contact: {
    email: "abbassharbi14@gmail.com",
    phone: "(+961) 81511474",
    links: {
      linkedin: "https://www.linkedin.com/in/abbass-harbi",
      github: "",
      x: "https://x.com/Abbass__Harbi",
      whatsapp: "https://wa.me/96181511474"
    },
    contact_form: {
      enabled: true,
      fields: ["name", "email", "message"]
    }
  }
};
