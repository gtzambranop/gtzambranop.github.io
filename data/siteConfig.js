module.exports = {
  siteTitle: 'Hi! I\'m Tatiana!',
  siteDescription: `Online curriculum.`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Tatiana Zambrano',
  twitterUsername: 'gtzambranop',
  githubUsername: 'gtzambranop',
  authorAvatar: '/images/avatar_01.PNG',
  authorDescription: `Developer, passionate about what I do, I am always experimenting, always learning and never bored.<br/>
  I love structure and order and I also stand for quality. I also like to work in a team, because that way you learn faster and much more, "Two heads are better than one!"`,
  skills: [
    {
      name: 'HTML/CSS',
      level: 90
    },
    {
      name: 'JavaScript',
      level: 95
    },
    {
      name: 'Java',
      level: 55
    },
    {
      name: 'Python',
      level: 80
    },
    {
      name: 'React',
      level: 75
    },
    {
      name: 'Nodejs',
      level: 85
    },
    {
      name: 'Django',
      level: 65
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Universidad Nacional de Colombia",
      begin: {
        month: 'jul',
        year: '2020'
      },
      duration: '6 months', //or null
      occupation: "Assistant Monitor",
      description: "I have learned to control the technical, theoretical and practical tools for data transformation, processing and analysis using the Python and R programming languages."
    },
  ],
  portfolio: [
    {
      image: "/images/ingenio_un.png",
      description: "Engineering Magazine",
      url: "https://ingeniofrontend.herokuapp.com/"
    },
    {
      image: "/images/cv_2020.png",
      description: "Visual computer programs",
      url: "https://cv-un-2020-ii.github.io/"
    },
    /* more portfolio items here */
  ],
  social: {
    twitter: "https://twitter.com/gtzambranop",
    linkedin: "https://www.linkedin.com/in/gtzambranop",
    github: "https://github.com/gtzambranop",
    email: "gtzp.6174@gmail.com"
  },
  siteUrl: 'https://gtzambranop.github.io/',
  pathPrefix: '', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/guiselle_icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Major Projects',
      url: '/portfolio',
    }
  ]
}