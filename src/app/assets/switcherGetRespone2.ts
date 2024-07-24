interface PriceInfo {
  cmp: number;
  open_price: number;
  day_low: number;
  day_high: number;
  '52wk_low_dt': string;
  '52wk_high_dt': string;
  altm_low: number;
  altm_high: number;
  altm_low_dt: string;
  altm_high_dt: string;
  vol_msg: string;
  mcap_class: string;
  bid_price: number;
  bid_qty: number;
  offer_price: number;
  offer_qty: number;
  no_of_shares: number;
  div_yeild: number;
  net_profit: number;
  pe_ratio: number;
  ind_pe_ratio: string;
  deb_equity: string | number;
  price_to_book: number;
  net_npa_perc: number | string;
  gross_npa_perc: number | string;
  p_adj_bv: string;
  ind_p_adj_bv: string;
  stock_status: string;
  dt: string;
  vol: number;
  mcap: number;
  roe: string | number;
  car: string | number;
  roa: string | number;
  net_sale: number;
  sector_chgp: number;
  index_label: string;
  '5D_avg_vol': number;
  vol_chgp: number;
  mcap_grade: string;
  is_traded: number;
  val_trd: number;
  wk_high52: number;
  wk_low52: number;
}

interface CoverSummaryItem {
  big_txt: string;
  small_txt: string;
}

interface CoverPageData {
  cover_headline: string;
  cover_summary: CoverSummaryItem[];
}

interface StockDetails {
  sid: number;
  sname: string;
  short_name: string;
  scripcode: number;
  symbol: string;
  isin: string;
  status: string;
  ind_code: number;
  ind_name: string;
  sublisting: string;
  alias: string;
  fincode: number;
  fv: number;
  header_msg: string;
  mcap_type: number;
  inc_mnth: string;
  inc_yr: string;
  is_seasonal: number;
  acc_ind_code: number;
  acc_ind_name: string;
  hse_code: number;
  amfi_mcapsizerank: string;
  jan31_high_2018: {
    bse: number;
    nse: number;
  };
  updated_at: string;
  nsedt: string;
  bsedt: string;
}

interface PriceVerdict {
  price_info: PriceInfo;
  cover_page_data: CoverPageData;
  score_text: string;
  cover_clr: string;
  stock_details: StockDetails;
  link: any; // You can define this more specifically if possible
  exch: number;
}

interface OptionDetails {
  sid: number;
  scoreText: string;
  score: number;
  heading?: string;
  type: 's' | 'm' | 'a';
  short_name: string;
  dw_url: string;
}

interface OtherChoice {
  [key: string]: OptionDetails;
}

interface Option {
  txt: string;
  val: string;
  valsid: number;
  details: OptionDetails;
  short_name: string;
  type: 's' | 'm' | 'a';
  other_choice: OtherChoice;
  dw_url: string;
}

interface Question {
  q: string;
  opt: Option[];
}

interface SectType {
  id: number;
  name: string;
  reason: string;
}

// Interface for the stock properties
interface Stock {
  clr: string;
  scoreText: string;
  sname: string;
  shares: string;
  txt: string[];
}

// Interface for the stocklist object
interface StockList {
  [key: string]: Stock; // Index signature for dynamic keys (stock IDs)
}

interface Data {
  block_page: number;
  remaining_views: number;
  total_views: number;
  ispaid: number;
  islogin: boolean;
  sect_type: SectType;

  stockids?: [string, string];
  stockList?: StockList | undefined;
  StockList?: StockList | undefined;
  stocklist?: StockList | undefined;

  sname: string;
  qty: string;
  mcap: number;
  mcapclass: string;
  ind_name: string;
  mcaptype: number;
  ind_code: number;
  verdict?: PriceVerdict; // This is optional since not all data entries have it
  ques?: {
    list: Question[];
    show: number;
    switch_chng: number;
    switch_msg: string;
  };
  show_fallstock: 'yes' | 'no';
}

export interface ISwitcherResponse2 {
  code: string;
  message: string;
  data: Data;
}

