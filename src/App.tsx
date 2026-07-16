import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

type Category = "라방" | "홈쇼핑";

type DataRes = {
  rank: number;
  title: string;
  platform: string;
  category: string;
  date: Date;
  viewCount: number;
  salesCount: number;
  revenue: number;
  itemCount: number;
};

const labangMockData: DataRes[] = [
  {
    rank: 1,
    title: "[AI]⭐삼성 청소기, 에어컨⭐ 삼성이 선물하는 스마트 라이프",
    platform: "네이버쇼핑LIVE",
    category: "디지털/가전",
    date: new Date("2026-07-16T22:00:00"),
    viewCount: 12840,
    salesCount: 428,
    revenue: 25430000,
    itemCount: 52,
  },
  {
    rank: 2,
    title: "[Live추가적립] LG전자 에어컨·냉장고 AI 할인혜택 안내 라이브",
    platform: "네이버쇼핑LIVE",
    category: "디지털/가전",
    date: new Date("2026-07-16T21:59:00"),
    viewCount: 11320,
    salesCount: 381,
    revenue: 31750000,
    itemCount: 44,
  },
  {
    rank: 3,
    title: "💥삼성 에어컨 냉장고 김치냉장고 키친핏 세트 Live사은품🎁[AI]",
    platform: "네이버쇼핑LIVE",
    category: "디지털/가전",
    date: new Date("2026-07-16T22:02:00"),
    viewCount: 13980,
    salesCount: 462,
    revenue: 38980000,
    itemCount: 46,
  },
  {
    rank: 4,
    title: "[AI]무더위주의🚨신일 서큘레이터 선풍기로 냉방효율UP⤴️",
    platform: "네이버쇼핑LIVE",
    category: "디지털/가전",
    date: new Date("2026-07-16T22:08:00"),
    viewCount: 8640,
    salesCount: 215,
    revenue: 8640000,
    itemCount: 41,
  },
  {
    rank: 5,
    title: "다시보는 윤혜진 찐애정템🩷플리터샵 해머드볼",
    platform: "CJ온스타일",
    category: "생활/건강",
    date: new Date("2026-07-16T23:00:00"),
    viewCount: 2740,
    salesCount: 89,
    revenue: 3120000,
    itemCount: 4,
  },
  {
    rank: 6,
    title: "[AI라이브] 캐리어 에어컨으로 시원하게, 제습기로 쾌적하게!",
    platform: "네이버쇼핑LIVE",
    category: "디지털/가전",
    date: new Date("2026-07-16T22:01:00"),
    viewCount: 5920,
    salesCount: 176,
    revenue: 14280000,
    itemCount: 18,
  },
  {
    rank: 7,
    title: "7/16 SALE 라이브 💌",
    platform: "네이버쇼핑LIVE",
    category: "패션의류",
    date: new Date("2026-07-16T22:17:00"),
    viewCount: 9250,
    salesCount: 324,
    revenue: 9720000,
    itemCount: 18,
  },
  {
    rank: 8,
    title: "[케네스레이디] 26SS 하객/데이트룩 ~58%▼",
    platform: "현대Hmall 쇼라",
    category: "패션의류",
    date: new Date("2026-07-16T23:00:00"),
    viewCount: 4810,
    salesCount: 147,
    revenue: 6850000,
    itemCount: 28,
  },
  {
    rank: 9,
    title: "[AI Live] LG그램 프로 & 그램북 노트북 14/15/16/17형",
    platform: "네이버쇼핑LIVE",
    category: "디지털/가전",
    date: new Date("2026-07-16T22:00:00"),
    viewCount: 7430,
    salesCount: 238,
    revenue: 28650000,
    itemCount: 29,
  },
  {
    rank: 10,
    title: "💖 삼성전자 💟 비즈니스 UHD TV 예약 판매",
    platform: "네이버쇼핑LIVE",
    category: "디지털/가전",
    date: new Date("2026-07-16T22:02:00"),
    viewCount: 3680,
    salesCount: 102,
    revenue: 17340000,
    itemCount: 15,
  },
];

