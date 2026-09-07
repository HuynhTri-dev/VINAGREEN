/**
 * @name page.tsx
 * @description Journey page — cinematic expedition hero + interactive station navigator
 */

"use client";

import React from "react";
import Link from "next/link";
import { Container, Button, Badge } from "@/design-system";
import { Navbar, Footer, JourneyExpedition, ChatbotWidget, HydrogelUsageSteps, OurAwards } from "@/components";
import { Compass, Award, Users, ArrowRight, Sparkles } from "lucide-react";

export default function JourneyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface text-deep-ink">
      <Navbar />

      <main className="flex-1">
        {/* =========================================================================
            1. Journey Hero — Realistic, inspiring startup milestones
           ========================================================================= */}
        <section className="relative overflow-hidden bg-primary-forest text-white">
          {/* Ambient glows */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-secondary-moss/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-[300px] h-[200px] bg-tertiary-timber/20 rounded-full blur-2xl pointer-events-none" />

          <Container>
            <div className="py-14 sm:py-18 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              {/* Left: Journey Headline & Honest Story */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 text-[#c1ee7c] text-xs font-bold uppercase tracking-wider font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Hành Trình Nghiên Cứu &amp; Khởi Nghiệp ViNar</span>
                </div>

                <div className="space-y-2">
                  <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    Từ Phòng Thí Nghiệm Đến{" "}
                    <span className="text-[#c1ee7c]">Hiện Thực Hóa Ý Tưởng</span>
                  </h1>
                  <p className="text-[#a0d3a5] text-base sm:text-lg font-medium">
                    3 Chặng Đường • Kiên Trì R&amp;D • Khát Vọng Nông Nghiệp Xanh
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#d1e5d3] leading-relaxed max-w-xl">
                  Hành trình của những kỹ sư trẻ đam mê công nghệ sinh thái — bắt đầu từ những mẻ hydrogel đầu tiên trong phòng lab hóa sinh đến việc chứng minh giá trị và nhận được sự công nhận tại các đấu trường Đổi mới Sáng tạo.
                </p>

                {/* Grounded & Meaningful Stats Bar */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/15">
                  <div>
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#c1ee7c]">
                      2023
                    </div>
                    <div className="text-xs text-[#a0d3a5] font-medium mt-0.5">
                      Khởi đầu nghiên cứu
                    </div>
                  </div>
                  <div>
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#c1ee7c]">
                      03 Trạm
                    </div>
                    <div className="text-xs text-[#a0d3a5] font-medium mt-0.5">
                      Cột mốc phát triển
                    </div>
                  </div>
                  <div>
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#c1ee7c]">
                      04+
                    </div>
                    <div className="text-xs text-[#a0d3a5] font-medium mt-0.5">
                      Giải thưởng ĐMST &amp; NCKH
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Clean 3-Stage Milestone Preview Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-md bg-white/10 dark:bg-black/30 backdrop-blur-md rounded-3xl border border-white/20 p-6 sm:p-7 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between border-b border-white/15 pb-3">
                    <span className="font-mono text-xs text-[#c1ee7c] font-bold uppercase tracking-wider">
                      Lộ Trình Phát Triển
                    </span>
                    <span className="text-[11px] text-[#a0d3a5] font-medium">
                      2023 — Hiện tại
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {/* Stage 1 */}
                    <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-9 h-9 rounded-xl bg-secondary-container/20 text-[#c1ee7c] border border-secondary-moss/30 flex items-center justify-center shrink-0">
                        <span className="font-mono font-bold text-xs">01</span>
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-bold text-sm text-white">Khởi Nguồn Từ Lab</h4>
                        <p className="text-xs text-[#d1e5d3] leading-relaxed">
                          Nghiên cứu &amp; tổng hợp hydrogel sinh học từ phế phẩm rơm rạ.
                        </p>
                      </div>
                    </div>

                    {/* Stage 2 */}
                    <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-9 h-9 rounded-xl bg-secondary-container/20 text-[#c1ee7c] border border-secondary-moss/30 flex items-center justify-center shrink-0">
                        <span className="font-mono font-bold text-xs">02</span>
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-bold text-sm text-white">Khẳng Định &amp; Vươn Xa</h4>
                        <p className="text-xs text-[#d1e5d3] leading-relaxed">
                          Thử lửa tại Tech Planter SEA, GreenBio Global &amp; InnoStar.
                        </p>
                      </div>
                    </div>

                    {/* Stage 3 */}
                    <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-9 h-9 rounded-xl bg-secondary-container/20 text-[#c1ee7c] border border-secondary-moss/30 flex items-center justify-center shrink-0">
                        <span className="font-mono font-bold text-xs">03</span>
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-bold text-sm text-white">Hành Trình Mới</h4>
                        <p className="text-xs text-[#d1e5d3] leading-relaxed">
                          Kết nối cộng đồng, tìm kiếm đồng đội &amp; mở rộng ứng dụng.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
        <Container>
          <OurAwards />
        </Container>
      </main>

      <ChatbotWidget />
      <Footer />
    </div>
  );
}
