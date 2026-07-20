import { useEffect, useState } from "react";
import "./App.css";

type BroadcastCategory = "라방" | "홈쇼핑";

/*
export type ProductCategory = {
  cid: number;
  cat_name: string;
};


type DataRes = {
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
*/
/*
type ProductRes = {
  list: LabangProduct[] | HomeShoppingProduct[];
  mask: boolean;
};

type LabangProduct = {
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

type HomeShoppingProduct = {
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

/*
const labangMockData: DataRes[] = [
  {
    rank: 1,
    title: "[노블리타] 골든클레프 18K 신상품 월 1만원대부터~",
    category: "패션잡화",
    date: new Date("2026-07-17T00:00:00"),
    viewCount: 2768,
    salesCount: 3,
    revenue: 12700000,
    itemCount: 34,
  },
  {
    rank: 2,
    title: "갤럭시 워치8ㅣ울트라 & 갤럭시 링 라이브✨",
    category: "디지털/가전",
    date: new Date("2026-07-16T22:58:00"),
    viewCount: 112,
    salesCount: 4,
    revenue: 125000,
    itemCount: 70,
  },
  {
    rank: 3,
    title: "독도사랑의 쇼핑라이브",
    category: "식품",
    date: new Date("2026-07-16T22:29:00"),
    viewCount: 144,
    salesCount: 1,
    revenue: 116000,
    itemCount: 4,
  },
  {
    rank: 4,
    title: "갓잡은 제철 생새우! SNS 인기 1위 화제상품!",
    category: "식품",
    date: new Date("2026-07-16T20:00:00"),
    viewCount: null,
    salesCount: 1,
    revenue: 35800,
    itemCount: 24,
  },
  {
    rank: 5,
    title: "[AI라이브] 쿠쿠 정수기 렌탈 추천 PICK📍",
    category: "디지털/가전",
    date: new Date("2026-07-16T21:00:00"),
    viewCount: 258,
    salesCount: null,
    revenue: null,
    itemCount: 5,
  },
  {
    rank: 6,
    title: "[AI라이브]❤️넵다가져가시오❤️불맛 그대로🔥웅이네오돌뼈🔥",
    category: "식품",
    date: new Date("2026-07-16T22:28:00"),
    viewCount: 69,
    salesCount: null,
    revenue: null,
    itemCount: 9,
  },
  {
    rank: 7,
    title: "삼성 외장하드 특가 라이브✨고용량 슬림한 디자인",
    category: "디지털/가전",
    date: new Date("2026-07-16T23:08:00"),
    viewCount: 23,
    salesCount: null,
    revenue: null,
    itemCount: 14,
  },
  {
    rank: 8,
    title: "자체제작 실크텐셀자켓나왔어요ㅜㅜㅜ공들인",
    category: "패션의류",
    date: new Date("2026-07-16T20:00:00"),
    viewCount: 2514,
    salesCount: null,
    revenue: null,
    itemCount: 0,
  },
  {
    rank: 9,
    title: "[AI라이브] 쿠쿠 정수기 렌탈 추천 PICK📍",
    category: "디지털/가전",
    date: new Date("2026-07-16T23:57:00"),
    viewCount: null,
    salesCount: null,
    revenue: null,
    itemCount: 5,
  },
  {
    rank: 10,
    title: "[누누시크] 얇지만 매끈하게 잡아주는 보정웨어✨",
    category: "패션의류",
    date: new Date("2026-07-16T23:59:00"),
    viewCount: 27,
    salesCount: null,
    revenue: null,
    itemCount: 8,
  },
];

const homeShoppingMockData = [
  {
    rank: 1,
    title: "유피토스 피토프로틴 헤어컬러 기본패키지",
    category: "화장품/미용",
    date: new Date("2026-07-16T23:55:00"),
    viewRating: 5.2,
    salesCount: 4257,
    revenue: 166000000,
    itemCount: 5,
  },
  {
    rank: 2,
    title: "25FW 헤이즈 퀼팅 다운",
    category: "패션의류",
    date: new Date("2026-07-16T22:30:00"),
    viewRating: 4.8,
    salesCount: 4057,
    revenue: 187000000,
    itemCount: 10,
  },
  {
    rank: 3,
    title: "바디프랜드 마사지체어",
    category: "생활/건강",
    date: new Date("2026-07-16T21:00:00"),
    viewRating: 4.5,
    salesCount: 832,
    revenue: 520000000,
    itemCount: 3,
  },
  {
    rank: 4,
    title: "LG 오브제컬렉션 냉장고",
    category: "가전",
    date: new Date("2026-07-16T20:00:00"),
    viewRating: 4.1,
    salesCount: 356,
    revenue: 430000000,
    itemCount: 2,
  },
  {
    rank: 5,
    title: "프리미엄 한우 선물세트",
    category: "식품",
    date: new Date("2026-07-16T19:00:00"),
    viewRating: 3.9,
    salesCount: 2150,
    revenue: 129000000,
    itemCount: 6,
  },
  {
    rank: 6,
    title: "다이슨 에어랩 멀티스타일러",
    category: "뷰티/가전",
    date: new Date("2026-07-16T18:00:00"),
    viewRating: 3.6,
    salesCount: 1240,
    revenue: 310000000,
    itemCount: 4,
  },
  {
    rank: 7,
    title: "여름 린넨 셔츠 패키지",
    category: "패션의류",
    date: new Date("2026-07-16T17:00:00"),
    viewRating: 3.2,
    salesCount: 2980,
    revenue: 89000000,
    itemCount: 8,
  },
  {
    rank: 8,
    title: "정관장 홍삼 건강세트",
    category: "건강식품",
    date: new Date("2026-07-16T16:00:00"),
    viewRating: 2.8,
    salesCount: 1780,
    revenue: 76000000,
    itemCount: 5,
  },
  {
    rank: 9,
    title: "삼성 비스포크 식기세척기",
    category: "가전",
    date: new Date("2026-07-16T15:00:00"),
    viewRating: 2.5,
    salesCount: 420,
    revenue: 210000000,
    itemCount: 2,
  },
  {
    rank: 10,
    title: "아웃도어 캠핑 패키지",
    category: "스포츠/레저",
    date: new Date("2026-07-16T14:00:00"),
    viewRating: 2.1,
    salesCount: 950,
    revenue: 67000000,
    itemCount: 7,
  },
];


export type Product = {
  rank: string;
  title: string;
  platform: string;
  category: string;
  date: string;
  time: string;
  viewCount: string;
  salesCount: string;
  salesAmount: string;
  itemCount: string;
  href: string;
};
*/

