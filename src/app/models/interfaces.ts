
// dropdown data
export interface IGetDropdown {
    Id: number;
    Company: string;
    ScriptCode: number;
    Symbol: string;
    url: string;
    price: number | null;
    ExchangeName: string;
    sname: string;
    tag: string;
    stockprice: string;
    chg: string;
    chgp: string;
    chgdir: number;
    score: number;
    scoretext: string;
    stock_traded_status: string;
    show_score: number;
    recurl: string;
}

// verdict report data
export interface IGetVerdictReportsData {
  code: number;
  message: string;
  data: {
      price_info: {
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
          deb_equity: number |string;
          price_to_book: number;
          net_npa_perc: string |number; // you may want to adjust this based on actual data type
          gross_npa_perc: string |number; // you may want to adjust this based on actual data type
          p_adj_bv: string;
          ind_p_adj_bv: string;
          stock_status: string;
          dt: string;
          vol: number;
          mcap: number;
          roe: number |string;
          car: string |number; // you may want to adjust this based on actual data type
          roa: string |number; // you may want to adjust this based on actual data type
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
      };
      cover_page_data: {
          cover_headline: string;
          cover_summary: {
              big_txt: string;
              small_txt: string;
          }[];
      };
      score_text: string;
      cover_clr: string;
      stock_details: {
          sid: number;
          sname: string;
          short_name: string;
          scripcode: number|string;
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
          is_seasonal: number |string;
          acc_ind_code: number;
          acc_ind_name: string;
          hse_code: number|string;
          amfi_mcapsizerank: string;
          jan31_high_2018: {
              bse: number;
              nse: number;
          };
          updated_at: string;
          nsedt: string;
          bsedt: string;
      };
      block_page: number;
      remaining_views: number;
      total_views: number;
      show_fallstock: string;
  };
}

interface OtherChoice {
  sid: string;
  scoreText: string;
  score: number;
  heading: string;
  type: string;
  short_name: string;
  dw_url: string;
}

export interface IOption {
  other_choice: {
    [key: string]: OtherChoice;
  };
}

export interface IReportData {
  data?: {
    ques?: {
      list?: Array<{
        opt: IOption[];
      }>;
    };
  };
}
