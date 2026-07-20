//라방바 assginment API 타입
export type ProductRes = {
  list: LabangProduct[] | HomeShoppingProduct[];
  mask: boolean;
};

export type LabangProduct = {
  objectID: string;
  platform_id: string;
  datetime_start: string;
  product_cnt: number;
  visit_cnt: number;
  sales_cnt: number | null;
  sales_amt: number | null;
  title: string;
  cid: number;
};

export type HomeShoppingProduct = {
  hsshow_id: string;
  platform_id: string;
  platform_name: string;
  hsshow_title: string;
  hsshow_datetime_start: string;
  hsshow_datetime_end: string;
  hsshow_url_live: string | null;
  item_cnt: number;
  cid: number;
  sales_cnt: number | null;
  sales_amt: number | null;
  cat: ProductCategory;
};

export type ProductCategory = {
  cid: number;
  cat_name: string;
};

//목업데이터 타입
export type DataRes = {
  rank: number;
  title: string;
  category: string;
  date: Date;
  viewCount?: number | null;
  viewRating?: number | null;
  salesCount: number | null;
  revenue: number | null;
  itemCount: number;
};

export type BroadcastCategory = "라방" | "홈쇼핑";

export type Broadcast = {
  rank: string;
  title: string;
  platform: string;
  category: string;
  date: string;
  time: string;
  viewCount?: string;
  viewRating?: string;
  salesCount: string;
  salesAmount: string;
  itemCount: string;
  href: string;
  categoryHref: string;
};