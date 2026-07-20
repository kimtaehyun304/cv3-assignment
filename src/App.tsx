import { useEffect, useState } from "react";
import "./App.css";
import type { Broadcast, BroadcastCategory } from "./type";

const broadcastCategories: BroadcastCategory[] = ["라방", "홈쇼핑"];

const DOMAIN = "https://live.ecomm-data.com/";

function App() {
  const [selectedBroadcast, setSelectedBroadcast] =
    useState<BroadcastCategory>("라방");
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //express를 로컬에서 실행할 경우
        //const url = `http://localhost:8080/api/broadcasts?category=${selectedBroadcast}`;

        //netlify 배포하면 https인데 express 서버가 http라서 api 호출시 에러 발생
        //netlift 프록시 기능으로 (로컬에서 npm start하면 netlfiy 프록시 안되니 주의)
        const url = import.meta.env.DEV
          ? `http://15.165.194.220/api/broadcasts?category=${selectedBroadcast}`
          : `/api/broadcasts?category=${selectedBroadcast}`;

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
        alert("API 호출 실패");
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
