import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.pancakeswap.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.pancakeswap.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Referral",
    icon: "ReferralIcon",
    href: "/referral",
    status: status.SOON,
  },
  {
    label: "Future",
    icon: "FutureIcon",
    href: "/future",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    status: status.LIVE,
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://info.polydex.fi",
      },
      {
        label: "Tokens",
        href: "https://info.polydex.fi/tokens",
      },
      {
        label: "Pairs",
        href: "https://info.polydex.fi/pairs",
      },
      {
        label: "Accounts",
        href: "https://info.polydex.fi/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: 'Github',
        href: 'https://github.com/polydex-fi',
      },
      {
        label: 'Docs',
        href: 'https://docs.polydex.fi/',
      },
      {
        label: 'Blog',
        href: 'https://polydex.medium.com',
      },
      {
        label: 'Discord',
        href: 'https://discord.gg/WtksUPQSRm',
      },
    ],
  },
];

export const socials = [
  {
    label: "Coingecko",
    icon: "CoingeckoIcon",
    href: "https://geckoterminal.com/polygon_pos/pools/0xd876d019590b252463732f3153475d04d57ae13f",
  },
  {
    label: "Discord",
    icon: "DiscordIcon",
    href: "https://discord.gg/WtksUPQSRm",
  },
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "Announcements",
        href: "https://t.me/InterDeFiAnnouncement",
      },
      {
        label: "English",
        href: "https://t.me/InterDeFi",
      }
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/polydexfi",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
