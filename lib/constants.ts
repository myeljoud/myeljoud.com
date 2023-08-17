import ChinguittyLogo from "@/public/_static/logos/chinguitty-aluminuim-logo-reversed.svg";
import NextLogo from "@/public/_static/logos/next-technology-logo-reversed.svg";
import SelletyLogo from "@/public/_static/logos/sellety-logo-reversed.svg";

export const HOME_DOMAIN =
  process.env.NODE_ENV === "production" ? "https://myeljoud.com" : "http://localhost:3000";

export const FAVICON_FOLDER = "/_static/favicons";

export const REFERENCES = [
  {
    alt: "Next Technology logo reversed",
    src: NextLogo,
    title: "Next Technology logo reversed",
    href: "https://next.mr",
  },
  {
    alt: "sellety.com logo reversed",
    src: SelletyLogo,
    title: "sellety.com logo reversed",
    href: "https://sellety.com",
  },
  {
    alt: "Chinguitty Aluminuim logo reversed",
    src: ChinguittyLogo,
    title: "Chinguitty Aluminuim logo reversed",
    href: "https://chinguittyaluminium.com",
  },
];
