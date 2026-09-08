/**
 * @name HydrogelUsageSteps.tsx
 * @description 4-Step application pipeline guide for ViNar Hydrogel, designed with bio-organic modernism & 3D surface shadows
 */

import React from "react";
import { Container } from "@/design-system";
import { ArrowRight, Droplets, Sprout, Layers, ShieldCheck } from "lucide-react";

export interface HydrogelStepItem {
  stepNumber: string;
  badgeTag: string;
  title: string;
  description: string;
  image: string;
  metaLabel: string;
  metaValue: string;
  icon: React.ReactNode;
}

const STEPS_DATA: HydrogelStepItem[] = [
  {
    stepNumber: "01",
    badgeTag: "01 • Trộn Hạt",
    title: "Cho Hydrogel Vào Đất",
    description:
      "Rải đều khoảng 5 viên (~1g) hydrogel vào đất trồng trong chậu hoặc hố trồng.",
    image: "/images/steps/step_1.jpg",
    metaLabel: "Liều lượng",
    metaValue: "5 viên (~1g)",
    icon: <Sprout className="w-4 h-4 text-primary-forest" />,
  },
  {
    stepNumber: "02",
    badgeTag: "02 • Gieo Hạt",
    title: "Gieo Hạt / Cây Giống",
    description:
      "Đặt cây con hoặc gieo hạt giống vào chậu rồi lấp một lớp đất mỏng lên trên.",
    image: "/images/steps/step_2.jpg",
    metaLabel: "Thao tác",
    metaValue: "Gieo hạt & lấp đất",
    icon: <Layers className="w-4 h-4 text-primary-forest" />,
  },
  {
    stepNumber: "03",
    badgeTag: "03 • Tưới Nước",
    title: "Tưới Nước Kích Hoạt",
    description:
      "Tưới khoảng 200mL - 1L nước. Hạt hydrogel trương nở ngậm nước tối đa.",
    image: "/images/steps/step_3.jpg",
    metaLabel: "Lượng nước",
    metaValue: "200mL - 1L",
    icon: <Droplets className="w-4 h-4 text-primary-forest" />,
  },
  {
    stepNumber: "04",
    badgeTag: "04 • Giữ Ẩm",
    title: "Tự Động Giữ Ẩm",
    description:
      "Đất giữ ẩm liên tục nhiều ngày. Chỉ cần tưới 1 lần/tuần (mưa không cần tưới).",
    image: "/images/steps/step_4.jpg",
    metaLabel: "Tần suất",
    metaValue: "1 lần / tuần",
    icon: <ShieldCheck className="w-4 h-4 text-primary-forest" />,
  },
];

export const HydrogelUsageSteps: React.FC = () => {
  return (
    <section className="py-16 bg-surface-container-low border-y border-surface-container-highest relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container/70 text-on-secondary-container text-xs font-mono font-bold uppercase tracking-wider border border-secondary-moss/30">
            <Droplets className="w-3.5 h-3.5" />
            <span>Quy Trình 4 Bước Đơn Giản</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary-forest">
            Hướng Dẫn Sử Dụng Hạt Hydrogel ViNar
          </h2>
          {/* <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-xl mx-auto">
            Ứng dụng hạt sinh học ngậm nước giúp tối ưu độ ẩm đất trồng, tiết kiệm
            lượng nước tưới và duy trì sự phát triển bền vững cho cây.
          </p> */}
        </div>

        {/* Pipeline Container (Left to Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS_DATA.map((step, index) => {
            const isLast = index === STEPS_DATA.length - 1;
            return (
              <div
                key={step.stepNumber}
                className="p-7 rounded-3xl bg-surface-container-lowest shadow-3d-surface border border-surface-container-highest space-y-4 flex flex-col justify-between relative group hover:border-secondary-moss/50 transition-all duration-300"
              >
                {/* Desktop Connection Arrow */}
                {!isLast && (
                  <div className="hidden lg:flex absolute -right-3.5 top-1/3 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container items-center justify-center shadow-md border border-secondary-moss/30 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}

                <div>
                  {/* Step Image Box */}
                  <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 relative bg-surface-container border border-surface-container-highest shadow-inner">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-surface-container-lowest/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-mono font-bold text-primary-forest shadow-sm border border-surface-container-highest flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-secondary-moss animate-pulse" />
                      {step.badgeTag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-lg text-primary-forest group-hover:text-secondary-moss transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Footer Meta Details */}
                <div className="pt-3 border-t border-surface-container-highest flex items-center justify-between text-xs mt-3">
                  <span className="text-outline font-medium">{step.metaLabel}:</span>
                  <span className="bg-secondary-container/60 text-on-secondary-container px-2.5 py-0.5 rounded-md font-mono font-bold text-[11px]">
                    {step.metaValue}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
