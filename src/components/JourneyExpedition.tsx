/**
 * @name JourneyExpedition.tsx
 * @description Interactive expedition timeline component designed as a journey through milestone stations
 */

"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Compass,
  MapPin,
  Award,
  FlaskConical,
  Sprout,
  Factory,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/design-system";

export interface MilestoneStation {
  id: number;
  period: string;
  stationName: string;
  location: string;
  badge: string;
  icon: React.ReactNode;
  headline: string;
  story: string;
  achievements: string[];
  metricTag: string;
  colorVariant: "forest" | "sprout" | "timber";
}

export const JOURNEY_STATIONS: MilestoneStation[] = [
  {
    id: 1,
    period: "Quý 1 – Quý 4 / 2023",
    stationName: "Trạm 01: Phòng Lab Nghiên Cứu",
    location: "Khu Công nghệ Cao, TP. Thủ Đức",
    badge: "R&D FOUNDATION",
    icon: <FlaskConical className="w-6 h-6 text-[#bbefc0]" />,
    headline: "Đột Phá Tách Chiết Cellulose Từ Phụ Phẩm Bã Mía & Vỏ Cà Phê",
    story:
      "Trước vấn nạn đốt đồng khói bụi và hạn mặn, nhóm kỹ sư trẻ bắt đầu hành trình từ phòng thí nghiệm hóa sinh, tổng hợp thành công màng hydrogel polysaccharide có khả năng giữ nước 450 lần khối lượng tự thân.",
    achievements: [
      "Tổng hợp thành công 12 công thức polymer sinh học thân thiện môi trường",
      "Đăng ký bản quyền sở hữu trí tuệ quy trình tinh chế cellulose không hóa chất",
      "Đạt chuẩn phòng lab kiểm định an toàn sinh học TRL 4",
    ],
    metricTag: "450× Khả Năng Ngậm Nước",
    colorVariant: "forest",
  },
  {
    id: 2,
    period: "Quý 1 – Quý 2 / 2024",
    stationName: "Trạm 02: Khảo Nghiệm Thực Địa Đồng Ruộng",
    location: "Gia Lai (Tây Nguyên) & Cai Lậy (Tiền Giang)",
    badge: "FIELD TRIAL SUCCESS",
    icon: <Sprout className="w-6 h-6 text-[#154423]" />,
    headline: "Cứu Hạn Cho 120 Hecta Cà Phê & Vườn Sầu Riêng Nuôi Trái",
    story:
      "Đưa sản phẩm từ phòng lab cắm rễ vào đất bazan khô kiệt và vùng đất phù sa nhiễm mặn 2.8‰. Hạt AgriGel chứng minh giữ ẩm 21 ngày dứt tưới, giúp nhà vườn tiết kiệm 40% nước và giảm 34.5% tỷ lệ rụng trái non.",
    achievements: [
      "Khảo nghiệm đối chứng trên 80 hecta cà phê vối tại Chư Prông, Gia Lai",
      "Bảo vệ thành công 40 hecta sầu riêng Ri6 trước đợt hạn mặn lịch sử 2024",
      "Tiết kiệm 2.800.000 VNĐ chi phí dầu bơm tưới trên mỗi hecta",
    ],
    metricTag: "120+ Hecta Thực Địa",
    colorVariant: "sprout",
  },
  {
    id: 3,
    period: "Quý 3 – Quý 4 / 2024",
    stationName: "Trạm 03: Đấu Trường Khởi Nghiệp & Ươm Tạo",
    location: "TP. Hồ Chí Minh & Hà Nội",
    badge: "INNOVATION AWARDS",
    icon: <Award className="w-6 h-6 text-[#ffdcc6]" />,
    headline: "Vinh Danh Giải Nhất Đổi Mới Sáng Tạo Nông Nghiệp Bền Vững",
    story:
      "Giải pháp kinh tế tuần hoàn của ViNar được các quỹ đầu tư ESG và chuyên gia nông nghiệp đánh giá cao nhờ tính khả thi thực tế, giải quyết đồng thời bài toán rác thải và biến đổi khí hậu.",
    achievements: [
      "Quán quân cuộc thi Khởi nghiệp Đổi mới sáng tạo Nông nghiệp xanh 2024",
      "Được tài trợ gói ươm tạo Deep-tech và kết nối viện nghiên cứu Đài Loan",
      "Ký kết hợp tác chiến lược với 6 Hợp tác xã Nông nghiệp công nghệ cao",
    ],
    metricTag: "Top 1 Innovation ESG",
    colorVariant: "timber",
  },
  {
    id: 4,
    period: "2025 – Tầm nhìn 2026",
    stationName: "Trạm 04: Xưởng Sản Xuất Pilot & Mở Rộng Thị Trường",
    location: "Trạm Khảo Nghiệm & Xưởng Sản Xuất Vùng",
    badge: "COMMERCIAL EXPANSION",
    icon: <Factory className="w-6 h-6 text-[#bbefc0]" />,
    headline: "Quy Chuẩn Hóa Dây Chuyền Pilot & Phủ Sóng Mạng Lưới Khuyến Nông",
    story:
      "Hiện thực hóa xưởng sản xuất bán công nghiệp công suất 15 tấn/tháng, triển khai Trợ lý Nông Vụ AI hỗ trợ bà con canh tác thông minh, sẵn sàng vươn ra thị trường Đông Nam Á.",
    achievements: [
      "Vận hành dây chuyền sấy nén sinh học tiêu chuẩn ISO 14044 LCA",
      "Tích hợp trợ lý tư vấn nông vụ AI phục vụ miễn phí hơn 5,000 nông hộ",
      "Đặt mục tiêu giảm phát thải 680,000 tấn CO2e tương đương vào 2030",
    ],
    metricTag: "15 Tấn/Tháng Công Suất",
    colorVariant: "forest",
  },
];

