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

export const otherchoice : IOtherChoiceResponse[] =[
    //   // hdfc LIC main swither report
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
          stockids: ['1002872', '478299'],
          stocklist: {
            '478299': {
              clr: 'green',
              scoreText: 'Hold',
              sname: 'ICICI Bank',
              shares: '',
              txt: [
                'Very Positive  Results in Mar 24 ',
                'Bullish Technical Trend',
                'High (90.4%) Institutional Holding',
                'Second Largest Company in Private Banks sector',
              ],
            },
          },
        },
      ],
    },
]
