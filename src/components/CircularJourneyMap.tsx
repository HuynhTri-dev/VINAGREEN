/**
 * @name CircularJourneyMap.tsx
 * @description Side-by-Side interactive map with percentage-based image hotspots.
 *   Clicking a step region in the infographic updates the detail panel on the right.
 *   Fully responsive: hotspot positions use %, adapts to any container width.
 */

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Wheat,
  Factory,
  Droplets,
  Cpu,
  Sprout,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface CircularJourneyStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  badge: string;
  highlights: string[];
  /** Hotspot bounding box as % of the image container. */
  hotspot: { top: number; left: number; width: number; height: number };
  /** Tailwind color classes for the detail panel background + border. */
  accentClass: string;
  badgeBgClass?: string;
  /** Optional image to display in the detail panel */
  image?: string;
}

// ---------------------------------------------------------------------------
// Data — hotspot coordinates measured from the generated 1080×1080 infographic.
//   Step 1 circle "1" is near top-centre  → top ~6%, left ~43%
//   Step 2 circle "2" is upper-right       → top ~14%, left ~72%
//   Step 3 circle "3" is mid-right         → top ~42%, left ~80%
//   Step 4 circle "4" is lower-right       → top ~68%, left ~60%
//   Step 5 circle "5" is lower-left        → top ~68%, left ~24%
//   Step 6 circle "6" is mid-left          → top ~42%, left  ~4%
//   Step 7 circle "7" is upper-left        → top ~14%, left ~6%
// ---------------------------------------------------------------------------

