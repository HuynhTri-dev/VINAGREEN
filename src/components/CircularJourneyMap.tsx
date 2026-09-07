/**
 * @name CircularJourneyMap.tsx
 * @description 7-Step Circular Economy Journey Map component matching real agricultural workflow
 */

"use client";

import React, { useState } from "react";
import {
  Users,
  Wheat,
  Factory,
  Droplets,
  Cpu,
  Sprout,
  TrendingUp,
  CheckCircle2,
  Recycle,
} from "lucide-react";

export interface JourneyStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  badge: string;
  highlights: string[];
  color: string;
}

export const CIRCULAR_STEPS: JourneyStep[] = [
  {
    stepNumber: 1,
    title: "Tạo Sinh Kế Bền Vững Cho Bà Con",
    subtitle: "Thu mua phụ phẩm vùng cao & ĐBSCL",
    description:
      "Liên kết trực tiếp với các Hợp tác xã thu mua rơm rạ, trấu và vỏ cà phê, giải quyết việc làm và tăng thêm thu nhập cho nông dân.",
    icon: <Users className="w-5 h-5 text-[#486d01]" />,
    badge: "Sinh Kế Nông Dân",
    highlights: ["Tăng thu nhập 2.8 - 4.2 tr/tháng", "Bao tiêu phụ phẩm nông nghiệp"],
    color: "border-amber-400 bg-amber-50/50 dark:bg-amber-950/20",
  },
  {
    stepNumber: 2,
    title: "Thu Gom Rơm Rạ & Vỏ Cà Phê",
    subtitle: "Tránh đốt đồng gây ô nhiễm khói bụi",
    description:
      "Biến những tấn rơm rạ và vỏ trấu thường bị đốt bỏ gây ô nhiễm không khí thành nguồn nguyên liệu sinh học đầu vào giá trị cao.",
    icon: <Wheat className="w-5 h-5 text-amber-700" />,
    badge: "Zero Open Burning",
    highlights: ["Giảm 100% khói bụi đốt đồng", "Chuẩn bị nguyên liệu sạch"],
    color: "border-orange-400 bg-orange-50/50 dark:bg-orange-950/20",
  },
  {
    stepNumber: 3,
    title: "Sản Xuất Viên Nén Giữ Nước Sinh Học",
    subtitle: "Chiết xuất Cellulose & Lignin tinh khiết",
    description:
      "Ứng dụng công nghệ sấy nén vi xốp chế tạo viên nén tích hợp sẵn chất dinh dưỡng và phân bón hòa tan nuôi dưỡng rễ cây.",
    icon: <Factory className="w-5 h-5 text-emerald-700" />,
    badge: "Công Nghệ Tinh Chế",
    highlights: ["Cấu trúc tổ ong vi xốp", "Tích hợp sẵn dinh dưỡng N-P-K"],
    color: "border-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20",
  },
  {
    stepNumber: 4,
    title: "Hỗ Trợ Cây Trồng Chống Hạn Hán",
    subtitle: "Viên nén ngậm nước & nhả ẩm từ từ",
    description:
      "Khi gặp nước, viên nén nở căng ngậm giữ nước gấp 450 lần khối lượng, nuôi dưỡng bộ rễ tơ sống sót và phát triển trong mùa khô hạn.",
    icon: <Droplets className="w-5 h-5 text-blue-600" />,
    badge: "Giữ Ẩm Rễ Tơ",
    highlights: ["Khóa ẩm 21 ngày dứt tưới", "Giảm 40% chi phí nhiên liệu tưới"],
    color: "border-blue-400 bg-blue-50/50 dark:bg-blue-950/20",
  },
  {
    stepNumber: 5,
    title: "Tối Ưu Nguồn Lực & Tự Động Hóa",
    subtitle: "Tích hợp nền tảng IoT & Trợ lý AI",
    description:
      "Cảm biến đo độ ẩm đất kết hợp Trợ lý Nông Vụ AI giúp tự động hóa lịch tưới tiêu, tiết kiệm tối đa điện nước và công lao động.",
    icon: <Cpu className="w-5 h-5 text-purple-600" />,
    badge: "Nông Nghiệp 4.0",
    highlights: ["Giảm 50% công lao động tưới", "Cảnh báo độ ẩm qua điện thoại"],
    color: "border-purple-400 bg-purple-50/50 dark:bg-purple-950/20",
  },
  {
    stepNumber: 6,
    title: "Phân Huỷ Sinh Học & Cải Tạo Đất",
    subtitle: "100% tự phân rã thành mùn hữu cơ",
    description:
      "Viên nén không chứa hạt nhựa Polymer tổng hợp. Sau hậu vụ tự phân hủy 100% thành mùn đen tơi xốp, cải tạo tầng đất chai cứng.",
    icon: <Sprout className="w-5 h-5 text-green-700" />,
    badge: "Tái Sinh Đất Mẹ",
    highlights: ["Không để lại vi nhựa (0%)", "Tăng độ phì nhiêu & xốp đất"],
    color: "border-green-400 bg-green-50/50 dark:bg-green-950/20",
  },
  {
    stepNumber: 7,
    title: "Thu Hoạch Mùa Vụ & Vòng Tuần Hoàn",
    subtitle: "Bao tiêu năng suất & Tiếp tục vòng tái sinh",
    description:
      "Cây trồng cho năng suất vượt trội, gia tăng lợi nhuận cho nông dân. Doanh nghiệp tiếp tục trích lợi nhuận thu mua rơm rạ mới quay lại Bước 1.",
    icon: <TrendingUp className="w-5 h-5 text-teal-700" />,
    badge: "Vòng Tuần Hoàn Khép Kín",
    highlights: ["Năng suất tăng 15-25%", "Vòng sinh thái khép kín 100%"],
    color: "border-teal-400 bg-teal-50/50 dark:bg-teal-950/20",
  },
];

