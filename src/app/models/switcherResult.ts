

export interface ISwitcherResult {
    code: string;
    message: string;
    data: {
      block_page: number;
      remaining_views: number;
      total_views: number;
      ispaid: number;
      islogin: boolean;
      sect_type: {
        id: number;
        name: string;
        reason: string;
      };
      stockids: string[];
      stocklist: {
        [key: string]: {
          clr: string;
          scoreText: string;
          sname: string;
          shares: string;
          txt: string[];
        };
      };
      show_fallstock: string;
    };
  }