export const JourneyExpedition: React.FC = () => {
  const [activeStationIndex, setActiveStationIndex] = useState(0);

  const activeStation = JOURNEY_STATIONS[activeStationIndex];

  const handleNext = () => {
    setActiveStationIndex((prev) =>
      prev < JOURNEY_STATIONS.length - 1 ? prev + 1 : prev
    );
  };

  const handlePrev = () => {
    setActiveStationIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  /** Progress percentage across all stations */
  const progressPct = Math.round(
    (activeStationIndex / (JOURNEY_STATIONS.length - 1)) * 100
  );

  return (
    <div className="w-full flex flex-col space-y-8">
      {/* Station Compass & Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-surface-container border border-surface-container-highest">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-forest text-white flex items-center justify-center shadow-md">
            <Compass className="w-5 h-5 text-secondary-moss animate-spin-slow" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-secondary-moss">
              Lộ Trình Chuyến Đi Khởi Nghiệp
            </div>
            <div className="font-display font-bold text-lg text-primary-forest">
              Trạm {activeStationIndex + 1} / {JOURNEY_STATIONS.length}:{" "}
              {activeStation.stationName}
            </div>
          </div>
        </div>

        {/* Navigation Step Buttons */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrev}
            disabled={activeStationIndex === 0}
            icon={<ChevronLeft className="w-4 h-4" />}
          >
            Trạm Trước
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={handleNext}
            disabled={activeStationIndex === JOURNEY_STATIONS.length - 1}
            icon={<ChevronRight className="w-4 h-4" />}
            iconPosition="right"
          >
            {activeStationIndex === JOURNEY_STATIONS.length - 1
              ? "Hoàn Tất Lộ Trình ✓"
              : "Tiếp Tục Chuyến Đi"}
          </Button>
        </div>
      </div>

      {/* Station Expedition Progress Track (Interactive Station Nodes) */}
      <div className="relative py-4">
        {/* Progress percentage label */}
        <div className="absolute -top-1 right-0 text-[11px] font-mono font-bold text-secondary-moss">
          {progressPct}% Hoàn thành
        </div>

        {/* Connection Trail Line */}
        <div className="absolute top-1/2 -translate-y-1/2 inset-x-8 h-2 bg-surface-container-highest rounded-full z-0 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary-forest to-secondary-moss transition-all duration-500 ease-out"
            style={{
              width: `${progressPct}%`,
            }}
          />
        </div>

        {/* Stations Nodes */}
        <div className="relative z-10 grid grid-cols-4 gap-2">
          {JOURNEY_STATIONS.map((station, idx) => {
            const isPassed = idx <= activeStationIndex;
            const isCurrent = idx === activeStationIndex;

            return (
              <button
                key={station.id}
                onClick={() => setActiveStationIndex(idx)}
                className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
              >
                {/* Node Pill */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                    isCurrent
                      ? "bg-primary-forest text-white ring-4 ring-secondary-moss scale-110 animate-glow-pulse"
                      : isPassed
                      ? "bg-secondary-moss text-white hover:scale-105"
                      : "bg-surface-container-high text-outline hover:bg-surface-container-highest"
                  }`}
                >
                  <span className="font-display font-extrabold text-sm sm:text-base">
                    0{station.id}
                  </span>
                </div>

                <div className="mt-3 hidden sm:flex flex-col items-center">
                  <span
                    className={`text-xs font-bold transition-colors ${
                      isCurrent
                        ? "text-primary-forest dark:text-secondary-moss"
                        : "text-outline"
                    }`}
                  >
                    {station.period.split("/")[1] || station.period}
                  </span>
                  <span className="text-[11px] text-on-surface-variant font-medium max-w-[120px] truncate">
                    {station.location.split("(")[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Station Detail Card — key forces remount → triggers fade-slide animation */}
      <div
        key={`station-${activeStation.id}`}
        className="w-full p-8 sm:p-12 rounded-[2.5rem] bg-surface-container-lowest shadow-3d-surface border border-surface-container-highest relative overflow-hidden animate-fade-slide-up"
      >
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Station Narrative */}
          <div className="space-y-5 max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-extrabold tracking-wider uppercase font-mono">
                {activeStation.badge}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-bold text-tertiary-timber">
                <Calendar className="w-3.5 h-3.5" />
                {activeStation.period}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-outline">
                <MapPin className="w-3.5 h-3.5 text-secondary-moss" />
                {activeStation.location}
              </span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-primary-forest leading-snug">
              {activeStation.headline}
            </h3>

            <p className="text-base text-deep-ink/80 leading-relaxed">
              {activeStation.story}
            </p>

            {/* Key Achievements Checklist */}
            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-primary-forest">
                Cột mốc thực hiện:
              </div>
              {activeStation.achievements.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-on-surface-variant">
                  <CheckCircle2 className="w-4 h-4 text-secondary-moss shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Station Visual Card Indicator */}
          <div className="w-full lg:w-72 shrink-0 p-6 rounded-3xl bg-surface-container border border-surface-container-highest shadow-inner flex flex-col justify-between space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-primary-forest flex items-center justify-center shadow-md">
              {activeStation.icon}
            </div>

            <div>
              <div className="text-xs font-mono font-bold uppercase text-outline">
                Chỉ số ấn tượng
              </div>
              <div className="font-display font-bold text-2xl text-primary-forest mt-1">
                {activeStation.metricTag}
              </div>
            </div>

            <div className="pt-4 border-t border-surface-container-highest text-xs text-on-surface-variant flex items-center justify-between">
              <span>Trạng thái trạm:</span>
              <span className="font-bold text-secondary-moss">Đã hoàn thành</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
