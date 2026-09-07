/**
 * @name CustomerStories.tsx
 * @description Customer perspectives and success stories showcasing Urban Home Gardening and Commercial Agriculture use-cases
 */

"use client";

import React from "react";
import { Container, Badge } from "@/design-system";
import {
  CheckCircle2,
  Sparkles,
  HeartHandshake,
  CalendarCheck,
  Droplet,
  Sprout,
  TrendingUp,
  ShieldAlert,
} from "lucide-react";

interface StoryHighlight {
  text: string;
  icon?: React.ReactNode;
}

interface StoryItem {
  id: string;
  categoryBadge: string;
  badgeVariant: "moss" | "timber" | "eco" | "neutral" | "primary";
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  overlayBadgeTitle: string;
  overlayBadgeSubtitle: string;
  statBadgeNumber: string;
  statBadgeLabel: string;
  highlights: StoryHighlight[];
  reversed?: boolean;
}

const STORIES_DATA: StoryItem[] = [
  {
    id: "urban-gardening",
    categoryBadge: "Góc Nhìn Giới Trẻ & Nhà Phố",
    badgeVariant: "moss",
    title: "Tự Do Tận Hưởng Kỳ Nghỉ",
    description:
      "Không còn phải lo lắng nhờ vả người thân hay bạn bè tưới cây mỗi khi đi du lịch hoặc công tác. Hạt sinh học ViNar giữ cho khu vườn ban công, chậu cây nội thất luôn xanh mướt, ngập tràn sức sống suốt 14 ngày.",
    imageSrc: "/images/home/image_1.png",
    imageAlt: "Góc Nhìn Giới Trẻ - Tự do tận hưởng kỳ nghỉ với ViNar Hydrogel",
    overlayBadgeTitle: "ViNar Home Garden Kit",
    overlayBadgeSubtitle: "Chăm sóc cây tự động & sạch sẽ",
    statBadgeNumber: "14 Ngày",
    statBadgeLabel: "Giữ ẩm tự động",
    reversed: false,
    highlights: [
      {
        text: "Giữ ẩm ổn định liên tục 14 ngày không cần châm thêm nước",
        icon: <CalendarCheck className="w-4 h-4 text-secondary-moss shrink-0 mt-0.5" />,
      },
      {
        text: "Thảnh thơi đi du lịch, công tác dài ngày mà cây cảnh vẫn tươi tốt",
        icon: <Sparkles className="w-4 h-4 text-secondary-moss shrink-0 mt-0.5" />,
      },
      {
        text: "Trồng cây trong nhà sạch sẽ, chống ngập úng rễ và không gây vương vãi",
        icon: <Droplet className="w-4 h-4 text-secondary-moss shrink-0 mt-0.5" />,
      },
    ],
  },
  {
    id: "commercial-farming",
    categoryBadge: "Góc Nhìn Nông Nghiệp & Canh Tác",
    badgeVariant: "timber",
    title: "Biến Đất Khô Cằn Thành Vàng",
    description:
      "Tại những vùng đất khô hạn, đất đồi dốc và vùng xâm nhập mặn, ViNar Hydrogel trở thành 'hồ chứa nước thu nhỏ' bao quanh từng cụm rễ tơ, tối ưu hóa chi phí đầu vào và mang lại mùa vụ bội thu bền vững.",
    imageSrc: "/images/home/image_2.png",
    imageAlt: "Góc Nhìn Nông Nghiệp - Biến đất khô cằn thành vàng với Bio-Hydrogel",
    overlayBadgeTitle: "Giải Pháp Bio-Hydrogel ViNar",
    overlayBadgeSubtitle: "Đột phá giữ ẩm đất khô hạn & chống mặn",
    statBadgeNumber: "+40%",
    statBadgeLabel: "Tỷ lệ sống rễ non",
    reversed: true,
    highlights: [
      {
        text: "Tăng +40% tỷ lệ sống sót của mầm non và rễ tơ trong điều kiện khô cằn",
        icon: <Sprout className="w-4 h-4 text-tertiary-timber shrink-0 mt-0.5" />,
      },
      {
        text: "Tiết kiệm 50% - 70% chi phí điện/dầu bơm nước tưới và nhân công vận hành",
        icon: <TrendingUp className="w-4 h-4 text-tertiary-timber shrink-0 mt-0.5" />,
      },
      {
        text: "Cải tạo kết cấu đất tơi xốp, chống xói mòn và rửa trôi dinh dưỡng phân bón",
        icon: <ShieldAlert className="w-4 h-4 text-tertiary-timber shrink-0 mt-0.5" />,
      },
    ],
  },
];