const homeShoppingMockData: DataRes[] = [
  {
    rank: 1,
    title:
      "한화손보 유방·갑상선암 추가진단비플랜(시그니처 여성건강보험4.0)(DATA)",
    platform: "현대홈쇼핑 플러스샵",
    category: "여가/생활편의",
    date: new Date("2026-07-16T22:40:00"),
    viewCount: 1250,
    salesCount: 18,
    revenue: 3240000,
    itemCount: 1,
  },
  {
    rank: 2,
    title:
      "925실버 이태리 트위스트 볼 2줄 목걸이+테니스팔찌+블로썸목걸이+귀걸이 3종세트",
    platform: "CJ온스타일",
    category: "패션잡화",
    date: new Date("2026-07-16T22:55:00"),
    viewCount: 5320,
    salesCount: 246,
    revenue: 9840000,
    itemCount: 8,
  },
  {
    rank: 3,
    title: "[공식수입정품] 토트백 (BXG45076)",
    platform: "롯데홈쇼핑",
    category: "패션의류",
    date: new Date("2026-07-16T22:50:00"),
    viewCount: 4860,
    salesCount: 192,
    revenue: 15360000,
    itemCount: 7,
  },
  {
    rank: 4,
    title: "게스 언더웨어 26SS 에어슬림젤리 브라팬티 4세트 + 세컨팬티 4종",
    platform: "GS홈쇼핑",
    category: "패션의류",
    date: new Date("2026-07-16T22:55:00"),
    viewCount: 3540,
    salesCount: 137,
    revenue: 6713000,
    itemCount: 1,
  },
  {
    rank: 5,
    title: "산지애 아삭아삭 햇복숭아 총 9kg (3kg*3box)",
    platform: "GS홈쇼핑 마이샵",
    category: "식품",
    date: new Date("2026-07-16T22:38:00"),
    viewCount: 6120,
    salesCount: 321,
    revenue: 5778000,
    itemCount: 2,
  },
  {
    rank: 6,
    title: "[캐롤프랑크/최초공개] 엘릭시르 앰플 클렌저 이찬석패키지",
    platform: "현대홈쇼핑",
    category: "화장품/미용",
    date: new Date("2026-07-16T22:55:00"),
    viewCount: 4380,
    salesCount: 174,
    revenue: 8526000,
    itemCount: 2,
  },
  {
    rank: 7,
    title:
      "[방송에서만기초12종] 최신상 AHC 프라임 엑스퍼트 풀기초 3세트 (+캡쳐3종)",
    platform: "홈앤쇼핑",
    category: "화장품/미용",
    date: new Date("2026-07-16T22:55:00"),
    viewCount: 5290,
    salesCount: 263,
    revenue: 11046000,
    itemCount: 1,
  },
  {
    rank: 8,
    title:
      "★특가★[마노아] 세탁세제 2.5리터 8통 X 섬유 유연제 2.5리터 2통 (총 10통)",
    platform: "공영쇼핑",
    category: "생활/건강",
    date: new Date("2026-07-16T22:50:00"),
    viewCount: 3920,
    salesCount: 205,
    revenue: 4920000,
    itemCount: 1,
  },
  {
    rank: 9,
    title: "한일이동식에어컨",
    platform: "NS홈쇼핑",
    category: "디지털/가전",
    date: new Date("2026-07-16T22:50:00"),
    viewCount: 4670,
    salesCount: 98,
    revenue: 24500000,
    itemCount: 3,
  },
  {
    rank: 10,
    title:
      "[방송에서만 이구성이가격] 파나소닉 제트워셔 NEW포터블 무선 구강세정기 1+1SET(DJ11)",
    platform: "신세계쇼핑",
    category: "디지털/가전",
    date: new Date("2026-07-16T22:36:00"),
    viewCount: 3510,
    salesCount: 142,
    revenue: 7100000,
    itemCount: 3,
  },
];

const categories: Category[] = ["라방", "홈쇼핑"];

function App() {
  const [toggle, setToggle] = useState<Category>("라방");
  const [products, setProducts] = useState<DataRes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (toggle == "라방") setProducts(labangMockData);
        else setProducts(homeShoppingMockData);

        return;

        const response = await fetch("https://example.com/api/products");

        if (!response.ok) {
          throw new Error("API 호출 실패");
        }

        const dataRes: DataRes[] = await response.json();
        setProducts(dataRes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [toggle]);

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center">
      <nav className="flex gap-1">
        {categories.map((category, i) => (
          <button
            onClick={() => {
              setToggle(category);
            }}
            className={`border-2 p-1 ${
              toggle === category && "bg-yellow-200 border-yellow-400"
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
            <th className="p-3 text-left">조회수</th>
            <th className="p-3 text-left">판매량</th>
            <th className="p-3 text-left">매출액</th>
            <th className="p-3 text-left">상품수</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr className="border-b">
              <td className="p-3">{product.rank}</td>
              <td className="p-3 ">
                <div className=" w-100 truncate"> {product.title}</div>
              </td>
              <td className="p-3">{product.category}</td>
              <td className="p-3">{product.date.toLocaleString()}</td>
              <td className="p-3">{product.viewCount}</td>
              <td className="p-3">{product.salesCount}</td>
              <td className="p-3">{product.revenue}</td>
              <td className="p-3">{product.itemCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default App;
