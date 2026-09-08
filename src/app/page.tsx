/**
 * @name page.tsx
 * @description ViNar Homepage featuring 3D tactile extruded blocks, circular agritech flow, and pilot trial form
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Container,
  Button,
  Badge,
  Card,
} from "@/design-system";
import {
  Navbar,
  Footer,
  Pebble3D,
  ChatbotWidget,
  CircularJourneyMap,
  WeAreTrustedBy,
  OurAwards,
  WePartnerWith,
  HydrogelUsageSteps,
  CustomerStories,
} from "@/components";
import {
  Sprout,
  Droplets,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Bot,
  Recycle,
  CheckCircle2,
  PhoneCall,
  Send,
} from "lucide-react";

export default function HomePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedCropChip, setSelectedCropChip] = useState("Sầu riêng Cai Lậy");

  const CROP_CHIPS = [
    "Sầu riêng Cai Lậy (Tiền Giang)",
    "Cà phê Chư Prông (Gia Lai)",
    "Bưởi da xanh (Bến Tre)",
    "Lúa tôm (Sóc Trăng)",
    "Cây giống vườn ươm",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-surface text-deep-ink">
      {/* Global Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* =========================================================================
            1. Hero Section: 3D Bio-Organic Aesthetic
           ========================================================================= */}
        <section className="relative pt-12 pb-20 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-secondary-moss/15 dark:bg-secondary-moss/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-32 left-8 w-[380px] h-[380px] bg-primary-forest/10 dark:bg-primary-forest/5 rounded-full blur-3xl pointer-events-none" />

          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Core Value Proposition */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider font-mono shadow-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Deep-Tech Circular AgriTech • Net Zero 2050</span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary-forest leading-[1.12]">
                  Tái Sinh Phế Phẩm Nông Nghiệp Thành{" "}
                  <span className="text-secondary-moss">Nguồn Vàng Sinh Học</span>
                </h1>

                <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed font-normal max-w-2xl">
                  Chuyển hóa vỏ cà phê &amp; rơm rạ thành vật liệu ngậm nước
                  sinh học <strong className="text-primary-forest">AgriGel™</strong> và
                  màng bảo vệ <strong className="text-primary-forest">BioBandage™</strong>.
                  Khóa ẩm 21 ngày, giảm 40% nước tưới và tuyệt đối không để lại vi nhựa trong đất.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link href="/san-pham">
                    <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                      Khám Phá Sản Phẩm &amp; Định Lượng
                    </Button>
                  </Link>
                  <a href="#pilot-form">
                    <Button variant="secondary" size="lg">
                      Đăng Ký Nhận Mẫu Thử
                    </Button>
                  </a>
                </div>

                {/* Field Verified Badges */}
                <div className="flex flex-wrap items-center gap-3 pt-4 text-xs font-semibold text-on-surface-variant">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container border border-surface-container-highest">
                    <CheckCircle2 className="w-4 h-4 text-secondary-moss" />
                    Khảo nghiệm 120+ hecta Tây Nguyên &amp; ĐBSCL
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container border border-surface-container-highest">
                    <CheckCircle2 className="w-4 h-4 text-secondary-moss" />
                    100% Thuần sinh học phân rã mùn
                  </span>
                </div>
              </div>

              {/* Right Column: Floating 3D Pebble Composition */}
              <div className="lg:col-span-5 relative flex flex-col gap-6 items-center lg:items-stretch">
                {/* Decorative orbit ring behind the cards */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <svg
                    viewBox="0 0 400 400"
                    className="w-full max-w-[420px] opacity-10 dark:opacity-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="200" cy="200" r="160"
                      fill="none"
                      stroke="#2e5c38"
                      strokeWidth="1.5"
                      strokeDasharray="6 10"
                    />
                    <circle
                      cx="200" cy="200" r="110"
                      fill="none"
                      stroke="#82ac42"
                      strokeWidth="1"
                      strokeDasharray="4 14"
                    />
                    <circle cx="200" cy="40" r="7" fill="#82ac42" />
                    <circle cx="360" cy="200" r="5" fill="#2e5c38" />
                    <circle cx="200" cy="360" r="5" fill="#2e5c38" />
                    <circle cx="40" cy="200" r="7" fill="#82ac42" />
                  </svg>
                </div>

                <div className="relative z-10 animate-float">
                  <div className="overflow-hidden rounded-3xl border-2 border-primary-forest/20 shadow-3d-surface bg-surface-container-lowest p-2 group transition-all duration-300 hover:shadow-2xl">
                    <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-3">
                      <img
                        src="/images/agrigel_water_absorption.jpg"
                        alt="AgriGel™ Sinh Học Hấp Thụ Nước 450x"
                        className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 bg-primary-forest/90 text-white font-mono font-bold text-xs px-2.5 py-1 rounded-full backdrop-blur-md shadow-md">
                        Mô Phỏng 3D Rễ Cây
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="flex items-center gap-2 mb-1">
                        <Droplets className="w-5 h-5 text-secondary-moss" />
                        <h3 className="font-display font-bold text-lg text-primary-forest">AgriGel™ Sinh Học (450×)</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 animate-float-delayed lg:ml-6">
                  <Pebble3D
                    variant="sprout"
                    shape="egg"
                    metric="-40% Nước"
                    title="Tiết Kiệm Chi Phí"
                    subtitle="Giảm tối đa 3 đợt tưới máy dầu, tiết kiệm 2.8 triệu VNĐ chi phí nhiên liệu bơm trên mỗi hecta."
                    icon={<Sprout className="w-6 h-6 text-[#154423]" />}
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================================
            2. 4 Key Metrics Bar (3D Surface Extrusion)
           ========================================================================= */}
        <section className="py-8 bg-surface-container-low border-y border-surface-container-highest">
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="p-6 rounded-3xl bg-surface-container-lowest shadow-3d-surface border border-surface-container-highest flex flex-col justify-between space-y-2">
                <div className="text-xs font-mono font-bold uppercase text-outline">
                  Hấp thụ cực hạn
                </div>
                <div className="font-display font-bold text-3xl sm:text-4xl text-primary-forest">
                  450×
                </div>
                <p className="text-xs text-on-surface-variant font-medium">
                  Trọng lượng tự thân hạt ngậm ẩm
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-surface-container-lowest shadow-3d-surface border border-surface-container-highest flex flex-col justify-between space-y-2">
                <div className="text-xs font-mono font-bold uppercase text-outline">
                  Tiết kiệm đầu vào
                </div>
                <div className="font-display font-bold text-3xl sm:text-4xl text-secondary-moss">
                  -42%
                </div>
                <p className="text-xs text-on-surface-variant font-medium">
                  Lượng nước tưới &amp; phân bón hòa tan
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-surface-container-lowest shadow-3d-surface border border-surface-container-highest flex flex-col justify-between space-y-2">
                <div className="text-xs font-mono font-bold uppercase text-outline">
                  Chống mặn rễ tơ
                </div>
                <div className="font-display font-bold text-3xl sm:text-4xl text-tertiary-timber">
                  &gt; 3‰
                </div>
                <p className="text-xs text-on-surface-variant font-medium">
                  Khóa 88.4% ion Na⁺ &amp; Cl⁻ xâm nhập rễ
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-surface-container-lowest shadow-3d-surface border border-surface-container-highest flex flex-col justify-between space-y-2">
                <div className="text-xs font-mono font-bold uppercase text-outline">
                  Vi nhựa tồn dư
                </div>
                <div className="font-display font-bold text-3xl sm:text-4xl text-primary-forest">
                  0%
                </div>
                <p className="text-xs text-on-surface-variant font-medium">
                  100% tự phân rã thành mùn đen màu mỡ
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================================
            3. Visual Performance Simulation Showcase (Khảo nghiệm đối chứng)
           ========================================================================= */}
        <section className="py-16 bg-surface">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <Badge variant="moss" size="md" icon={<ShieldCheck className="w-4 h-4" />}>
                  Khảo Nghiệm Thực Địa Mùa Khô Hạn
                </Badge>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-forest leading-tight">
                  Mô Phỏng Trực Quan Hiệu Quả Giữ Ẩm Rễ Tơ
                </h2>
                <p className="text-base text-on-surface-variant leading-relaxed">
                  So sánh trực tiếp sự phát triển của bộ rễ và tán lá cây trồng trong điều kiện cắt nước tưới 21 ngày. Với hạt sinh học <strong className="text-primary-forest">AgriGel™ 450×</strong>, vùng rễ luôn được bảo vệ bởi các túi ngậm nước vi xốp, ngăn chặn hoàn toàn hiện tượng cháy rễ tơ và kiệt sức mùa khô.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-surface-container border border-surface-container-highest">
                    <div className="w-8 h-8 rounded-full bg-secondary-moss/20 text-secondary-moss flex items-center justify-center font-bold text-sm">✓</div>
                    <div>
                      <h4 className="font-bold text-sm text-primary-forest">Duy trì độ ẩm đất 68-75%</h4>
                      <p className="text-xs text-on-surface-variant">Giữ ẩm ổn định ngay cả khi nhiệt độ bề mặt đất vượt 38°C.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-surface-container border border-surface-container-highest">
                    <div className="w-8 h-8 rounded-full bg-secondary-moss/20 text-secondary-moss flex items-center justify-center font-bold text-sm">✓</div>
                    <div>
                      <h4 className="font-bold text-sm text-primary-forest">Khóa 88.4% Ion Na⁺ &amp; Cl⁻</h4>
                      <p className="text-xs text-on-surface-variant">Màng bao bọc ngăn chặn muối mặn xâm nhập phá hủy lông hút rễ.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-surface-container-highest bg-surface-container-lowest group">
                  <img
                    src="/images/drought_comparison.jpg"
                    alt="Mô phỏng khảo nghiệm thực địa AgriGel vs Không có AgriGel"
                    className="w-full h-auto object-cover transform transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 inset-x-4 bg-white/85 dark:bg-black/75 backdrop-blur-md p-4 rounded-2xl border border-white/50 dark:border-white/10 shadow-2xl shadow-black/15 text-primary-forest">
                    <span className="font-mono text-xs text-primary-forest dark:text-[#c1ee7c] uppercase font-bold tracking-wider block">
                      Ảnh Mô Phỏng Kết Quả Đối Chứng • ViNar AgriTech
                    </span>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                      Đất không dùng hạt giữ ẩm (bên trái) bị nứt nẻ và héo lá; Đất có AgriGel (bên phải) giữ ẩm tối ưu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================================
            4. Circular Economy Flow (7-Step Interactive Journey Map)
           ========================================================================= */}
        <section className="py-20 bg-surface-container-low border-t border-surface-container-highest">
          <Container>
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
              <Badge variant="timber" size="md" icon={<Recycle className="w-4 h-4" />}>
                Vòng Tuần Hoàn Sinh Học Khép Kín
              </Badge>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary-forest">
                Hành Trình Nông Nghiệp Tuần Hoàn 7 Bước
              </h2>
              {/* <p className="text-base text-on-surface-variant leading-relaxed">
                Từ phụ phẩm rơm rạ, trấu &amp; vỏ cà phê thu mua của bà con đến viên nén sinh học giữ ẩm rễ tơ, bảo vệ cây trồng mùa khô hạn và 100% tái tạo lại độ phì nhiêu cho đất mẹ.
              </p> */}
            </div>

            {/* Interactive 7-Step Circular Journey Map */}
            <CircularJourneyMap />
          </Container>
        </section>

        {/* =========================================================================
            4b. Hydrogel 4-Step Application Pipeline Guide
           ========================================================================= */}
        <HydrogelUsageSteps />

        {/* =========================================================================
            4c. Success Stories & Customer Perspectives (Home & Commercial Agriculture)
           ========================================================================= */}
        <CustomerStories />

        {/* =========================================================================
            5. We Are Trusted By Section (Farms & Cooperatives Social Proof)
           ========================================================================= */}
        <WeAreTrustedBy />

        {/* =========================================================================
            6. Our Awards & Recognition Showcase
           ========================================================================= */}
        <OurAwards />

        {/* =========================================================================
            7. We Partner With Section (Strategic Partners & ESG Impact Funds)
           ========================================================================= */}
        <WePartnerWith />

        {/* =========================================================================
            8. Pilot Application Form Section (Optimized for Farmers)
           ========================================================================= */}
        <section id="pilot-form" className="py-20 bg-surface-container-low border-t border-surface-container-highest">
          <Container>
            <div className="max-w-4xl mx-auto rounded-[2.5rem] bg-primary-forest text-white p-8 sm:p-14 shadow-3d-forest relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-5">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 text-[#c1ee7c] text-xs font-bold uppercase tracking-wider font-mono">
                    Chương Trình Hỗ Trợ Mùa Khô 2025
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
                    Đăng Ký Nhận Gói Dùng Thử Miễn Phí
                  </h2>
                  <p className="text-sm sm:text-base text-[#d1e5d3] leading-relaxed">
                    ViNar gửi tặng gói mẫu AgriGel 500g và hướng dẫn kỹ thuật tận
                    vườn cho bà con tại Tây Nguyên và ĐBSCL. Chuyên viên nông học
                    sẽ liên hệ hỗ trợ trong 24 giờ.
                  </p>
                  <div className="pt-2 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary-moss text-deep-ink flex items-center justify-center font-bold">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#a0d3a5] uppercase font-bold">Hotline kỹ thuật miễn cước</div>
                      <a href="tel:18006828" className="font-mono font-extrabold text-xl text-white">1800 6828</a>
                    </div>
                  </div>
                </div>

                {/* Right Form Card */}
                <div className="lg:col-span-6 p-7 rounded-3xl bg-surface-container-lowest text-deep-ink shadow-xl">
                  {formSubmitted ? (
                    <div className="text-center py-8 space-y-4">
                      <div className="w-14 h-14 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="font-display font-bold text-xl text-primary-forest">
                        Đăng Ký Thành Công!
                      </h4>
                      <p className="text-xs text-on-surface-variant">
                        Kỹ sư ViNar phụ trách vùng sẽ gọi điện tư vấn liều lượng
                        chính xác cho vườn của quý khách.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setFormSubmitted(false)}
                      >
                        Đăng ký gói khác
                      </Button>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setFormSubmitted(true);
                      }}
                      className="space-y-4"
                    >
                      <h3 className="font-display font-bold text-lg text-primary-forest">
                        Thông Tin Đăng Ký
                      </h3>

                      <div>
                        <label className="block text-xs font-bold uppercase text-outline mb-1">
                          Họ và Tên
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Ví dụ: Nguyễn Văn Nông"
                          className="w-full h-11 px-4 rounded-xl bg-surface-container border border-surface-container-highest text-sm focus:outline-none focus:ring-2 focus:ring-primary-forest"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-outline mb-1">
                          Số Điện Thoại / Zalo
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="Ví dụ: 0912 345 678"
                          className="w-full h-11 px-4 rounded-xl bg-surface-container border border-surface-container-highest text-sm focus:outline-none focus:ring-2 focus:ring-primary-forest"
                        />
                      </div>

                      {/* 1-Tap Crop Selection Chips (UX Optimization) */}
                      <div>
                        <label className="block text-xs font-bold uppercase text-outline mb-1.5">
                          Chọn Nhanh Cây Trồng &amp; Vùng Canh Tác
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {CROP_CHIPS.map((chip, idx) => (
                            <button
                              type="button"
                              key={idx}
                              onClick={() => setSelectedCropChip(chip)}
                              className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${selectedCropChip === chip
                                ? "bg-primary-forest text-white border-primary-forest"
                                : "bg-surface-container text-on-surface-variant border-surface-container-highest hover:bg-surface-container-high"
                                }`}
                            >
                              {chip}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <Button
                          variant="secondary"
                          size="md"
                          className="w-full"
                          icon={<Send className="w-4 h-4" />}
                          iconPosition="right"
                        >
                          Gửi Yêu Cầu Nhận Mẫu
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* Global Text Chatbot Widget */}
      <ChatbotWidget />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
