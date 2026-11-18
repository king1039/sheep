import { useState } from "react";

const actions = [
  { label: "喂食", icon: "🍎", color: "bg-[#fff1d8]", message: "软洋羊开心地吃了一口！" },
  { label: "摸头", icon: "❤️", color: "bg-[#fde9e4]", message: "软洋羊舒服地眯起了眼睛。" },
  { label: "聊天", icon: "💬", color: "bg-[#eaf2e4]", message: "软洋羊：今天也见到你啦！" },
  { label: "任务", icon: "⭐", color: "bg-[#f3eddf]", message: "今天还有 3 个小任务等你来看看。" },
];

const navigation = [
  { label: "牧场", icon: "🏡" },
  { label: "日常", icon: "🗓️" },
  { label: "我的", icon: "🐑" },
];

function App() {
  const [activeNav, setActiveNav] = useState("牧场");
  const [notice, setNotice] = useState("");
  const [imageFailed, setImageFailed] = useState(false);

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2200);
  };

  return (
    <div className="min-h-screen bg-[#eee8df] text-cocoa sm:flex sm:justify-center">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[430px] flex-col overflow-hidden bg-cream shadow-[0_0_50px_rgba(74,58,39,0.12)]">
        <header className="flex items-center justify-between px-6 pb-3 pt-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-butter text-2xl shadow-sm">
              ☁️
            </div>
            <div>
              <p className="text-[17px] font-bold tracking-wide">软洋羊</p>
              <p className="mt-0.5 text-xs text-[#9a8f81]">慢慢牧场</p>
            </div>
          </div>
          <button
            aria-label="更多设置"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-[#8b7b68] shadow-sm transition hover:bg-[#fff1d8] active:scale-95"
            onClick={() => showNotice("牧场设置正在准备中")}
          >
            ⋯
          </button>
        </header>

        <main className="flex-1 px-5 pb-5">
          <section
            aria-label="宠物信息"
            className="rounded-[24px] border border-[#f2e8d9] bg-white/90 px-5 py-4 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-extrabold tracking-wide">软洋羊</h1>
                <p className="mt-1 text-xs text-[#9a8f81]">今天也一起慢慢长大</p>
              </div>
              <span className="rounded-full bg-[#fff1d8] px-3 py-1.5 text-xs font-bold text-[#9b7131]">
                Lv.3
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="font-semibold text-[#766b5e]">成长经验</span>
              <span className="tabular-nums text-[#9a8f81]">68 / 100</span>
            </div>
            <div
              aria-label="经验进度 68%"
              aria-valuemax={100}
              aria-valuemin={0}
              aria-valuenow={68}
              className="mt-2 h-2.5 overflow-hidden rounded-full bg-[#f3eee6]"
              role="progressbar"
            >
              <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-[#f6cc78] to-[#efb84d]" />
            </div>
          </section>

          <section aria-label="软洋羊的牧场" className="relative mt-4">
            <div className="relative flex h-[330px] flex-col items-center justify-center overflow-hidden rounded-[32px] bg-gradient-to-b from-[#fff3dc] via-[#fff8e9] to-[#e9f1df]">
              <span aria-hidden="true" className="cloud cloud-one">☁</span>
              <span aria-hidden="true" className="cloud cloud-two">☁</span>
              <span aria-hidden="true" className="absolute left-7 top-[48%] text-xl opacity-80">✿</span>
              <span aria-hidden="true" className="absolute right-8 top-[44%] text-lg opacity-70">✿</span>
              <span aria-hidden="true" className="absolute bottom-9 left-[18%] text-sm">🌱</span>
              <span aria-hidden="true" className="absolute bottom-8 right-[17%] text-sm">🌱</span>

              <button
                aria-label="摸摸软洋羊"
                className="pet-image-wrap relative z-10 mt-2 rounded-[38px] p-2 transition-transform duration-300 hover:scale-[1.03] active:scale-95"
                onClick={() => showNotice("软洋羊：被摸摸的感觉真好！")}
              >
                {imageFailed ? (
                  <span
                    aria-label="软洋羊"
                    className="flex h-[240px] w-[240px] items-center justify-center rounded-[32px] bg-[#fffaf2] text-[150px] shadow-[0_16px_30px_rgba(95,72,41,0.13)] sm:h-[260px] sm:w-[260px]"
                    role="img"
                  >
                    🐑
                  </span>
                ) : (
                  <img
                    alt="软洋羊的占位形象"
                    className="h-[240px] w-[240px] rounded-[32px] object-cover shadow-[0_16px_30px_rgba(95,72,41,0.13)] sm:h-[260px] sm:w-[260px]"
                    height="280"
                    onError={() => setImageFailed(true)}
                    src="https://placehold.co/280x280"
                    width="280"
                  />
                )}
              </button>

              <div className="relative z-10 -mt-1 rounded-full border border-white/80 bg-white/90 px-5 py-2 text-sm font-semibold text-[#746653] shadow-sm">
                今天也见到你啦
              </div>
              <span aria-hidden="true" className="absolute bottom-5 text-2xl">🌼</span>
            </div>
          </section>

          <section aria-label="宠物状态" className="mt-4 grid grid-cols-2 gap-3">
            <StatusCard
              icon="♡"
              label="亲密度"
              value={68}
              barColor="bg-[#ef9e9a]"
              iconColor="text-[#e88f91]"
            />
            <StatusCard
              icon="☺"
              label="心情值"
              value={82}
              barColor="bg-[#a9c89a]"
              iconColor="text-[#88ad78]"
            />
          </section>

          <section aria-label="快捷互动" className="mt-4 grid grid-cols-2 gap-3">
            {actions.map((action) => (
              <button
                key={action.label}
                className={`flex min-h-[58px] items-center gap-3 rounded-[20px] border border-white/80 ${action.color} px-4 py-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.98]`}
                onClick={() => showNotice(action.message)}
              >
                <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-lg">
                  {action.icon}
                </span>
                <span className="text-sm font-bold text-[#655a4d]">{action.label}</span>
                <span aria-hidden="true" className="ml-auto text-[#b3a797]">›</span>
              </button>
            ))}
          </section>
        </main>

        <nav
          aria-label="底部导航"
          className="sticky bottom-0 z-20 grid grid-cols-3 border-t border-[#f0e7dc] bg-[#fffdf9]/95 px-5 pb-[max(12px,env(safe-area-inset-bottom))] pt-2 backdrop-blur"
        >
          {navigation.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <button
                key={item.label}
                aria-current={isActive ? "page" : undefined}
                className={`flex flex-col items-center gap-1 rounded-xl py-1 text-[11px] transition ${
                  isActive ? "font-bold text-[#a77938]" : "text-[#a59a8b]"
                }`}
                onClick={() => {
                  setActiveNav(item.label);
                  if (item.label !== "牧场") showNotice(`${item.label}页面正在准备中`);
                }}
              >
                <span className={`flex h-7 w-10 items-center justify-center rounded-full text-lg ${isActive ? "bg-[#fff1d8]" : ""}`}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {notice && (
          <div
            aria-live="polite"
            className="fixed bottom-24 left-1/2 z-30 max-w-[calc(100vw-40px)] -translate-x-1/2 rounded-full bg-[#51483f]/90 px-5 py-3 text-center text-sm text-white shadow-lg sm:absolute"
            role="status"
          >
            {notice}
          </div>
        )}
      </div>
    </div>
  );
}

type StatusCardProps = {
  icon: string;
  label: string;
  value: number;
  barColor: string;
  iconColor: string;
};

function StatusCard({ icon, label, value, barColor, iconColor }: StatusCardProps) {
  return (
    <div className="rounded-[22px] border border-[#f2e8d9] bg-white px-4 py-3.5 shadow-soft">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className={`text-lg leading-none ${iconColor}`}>{icon}</span>
          <span className="text-xs font-semibold text-[#857a6d]">{label}</span>
        </div>
        <span className="text-sm font-extrabold tabular-nums text-[#5b5045]">{value}</span>
      </div>
      <div
        aria-label={`${label} ${value}%`}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={value}
        className="mt-3 h-2 overflow-hidden rounded-full bg-[#f3eee6]"
        role="progressbar"
      >
        <div className={`h-full rounded-full ${barColor}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export default App;
