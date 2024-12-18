// export const email = "sowmya2003@gmail.com";
// export const btn = "Copy"
// export const button = "Cv"
// export const leftsideItems = [
//     {
//         name:"copy",
//         href:"",
//         content:"sowmya2003@gmail.com",
//     },
//     {
//         name:"cv",
//         href:"",
//         content:"",
//     }
// ]

// export const rightsideItems = [
//     {
//         id:1,
//         name:"LinkedIn",
//         href:"https://in.linkedin.com/",
//     },
//     {
//         id:2,
//         name:"Dribbble",
//         href:"https://in.linkedin.com/",
//     },
//     {
//         id:3,
//         name:"Instagram",
//         href:"https://in.linkedin.com/",
//     }
// ]

export const totalNavBar = [
  {
    name: "copy",
    href: "",
    side: "left",
    content: "sowmya2003@gmail.com",
  },
  {
    name: "cv",
    href: "",
    content: "",
    side: "left",
  },
  {
    name: "LinkedIn",
    href: "https://in.linkedin.com/",
    side: "right",
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com/",
    side: "right",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/",
    side: "right",
  },
];

export const navBarMenus = () => {
  let leftMenus: Array<NavMenuType> = [];
  let rightMenus: Array<NavMenuType> = [];

  totalNavBar.map((item) => {
    if (item.side === "left") {
      leftMenus.push(item);
    } else {
      rightMenus.push(item);
    }
  });

  let navMenus = {
    left: [...leftMenus],
    right: [...rightMenus],
  };

  return navMenus;
};
