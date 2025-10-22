// Central profile content. Replace placeholders with details from your resume.
export const profile = {
  name: 'Devanand A',
  title: 'Aspiring AI/ML Engineer',
  summary:
    'A passionate AI and Machine Learning student who loves exploring how technology can solve real-world problems. I enjoy learning new concepts, experimenting with data, and building intelligent systems that create a positive impact. For me, every project is an opportunity to grow, innovate, and turn ideas into meaningful solutions.',
  education: [
    {
      degree: '[Your Degree — e.g., B.E./B.Tech in AI & DS]',
      college: '[Your College/University]',
      year: '[Year — e.g., 2026]'
    }
  ],
  contact: {
    linkedin: 'https://www.linkedin.com/in/your-handle',
    github: 'https://github.com/your-username',
    email: 'you@example.com',
    phone: '+91-XXXXXXXXXX',
  },
  skills: {
    Programming: ['Python', 'JavaScript'],
    'ML/DL': ['Machine Learning', 'Deep Learning', 'Time‑series Modeling', 'Computer Vision'],
    NLP: ['Text Preprocessing', 'Sentiment Analysis', 'Clustering', 'Feature Engineering'],
    Libraries: ['NumPy', 'Pandas', 'scikit‑learn', 'OpenCV', 'Matplotlib', 'Seaborn'],
    Web_Backend: ['Flask', 'REST APIs'],
    Databases: ['MongoDB'],
    Frontend: ['React', 'TailwindCSS', 'Vite'],
    Geospatial: ['Remote Sensing Indices (NDWI, NDCI, FAI, MCI)', 'Satellite Imagery Basics'],
    Tools: ['Git', 'GitHub', 'VS Code']
  },
  projects: [
    {
      title: 'Project NEER — AI-Powered Lake Health Monitoring System',
      desc: 'End-to-end geospatial AI system to assess Coimbatore lake health with satellite indices and predictive modeling.',
      tech: ['Python', 'Geospatial', 'Time-series Models', 'Satellite Imagery', 'Visualization'],
      year: 'Ongoing',
      details: [
        'Designed an end-to-end geospatial AI system to assess water health of Coimbatore lakes using satellite data (NDWI, NDCI, FAI, MCI, turbidity, thermal).',
        'Built time-series regression models to predict BOD, DO, and COD; classified pollution causes and suggested improvement strategies.',
        'Visualized results on interactive maps with dynamic filters.'
      ],
      link: ''
    },
    {
      title: 'Fake Review Detector',
      desc: 'NLP-powered system to detect and highlight fake product reviews using classical ML.',
      tech: ['Python', 'Scikit-learn', 'NLP', 'Flask', 'MongoDB'],
      year: '2024',
      details: [
        'Developed a system using Natural Language Processing to identify and highlight fake product reviews.',
        'Implemented review clustering and sentiment analysis.'
      ],
      link: ''
    },
    {
      title: 'Smart Meal Planner',
      desc: 'Budget-based planner that helps college students select meals from preferred hotels within a weekly budget.',
      tech: ['Python', 'Flask', 'MongoDB', 'JavaScript'],
      year: '2024',
      details: [
        'Created a budget-based meal planner to help college students select meals from preferred hotels under a weekly budget.',
        'Integrated with MongoDB and custom APIs.'
      ],
      link: ''
    }
  ]
}
