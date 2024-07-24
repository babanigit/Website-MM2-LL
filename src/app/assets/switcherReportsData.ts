export interface ISwitcherReportData {
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

export const SwitcherReportData: ISwitcherReportData[] = [
  // hdfc main
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
      stockids: ['1002872', '343801'],
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
        '343801': {
          clr: 'green',
          scoreText: 'Hold',
          sname: 'Manappuram Fin.',
          shares: '',
          txt: [
            'Strong  Long Term Fundamentals ',
            '7 Consecutive Positive Results ',
            'Bullish Technical Trend',
            'Attractive Valuation',
          ],
        },
      },
      show_fallstock: 'no',
    },
  },

  // infosys main
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
    },
  },
];