export const switcherGetRespone2: ISwitcherResponse2[] = [
  // hdfc normal verdict report
  {
    code: '200',
    message: 'Success',
    data: {
      block_page: 0,
      remaining_views: 0,
      total_views: 0,
      ispaid: 1,
      islogin: true,
      sect_type: {
        id: 2,
        name: 'verdict',
        reason: 'buy and strong buy',
      },
      sname: 'HDFC Bank',
      qty: '',
      mcap: 1230081,
      mcapclass: 'Large Cap',
      ind_name: 'Private Banks',
      mcaptype: 1,
      ind_code: 50,
      verdict: {
        price_info: {
          cmp: 1606.6,
          open_price: 1618.5,
          day_low: 1603.15,
          day_high: 1623.6,
          '52wk_low_dt': '2024-02-14',
          '52wk_high_dt': '2024-07-03',
          altm_low: 3.23,
          altm_high: 1791.9,
          altm_low_dt: '1996-04-11',
          altm_high_dt: '2024-07-03',
          vol_msg: 'Compared to 5 day average volume of 1.78 cr at 15:25 PM',
          mcap_class: 'Large Cap',
          bid_price: 1604.05,
          bid_qty: 456,
          offer_price: 1606.6,
          offer_qty: 11,
          no_of_shares: 7608122302,
          div_yeild: 1.21,
          net_profit: 0,
          pe_ratio: 20.2,
          ind_pe_ratio: '19.4',
          deb_equity: '',
          price_to_book: 2.81,
          net_npa_perc: 0.33,
          gross_npa_perc: 1.12,
          p_adj_bv: '2.81',
          ind_p_adj_bv: '2.77',
          stock_status: 'Active',
          dt: '2024-07-19 15:31:00',
          vol: 672092,
          mcap: 1230081,
          roe: '',
          car: 16.8,
          roa: 1.68,
          net_sale: 0,
          sector_chgp: -0.65,
          index_label: 'SENSEX',
          '5D_avg_vol': 17765298,
          vol_chgp: -30.34,
          mcap_grade: '1',
          is_traded: 1,
          val_trd: 1084336430.5,
          wk_high52: 1791.9,
          wk_low52: 1363.45,
        },
        cover_page_data: {
          cover_headline: 'Strong </br>Long Term Fundamentals ',
          cover_summary: [
            {
              big_txt: 'Very Positive',
              small_txt: 'Results in Mar 24',
            },
            {
              big_txt: 'Mildly Bullish',
              small_txt: 'Technical Trend',
            },
            {
              big_txt: 'Fair',
              small_txt: 'Valuation',
            },
            {
              big_txt: ' High (82.65%)',
              small_txt: 'Institutional Holding',
            },
          ],
        },
        score_text: 'strong buy',
        cover_clr: 'coverhead-green',
        stock_details: {
          sid: 592009,
          sname: 'HDFC Bank Ltd.',
          short_name: 'HDFC Bank',
          scripcode: 500180,
          symbol: 'HDFCBANK',
          isin: 'INE040A01034',
          status: 'Active',
          ind_code: 50,
          ind_name: 'Private Banks',
          sublisting: 'Active',
          alias: 'HDFC Bank,HDFCBANK,HDFC Bank,INE040A01026,500180,HDFCBk',
          fincode: 100180,
          fv: 1,
          header_msg: '',
          mcap_type: 1,
          inc_mnth: '30-08',
          inc_yr: '1994',
          is_seasonal: 1,
          acc_ind_code: 15,
          acc_ind_name: 'Bank - Private',
          hse_code: 336,
          amfi_mcapsizerank: 'largecap',
          jan31_high_2018: {
            bse: 1005.95,
            nse: 1006.75,
          },
          updated_at: '2018-01-01',
          nsedt: '2024-07-18',
          bsedt: '2024-07-19',
        },
        link: null,
        exch: 0,
      },
      show_fallstock: 'no',
      stockList: undefined,
    },
  },

  // hdfc LIC report option
  {
    code: '200',
    message: 'Success',
    data: {
      block_page: 0,
      remaining_views: 0,
      total_views: 0,
      ispaid: 1,
      islogin: true,
      sect_type: {
        id: 1,
        name: 'switcher',
        reason: 'not buy and strong buy',
      },
      sname: 'HDFC Life Insur.',
      qty: '',
      mcap: 138114,
      mcapclass: 'Large Cap',
      ind_name: 'Finance/NBFC',
      mcaptype: 1,
      ind_code: 5,
      ques: {
        list: [
          {
            q: 'Do you want to Switch to',
            opt: [
              {
                txt: 'Higher rated Stock in Finance/NBFC Sector',
                val: 's-1002829',
                valsid: 1002829,
                details: {
                  sid: 1002829,
                  scoreText: 'Strong Buy',
                  score: 81,
                  type: 's',
                  short_name: '',
                  dw_url: '',
                },
                short_name: 'SBI Life Insuran',
                type: 's',
                other_choice: {
                  '1003132': {
                    sid: 1003132,
                    scoreText: 'Strong Buy',
                    score: 84,
                    heading: 'Across Large Cap',
                    type: 'm',
                    short_name: 'KPIT Technologi.',
                    dw_url:
                      '/Stocks_Stockresearchreport/getSwitcherDownload?sids=1002872,1003132&oth=1002829,478299&sh=s,a&scid=5,&nos=,&othnos=,&downloadswitcher=1',
                  },
                  '478299': {
                    sid: 478299,
                    scoreText: 'Strong Buy',
                    score: 84,
                    heading: 'Across the Market',
                    type: 'a',
                    short_name: 'ICICI Bank',
                    dw_url:
                      '/Stocks_Stockresearchreport/getSwitcherDownload?sids=1002872,478299&oth=1002829,1003132&sh=s,m&scid=5,1&nos=,&othnos=,&downloadswitcher=1',
                  },
                },
                dw_url:
                  '/Stocks_Stockresearchreport/getSwitcherDownload?sids=1002872,1002829&oth=1003132,478299&sh=m,a&scid=1,&nos=,&othnos=,&downloadswitcher=1',
              },
              {
                txt: 'Higher rated Stock in Large Cap',
                val: 'm-1003132',
                valsid: 1003132,
                details: {
                  sid: 1003132,
                  scoreText: 'Strong Buy',
                  score: 84,
                  type: 's',
                  short_name: '',
                  dw_url: '',
                },
                short_name: 'KPIT Technologi.',
                type: 'm',
                other_choice: {
                  '1002829': {
                    sid: 1002829,
                    scoreText: 'Strong Buy',
                    score: 81,
                    heading: 'Across Finance/NBFC sector',
                    type: 's',
                    short_name: 'SBI Life Insuran',
                    dw_url:
                      '/Stocks_Stockresearchreport/getSwitcherDownload?sids=1002872,1002829&oth=1003132,478299&sh=m,a&scid=1,&nos=,&othnos=,&downloadswitcher=1',
                  },
                  '478299': {
                    sid: 478299,
                    scoreText: 'Strong Buy',
                    score: 84,
                    heading: 'Across the Market',
                    type: 'a',
                    short_name: 'ICICI Bank',
                    dw_url:
                      '/Stocks_Stockresearchreport/getSwitcherDownload?sids=1002872,478299&oth=1003132,1002829&sh=m,s&scid=1,5&nos=,&othnos=,&downloadswitcher=1',
                  },
                },
                dw_url:
                  '/Stocks_Stockresearchreport/getSwitcherDownload?sids=1002872,1003132&oth=1002829,478299&sh=s,a&scid=5,&nos=,&othnos=,&downloadswitcher=1',
              },
              {
                txt: 'Higher rated Stock across the Market',
                val: 'a-478299',
                valsid: 478299,
                details: {
                  sid: 478299,
                  scoreText: 'Strong Buy',
                  score: 84,
                  type: 's',
                  short_name: '',
                  dw_url: '',
                },
                short_name: 'ICICI Bank',
                type: 'a',
                other_choice: {
                  '1002829': {
                    sid: 1002829,
                    scoreText: 'Strong Buy',
                    score: 81,
                    heading: 'Across Finance/NBFC sector',
                    type: 's',
                    short_name: 'SBI Life Insuran',
                    dw_url:
                      '/Stocks_Stockresearchreport/getSwitcherDownload?sids=1002872,1002829&oth=478299,1003132&sh=a,m&scid=,1&nos=,&othnos=,&downloadswitcher=1',
                  },
                  '1003132': {
                    sid: 1003132,
                    scoreText: 'Strong Buy',
                    score: 84,
                    heading: 'Across Large Cap',
                    type: 'm',
                    short_name: 'KPIT Technologi.',
                    dw_url:
                      '/Stocks_Stockresearchreport/getSwitcherDownload?sids=1002872,1003132&oth=478299,1002829&sh=a,s&scid=,5&nos=,&othnos=,&downloadswitcher=1',
                  },
                },
                dw_url:
                  '/Stocks_Stockresearchreport/getSwitcherDownload?sids=1002872,478299&oth=1002829,1003132&sh=s,m&scid=5,1&nos=,&othnos=,&downloadswitcher=1',
              },
            ],
          },
        ],
        show: 1,
        switch_chng: 0,
        switch_msg: 'YOU HAVE ENTERED',
      },
      show_fallstock: 'no',
      StockList: undefined,
    },
  },

  // hdfc LIC main swither report
  {
    code: '200',
    message: 'Success',
    data: {
      block_page: 0,
      remaining_views: 0,
      total_views: 0,
      ispaid: 1,
      islogin: true,
      sect_type: { id: 1, name: 'switcher', reason: 'not buy and strong buy' },
      stockids: ['1002872', '1002829'],
      stocklist: {
        '1002872': {
          clr: 'orange',
          scoreText: 'Hold',
          sname: 'HDFC Life Insur.',
          shares: '',
          txt: [
            'Low Debt ',
            '3 Consecutive Positive Results ',
            'Sideways Technical Trend',
            'Fair Valuation',
          ],
        },

        '1002829': {
          clr: 'green',
          scoreText: 'Hold',
          sname: 'SBI Life Insuran',
          shares: '',
          txt: [
            '4 Consecutive Positive Results ',
            'Bullish Technical Trend',
            'Very Attractive Valuation',
            'High (40.6%) Institutional Holding',
          ],
        },
      },
      show_fallstock: 'no',
      sname: '',
      qty: '',
      mcap: 0,
      mcapclass: '',
      ind_name: '',
      mcaptype: 0,
      ind_code: 0,
    },
  },

  {
    code: '200',
    message: 'Success',
    data: {
      block_page: 0,
      remaining_views: 0,
      total_views: 0,
      ispaid: 1,
      islogin: true,
      sect_type: {
        id: 1,
        name: 'switcher',
        reason: 'not buy and strong buy',
      },
      stockids: ['1002872', '1002829'],
      stocklist: {
        '1002872': {
          clr: 'orange',
          scoreText: 'Hold',
          sname: 'HDFC Life Insur.',
          shares: '',
          txt: [
            'Low Debt ',
            '3 Consecutive Positive Results ',
            'Sideways Technical Trend',
            'Fair Valuation',
          ],
        },
        '1002829': {
          clr: 'green',
          scoreText: 'Hold',
          sname: 'SBI Life Insuran',
          shares: '',
          txt: [
            '4 Consecutive Positive Results ',
            'Bullish Technical Trend',
            'Very Attractive Valuation',
            'High (40.6%) Institutional Holding',
          ],
        },
      },
      show_fallstock: 'no',
      sname: '',
      qty: '',
      mcap: 0,
      mcapclass: '',
      ind_name: '',
      mcaptype: 0,
      ind_code: 0,
    },
  },

  // infosys normal
  {
    code: '200',
    message: 'Success',
    data: {
      block_page: 0,
      remaining_views: 0,
      total_views: 0,
      ispaid: 1,
      islogin: true,
      sect_type: {
        id: 2,
        name: 'verdict',
        reason: 'buy and strong buy',
      },
      sname: 'Infosys',
      qty: '',
      mcap: 748279,
      mcapclass: 'Large Cap',
      ind_name: 'IT - Software ',
      mcaptype: 1,
      ind_code: 57,
      verdict: {
        price_info: {
          cmp: 1789.3,
          open_price: 1842.05,
          day_low: 1786,
          day_high: 1843,
          '52wk_low_dt': '2023-07-21',
          '52wk_high_dt': '2024-07-18',
          altm_low: 0.82,
          altm_high: 1953.7,
          altm_low_dt: '1995-05-03',
          altm_high_dt: '2022-01-17',
          vol_msg: 'Compared to 5 day average volume of 96.98 lacs at 15:25 PM',
          mcap_class: 'Large Cap',
          bid_price: 1788.9,
          bid_qty: 253,
          offer_price: 1790,
          offer_qty: 1445,
          no_of_shares: 4152028475,
          div_yeild: 2.61,
          net_profit: 63740,
          pe_ratio: 27.84,
          ind_pe_ratio: '35.26',
          deb_equity: -0.22,
          price_to_book: 8.29,
          net_npa_perc: '',
          gross_npa_perc: '',
          p_adj_bv: '0',
          ind_p_adj_bv: '8.52',
          stock_status: 'Active',
          dt: '2024-07-19 15:31:00',
          vol: 1647646,
          mcap: 748279,
          roe: 29.77,
          car: '',
          roa: '',
          net_sale: 393150,
          sector_chgp: -0.41,
          index_label: 'SENSEX',
          '5D_avg_vol': 9698187.4,
          vol_chgp: -19.13,
          mcap_grade: '1',
          is_traded: 1,
          val_trd: 2989653667,
          wk_high52: 1843,
          wk_low52: 1311.6,
        },
        cover_page_data: {
          cover_headline: 'Strong </br>Long Term Fundamentals ',
          cover_summary: [
            {
              big_txt: 'Positive',
              small_txt: 'Results in Jun 24',
            },
            {
              big_txt: 'Mildly Bullish',
              small_txt: 'Technical Trend',
            },
            {
              big_txt: 'Fair',
              small_txt: 'Valuation',
            },
            {
              big_txt: ' High (70.03%)',
              small_txt: 'Institutional Holding',
            },
          ],
        },
        score_text: 'buy',
        cover_clr: 'coverhead-green-light',
        stock_details: {
          sid: 399834,
          sname: 'Infosys Ltd.',
          short_name: 'Infosys',
          scripcode: 500209,
          symbol: 'INFY',
          isin: 'INE009A01021',
          status: 'Active',
          ind_code: 57,
          ind_name: 'IT - Software ',
          sublisting: 'Active',
          alias: 'Infosys,INFY,Infosys,INE009A01021,500209,Infy',
          fincode: 100209,
          fv: 5,
          header_msg: '',
          mcap_type: 1,
          inc_mnth: '02-07',
          inc_yr: '1981',
          is_seasonal: 0,
          acc_ind_code: 65,
          acc_ind_name: 'IT - Software ',
          hse_code: 206,
          amfi_mcapsizerank: 'largecap',
          jan31_high_2018: {
            bse: 583,
            nse: 583.3,
          },
          updated_at: '2018-01-01',
          nsedt: '2024-07-18',
          bsedt: '2024-07-19',
        },
        link: null,
        exch: 0,
      },
      show_fallstock: 'no',
    },
  },

  // infosys Eco Recyc with options
  {
    code: '200',
    message: 'Success',
    data: {
      block_page: 0,
      remaining_views: 0,
      total_views: 0,
      ispaid: 1,
      islogin: true,
      sect_type: {
        id: 1,
        name: 'switcher',
        reason: 'not buy and strong buy',
      },
      sname: 'Eco Recyc.)',
      qty: '',
      mcap: 87747.6632634,
      mcapclass: 'Large Cap',
      ind_name: 'IT - Software ',
      mcaptype: 1,
      ind_code: 57,
      ques: {
        list: [
          {
            q: 'Do you want to Switch to',
            opt: [
              {
                txt: 'Higher rated Stock in IT - Software  Sector',
                val: 's-234277',
                valsid: 234277,
                details: {
                  sid: 234277,
                  scoreText: 'Buy',
                  score: 78,
                  type: 's',
                  short_name: '',
                  dw_url: '',
                },
                short_name: 'Persistent Sys',
                type: 's',
                other_choice: {
                  '478299': {
                    sid: 478299,
                    scoreText: 'Strong Buy',
                    score: 84,
                    heading: 'Across Large Cap',
                    type: 'm',
                    short_name: 'ICICI Bank',
                    dw_url:
                      '/Stocks_Stockresearchreport/getSwitcherDownload?sids=925707,478299&oth=234277,972395&sh=s,a&scid=57,&nos=,&othnos=,&downloadswitcher=1',
                  },
                  '972395': {
                    sid: 972395,
                    scoreText: 'Strong Buy',
                    score: 84,
                    heading: 'Across the Market',
                    type: 'a',
                    short_name: 'Cholaman.Inv.&Fn',
                    dw_url:
                      '/Stocks_Stockresearchreport/getSwitcherDownload?sids=925707,972395&oth=234277,478299&sh=s,m&scid=57,1&nos=,&othnos=,&downloadswitcher=1',
                  },
                },
                dw_url:
                  '/Stocks_Stockresearchreport/getSwitcherDownload?sids=925707,234277&oth=478299,972395&sh=m,a&scid=1,&nos=,&othnos=,&downloadswitcher=1',
              },
              {
                txt: 'Higher rated Stock in Large Cap',
                val: 'm-478299',
                valsid: 478299,
                details: {
                  sid: 478299,
                  scoreText: 'Strong Buy',
                  score: 84,
                  type: 's',
                  short_name: '',
                  dw_url: '',
                },
                short_name: 'ICICI Bank',
                type: 'm',
                other_choice: {
                  '234277': {
                    sid: 234277,
                    scoreText: 'Buy',
                    score: 78,
                    heading: 'Across IT - Software  sector',
                    type: 's',
                    short_name: 'Persistent Sys',
                    dw_url:
                      '/Stocks_Stockresearchreport/getSwitcherDownload?sids=925707,234277&oth=478299,972395&sh=m,a&scid=1,&nos=,&othnos=,&downloadswitcher=1',
                  },
                  '972395': {
                    sid: 972395,
                    scoreText: 'Strong Buy',
                    score: 84,
                    heading: 'Across the Market',
                    type: 'a',
                    short_name: 'Cholaman.Inv.&Fn',
                    dw_url:
                      '/Stocks_Stockresearchreport/getSwitcherDownload?sids=925707,972395&oth=478299,234277&sh=m,s&scid=1,57&nos=,&othnos=,&downloadswitcher=1',
                  },
                },
                dw_url:
                  '/Stocks_Stockresearchreport/getSwitcherDownload?sids=925707,478299&oth=234277,972395&sh=s,a&scid=57,&nos=,&othnos=,&downloadswitcher=1',
              },
              {
                txt: 'Higher rated Stock across the Market',
                val: 'a-972395',
                valsid: 972395,
                details: {
                  sid: 972395,
                  scoreText: 'Strong Buy',
                  score: 84,
                  type: 's',
                  short_name: '',
                  dw_url: '',
                },
                short_name: 'Cholaman.Inv.&Fn',
                type: 'a',
                other_choice: {
                  '234277': {
                    sid: 234277,
                    scoreText: 'Buy',
                    score: 78,
                    heading: 'Across IT - Software  sector',
                    type: 's',
                    short_name: 'Persistent Sys',
                    dw_url:
                      '/Stocks_Stockresearchreport/getSwitcherDownload?sids=925707,234277&oth=972395,478299&sh=a,m&scid=,1&nos=,&othnos=,&downloadswitcher=1',
                  },
                  '478299': {
                    sid: 478299,
                    scoreText: 'Strong Buy',
                    score: 84,
                    heading: 'Across Large Cap',
                    type: 'm',
                    short_name: 'ICICI Bank',
                    dw_url:
                      '/Stocks_Stockresearchreport/getSwitcherDownload?sids=925707,478299&oth=972395,234277&sh=a,s&scid=,57&nos=,&othnos=,&downloadswitcher=1',
                  },
                },
                dw_url:
                  '/Stocks_Stockresearchreport/getSwitcherDownload?sids=925707,972395&oth=234277,478299&sh=s,m&scid=57,1&nos=,&othnos=,&downloadswitcher=1',
              },
            ],
          },
        ],
        show: 1,
        switch_chng: 0,
        switch_msg: 'YOU HAVE ENTERED',
      },
      show_fallstock: 'no',
    },
  },

  // infosys main switcher
  {
    code: '200',
    message: 'Success',
    data: {
      block_page: 0,
      remaining_views: 0,
      total_views: 0,
      ispaid: 1,
      islogin: true,
      sect_type: { id: 1, name: 'switcher', reason: 'not buy and strong buy' },
      stockids: ['925707', '234277'],
      stocklist: {
        '925707': {
          clr: 'orange',
          scoreText: 'Hold',
          sname: 'Info Edg.(India)',
          shares: '',
          txt: [
            'Low Debt ',
            'Positive Results in Mar 24',
            'Bullish Technical Trend',
            'High (51.5%) Institutional Holding',
          ],
        },
        '234277': {
          clr: 'green',
          scoreText: 'Hold',
          sname: 'Persistent Sys',
          shares: '',
          txt: [
            'Low Debt ',
            'Positive Results in Jun 24',
            'Bullish Technical Trend',
            'High (50.79%) Institutional Holding',
          ],
        },
      },
      show_fallstock: 'no',
      sname: "",
      qty: "",
      mcap: 0,
      mcapclass: "",
      ind_name: "",
      mcaptype: 0,
      ind_code: 0
    },
  },
];
