export interface I_IPOList {
    code: number;
    message: string;
    data: IPO_Data;
  }
export  interface IPO_Data {
    all: All[];
    openupcomming: any[];
    closed: Closed[];
    open: Open[];
    upcoming: Upcoming[];
    listed: Listed[];
    subscribe: Subscribe[];
    neutral: Neutral[];
    avoid: Avoid[];
    heros: Closed[];
    listedtoday: any[];
    ipoopenstoday: any[];
    closedsubscribe: Closed[];
    opensubscribe: any[];
    upcomingsubscribe: any[];
    allcount: number;
    subscribecount: number;
    neutralcount: number;
    avoidcount: number;
    opencount: number;
    upcomingcount: number;
    closedcount: number;
    defaultTab: number;
  }
  interface Avoid {
    _id: Id;
    eqid: string;
    issue_details: Issuedetails6;
    lower_band_price: number | string;
    upper_band_price: string;
    viewstatus: number;
    status: string;
    industry: string;
    start_date: string;
    close_date: string;
    price_band: string;
    twitterSocialImage: string;
    whatsappSocialImage: string;
    sname: string;
    styick_header_txt: string;
    eqname: string;
    issue_price: number | string;
    issue_size: string;
    issue_open: string;
    issue_close: string;
    sub_point: string;
    stock_logo: string;
    video_thumb: string;
    video_iframe: string;
    mojocall: Mojocall6;
    objective: Objective;
    business: Business7;
    financials: Financials;
    listing_date: string;
    cmp: string;
    listed_price: string;
    prevclose?: number;
    substatus_color: string;
    listing_price?: number;
    stockid?: number;
    listedgl?: string;
    listedgl_dir?: string;
    dgain?: string;
    dgain_perc?: string;
    dgain_perc_dir?: string;
    perc_chng_issue_price?: string;
    perc_chng_issue_price_dir?: string;
    perc_chng_listing_price?: string;
    perc_chng_listing_price_dir?: string;
    lot_size?: string;
  }
  interface Business7 {
    about: string[];
    revenue?: Revenue6;
    revenu_header_show?: boolean;
  }
  interface Revenue6 {
    'Loan book Breakdown by Segment:|5'?: Shareholder;
    'Revenue Breakdown by Country:|5'?: Shareholder;
    'Revenue Breakdown by Segment:|5'?: Shareholder;
    'Revenue Breakdown by segment:|5'?: Shareholder;
    'Revenue Breakdown by Industry:|5'?: Shareholder;
    'Revenue Breakdown by Geography:|5'?: Shareholder;
    'Revenue Breakdown:|5'?: Shareholder;
    'Revenue Breakdown by Product:|5'?: Shareholder;
    'Revenue by Breakdown:|5'?: Shareholder;
    'Percentage Revenue breakdown by Segment:|4'?: Shareholder;
    'Revenue by segment:|5'?: Shareholder;
    'Percentage breakdown by Segment:|4'?: Shareholder;
    'Revenue breakdown by Product:|4'?: Shareholder;
    'Revenue breakdown by Exporting Country:|4'?: Shareholder;
    'Revenue breakdown by Segment:|4'?: Shareholder;
    'Revenue by Product:|4'?: Shareholder;
    'Revenue breakdown between civil and defense:|4'?: Shareholder;
    'List of Consumption Centers:|2'?: Shareholder;
    'Revenue from Operations:|5'?: Shareholder;
    'Revenue Breakdown across Product Categories:|5'?: Shareholder;
    'Revenue Breakdown across Geographic Markets:|5'?: Shareholder;
    'Segment-wise Revenue|5'?: Shareholder;
    'Revenue from end user Industry Segments|5'?: Shareholder;
    'Revenue Proportion of Product Verticals|4'?: Shareholder;
    'Revenue from Operations|5'?: Shareholder;
    'Outlets by OEM and by Type:|4'?: Shareholder;
    'Revenue from Operations: Wine Business|4'?: Shareholder;
    'Inconsistent Subsidiaries performance|4'?: Shareholder;
    'Diversified  Customer Base |2'?: Shareholder;
    'Segment Revenue Breakup by product|4'?: Shareholder;
    'Segment Revenue Breakup by geography|4'?: Shareholder;
    'Segment Revenue Breakup|4'?: Shareholder;
  }
  interface Mojocall6 {
    sub_txt: string;
    sub_status: string;
    sub_point: string;
    sub_desc: Subdesc5;
    info: string;
  }
  interface Subdesc5 {
    '1': _1;
    '2': _1;
    '3'?: _1;
    '4'?: _1;
    '5'?: _1;
    '6'?: _1;
  }
  interface Issuedetails6 {
    'Issue Opens': string;
    'Issue Closes': string;
    'Price Band': string;
    'Issue size (Upper Band)': string;
    'Issue Type': string;
    'Market cap (based on upper band)': string;
    'Sales- March 2024 (Rs./Crs)'?: string;
    'Net Profit - March 2024 (Rs./Crs)'?: string;
    Industry: string;
    Promoters: string;
    'Lead Manager': string;
    'Sales- March 2023 (Rs./Crs)'?: string;
    'Net Profit - March 2023 (Rs./Crs)'?: string;
    'Sales- March 2022 (Rs./Crs)'?: string;
    'Net Profit - March 2022 (Rs./Crs)'?: string;
    'Sales-March 2022 (Rs. Crs)'?: string;
    'Net Profit / Loss- March 2022 (Rs. Crs)'?: string;
    'Sales-March 2022'?: string;
    'Net Profit-March 2022 '?: string;
  }
  interface Neutral {
    _id: Id;
    eqid: string;
    issue_details: Issuedetails5;
    lower_band_price: number;
    upper_band_price: string;
    viewstatus: number;
    status: string;
    industry: string;
    start_date: string;
    close_date: string;
    price_band: string;
    twitterSocialImage: string;
    whatsappSocialImage: string;
    sname: string;
    styick_header_txt: string;
    eqname: string;
    issue_price: number | string;
    issue_size: string;
    issue_open: string;
    issue_close: string;
    sub_point: string;
    stock_logo: string;
    video_thumb: string;
    video_iframe: string;
    mojocall: Mojocall5;
    objective: Objective3;
    business: Business6;
    financials: Financials;
    listing_date: string;
    listing_price: number;
    stockid: number;
    cmp: string;
    listed_price: string;
    prevclose: number;
    substatus_color: string;
    listedgl?: string;
    listedgl_dir?: string;
    dgain?: string;
    dgain_perc?: string;
    dgain_perc_dir?: string;
    perc_chng_issue_price?: string;
    perc_chng_issue_price_dir?: string;
    perc_chng_listing_price?: string;
    perc_chng_listing_price_dir?: string;
  }
  interface Business6 {
    about: string[];
    revenue?: Revenue5;
    revenu_header_show?: boolean;
  }
  interface Revenue5 {
    'Revenue Breakdown by Segment:|5'?: Shareholder;
    'Gross Written Premium Breakdown by Segment:|5'?: Shareholder;
    'Revenue Breakdown:|5'?: Shareholder;
    'Revenue by segment:|4'?: Shareholder;
    'Percentage breakdown by Segment:|4'?: Shareholder;
    'Percentage Revenue breakdown by Rooms:|2'?: Shareholder;
    'Percentage Revenue breakdown by Segment:|5'?: Shareholder;
    'Revenue breakdown by Segment:|4'?: Shareholder;
    'Revenue Breakdown By Vertical:|4'?: Shareholder;
    'Revenue breakdown by Product:|4'?: Shareholder;
    'Revenue Breakdown by Geography:|5'?: Shareholder;
    'Revenue Breakup by Geographical Region (%)|5'?: Shareholder;
    'Revenue Breakup by Residential Categories|4'?: Shareholder;
    'Revenue from Operations – FY22|3'?: Shareholder;
  }
  interface Mojocall5 {
    sub_txt: string;
    sub_status: string;
    sub_point: string;
    sub_desc: Subdesc4;
    info: string;
  }
  interface Subdesc4 {
    '1': _1;
    '2'?: _1;
    '3'?: _1;
    '4'?: _1;
    '5'?: _1;
  }
  interface Issuedetails5 {
    'Issue Opens': string;
    'Issue Closes': string;
    'Price Band': string;
    'Issue size (Upper Band)': string;
    'Issue Type': string;
    'Market cap (based on upper band)': string;
    'Sales- March 2023 (Rs./Crs)'?: string;
    'Net Profit - March 2023 (Rs./Crs)'?: string;
    Industry: string;
    Promoters: string;
    'Lead Manager': string;
    'Sales- March 2022 (Rs./Crs)'?: string;
    'Net Profit - March 2022 (Rs./Crs)'?: string;
    'Sales-March 2022 (Rs. Crs)'?: string;
    'Net Profit (Rs. Crs)'?: string;
  }
  interface Subscribe {
    _id: Id;
    eqid: string;
    issue_details: Issuedetails4;
    lower_band_price: number;
    upper_band_price: string;
    viewstatus: number;
    status: string;
    industry: string;
    start_date: string;
    close_date: string;
    price_band: string;
    twitterSocialImage: string;
    whatsappSocialImage: string;
    sname: string;
    styick_header_txt: string;
    eqname: string;
    issue_price: number | string;
    issue_size: string;
    issue_open: string;
    issue_close: string;
    sub_point: string;
    stock_logo: string;
    video_thumb: string;
    video_iframe: string;
    mojocall: Mojocall4;
    objective: Objective3;
    business: Business5;
    financials: Financials;
    listing_date: string;
    cmp: string;
    listed_price: string;
    prevclose?: number;
    substatus_color: string;
    listing_price?: number;
    stockid?: number;
    listedgl?: string;
    listedgl_dir?: string;
    dgain?: string;
    dgain_perc?: string;
    dgain_perc_dir?: string;
    perc_chng_issue_price?: string;
    perc_chng_issue_price_dir?: string;
    perc_chng_listing_price?: string;
    perc_chng_listing_price_dir?: string;
  }
  interface Business5 {
    about: string[];
    revenue?: Revenue4;
    revenu_header_show?: boolean;
  }
  interface Revenue4 {
    'Loan book Breakdown by Segment:|5'?: Shareholder;
    'Revenue Breakdown by Segment:|5'?: Shareholder;
    'Revenue Breakdown:|5'?: Shareholder;
    'Revenue Breakdown by Geography:|5'?: Shareholder;
    'Revenue Breakdown by Geography:|4'?: Shareholder;
    'Revenue by Geography:|3'?: Shareholder;
    'Revenue by Breakdown:|5'?: Shareholder;
    'Revenue Breakdown:|4'?: Shareholder;
    'Revenue by segment:|4'?: Shareholder;
    'Percentage breakdown by Cargo Product:|4'?: Shareholder;
    'Percentage breakdown by Segment:|4'?: Shareholder;
    'Percentage Revenue breakdown by Geography:|4'?: Shareholder;
    'Percentage Revenue breakdown by Hospital:|4'?: Shareholder;
    'Revenue breakdown by Segment:|4'?: Shareholder;
    'Revenue by Product:|4'?: Shareholder;
    'Revenue Breakdown By Vertical:|4'?: Shareholder;
    'Loan Book by Product:|4'?: Shareholder;
    'Revenue from Operations Based on Geography|5'?: Shareholder;
    'Focus on Southern States - As of 30th June 202​2|3'?: Shareholder;
  }
  interface Mojocall4 {
    sub_txt: string;
    sub_status: string;
    sub_point: string;
    sub_desc: Subdesc3;
    info?: string;
  }
  interface Issuedetails4 {
    'Issue Opens': string;
    'Issue Closes': string;
    'Price Band': string;
    'Issue size (Upper Band)': string;
    'Issue Type': string;
    'Market cap (based on upper band)': string;
    'Sales- March 2024 (Rs./Crs)'?: string;
    'Net Profit - March 2024 (Rs./Crs)'?: string;
    Industry: string;
    Promoters: string;
    'Lead Manager': string;
    'Sales- March 2023 (Rs./Crs)'?: string;
    'Net Profit - March 2023 (Rs./Crs)'?: string;
    'Sales- March 2022 (Rs./Crs)'?: string;
    'Net Profit - March 2022 (Rs./Crs)'?: string;
    'Income-March 2022'?: string;
    'Net Profit-March 2022 '?: string;
  }
  interface Listed {
    _id: Id;
    eqid: string;
    issue_details: Issuedetails3;
    lower_band_price: number;
    upper_band_price: string;
    viewstatus: number;
    status: string;
    industry: string;
    start_date: string;
    close_date: string;
    price_band: string;
    twitterSocialImage: string;
    whatsappSocialImage: string;
    sname: string;
    styick_header_txt: string;
    eqname: string;
    issue_price: number;
    issue_size: string;
    issue_open: string;
    issue_close: string;
    sub_point: string;
    stock_logo: string;
    video_thumb: string;
    video_iframe: string;
    mojocall: Mojocall3;
    objective: Objective3;
    business: Business4;
    financials: Financials;
    listing_date: string;
    listing_price: number;
    stockid: number;
    cmp: string;
    listed_price: string;
    prevclose: number;
    substatus_color: string;
    listedgl: string;
    listedgl_dir: string;
    dgain: string;
    dgain_perc: string;
    dgain_perc_dir: string;
    perc_chng_issue_price: string;
    perc_chng_issue_price_dir: string;
    perc_chng_listing_price: string;
    perc_chng_listing_price_dir: string;
  }
  interface Business4 {
    about: string[];
    revenue?: Revenue3;
  }
  interface Revenue3 {
    'Loan book Breakdown by Segment:|5'?: Shareholder;
    'Revenue Breakdown by Country:|5'?: Shareholder;
    'Revenue Breakdown by Segment:|5'?: Shareholder;
    'Gross Written Premium Breakdown by Segment:|5'?: Shareholder;
    'Revenue Breakdown by segment:|5'?: Shareholder;
    'Revenue Breakdown by Industry:|5'?: Shareholder;
    'Revenue Breakdown by Geography:|5'?: Shareholder;
    'Revenue Breakdown:|5'?: Shareholder;
  }
  interface Objective3 {
    details: string[];
    shareholders?: Shareholder[];
  }
  interface Mojocall3 {
    sub_txt: string;
    sub_status: string;
    sub_point: string;
    sub_desc: Subdesc3;
    info: string;
  }
  interface Subdesc3 {
    '1': _1;
    '2': _1;
    '3'?: _1;
    '4'?: _1;
    '5'?: _1;
  }
  interface Issuedetails3 {
    'Issue Opens': string;
    'Issue Closes': string;
    'Price Band': string;
    'Issue size (Upper Band)': string;
    'Issue Type': string;
    'Market cap (based on upper band)': string;
    'Sales- March 2024 (Rs./Crs)'?: string;
    'Net Profit - March 2024 (Rs./Crs)'?: string;
    Industry: string;
    Promoters: string;
    'Lead Manager': string;
    'Sales- March 2023 (Rs./Crs)'?: string;
    'Net Profit - March 2023 (Rs./Crs)'?: string;
  }
  interface Upcoming {
    _id: Id;
    eqid: string;
    status: string;
    industry: string;
    start_date: string;
    close_date: string;
    price_band: string;
    twitterSocialImage: string;
    whatsappSocialImage: string;
    sname: string;
    viewstatus: number;
    eqname: string;
    stock_logo: string;
    listing_date: string;
    cmp: string;
    listed_price: string;
    prevclose?: any;
    upper_band_price: number;
  }
  interface Open {
    _id: Id;
    eqid: string;
    issue_details: Issuedetails2;
    lower_band_price: number;
    upper_band_price: string;
    viewstatus: number;
    status: string;
    industry: string;
    start_date: string;
    close_date: string;
    price_band: string;
    twitterSocialImage: string;
    whatsappSocialImage: string;
    sname: string;
    styick_header_txt: string;
    eqname: string;
    issue_price: string;
    issue_size: string;
    issue_open: string;
    issue_close: string;
    sub_point: string;
    stock_logo: string;
    video_thumb: string;
    video_iframe: string;
    mojocall: Mojocall2;
    objective: Objective2;
    business: Business3;
    financials: Financials;
    listing_date: string;
    cmp: string;
    listed_price: string;
    prevclose?: any;
    substatus_color: string;
  }
  interface Business3 {
    about: string[];
    revenue?: Revenue2;
  }
  interface Closed {
    _id: Id;
    eqid: string;
    issue_details: Issuedetails2;
    lower_band_price: number;
    upper_band_price: string;
    viewstatus: number;
    status: string;
    industry: string;
    start_date: string;
    close_date: string;
    price_band: string;
    twitterSocialImage: string;
    whatsappSocialImage: string;
    sname: string;
    styick_header_txt: string;
    eqname: string;
    issue_price: string;
    issue_size: string;
    issue_open: string;
    issue_close: string;
    sub_point: string;
    stock_logo: string;
    video_thumb: string;
    video_iframe: string;
    mojocall: Mojocall2;
    objective: Objective2;
    business: Business2;
    financials: Financials;
    listing_date: string;
    cmp: string;
    listed_price: string;
    prevclose?: any;
    substatus_color: string;
  }
  interface Business2 {
    about: string[];
    revenue: Revenue2;
  }
  interface Revenue2 {
    'Loan book Breakdown by Segment:|5': Shareholder;
  }
  interface Objective2 {
    details: string[];
    shareholders: Shareholder[];
  }
  interface Mojocall2 {
    sub_txt: string;
    sub_status: string;
    sub_point: string;
    sub_desc: Subdesc2;
    info: string;
  }
  interface Subdesc2 {
    '1': _1;
    '2': _1;
    '3': _1;
    '4': _1;
  }
  interface Issuedetails2 {
    'Issue Opens': string;
    'Issue Closes': string;
    'Price Band': string;
    'Issue size (Upper Band)': string;
    'Issue Type': string;
    'Market cap (based on upper band)': string;
    'Sales- March 2024 (Rs./Crs)': string;
    'Net Profit - March 2024 (Rs./Crs)': string;
    Industry: string;
    Promoters: string;
    'Lead Manager': string;
  }
  interface All {
    _id: Id;
    eqid: string;
    status: string;
    industry: string;
    start_date: string;
    close_date: string;
    price_band: string;
    twitterSocialImage: string;
    whatsappSocialImage: string;
    sname: string;
    viewstatus: number;
    eqname: string;
    stock_logo: string;
    substatus_color?: string;
    issue_details?: Issuedetails;
    lower_band_price?: number | string;
    upper_band_price?: number | string;
    styick_header_txt?: string;
    issue_price?: number | string;
    issue_size?: string;
    issue_open?: string;
    issue_close?: string;
    sub_point?: string;
    video_thumb?: string;
    video_iframe?: string;
    mojocall?: Mojocall;
    objective?: Objective;
    business?: Business;
    financials?: Financials;
    listing_date?: string;
    listing_price?: number;
    stockid?: number;
    lot_size?: string;
  }
  interface Financials {
    about: string[];
    performance: Shareholder[];
  }
  interface Business {
    about: string[];
    revenue?: Revenue;
    revenu_header_show?: boolean;
  }
  interface Revenue {
    'Loan book Breakdown by Segment:|5'?: Shareholder;
    'Revenue Breakdown by Country:|5'?: Shareholder;
    'Revenue Breakdown by Segment:|5'?: Shareholder;
    'Gross Written Premium Breakdown by Segment:|5'?: Shareholder;
    'Revenue Breakdown by segment:|5'?: Shareholder;
    'Revenue Breakdown by Industry:|5'?: Shareholder;
    'Revenue Breakdown by Geography:|5'?: Shareholder;
    'Revenue Breakdown:|5'?: Shareholder;
    'Revenue Breakdown by Product:|5'?: Shareholder;
    'Revenue Breakdown by Geography:|4'?: Shareholder;
    'Revenue by Geography:|3'?: Shareholder;
    'Revenue by Breakdown:|5'?: Shareholder;
    'Revenue Breakdown:|4'?: Shareholder;
    'Revenue by segment:|4'?: Shareholder;
    'Percentage Revenue breakdown by Segment:|4'?: Shareholder;
    'Revenue by segment:|5'?: Shareholder;
    'Percentage breakdown by Cargo Product:|4'?: Shareholder;
    'Percentage breakdown by Segment:|4'?: Shareholder;
    'Percentage Revenue breakdown by Rooms:|2'?: Shareholder;
    'Percentage Revenue breakdown by Segment:|5'?: Shareholder;
    'Percentage Revenue breakdown by Geography:|4'?: Shareholder;
    'Percentage Revenue breakdown by Hospital:|4'?: Shareholder;
    'Revenue breakdown by Product:|4'?: Shareholder;
    'Revenue breakdown by Segment:|4'?: Shareholder;
    'Revenue breakdown by Exporting Country:|4'?: Shareholder;
    'Revenue by Product:|4'?: Shareholder;
    'Revenue Breakdown By Vertical:|4'?: Shareholder;
    'Loan Book by Product:|4'?: Shareholder;
    'Revenue breakdown between civil and defense:|4'?: Shareholder;
    'List of Consumption Centers:|2'?: Shareholder;
    'Revenue from Operations:|5'?: Shareholder;
    'Revenue Breakdown across Product Categories:|5'?: Shareholder;
    'Revenue Breakdown across Geographic Markets:|5'?: Shareholder;
    'Segment-wise Revenue|5'?: Shareholder;
    'Revenue from end user Industry Segments|5'?: Shareholder;
    'Revenue Proportion of Product Verticals|4'?: Shareholder;
    'Revenue from Operations|5'?: Shareholder;
    'Outlets by OEM and by Type:|4'?: Shareholder;
    'Revenue from Operations: Wine Business|4'?: Shareholder;
    'Inconsistent Subsidiaries performance|4'?: Shareholder;
    'Revenue from Operations Based on Geography|5'?: Shareholder;
    'Revenue Breakup by Geographical Region (%)|5'?: Shareholder;
    'Revenue Breakup by Residential Categories|4'?: Shareholder;
    'Diversified  Customer Base |2'?: Shareholder;
    'Revenue from Operations – FY22|3'?: Shareholder;
    'Focus on Southern States - As of 30th June 202​2|3'?: Shareholder;
    'Segment Revenue Breakup by product|4'?: Shareholder;
    'Segment Revenue Breakup by geography|4'?: Shareholder;
    'Segment Revenue Breakup|4'?: Shareholder;
  }
  interface Objective {
    details: string[];
    shareholders?: Shareholder[];
    headertext?: string;
  }
  interface Shareholder {
    header: string[];
    headervalue: string[][];
  }
  interface Mojocall {
    sub_txt: string;
    sub_status: string;
    sub_point: string;
    sub_desc: Subdesc;
    info?: string;
  }
  interface Subdesc {
    '1': _1;
    '2'?: _1;
    '3'?: _1;
    '4'?: _1;
    '5'?: _1;
    '6'?: _1;
  }
  interface _1 {
    header: string;
    desc: string[];
    info: string;
  }
  interface Issuedetails {
    'Issue Opens': string;
    'Issue Closes': string;
    'Price Band': string;
    'Issue size (Upper Band)': string;
    'Issue Type': string;
    'Market cap (based on upper band)': string;
    'Sales- March 2024 (Rs./Crs)'?: string;
    'Net Profit - March 2024 (Rs./Crs)'?: string;
    Industry: string;
    Promoters: string;
    'Lead Manager': string;
    'Sales- March 2023 (Rs./Crs)'?: string;
    'Net Profit - March 2023 (Rs./Crs)'?: string;
    'Sales- March 2022 (Rs./Crs)'?: string;
    'Net Profit - March 2022 (Rs./Crs)'?: string;
    'Sales-March 2022 (Rs. Crs)'?: string;
    'Net Profit / Loss- March 2022 (Rs. Crs)'?: string;
    'Net Profit (Rs. Crs)'?: string;
    'Income-March 2022'?: string;
    'Net Profit-March 2022 '?: string;
    'Sales-March 2022'?: string;
  }
  interface Id {
    '$oid': string;
  }