/**
 * CustomerStories component
 * @returns {JSX.Element} Rendered Customer Stories & Perspectives section
 */
export const CustomerStories: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-surface relative overflow-hidden border-t border-surface-container-highest">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 -translate-y-1/2 w-96 h-96 bg-secondary-container/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <Badge variant="moss" size="md" icon={<HeartHandshake className="w-4 h-4" />}>
            Câu Chuyện Thành Công &amp; Góc Nhìn Đa Chiều
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-forest leading-tight">
            Từ Ban Công Thành Thị Đến Đại Ngàn Tây Nguyên
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Khám phá cách giải pháp hạt ngậm ẩm sinh học ViNar tạo ra giá trị thiết thực
            cho cả người yêu cây đô thị và các chủ nông trại quy mô lớn.
          </p>
        </div>

        {/* Stories Flow */}
        <div className="flex flex-col gap-16 lg:gap-24">
          {STORIES_DATA.map((story) => {
            return (
              <div
                key={story.id}
                className={`flex flex-col ${
                  story.reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-10 lg:gap-16 items-center`}
              >
                {/* Visual Image Block with 3D shadow & floating glass badge */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group rounded-3xl overflow-hidden shadow-3d-surface border border-surface-container-highest bg-surface-container-lowest">
                    {/* Main Image */}
                    <div className="aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden relative">
                      <img
                        src={story.imageSrc}
                        alt={story.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    </div>

                    {/* Floating Floating Stat Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/40 dark:border-white/10 shadow-lg flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-secondary-moss animate-pulse" />
                      <div>
                        <div className="font-display font-extrabold text-sm sm:text-base text-primary-forest dark:text-[#c1ee7c] leading-none">
                          {story.statBadgeNumber}
                        </div>
                        <div className="text-[10px] sm:text-xs text-on-surface-variant dark:text-gray-300 font-medium leading-tight">
                          {story.statBadgeLabel}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Caption Pill */}
                    <div className="absolute bottom-4 inset-x-4 bg-white/85 dark:bg-black/75 backdrop-blur-md p-4 rounded-2xl border border-white/50 dark:border-white/10 shadow-xl text-primary-forest">
                      <span className="font-mono text-xs uppercase font-bold tracking-wider text-primary-forest dark:text-[#c1ee7c] block">
                        {story.overlayBadgeTitle}
                      </span>
                      <p className="text-xs text-on-surface-variant dark:text-gray-200 mt-0.5">
                        {story.overlayBadgeSubtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content & Value Proposition Block */}
                <div className="w-full lg:w-1/2 flex flex-col space-y-6">
                  <div>
                    <Badge variant={story.badgeVariant} size="sm">
                      {story.categoryBadge}
                    </Badge>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-forest mt-3 leading-snug">
                      {story.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    {story.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-3 pt-2">
                    {story.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-2xl bg-surface-container-low border border-surface-container-highest hover:bg-surface-container transition-colors duration-200"
                      >
                        <div className="w-6 h-6 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-xs shrink-0 mt-0.5">
                          {highlight.icon || (
                            <CheckCircle2 className="w-4 h-4 text-secondary-moss" />
                          )}
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-on-surface leading-relaxed">
                          {highlight.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
