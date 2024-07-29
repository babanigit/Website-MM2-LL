interface SectType {
  id: number;
  name: string;
  reason: string;
}

interface Stock {
  clr: string;
  scoreText: string;
  sname: string;
  shares: string;
  txt: string[];
}

interface DataItem {
  block_page: number;
  remaining_views: number;
  total_views: number;
  ispaid: number;
  islogin: boolean;
  sect_type: SectType;
  stockids: string[];
  stocklist: {
    [key: string]: Stock;
  };
}

export interface IOtherChoiceResponse {
  code: string;
  message: string;
  data: DataItem[];
}
