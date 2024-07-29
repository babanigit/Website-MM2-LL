

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
  
  export interface ISwitcherReportsAndOptions {
    code: string;
    message: string;
    data: Data;
  }

  
  