export const CIRCULAR_STEPS: CircularJourneyStep[] = [
  {
    stepNumber: 1,
    title: "Tạo Sinh Kế Bền Vững Cho Bà Con",
    subtitle: "Thu mua phụ phẩm vùng cao & ĐBSCL",
    description:
      "Liên kết trực tiếp với các Hợp tác xã thu mua rơm rạ, trấu và vỏ cà phê, giải quyết việc làm và tăng thêm thu nhập ổn định cho nông hộ.",
    icon: <Users className="w-6 h-6" />,
    badge: "Sinh Kế Nông Dân",
    highlights: ["Tăng thu nhập 2.8 – 4.2 tr/tháng", "Bao tiêu phụ phẩm nông nghiệp"],
    hotspot: { top: 2, left: 32, width: 35, height: 26 },
    accentClass: "border-primary-forest/30 bg-primary-forest/5 dark:bg-primary-forest/10 text-deep-ink dark:text-white",
  },
  {
    stepNumber: 2,
    title: "Thu Gom Rơm Rạ & Vỏ Cà Phê",
    subtitle: "Tránh đốt đồng — Zero Open Burning",
    description:
      "Biến những tấn rơm rạ và vỏ cà phê thường bị đốt bỏ gây ô nhiễm không khí thành nguồn nguyên liệu sinh học đầu vào giá trị cao.",
    icon: <Wheat className="w-6 h-6" />,
    badge: "Zero Open Burning",
    highlights: ["Giảm 100% khói bụi đốt đồng", "Tận dụng nguồn nguyên liệu sạch"],
    hotspot: { top: 10, left: 63, width: 33, height: 30 },
    accentClass: "border-primary-forest/30 bg-primary-forest/5 dark:bg-primary-forest/10 text-deep-ink dark:text-white",
  },
  {
    stepNumber: 3,
    title: "Sản Xuất Viên Nén Giữ Nước Sinh Học",
    subtitle: "Chiết xuất Cellulose & Lignin tinh khiết",
    description:
      "Ứng dụng công nghệ sấy nén vi xốp chế tạo viên nén AgriGel™ tích hợp chất dinh dưỡng và phân bón hòa tan nuôi dưỡng rễ cây.",
    icon: <Factory className="w-6 h-6" />,
    badge: "Công Nghệ Tinh Chế",
    highlights: ["Cấu trúc tổ ong vi xốp nano", "Tích hợp sẵn dinh dưỡng N-P-K"],
    hotspot: { top: 38, left: 67, width: 31, height: 26 },
    accentClass: "border-primary-forest/30 bg-primary-forest/5 dark:bg-primary-forest/10 text-deep-ink dark:text-white",
  },
  {
    stepNumber: 4,
    title: "Hỗ Trợ Cây Trồng Chống Hạn Hán",
    subtitle: "Viên nén ngậm nước 450× & nhả ẩm từ từ",
    description:
      "Khi gặp nước, viên nén nở căng ngậm giữ nước gấp 450 lần khối lượng, nuôi dưỡng bộ rễ tơ sống sót và phát triển trong mùa khô hạn.",
    icon: <Droplets className="w-6 h-6" />,
    badge: "Giữ Ẩm Rễ Tơ",
    highlights: ["Khóa ẩm 21 ngày dứt tưới", "Giảm 40% chi phí nhiên liệu bơm"],
    hotspot: { top: 64, left: 51, width: 36, height: 32 },
    accentClass: "border-primary-forest/30 bg-primary-forest/5 dark:bg-primary-forest/10 text-deep-ink dark:text-white",
  },
  {
    stepNumber: 5,
    title: "Tối Ưu Nguồn Lực & Tự Động Hóa",
    subtitle: "Tích hợp nền tảng IoT & Trợ lý AI",
    description:
      "Cảm biến đo độ ẩm đất kết hợp Trợ lý Nông Vụ AI giúp tự động hóa lịch tưới tiêu, tiết kiệm tối đa điện nước và công lao động.",
    icon: <Cpu className="w-6 h-6" />,
    badge: "Nông Nghiệp 4.0",
    highlights: ["Giảm 50% công lao động tưới", "Cảnh báo độ ẩm qua điện thoại"],
    hotspot: { top: 64, left: 14, width: 35, height: 33 },
    accentClass: "border-primary-forest/30 bg-primary-forest/5 dark:bg-primary-forest/10 text-deep-ink dark:text-white",
  },
  {
    stepNumber: 6,
    title: "Phân Huỷ Sinh Học & Cải Tạo Đất",
    subtitle: "100% tự phân rã thành mùn hữu cơ",
    description:
      "Viên nén không chứa hạt nhựa Polymer tổng hợp. Sau hậu vụ tự phân hủy 100% thành mùn đen tơi xốp, cải tạo tầng đất chai cứng bạc màu.",
    icon: <Sprout className="w-6 h-6" />,
    badge: "Tái Sinh Đất Mẹ",
    highlights: ["Không để lại vi nhựa (0%)", "Tăng độ phì nhiêu & xốp đất"],
    hotspot: { top: 38, left: 2, width: 31, height: 28 },
    accentClass: "border-primary-forest/30 bg-primary-forest/5 dark:bg-primary-forest/10 text-deep-ink dark:text-white",
  },
  {
    stepNumber: 7,
    title: "Thu Hoạch Mùa Vụ & Vòng Tuần Hoàn",
    subtitle: "Bao tiêu năng suất & tiếp tục vòng tái sinh",
    description:
      "Cây trồng cho năng suất vượt trội, gia tăng lợi nhuận cho nông dân. Doanh nghiệp tiếp tục trích lợi nhuận thu mua rơm rạ mới — quay lại Bước 1.",
    icon: <TrendingUp className="w-6 h-6" />,
    badge: "Vòng Tuần Hoàn Khép Kín",
    highlights: ["Năng suất tăng 15 – 25%", "Vòng sinh thái khép kín 100%"],
    hotspot: { top: 10, left: 4, width: 32, height: 30 },
    accentClass: "border-primary-forest/30 bg-primary-forest/5 dark:bg-primary-forest/10 text-deep-ink dark:text-white",
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export const CircularJourneyMap: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  const active = CIRCULAR_STEPS.find((s) => s.stepNumber === selectedStep)!;
  const prev = () => setSelectedStep((n) => (n > 1 ? n - 1 : 7));
  const next = () => setSelectedStep((n) => (n < 7 ? n + 1 : 1));

  // Auto-play effect: cycles every 5 seconds, resets if user interacts
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedStep((prevStep) => (prevStep < 7 ? prevStep + 1 : 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [selectedStep]);

  return (
    <div className="w-full flex flex-col gap-6">

      {/* ── Side-by-side grid ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

        {/* ── LEFT: infographic + hotspot overlay ───────────────────────── */}
        <div className="lg:col-span-7">
          {/*
           * HOTSPOT TECHNIQUE:
           * The wrapper is position:relative and overflow:hidden.
           * Each <button> is position:absolute with top/left as percentage
           * so it scales proportionally with the image on every screen size.
           * The image uses object-contain inside a fixed aspect-ratio box
           * (aspect-[1/1]) so the coordinate mapping is stable.
           */}
          <div className="rounded-3xl overflow-hidden border-2 border-surface-container-highest shadow-3d-surface bg-surface-container-lowest p-3">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-surface-container">

              {/* Infographic image */}
              <img
                src="/images/circular_economy.jpg"
                alt="Bản đồ hành trình nông nghiệp tuần hoàn 7 bước ViNar"
                className="w-full h-full object-contain select-none"
                draggable={false}
              />

              {/* Hotspot buttons — percentage-positioned */}
              {CIRCULAR_STEPS.map((step) => {
                const isActive = selectedStep === step.stepNumber;
                return (
                  <button
                    key={step.stepNumber}
                    onClick={() => setSelectedStep(step.stepNumber)}
                    title={step.title}
                    style={{
                      position: "absolute",
                      top: `${step.hotspot.top}%`,
                      left: `${step.hotspot.left}%`,
                      width: `${step.hotspot.width}%`,
                      height: `${step.hotspot.height}%`,
                    }}
                    className={[
                      "rounded-3xl cursor-pointer relative",
                      "transition-all duration-300",
                      "focus:outline-none focus-visible:ring-4 focus-visible:ring-secondary-moss",
                      // Visible border on hover, highly visible when active
                      isActive
                        ? "border-[1px] border-secondary-moss shadow-lg shadow-secondary-moss/20 z-10 scale-[1.02]"
                        : "border-2 border-transparent hover:border-white/60 hover:bg-white/10 hover:shadow-md hover:z-10",
                    ].join(" ")}
                  >
                    {/* Pulsing ripple ring on active step */}
                    {isActive && (
                      <span className="absolute inset-0 rounded-3xl animate-ping border-2 border-secondary-moss/60 pointer-events-none opacity-40" />
                    )}

                    {/* Number label — visually hidden for screen readers */}
                    <span className="sr-only" aria-label={`Bước ${step.stepNumber}`}>
                      {step.stepNumber}
                    </span>
                  </button>
                );
              })}

              {/* Tooltip hint badge */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-primary-forest/80 text-white text-[11px] font-mono font-bold px-3 py-1.5 rounded-full backdrop-blur-sm shadow pointer-events-none whitespace-nowrap">
                Bấm vào số ❶ – ❼ để xem chi tiết
              </div>
            </div>
          </div>

          {/* Mobile compact stepper — shown only below lg */}
          <div className="mt-4 grid grid-cols-7 gap-1.5 lg:hidden">
            {CIRCULAR_STEPS.map((step) => {
              const isActive = selectedStep === step.stepNumber;
              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setSelectedStep(step.stepNumber)}
                  className={[
                    "h-10 rounded-xl font-mono text-xs font-extrabold transition-all cursor-pointer relative",
                    "flex items-center justify-center",
                    isActive
                      ? "bg-primary-forest text-white ring-2 ring-secondary-moss scale-105"
                      : "bg-surface-container text-deep-ink hover:bg-surface-container-high",
                  ].join(" ")}
                >
                  0{step.stepNumber}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT: Dynamic Island detail panel (Equal Height Layout) ──────── */}
        <div className="lg:col-span-5 flex flex-col h-full">
          <div
            className="flex-1 flex flex-col justify-between rounded-3xl border-2 border-surface-container-highest bg-surface-container-lowest p-5 sm:p-6 shadow-3d-surface text-deep-ink transition-all duration-500 relative overflow-hidden h-full"
          >
            {/* Top Light Ambient Glow */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-secondary-moss/15 rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={`detail-content-${active.stepNumber}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex-1 flex flex-col justify-between"
              >
                {/* Fixed Header Section */}
                <div className="space-y-3 shrink-0">
                  {/* Top Capsule Status Bar */}
                  <div className="flex items-center justify-between gap-3 pb-2.5 border-b border-surface-container-highest">
                    <div className="flex items-center gap-2 bg-surface-container px-3 py-1 rounded-full border border-surface-container-highest">
                      <span className="w-2 h-2 rounded-full bg-secondary-moss animate-pulse shadow-[0_0_8px_#52b788]" />
                      <span className="font-mono text-xs font-bold text-primary-forest tracking-wider uppercase">
                        STEP 0{active.stepNumber} <span className="text-outline">/ 07</span>
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary-forest/10 text-primary-forest border border-primary-forest/20 font-mono font-bold text-xs tracking-wide shadow-xs">
                      {active.badge}
                    </span>
                  </div>

                  {/* Title & Icon Header */}
                  <div className="flex items-center gap-3 justify-between">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-primary-forest leading-snug tracking-tight">
                      {active.title}
                    </h3>
                    <div className="p-2.5 rounded-2xl bg-surface-container border border-surface-container-highest text-primary-forest shrink-0 shadow-sm">
                      {active.icon}
                    </div>
                  </div>
                </div>

            {/* Scrollable Middle Content Section */}
            <div className="flex-1 overflow-y-auto my-3 pr-1 space-y-3.5 scrollbar-thin scrollbar-thumb-surface-container-highest">
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {active.description}
              </p>

              {/* Dynamic Image / Placeholder Frame */}
              {active.image ? (
                <div className="w-full rounded-2xl overflow-hidden border border-surface-container-highest shadow-md">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="w-full h-auto object-cover aspect-video"
                  />
                </div>
              ) : (
                <div className="w-full rounded-2xl border border-dashed border-surface-container-highest bg-surface-container/40 flex items-center justify-center p-4 text-xs font-mono text-outline italic aspect-video">
                  [Chỗ để ảnh minh họa cho bước {active.stepNumber}]
                </div>
              )}

              {/* Live Activity Highlights Widget */}
              <div className="p-3.5 rounded-2xl bg-surface-container/60 border border-surface-container-highest space-y-2 shadow-xs">
                {active.highlights.map((h: string, i: number) => (
                  <div key={i} className="flex items-start gap-2 text-xs font-semibold text-primary-forest">
                    <CheckCircle2 className="w-4 h-4 text-secondary-moss shrink-0 mt-0.5" />
                    {h}
                  </div>
                ))}
              </div>
            </div>
            </motion.div>
            </AnimatePresence>

            {/* Fixed Bottom Capsule Navigation */}
            <div className="pt-3 border-t border-surface-container-highest flex items-center justify-between gap-2 shrink-0">
              <button
                onClick={prev}
                className="px-3.5 py-2 rounded-full bg-surface-container hover:bg-surface-container-high border border-surface-container-highest text-xs font-bold text-deep-ink transition-all flex items-center gap-1 cursor-pointer shadow-xs active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
                Quay lại
              </button>

              {/* iOS Segmented Dots */}
              <div className="flex gap-1.5 items-center">
                {CIRCULAR_STEPS.map((s) => (
                  <button
                    key={s.stepNumber}
                    onClick={() => setSelectedStep(s.stepNumber)}
                    className={[
                      "rounded-full transition-all duration-300 cursor-pointer",
                      s.stepNumber === active.stepNumber
                        ? "w-4 h-2 bg-primary-forest shadow-sm"
                        : "w-2 h-2 bg-primary-forest/25 hover:bg-primary-forest/50",
                    ].join(" ")}
                    aria-label={`Bước ${s.stepNumber}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="px-3.5 py-2 rounded-full bg-primary-forest hover:bg-primary-forest/90 text-white font-mono text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shadow-md shadow-primary-forest/20 active:scale-95"
              >
                {active.stepNumber === 7 ? "Về Bước 01" : "Tiếp theo"}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
