// Interface for each item in the sub-array
export interface ISearchData2Switcher {
  Id: number;
  Company: string;
  ScriptCode: number | string;
  Symbol: string;
  url: string;
  price: number | null;
  ExchangeName: string;
  sname: string;
  tag: string;
  stockprice: string;
  chg: string;
  chgp: string;
  chgdir: number | string;
  score: number | string;
  scoretext: string;
  stock_traded_status: string;
  show_score: number;
  recurl: string;
}

export const searchData2Switcher: ISearchData2Switcher[] = [
  {
    Id: 592009,
    Company: '<b>HDFC</b> Bank Ltd.',
    ScriptCode: 500180,
    Symbol: 'HDFCBANK',
    url: 'https://www.marketsmojo.com/stocks-analysis/hdfc-bank-592009-0',
    price: null,
    ExchangeName: 'bse',
    sname: 'HDFC Bank',
    tag: 'Stock',
    stockprice: '1619.45',
    chg: '14.75',
    chgp: '0.92',
    chgdir: 1,
    score: 88,
    scoretext: 'Strong Buy',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 592009,
    Company: '<b>HDFC</b> Bank Ltd.',
    ScriptCode: 500180,
    Symbol: 'HDFCBANK',
    url: 'https://www.marketsmojo.com/news/hdfc-bank-ltd-592009',
    price: null,
    ExchangeName: 'bse',
    sname: 'HDFC Bank',
    tag: 'News',
    stockprice: '1619.45',
    chg: '14.75',
    chgp: '0.92',
    chgdir: 1,
    score: 88,
    scoretext: 'Strong Buy',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 1002872,
    Company: '<b>HDFC</b> Life Insurance Company Ltd',
    ScriptCode: 540777,
    Symbol: 'HDFCLIFE',
    url: 'https://www.marketsmojo.com/stocks-analysis/hdfc-life-insurance-company-1002872-0',
    price: null,
    ExchangeName: 'bse',
    sname: 'HDFC Life Insur.',
    tag: 'Stock',
    stockprice: '680.30',
    chg: '7.65',
    chgp: '1.14',
    chgdir: 1,
    score: 48,
    scoretext: 'Sell',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 1002872,
    Company: '<b>HDFC</b> Life Insurance Company Ltd',
    ScriptCode: 540777,
    Symbol: 'HDFCLIFE',
    url: 'https://www.marketsmojo.com/news/hdfc-life-insurance-company-ltd-1002872',
    price: null,
    ExchangeName: 'bse',
    sname: 'HDFC Life Insur.',
    tag: 'News',
    stockprice: '680.30',
    chg: '7.65',
    chgp: '1.14',
    chgdir: 1,
    score: 48,
    scoretext: 'Sell',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 1003028,
    Company: '<b>HDFC</b> Asset Management Company Ltd',
    ScriptCode: '541729',
    Symbol: 'HDFCAMC',
    url: 'https://www.marketsmojo.com/stocks-analysis/hdfc-asset-management-company-1003028-0',
    price: null,
    ExchangeName: 'bse',
    sname: 'HDFC AMC',
    tag: 'Stock',
    stockprice: '4046.30',
    chg: '-10.70',
    chgp: '-0.26',
    chgdir: -1,
    score: 77,
    scoretext: 'Buy',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 1003028,
    Company: '<b>HDFC</b> Asset Management Company Ltd',
    ScriptCode: '541729',
    Symbol: 'HDFCAMC',
    url: 'https://www.marketsmojo.com/news/hdfc-asset-management-company-ltd-1003028',
    price: null,
    ExchangeName: 'bse',
    sname: 'HDFC AMC',
    tag: 'News',
    stockprice: '4046.30',
    chg: '-10.70',
    chgp: '-0.26',
    chgdir: -1,
    score: 77,
    scoretext: 'Buy',
    stock_traded_status: 'Active',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 741664,
    Company: 'Housing Development Finance CorporationLtd(Merged) - <b>HDFC</b>',
    ScriptCode: 500010,
    Symbol: 'HDFC',
    url: 'https://www.marketsmojo.com/stocks-analysis/housing-development-finance-corporationltdmerged-741664-0',
    price: null,
    ExchangeName: 'bse',
    sname: 'H D F C',
    tag: 'Stock',
    stockprice: '',
    chg: '',
    chgp: '',
    chgdir: '',
    score: '',
    scoretext: '',
    stock_traded_status: 'Not Traded',
    show_score: 1,
    recurl: '',
  },
  {
    Id: 741664,
    Company: 'Housing Development Finance CorporationLtd(Merged) - <b>HDFC</b>',
    ScriptCode: 500010,
    Symbol: 'HDFC',
    url: 'https://www.marketsmojo.com/news/housing-development-finance-corporationltd-merged--741664',
    price: null,
    ExchangeName: 'bse',
    sname: 'H D F C',
    tag: 'News',
    stockprice: '',
    chg: '',
    chgp: '',
    chgdir: '',
    score: '',
    scoretext: '',
    stock_traded_status: 'Not Traded',
    show_score: 1,
    recurl: '',
  },
];
