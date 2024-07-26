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

export const otherchoiced: IOtherChoiceResponse[] = [

  // Higher rated Stock in Finance/NBFC Sector
  {
    code: '200',
    message: 'Success',
    data: [
      {
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
        stockids: ['1002872', '156274'],
        stocklist: {
          '156274': {
            clr: 'green',
            scoreText: 'Hold',
            sname: 'Natco Pharma',
            shares: '',
            txt: [
              'Low Debt  ',
              'Very Positive Results in Mar 24',
              'Bullish Technical Trend',
              'Fair Valuation',
            ],
          },
        },
      },

      {
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
        stockids: ['1002872', '1003740'],
        stocklist: {
          '1003740': {
            clr: 'green',
            scoreText: 'Hold',
            sname: 'Bikaji Foods',
            shares: '',
            txt: [
              'Strong  Long Term Fundamentals ',
              '6 Consecutive Positive Results ',
              'Bullish Technical Trend',
              'Market Beating Returns Last 1 Year',
            ],
          },
        },
      },
    ],
  },

  // Higher rated Stock in Large Cap
  {
    code: '200',
    message: 'Success',
    data: [
      {
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
        stockids: ['1002872', '343801'],
        stocklist: {
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
      },
      {
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
        stockids: ['1002872', '1003740'],
        stocklist: {
          '1003740': {
            clr: 'green',
            scoreText: 'Hold',
            sname: 'Bikaji Foods',
            shares: '',
            txt: [
              'Strong  Long Term Fundamentals ',
              '6 Consecutive Positive Results ',
              'Bullish Technical Trend',
              'Market Beating Returns Last 1 Year',
            ],
          },
        },
      },
    ],
  },

];
