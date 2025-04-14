export type Weekday = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
export type Season = "autumn" | "winter" | "spring" | "summer";

export interface IBenefitListTimeTable {
  season: Season;
  days: Record<Weekday, string>;
}
export interface IBenefitList {
  title: string;
  locations?: { name: string; location: string }[];
  location?: string;
  website?: string;
  facebook?: string;
  instagram?: string;
  timeTables?: IBenefitListTimeTable[];
  phone?: string;
  discount?: string;
  app_store?: string;
  play_store?: string;
}

export interface IBenefit {
  title: string;
  list: IBenefitList[];
}
