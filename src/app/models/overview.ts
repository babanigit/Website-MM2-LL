export interface IGetOverview {
  code:    string;
  message: string;
  data:    Data;
}

export interface Data {
  max_event_cnt: number;
  list:          { [key: string]: IListValue };
  other:         Other;
}

export interface IListValue {
dh: any;
dl: any;
wk52h: any;
wk52l: any;
ath: any;
atl: any;
cvol: any;
ival: any;
iqty: any;
iprice: any;
  sid:               number;
  sname:             string;
  short:             string;
  dotsum:            Dotsum;
  indcode:           number;
  indname:           string;
  exch:              Exch;
  exchcode:          number;
  cmp:               number;
  chg:               number;
  chgp:              number;
  cmpdir:            number;
  prevclose:         number;
  mcap:              string;
  sect_chgp:         number;
  show_mojostock:    ShowStock;
  show_fallstock:    ShowStock;
  product_icon_list: ProductIconList[];
  more_button:       MoreButton;
  traded:            Traded;
  vol:               number;
  volperc:           number;
  voldir:            number;
  unrgain:           number;
  unrgainp:          number;
  unrgaindir:        number;
  dgain:             number;
  dgainp:            number;
  dgaindir:          number;
  lval:              number;
  action:            Action;
  reco:              Reco;
  result:            Result;
  orgresdt:          number;
}

export interface Action {
  bell:   Bell;
  status: number;
  list:   ListElement[];
  txt:    ActionTxt;
}

export interface Bell {
  flag: number;
  msg:  string;
}

export interface ListElement {
  header: string;
  msg:    string;
  dir:    number;
}

export enum ActionTxt {
  Empty = "",
  Txt = "-",
}

export interface Dotsum {
  q_rank:                       number | string;
  stk_sect:                     number | string;
  q_txt:                        string;
  v_rank:                       number | string;
  v_txt:                        string;
  f_pts:                        number | null;
  f_txt:                        null | string;
  f_clr:                        CLR;
  sid:                          number;
  f_dir:                        number | string;
  prev_score:                   number | string;
  q_dir:                        number | string;
  tech_score:                   number;
  tech_txt:                     string;
  tech_clr:                     TechCLR;
  q_clr:                        CLR;
  v_clr:                        CLR;
  score:                        number;
  score_date:                   Date;
  scoreText:                    string;
  prevScoreText:                string;
  prevScoreTextDate:            Date;
  prevScore:                    number | string;
  final_score_grade_41:         string;
  final_score_41_or:            number;
  current_final_score_grade_41: string;
  current_final_score_41:       number | string;
  mfin_score:                   number | string;
  scoreTextChange:              number;
  curfscore:                    number | string;
  s_clr:                        string;
}

export enum CLR {
  Green = "green",
  Grey = "grey",
  Orange = "orange",
  Red = "red",
}

export enum TechCLR {
  Green = "Green",
  Orange = "Orange",
  Red = "Red",
}

export enum Exch {
  Bse = "BSE",
  Nse = "NSE",
}

export interface MoreButton {
  show: number;
  text: Text;
}

export enum Text {
  Empty = "",
  The1More = "+1 More",
}

export interface ProductIconList {
  name:          string;
  text:          string;
  url:           string;
  product_class: string;
}

export interface Reco {
  status: number;
  txt:    RecoTxt;
}

export enum RecoTxt {
  NoRecosInTheLastOneMonth = "No Recos in the last one month",
}

export interface Result {
  resultdt:  Resultdt;
  D15:       { [key: string]: number };
  dt:        string;
  rawdt:     Date;
  srtdt:     Date;
  sortorder: number;
  flag:      number;
  msg:       string;
}

export interface Resultdt {
  resdt: Date;
  chgp:  number;
  dir:   number;
}

export enum ShowStock {
  No = "no",
  Yes = "yes",
}

export enum Traded {
  Traded = "Traded",
}

export interface Other {
  paid: number;
}
