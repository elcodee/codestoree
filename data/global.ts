type Route = {
  title: string,
  path: string
}

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
}

type Footer = {
  columns: FooterCol[]
  support: {
    buymeacoffee: string
    paypal: string
    message: string
  }
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Netflix",
    path: "/buy/netflix",
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
  // {
  //   title: "Projects",
  //   path: "/projects",
  // },
  // {
  //   title: "Designs",
  //   path: "/designs",
  // },
];


export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        // {
        //   name: "Netflix",
        //   link: "/buy/netflix",
        //   leavesWebsite: false,
        // },
        // {
        //   name: "Blog",
        //   link: "/blog",
        //   leavesWebsite: false,
        // },
        // {
        //   name: "Projects",
        //   link: "/projects",
        //   leavesWebsite: false,
        // },
        // {
        //   name: "Designs",
        //   link: "/designs",
        //   leavesWebsite: false,
        // },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "WhatsApp",
          link: "https://wa.me/6285156187157",
          icon: "/static/icons/dribbble-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com/codeestoree/",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Facebook Page",
          link: "https://www.facebook.com/people/Code-Store/100068757711169/",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        }
      ],
    },
  ],
  support: {
    buymeacoffee: "braydenw",
    paypal: "braydentw",
    message: "Terima Kasih Atas Reviewnya !",
  },
};