//라방바 데이터랩 API 사용하는 방식은 아에 다른 페이지로 분리하자
type Broadcast = {
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

const broadcastCategories: BroadcastCategory[] = ["라방", "홈쇼핑"];

const DOMAIN = "https://live.ecomm-data.com/";

function App() {
  const [selectedBroadcast, setSelectedBroadcast] =
    useState<BroadcastCategory>("라방");
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const url = `http://localhost:8080/api/broadcasts?category=${selectedBroadcast}`;

        //const url = `http://15.165.194.220/api/broadcasts?category=${selectedBroadcast}`;

        //netlify 배포하니 https에서 http 호출 불가하여 netlify proxy 이용
        const url = `/api/broadcasts?category=${selectedBroadcast}`;

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("EXPRESS API 호출 실패");
        }

        const dataRes: Broadcast[] = await response.json();

        setBroadcasts(dataRes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedBroadcast]);

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center">
      <nav className="flex gap-1">
        {broadcastCategories.map((category, i) => (
          <button
            onClick={() => {
              setSelectedBroadcast(category);
            }}
            className={`border-2 p-1 ${
              selectedBroadcast === category &&
              "bg-yellow-200 border-yellow-400"
            }`}
            key={i}
          >
            {category}
          </button>
        ))}
      </nav>

      <table className="table-fixed">
        <thead>
          <tr className="border-b ">
            <th className="p-3 text-left">랭킹</th>
            <th className="p-3 text-left">방송정보</th>
            <th className="p-3 text-left">분류</th>
            <th className="p-3 text-left">방송시간</th>
            <th className="p-3 text-left">
              {selectedBroadcast == "라방" ? "조회수" : "시청률"}
            </th>
            <th className="p-3 text-left">판매량</th>
            <th className="p-3 text-left">매출액</th>
            <th className="p-3 text-left">상품수</th>
          </tr>
        </thead>
        <tbody>
          {broadcasts.map((broadcast, i) => (
            <tr className="border-b" key={i}>
              <td className="p-3">{broadcast.rank}</td>
              <td className="p-3 ">
                <div className=" w-100 truncate">
                  <a href={DOMAIN + broadcast.href}>{broadcast.title}</a>
                </div>
                <div className="text-gray-500">{broadcast.platform}</div>
              </td>
              <td className="p-3">
                <a href={DOMAIN + broadcast.categoryHref}>
                  {broadcast.category}
                </a>
              </td>
              <td className="p-3">
                <div>{broadcast.date}</div>
                <div className="text-gray-500 text-center">
                  {broadcast.time}
                </div>
              </td>
              <td className="p-3">
                {selectedBroadcast === "라방"
                  ? (broadcast.viewCount ?? "-")
                  : !isNaN(Number(broadcast.viewRating))
                    ? `${broadcast.viewRating}%`
                    : (broadcast.viewRating ?? "-")}
              </td>
              <td className="p-3">{broadcast.salesCount}</td>
              <td className="p-3">{broadcast.salesAmount}</td>
              <td className="p-3">{broadcast.itemCount ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default App;
