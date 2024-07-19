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
  deb_equity: string |number;
  price_to_book: number;
  net_npa_perc: number | string;
  gross_npa_perc: number | string;
  p_adj_bv: string;
  ind_p_adj_bv: string;
  stock_status: string;
  dt: string;
  vol: number;
  mcap: number;
  roe: string |number;
  car: string |number;
  roa: string |number;
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

interface CoverSummary {
  big_txt: string;
  small_txt: string;
}

interface CoverPageData {
  cover_headline: string;
  cover_summary: CoverSummary[];
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

interface VerdictData {
  price_info: PriceInfo;
  cover_page_data: CoverPageData;
  score_text: string;
  cover_clr: string;
  stock_details: StockDetails;
  link: any; // You can define a specific type for link if known
  exch: number;
}

interface SectType {
  id: number;
  name: string;
  reason: string;
}

export interface ISwitcherGetResponse {
  code: string;
  message: string;
  data: {
    block_page: number;
    remaining_views: number;
    total_views: number;
    ispaid: number;
    islogin: boolean;
    sect_type: SectType;
    sname: string;
    qty: string;
    mcap: number;
    mcapclass: string;
    ind_name: string;
    mcaptype: number;
    ind_code: number;
    verdict: VerdictData;
    show_fallstock: string;
  };
}

export const switcherGetRespone : ISwitcherGetResponse[] = [
  // hdfc
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
    },
  },

  // infosys
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
];
