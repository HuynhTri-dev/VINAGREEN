/**
 * @name page.tsx
 * @description Journey page — cinematic expedition hero + interactive station navigator
 */

"use client";

import React from "react";
import Link from "next/link";
import { Container, Button, Badge } from "@/design-system";
import { Navbar, Footer, JourneyExpedition, ChatbotWidget } from "@/components";
import { Compass, Award, Users, ArrowRight, Sparkles } from "lucide-react";

export default function JourneyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface text-deep-ink">
      <Navbar />

      <main className="flex-1">
        {/* =========================================================================
            1. Journey Hero — Cinematic Boarding-Pass Banner
           ========================================================================= */}
        <section className="relative overflow-hidden bg-primary-forest text-white">
          {/* Ambient glows */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-secondary-moss/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-[300px] h-[200px] bg-tertiary-timber/20 rounded-full blur-2xl pointer-events-none" />

          <Container>
            <div className="py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              {/* Left: Boarding-pass copy */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-[#c1ee7c] text-xs font-bold uppercase tracking-widest font-mono">
                  <Compass className="w-3.5 h-3.5 animate-spin-slow" />
                  <span>Expedition Log • ViNar Startup Journey</span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
                  Từ Phòng Lab{" "}
                  <span className="text-[#c1ee7c]">Đến Cánh Đồng</span>
                  <br />
                  <span className="text-[#a0d3a5] text-3xl sm:text-4xl font-normal">
                    4 Trạm • 3 Năm • 120+ Hecta
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-[#d1e5d3] leading-relaxed max-w-xl">
                  Không đơn thuần là câu chuyện thời gian. Đây là chuyến viễn chinh
                  thực địa — đưa công nghệ sinh học bản địa bước ra cứu lấy đất
                  khát và nâng cao sinh kế nông hộ Việt Nam.
                </p>

                {/* Quick journey stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/15">
                  {[
                    { num: "2023", label: "Năm xuất phát" },
                    { num: "4", label: "Trạm dừng chân" },
                    { num: "#1", label: "Giải ĐMST 2024" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="font-display font-extrabold text-2xl text-[#c1ee7c]">
                        {s.num}
                      </div>
                      <div className="text-[11px] text-[#a0d3a5] font-semibold mt-0.5">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Dashed road-map SVG visual */}
              <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
                <svg
                  viewBox="0 0 320 280"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full max-w-xs"
                  aria-hidden="true"
                >
                  {/* Road path */}
                  <path
                    d="M 40 240 Q 80 200, 100 160 Q 130 110, 160 80 Q 200 50, 260 40"
                    fill="none"
                    stroke="#82ac42"
                    strokeWidth="3"
                    strokeDasharray="10 7"
                    strokeLinecap="round"
                  />
                  {/* Station dots */}
                  {[
                    { cx: 40, cy: 240, label: "01", color: "#bbefc0" },
                    { cx: 105, cy: 155, label: "02", color: "#c1ee7c" },
                    { cx: 168, cy: 77, label: "03", color: "#ffdcc6" },
                    { cx: 258, cy: 41, label: "04", color: "#bbefc0" },
                  ].map((s) => (
                    <g key={s.label}>
                      <circle cx={s.cx} cy={s.cy} r="20" fill="#154423" stroke={s.color} strokeWidth="2.5" />
                      <text
                        x={s.cx}
                        y={s.cy + 5}
                        textAnchor="middle"
                        fill={s.color}
                        fontSize="11"
                        fontFamily="monospace"
                        fontWeight="bold"
                      >
                        {s.label}
                      </text>
                    </g>
                  ))}
                  {/* Emoji markers */}
                  <text x="15" y="265" fontSize="22">🌱</text>
                  <text x="263" y="28" fontSize="20">🏆</text>
                </svg>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================================
            2. Interactive Expedition Component
           ========================================================================= */}
        <section className="py-16">
          <Container>
            <JourneyExpedition />
          </Container>
        </section>

        {/* =========================================================================
            3. Awards & Recognition Showcase
           ========================================================================= */}
        <section className="py-16 bg-surface-container-low border-y border-surface-container-highest">
          <Container>
            <div className="max-w-2xl mx-auto text-center mb-12 space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary-moss font-mono">
                <Award className="w-4 h-4" />
                <span>Giải Thưởng &amp; Sự Công Nhận</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-primary-forest">
                Dấu Ấn Trên Các Đấu Trường Khởi Nghiệp
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-3xl bg-surface-container-lowest shadow-3d-surface border border-surface-container-highest space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-secondary-container text-on-secondary-container flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase text-outline">Năm 2024</span>
                <h3 className="font-display font-bold text-lg text-primary-forest">
                  Quán Quân ĐMST Nông Nghiệp Xanh
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Vinh danh giải pháp vật liệu sinh học tuần hoàn giải quyết rơm
                  rạ và hạn mặn tốt nhất cấp quốc gia.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-surface-container-lowest shadow-3d-surface border border-surface-container-highest space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-secondary-container text-on-secondary-container flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase text-outline">Năm 2024</span>
                <h3 className="font-display font-bold text-lg text-primary-forest">
                  Học Bổng Ươm Tạo Deep-Tech
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Được tài trợ gói nghiên cứu chuyển giao công nghệ sinh thái tại
                  Taiwan Innovation Center.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-surface-container-lowest shadow-3d-surface border border-surface-container-highest space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-secondary-container text-on-secondary-container flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase text-outline">Năm 2025</span>
                <h3 className="font-display font-bold text-lg text-primary-forest">
                  Liên Minh HTX Tiên Phong
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Ký kết bao tiêu phế phẩm và phân phối trực tiếp hạt AgriGel tới
                  hơn 5,000 hộ xã viên Tây Nguyên &amp; ĐBSCL.
                </p>
              </div>
            </div>

            <div className="mt-14 text-center">
              <Link href="/product">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Xem Danh Mục Sản Phẩm Đột Phá
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <ChatbotWidget />
      <Footer />
    </div>
  );
}
