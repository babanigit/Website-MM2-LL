export interface ISectionData {
  iconSrc: string;
  title: string;
  description: string;
  altText?: string;
}

export const sectionDataSwitcher: ISectionData[] = [
  {
    iconSrc: 'https://i.marketsmojo.com/mojoprofessional/verdict-icon1_new.png',
    altText: 'verdict-icon1_new.png',
    title: 'Input- Stock You Hold',
    description:
      'Put your stock name along with quantity (optional) you hold and run SwitchER report',
  },
  {
    iconSrc: 'https://i.marketsmojo.com/switcher/sw-icon3_new.png',
    altText: 'sw-icon3_new.png',
    title: 'More Options',
    description:
      'We also give you 2 more options and their reports are also available for your view',
  },
  {
    iconSrc: 'https://i.marketsmojo.com/switcher/sw-icon2_new.png',
    altText: 'sw-icon2_new.png',
    title: 'SwitchER',
    description:
      'The option to switch to the mojo reco stock is covered in the SwitchER report',
  },
  {
    iconSrc: 'https://i.marketsmojo.com/mojoprofessional/verdict-icon3_new.png',
    altText: 'verdict-icon3_new.png',
    title: 'Download OR Email',
    description:
      'You can download and also email yourself all reports for your final decision making',
  },
];

export const sectionDataVerdict: ISectionData[] = [
  {
    iconSrc: 'https://i.marketsmojo.com/mojoprofessional/verdict-icon1_new.png',
    altText: 'verdict-icon1_new.png',
    title: 'Simply input your stock -',
    description:
      'Check for stock advice, how much to buy/sell/hold, what quantity, better stocks and detailed research which updates real time',
  },
  {
    iconSrc: 'https://i.marketsmojo.com/mojoprofessional/verdict-icon2_new.png',
    altText: 'verdict-icon2_new.png',
    title: 'Save the stock that interests you -',
    description:
      'Save it in watchlist to track or simply add it to your portfolio if you holding that stock',
  },
  {
    iconSrc: 'https://i.marketsmojo.com/mojoprofessional/verdict-icon3_new.png',
    altText: 'verdict-icon3_new.png',
    title: 'Download the report -',
    description:
      'If you want a detailed read you can either download the full report or see it online, your choice',
  },
  {
    iconSrc: 'https://i.marketsmojo.com/mojoprofessional/verdict-icon4_new.png',
    altText: 'verdict-icon4_new.png',
    title: 'Automated alerts -',
    description:
      'Once you have added the stock to your watchlist or portfolio, we will be sending you alerts on all saved stocks',
  },
];
