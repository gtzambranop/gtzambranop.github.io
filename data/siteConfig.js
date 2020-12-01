module.exports = {
  siteTitle: 'Hi! I\'m Tatiana!',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Tatiana Zambrano',
  twitterUsername: 'GuiselleZP',
  githubUsername: 'gtzambranop',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: `Developer, passionate about what I do, I am always experimenting, always learning, and never bored. <br />
    I love structure and order and I also stand for quality. I also like to work in a team, because that way you learn faster
    and much more, "Two heads are better than one!" <br />
    My interests focus on computer science, problem solving, and artificial intelligence.`,
  skills: [
    {
      name: 'Python',
      level: 80
    },
    {
      name: 'R',
      level: 60
    },
    {
      name: 'C/C++',
      level: 70
    },
    {
      name: 'Java',
      level: 40
    },
    {
      name: 'Javascript',
      level: 60
    },
    {
      name: 'Bash',
      level: 70
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Universidad Nacional de Colombia",
      begin: {
        month: 'oct',
        year: '2020'
      },
      duration: null,
      occupation: "Programming assistant student",
      description: "Currently I am in charge of supporting the students of the diploma in data science, in their learning process in the programming area (in R and Python languages)."

    },
    {
      company: "Universidad Nacional de Colombia",
      begin: {
        month: 'nov',
        year: '2019'
      },
      duration: '1 month',
      occupation: "Programming assistant student",
      description: "I gave advice in the area of programming, in a basic Python course oriented to data processing."

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
    twitter: "https://twitter.com/GuiselleZP",
    linkedin: "https://www.linkedin.com/in/gtzambranop",
    github: "https://github.com/gtzambranop",
    email: "gtzambranop@unal.edu.co"
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