export const CircularJourneyMap: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(1);
  const activeStep = CIRCULAR_STEPS.find((s) => s.stepNumber === selectedStep) || CIRCULAR_STEPS[0];

  return (
    <div className="w-full space-y-8">
      {/* Banner Infographic Visual Header */}
      <div className="relative rounded-3xl overflow-hidden border-2 border-surface-container-highest shadow-3d-surface bg-surface-container-lowest p-3">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="/images/circular_journey_map.jpg"
            alt="Bản đồ hành trình nông nghiệp tuần hoàn 7 bước ViNar"
            className="w-full h-auto max-h-[500px] object-cover"
          />
          <div className="absolute top-4 left-4 bg-primary-forest/90 text-white font-mono text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg flex items-center gap-2">
            <Recycle className="w-4 h-4 text-secondary-container" />
            <span>Bản Đồ Hành Trình Nông Nghiệp Tuần Hoàn 7 Bước</span>
          </div>
        </div>
      </div>

      {/* Interactive 7 Step Card Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {CIRCULAR_STEPS.map((step) => {
          const isSelected = selectedStep === step.stepNumber;
          return (
            <button
              key={step.stepNumber}
              onClick={() => setSelectedStep(step.stepNumber)}
              className={`p-3.5 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between space-y-2 cursor-pointer ${
                isSelected
                  ? "bg-primary-forest text-white border-primary-forest ring-4 ring-secondary-moss/30 shadow-lg scale-102"
                  : "bg-surface-container-lowest border-surface-container-highest text-deep-ink hover:bg-surface-container"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-extrabold ${
                    isSelected
                      ? "bg-secondary-container text-on-secondary-container"
                      : "bg-surface-container-high text-primary-forest"
                  }`}
                >
                  0{step.stepNumber}
                </span>
                <div className={isSelected ? "text-secondary-container" : "text-primary-forest"}>
                  {step.icon}
                </div>
              </div>
              <div className="font-display font-bold text-xs line-clamp-2 leading-snug">
                {step.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Step Detail Panel */}
      <div className={`p-6 sm:p-8 rounded-3xl border-2 shadow-xl ${activeStep.color} transition-all duration-300`}>
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-primary-forest text-white font-mono text-xs font-bold">
                BƯỚC 0{activeStep.stepNumber}
              </span>
              <span className="px-3 py-1 rounded-full bg-surface-container-highest text-primary-forest font-bold text-xs uppercase">
                {activeStep.badge}
              </span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-primary-forest">
              {activeStep.title}
            </h3>
            <p className="text-xs font-semibold text-secondary-moss uppercase tracking-wider">
              {activeStep.subtitle}
            </p>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {activeStep.description}
            </p>
          </div>

          {/* Highlights checklist */}
          <div className="w-full md:w-72 shrink-0 p-5 rounded-2xl bg-surface-container-lowest border border-surface-container-highest shadow-xs space-y-3">
            <div className="text-xs font-mono font-bold uppercase text-outline">
              Điểm nổi bật:
            </div>
            {activeStep.highlights.map((h, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-primary-forest">
                <CheckCircle2 className="w-4 h-4 text-secondary-moss shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
