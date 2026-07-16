import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

type Category = "라방" | "홈쇼핑";

type DataRes = {
  rank: number;
  title: string;
  category: string;
  date: Date;
  viewCount: number | null;
  salesCount: number | null;
  revenue: number | null;
  itemCount: number;
};

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

const homeShoppingMockData: DataRes[] = [
  {
    rank: 1,
    title: "유피토스 피토프로틴 헤어컬러 기본패키지",
    category: "화장품/미용",
    date: new Date("2026-07-16T23:55:00"),
    viewCount: 510,
    salesCount: null,
    revenue: 117000000,
    itemCount: 5,
  },
  {
    rank: 2,
    title: "[최초가 259,000원]25FW 헤이즈 퀼팅 다운",
    category: "패션의류",
    date: new Date("2026-07-16T23:55:00"),
    viewCount: 2308,
    salesCount: null,
    revenue: 111000000,
    itemCount: 10,
  },
  {
    rank: 3,
    title: "[자코모] 바스토 3인 럭스 통가죽 천연면피 소가죽 소파+쿠션1개",
    category: "가구/인테리어",
    date: new Date("2026-07-16T23:38:00"),
    viewCount: 29,
    salesCount: null,
    revenue: 76910000,
    itemCount: 7,
  },
  {
    rank: 4,
    title:
      "[LBL] (런칭가 79,000원)26SS 프렌치린넨 블렌디드 슬리브리스 니트 3종",
    category: "패션의류",
    date: new Date("2026-07-16T23:55:00"),
    viewCount: 1464,
    salesCount: null,
    revenue: 65520000,
    itemCount: 5,
  },
  {
    rank: 5,
    title: "최신상 하퍼스바자 멜라토닝 글로우크림 본품 1병",
    category: "화장품/미용",
    date: new Date("2026-07-16T23:55:00"),
    viewCount: 448,
    salesCount: null,
    revenue: 57240000,
    itemCount: 3,
  },
  {
    rank: 6,
    title: "개국 11주년 특집가! 이가격 최조 [에코로바] 여성 썸머 캐쥬얼화",
    category: "패션잡화",
    date: new Date("2026-07-16T23:50:00"),
    viewCount: 1743,
    salesCount: null,
    revenue: 52120000,
    itemCount: 2,
  },
  {
    rank: 7,
    title: "국내산 직화구이 무뼈닭발 8팩",
    category: "패션의류",
    date: new Date("2026-07-16T23:32:00"),
    viewCount: 1289,
    salesCount: null,
    revenue: 51430000,
    itemCount: 2,
  },
  {
    rank: 8,
    title:
      "(더블/파리여행컬렉션) 라 사본느리 드 니옹 클렌징바 20개+방송에서만 당나귀우유 2개 +쇼핑백 2개",
    category: "화장품/미용",
    date: new Date("2026-07-16T23:55:00"),
    viewCount: 399,
    salesCount: null,
    revenue: 44120000,
    itemCount: 3,
  },
  {
    rank: 9,
    title:
      "[뉴질랜드 직수입] 하커허벌 마누카 로젠지 MGO 514+ 10박스+딥클리어샷 2박스",
    category: "식품",
    date: new Date("2026-07-16T23:45:00"),
    viewCount: 223,
    salesCount: null,
    revenue: 39260000,
    itemCount: 2,
  },
  {
    rank: 10,
    title: "밤로쉐생율1",
    category: "식품",
    date: new Date("2026-07-16T23:42:00"),
    viewCount: 825,
    salesCount: null,
    revenue: 32920000,
    itemCount: 2,
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
