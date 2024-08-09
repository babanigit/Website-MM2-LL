import { ISwitcherResult } from '../models/switcherResult';

export const SwitcherResult: ISwitcherResult[] = [
  // hdfc
  // hdfc Stock in Finance/NBFC Sector
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

  // hdfc large
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
      stockids: ['1002872', '112501'],
      stocklist: {
        '1002872': {
          clr: 'red',
          scoreText: 'Sell',
          sname: 'HDFC Life Insur.',
          shares: '',
          txt: ['Expensive  Valuation ', 'Market Underperformance Last 1 Year'],
        },
        '112501': {
          clr: 'green',
          scoreText: 'Hold',
          sname: 'Axis Bank',
          shares: '',
          txt: [
            '5 Consecutive Positive Results ',
            'Bullish Technical Trend',
            'Fair Valuation',
            'High (85.06%) Institutional Holding',
          ],
        },
      },
      show_fallstock: 'no',
    },
  },

  // Stock across the Market
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
      stockids: ['1002872', '264317'],
      stocklist: {
        '1002872': {
          clr: 'red',
          scoreText: 'Sell',
          sname: 'HDFC Life Insur.',
          shares: '',
          txt: ['Expensive  Valuation ', 'Market Underperformance Last 1 Year'],
        },
        '264317': {
          clr: 'green',
          scoreText: 'Hold',
          sname: 'BASF India',
          shares: '',
          txt: [
            'Low Debt ',
            'Healthy Growth in Long Term Operating Profits',
            'Very Positive Results in Mar 24',
            'Bullish Technical Trend',
          ],
        },
      },
      show_fallstock: 'no',
    },
  },

  // infosys
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
      stockids: ['925707', '1002774'],
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
        '1002774': {
          clr: 'green',
          scoreText: 'Hold',
          sname: 'C D S L',
          shares: '',
          txt: [
            'Strong  Long Term Fundamentals ',
            'Healthy Growth in Long Term Net Sales',
            'Outstanding Results in Mar 24',
            'High (34.53%) Institutional Holding',
          ],
        },
      },
      show_fallstock: 'no',
    },
  },
];
