
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
