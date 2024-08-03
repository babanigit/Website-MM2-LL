export interface IGraphData {
    code: number
    message: string
    data: Data
  }
  
  export interface Data {
    graph_indices: Index[]
  }
  
  export interface Index {
    name: string
    cmp: string
    chg: string
    chgp: string
    chgp_val: string
    dir: number
    dt: string
    IndexName: string
    CurrentPrice: number
    Close: number
    Volatility: number
    PreviousClose: number
    PreviousClosePerc: PreviousClosePerc
    TOP_GAINER: TopGainer
    TOP_LOSER: TopLoser
    ADVANCES: number
    DECLINES: number
    NO_CHANGE: number
    WEEK_HIGH_52: string
    WEEK_LOW_52: string
    WEEK_POINTER_52: number
    graph: Graph
    High: number
    Low: number
  }
  
  export interface PreviousClosePerc {
    D1: string
    D1_dir: number
    W1: string
    W1_dir: number
    M1: string
    M1_dir: number
    YTD: string
    YTD_dir: number
    Y1: string
    Y1_dir: number
    Y3: string
    Y3_dir: number
    Y5: string
    Y5_dir: number
    Y10: string
    Y10_dir: number
  }
  
  export interface TopGainer {
    name: string
    cmp: string
    chg: string
    chgp: string
    high: string
    low: string
    q_clr: string
    v_clr: string
    f_clr: string
    sid: number
    dir: number
  }
  
  export interface TopLoser {
    name: string
    cmp: string
    chg: string
    chgp: string
    high: string
    low: string
    q_clr: string
    v_clr: string
    f_clr: string
    sid: number
    dir: number
  }
  
  export interface Graph {
    IndiceArray: IndiceArray[]
  }
  
  export interface IndiceArray {
    dispPrice: number
    time: string
    disptime: string
    segmentColor: string
    y: number
  }
  