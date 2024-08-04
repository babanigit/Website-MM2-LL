


// Define the interface for the individual IPO object
interface IPO {
    _id: {
        $oid: string;
    };
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
    substatus_color?: string; // Optional property
    issue_details?: IssueDetails; // Optional property
    lower_band_price?: number; // Optional property
    upper_band_price?: number; // Optional property
    styick_header_txt?: string; // Optional property
    issue_price?: string; // Optional property
    issue_size?: string; // Optional property
    issue_open?: string; // Optional property
    issue_close?: string; // Optional property
    sub_point?: string; // Optional property
    video_thumb?: string; // Optional property
    video_iframe?: string; // Optional property
    mojocall?: MojoCall; // Optional property
    objective?: Objective; // Optional property
    business?: Business; // Optional property
    financials?: Financials; // Optional property
}

// Define the interface for the issue details
interface IssueDetails {
    "Issue Opens": string;
    "Issue Closes": string;
    "Price Band": string;
    "Issue size (Upper Band)": string;
    "Issue Type": string;
    "Market cap (based on upper band)": string;
    "Sales- March 2024 (Rs./Crs)": string;
    "Net Profit - March 2024 (Rs./Crs)": string;
    "Industry": string;
    "Promoters": string;
    "Lead Manager": string;
}

// Define the interface for the mojocall details
interface MojoCall {
    sub_txt: string;
    sub_status: 'Avoid' | 'Neutral' | 'Subscribe';
    sub_point: string;
    sub_desc: {
        [key: string]: {
            header: string;
            desc: string[];
            info?: string;
        }
    };
    info?: string;
}

// Define the interface for the objective details
interface Objective {
    details: string[];
    shareholders: {
        header: string[];
        headervalue: string[][];
    }[];
}

// Define the interface for the business details
interface Business {
    about: string[];
}

// Define the interface for the financials details
interface Financials {
    about: string[];
    performance: {
        header: string[];
        headervalue: string[][];
    }[];
}

// Define the main interface for the IPO list response
export interface I_IPOList {
    code: number;
    message: string;
    data: {
        all: IPO[];
    };
}


