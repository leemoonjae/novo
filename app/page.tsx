"use client";

import React from "react";
import { motion } from "framer-motion";

// NOVO 심볼 컴포넌트
const NovoSymbol: React.FC<{ size?: number }> = ({ size = 72 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#EAD8A8" stopOpacity="1" />
        <stop offset="45%" stopColor="#8E6BF3" stopOpacity="0.65" />
        <stop offset="100%" stopColor="#121428" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* 3개의 파동 */}
    <circle
      cx="100"
      cy="100"
      r="56"
      stroke="rgba(234,216,168,0.55)"
      strokeWidth="1.5"
    />
    <circle
      cx="100"
      cy="100"
      r="82"
      stroke="rgba(142,107,243,0.5)"
      strokeWidth="1.25"
    />
    <circle
      cx="100"
      cy="100"
      r="108"
      stroke="rgba(255,255,255,0.16)"
      strokeWidth="1"
    />
    {/* 가운데 빛 */}
    <circle cx="100" cy="100" r="60" fill="url(#glow)" />
    <circle cx="100" cy="100" r="4" fill="#FFE7B4" />
  </svg>
);

const StarryBG: React.FC = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(150%_100%_at_50%_0%,#291F40_0%,#141626_55%,#0B0D18_100%)]" />
    <div className="absolute -top-24 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full blur-3xl opacity-40 bg-gradient-to-br from-[#8E6BF3] via-transparent to-[#EAD8A8]" />
  </div>
);

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
    {children}
  </span>
);

export default function Page() {
  return (
    <main className="min-h-screen w-full text-white bg-[#0B0D18]">
      <StarryBG />

      {/* Navbar */}
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5">
        <div className="flex items-center gap-3">
          <NovoSymbol size={36} />
          <span className="font-semibold tracking-wider">NOVO</span>
        </div>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#story" className="text-white/70 hover:text-white">
            Story
          </a>
          <a href="#features" className="text-white/70 hover:text-white">
            Features
          </a>
          <a href="#how" className="text-white/70 hover:text-white">
            How it works
          </a>
          <a href="#cta" className="text-white/70 hover:text-white">
            Start
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative mx-auto mt-4 flex w-full max-w-7xl flex-col items-center px-5 pt-6 pb-16 text-center md:pt-10">
        <Pill>Nova + Note · 빛으로 남는 기록</Pill>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-5 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl"
        >
          NOVO는{" "}
          <span className="text-white/90">
            당신의 이야기가 빛이 되어 남겨지는 기록
          </span>
          입니다.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-2xl text-balance text-white/70 md:text-lg"
        >
          사람은 사라져도, 마음은 남습니다. NOVO는 당신의 마지막 이야기와
          사랑이 따뜻한 빛으로 전해지도록 돕는 플랫폼입니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-col items-center gap-4 md:flex-row"
        >
          <a
            href="#cta"
            className="rounded-xl bg-gradient-to-r from-[#8E6BF3] to-[#EAD8A8] px-6 py-3 text-sm font-semibold text-[#0B0D18] shadow-lg shadow-black/40 transition hover:brightness-110"
          >
            나의 메시지 남기기
          </a>
          <a
            href="#story"
            className="rounded-xl border border-white/15 px-6 py-3 text-sm text-white/80 hover:bg-white/5"
          >
            NOVO 알아보기
          </a>
        </motion.div>

        <div className="mt-14 scale-90 sm:scale-100">
          <NovoSymbol size={160} />
        </div>
      </section>

      {/* Story */}
      <section id="story" className="mx-auto w-full max-w-6xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <h2 className="text-2xl font-semibold md:text-3xl">우리의 이야기</h2>
            <p className="mt-4 text-white/70 md:text-base">
              우리는 죽음을 끝으로 보지 않습니다. 그것은 형태를 바꾼 또 다른
              시작. NOVO는 그 시작의 빛이 되어, 당신의 사랑과 기억이 다음 날의
              위로가 되도록 돕습니다.
            </p>
          </div>
          <div className="md:col-span-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <ul className="space-y-4 text-white/80">
                <li>· Nova(새로운 별): 존재의 빛</li>
                <li>· Note(기록): 남겨진 마음의 흔적</li>
                <li>· NOVO: 빛으로 남는 기록, 다시 시작되는 사랑</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto w-full max-w-6xl px-5 py-12">
        <h2 className="text-2xl font-semibold md:text-3xl">무엇을 제공하나요</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "안전한 보관",
              desc: "메시지를 암호화해 안전하게 보관합니다.",
            },
            {
              title: "조건부 전달",
              desc: "지정한 날짜 혹은 생존 확인 미응답 시 자동 전달.",
            },
            {
              title: "다중 수신자",
              desc: "가족·연인·친구에게 각각 다른 메시지 설정.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto w-full max-w-6xl px-5 py-12">
        <h2 className="text-2xl font-semibold md:text-3xl">작동 방식</h2>
        <ol className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "메시지 작성",
              desc: "텍스트·사진·음성으로 기록을 남깁니다.",
            },
            {
              step: "02",
              title: "전달 조건 설정",
              desc: "날짜/이벤트/생존 확인 미응답 등 조건을 지정합니다.",
            },
            {
              step: "03",
              title: "자동 전달",
              desc: "조건이 충족되면 지정된 수신자에게 따뜻한 빛으로 전송됩니다.",
            },
          ].map((s, i) => (
            <li
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="text-sm text-white/50">{s.step}</div>
              <div className="mt-1 text-lg font-semibold">{s.title}</div>
              <p className="mt-2 text-white/70">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section id="cta" className="relative mx-auto w-full max-w-6xl px-5 py-16">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 p-8 backdrop-blur">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold md:text-3xl">
                빛으로 남는 당신의 이야기
              </h3>
              <p className="mt-3 text-white/70">
                지금 바로 NOVO에 당신의 마음을 남겨보세요.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#"
                  className="rounded-xl bg-gradient-to-r from-[#8E6BF3] to-[#EAD8A8] px-6 py-3 text-sm font-semibold text-[#0B0D18] shadow-lg shadow-black/40 transition hover:brightness-110"
                >
                  시작하기
                </a>
                <a
                  href="#"
                  className="rounded-xl border border-white/15 px-6 py-3 text-sm text-white/80 hover:bg-white/5"
                >
                  데모 보기
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <NovoSymbol size={140} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer – 사업자 정보 포함 */}
      <footer className="mx-auto mt-20 w-full max-w-7xl px-5 py-10 text-sm text-white/60 border-t border-white/10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          {/* 로고 + 슬로건 */}
          <div>
            <div className="flex items-center gap-3">
              <NovoSymbol size={24} />
              <span className="font-semibold">NOVO</span>
            </div>
            <div className="mt-2 text-white/50">빛으로 남는 기록</div>
            <div className="mt-4 text-xs text-white/40">
              © 2025 NOVO. All rights reserved.
            </div>
          </div>

          {/* 사업자 정보 – 여기를 실제 정보로 수정하면 됨 */}
          <div className="text-xs leading-relaxed text-white/50">
            <div>사업자명 : 문</div>
            <div>대표자 : 이문재</div>
            <div>사업자등록번호 : 661-37-01509</div>
            <div>주소 : 광주광역시 북구 동문대로65번길20 202-1803</div>
          </div>

          {/* 링크들 */}
          <div className="flex flex-col gap-2 text-xs md:items-end">
            <a href="#" className="hover:text-white/80">
              이용약관
            </a>
            <a href="#" className="hover:text-white/80">
              개인정보처리방침
            </a>
            <a href="#" className="hover:text-white/80">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
