import Pizza from "./pizza.png";
import Form from "./form.png";
import Personal from "./personal.png";
export const localData = {
  en: {
    currentLanguage: 'en',
    nav: {
      skills: "Skills",
      projects: "Projects",
      hireMe: "Hire me",
      darkMode: "DARK MODE",
      langSwitch: "TÜRKÇE'YE GEÇ"
    },
    hero: {
      name: "Hamza Bilici",
      title: "Creative thinker Minimalism lover",
      description: "Hi, I’m Hamza. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.",
      buttons: {
        hire: "Hire me",
        github: "Github",
        linkedin: "Linkedin"
      }
    },
    skills: {
      title: "Skills",
      list: [
        {
          name: "Java Script",
          desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          name: "React.Js",
          desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          name: "Node.Js",
          desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    },
    profile: {
      title: "Profile",
      basicInfo: {
        title: "Profile",
        info: [
          { label: "Birth Date", value: "18.04.1998" },
          { label: "City", value: "Istanbul" },
          { label: "Education", value: "Sakarya Ünv. Computer Science" },
           { label: "", value: "License, 2020" },
          { label: "Preferred Role", value: "Frontend, UI" }
        ]
      },
      aboutMe: {
        title: "About Me",
        p1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        p2: "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
      }
    },
    projects: {
      title: "Projects",
      list: [
        {
          id: 1,
          title: "Pizza Challenge",
          desc: "Pixel perfect design challage acording to figma design",
          tags: ["react", "html", "css"],
          links: {
            repo: "https://github.com/HamzaBilici/pizza-html",
            view: "https://pizza-html-nu.vercel.app/"
          },
          image: Pizza
        },
        {
          id: 2,
          title: "React Form",
          desc: "In the project developed with a React-based SPA architecture; dynamic form management, page transitions with React Router, and end-to-end testing processes with Cypress have been implemented.",
          tags: ["react",  "axios","cypress"],
          links: {
            repo: "https://github.com/HamzaBilici/s8-challange",
            view: "https://s8-challange.vercel.app/"
          },
          image: Form
        },
        {
          id: 3,
          title: "Personel Website",
          desc: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "axios"],
          links: {
            repo: "https://github.com/HamzaBilici/personal-website",
            view: "https://personal-website-3iav.vercel.app/"
          },
          image: Personal
        }
      ]
    },
    footer: {
      title: "Let’s work together on your next product.",
      email: "hamzablc98@gmail.com",
      links: [
        { name: "Personal Blog", url: "https://personal-website-3iav.vercel.app/" },
        { name: "Github", url: "https://github.com/HamzaBilici" },
        { name: "Linkedin", url: "https://www.linkedin.com/feed/" }
      ]
    }
  },
  tr: {
    currentLanguage: 'tr',
    nav: {
      skills: "Yetenekler",
      projects: "Projeler",
      hireMe: "Beni İşe Al",
      darkMode: "KOYU MOD",
      langSwitch: "SWITCH TO ENGLISH"
    },
    hero: {
      name: "Hamza Bilici",
      title: "Yaratıcı düşünür Minimalizm aşığı",
      description: "Merhaba, ben Hamza. Full-stack geliştiriciyim. Harika kullanıcı deneyimlerine sahip, sağlam ve ölçeklenebilir frontend ürünleri hazırlayacak bir Geliştirici arıyorsanız, haydi tanışalım.",
      buttons: {
        hire: "Beni İşe Al",
        github: "Github",
        linkedin: "Linkedin"
      }
    },
    skills: {
      title: "Yetenekler",
      list: [
        {
          name: "Java Script",
          desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          name: "React.Js",
          desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          name: "Node.Js",
          desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    },
    profile: {
      title: "Profil",
      basicInfo: {
        title: "Profil",
        info: [
          { label: "Doğum Tarihi", value: "18.04.1998" },
          { label: "İkamet Şehri", value: "İstanbul" },
          { label: "Eğitim Durumu", value: "Hacettepe Ünv. Bilgisayar Müh." },
          { label: "", value: "Lisans, 2020" },
          { label: "Tercih Ettiği Rol", value: "Frontend, UI" }
        ]
      },
      aboutMe: {
        title: "Hakkımda",
        p1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        p2: "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
      }
    },
    projects: {
      title: "Projeler",
      list: [
        {
          id: 1,
          title: "Pizza Challenge",
          desc: "Figma tasarımına bağlı kalacak şekilde pixel-perfect tasarım projesi",
          tags: ["react", "html", "css"],
          links: {
            repo: "https://github.com/HamzaBilici/pizza-html",
            view: "https://pizza-html-nu.vercel.app/"
          },
          image: Pizza
        },
        {
          id: 2,
          title: "React Form",
          desc: "React tabanlı SPA mimarisiyle hazırlanan projede; dinamik form yönetimi, React Router ile sayfa geçişleri ve Cypress ile uçtan uca test süreçleri uygulanmıştır",
          tags: ["react",  "axios","cypress"],
          links: {
            repo: "https://github.com/HamzaBilici/s8-challange",
            view: "https://s8-challange.vercel.app/"
          },
          image: Form
        },
        {
          id: 3,
          title: "Journey",
          desc: "Kullanıcılarınızın hangi çerezleri kabul edip etmeyeceğini seçmelerine olanak tanıyan basit, özelleştirilebilir, minimal kurulumlu bir çerez eklentisi. Vanilla JS, SCSS ve Parcel Bundler ile oluşturuldu.",
          tags: ["react", "redux", "axios"],
          links: {
            repo: "https://github.com/HamzaBilici/personal-website",
            view: "https://personal-website-3iav.vercel.app/"
          },
          image: Personal
        }
      ]
    },
    footer: {
      title: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
      email: "hamzablc98@gmail.com",
      links: [
        { name: "Kişisel Blog", url: "https://personal-website-3iav.vercel.app/" },
        { name: "Github", url: "https://github.com/HamzaBilici" },
        { name: "Linkedin", url: "https://www.linkedin.com/feed/" }
      ]
    }
  }
};