/**
 * @name OurAwards.tsx
 * @description Showcase component displaying official research awards for ViNar Hydrogel Project
 */

"use client";

import React, { useState } from "react";
import { Container, Badge } from "@/design-system";
import {
  Trophy,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Medal,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

export interface AwardItem {
  id: string;
  title: string;
  organizer: string;
  year: string;
  category: "all" | "top" | "esg" | "deeptech";
  categoryLabel: string;
  description: string;
  impactMetric?: string;
  verifiedBy: string;
  badgeVariant: "eco" | "timber" | "moss" | "primary";
}

const AWARDS_DATA: AwardItem[] = [
  {
    id: "greenbio-2025",
    title: "Giải Nhất GreenBio Global Idea Bridge Lab 2025",
    organizer: "GreenBio Global Foundation",
    year: "2025",
    category: "top",
    categoryLabel: "Quán Quân Sinh Học Xanh",
    description:
      "Vinh danh đề tài nghiên cứu Hydrogel xuất sắc nhất trong việc chuyển hóa phế phẩm nông nghiệp thành hạt sinh học ngậm nước AgriGel™ giữ ẩm rễ cây và chống suy thoái đất.",
    impactMetric: "Giải Nhất Toàn Cầu (Global Winner)",
    verifiedBy: "GreenBio Global Board",
    badgeVariant: "moss",
  },
  {
    id: "tech-planter-2026",
    title: "Top 9 Ý Tưởng Xuất Sắc Nhất Tech Planter 2026",
    organizer: "Leave a Nest (Nhật Bản / Đông Nam Á)",
    year: "2026",
    category: "deeptech",
    categoryLabel: "Deep-Tech & Eco-Innovation",
    description:
      "Lọt Top 9 dự án công nghệ chuyên sâu xuất sắc nhất cuộc thi Tech Planter, khẳng định tính đột phá khoa học và tiềm năng thương mại hóa thực địa của Hydrogel sinh học.",
    impactMetric: "Top 9 Tech Planter SEA",
    verifiedBy: "Leave a Nest Co., Ltd.",
    badgeVariant: "primary",
  },
  {
    id: "innostar-2026",
    title: "Special Prize Cuộc Thi InnoStar 2026",
    organizer: "Ban Tổ Chức Cuộc Thi Đổi Mới Sáng Tạo InnoStar 2026",
    year: "2026",
    category: "top",
    categoryLabel: "Giải Thưởng Đặc Biệt (Special Prize)",
    description:
      "Giải thưởng đặc biệt ghi nhận giải pháp vật liệu hydrogel tự phân rã 100% giúp bảo vệ rễ cây trồng vượt qua những đợt hạn hán & xâm nhập mặn khốc liệt.",
    impactMetric: "Giải Thưởng Đặc Biệt InnoStar",
    verifiedBy: "Hội Đồng Giám Khảo InnoStar",
    badgeVariant: "timber",
  },
  {
    id: "tdtu-nkh-2025",
    title: "Giải Nhì Nghiên Cứu Khoa Học Sinh Viên Cấp Trường",
    organizer: "Trường Đại học Tôn Đức Thắng (TDTU)",
    year: "2024 - 2025",
    category: "esg",
    categoryLabel: "NCKH Sinh Viên Cấp Trường",
    description:
      "Đề tài nghiên cứu ứng dụng Hydrogel ngậm nước từ phế phẩm rơm rạ & vỏ cà phê đạt đánh giá xuất sắc từ Hội đồng Khoa học Trường Đại học Tôn Đức Thắng.",
    impactMetric: "Hội Đồng NCKH TDTU Đánh Giá",
    verifiedBy: "Trường Đại học Tôn Đức Thắng",
    badgeVariant: "eco",
  },
];

export const OurAwards: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "top" | "esg" | "deeptech">("all");

  const filteredAwards =
    activeTab === "all"
      ? AWARDS_DATA
      : AWARDS_DATA.filter((item) => item.category === activeTab);

  return (
    <section className="py-20 bg-surface border-t border-surface-container-highest relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary-moss/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-forest/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <Badge variant="moss" size="md" icon={<Trophy className="w-4 h-4" />}>
            Ghi Nhận Nghiên Cứu Khoa Học
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-forest leading-tight">
            Giải Thưởng &amp; Đề Tài Hydrogel ViNar
          </h2>
          <p className="text-base text-on-surface-variant leading-relaxed">
            Khẳng định giá trị khoa học thực tiễn và tính đột phá của đề tài Hydrogel sinh học tuần hoàn qua các giải thưởng đổi mới sáng tạo trong nước &amp; quốc tế.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { key: "all", label: "Tất Cả Giải Thưởng" },
              { key: "top", label: "Giải Nhất & Đặc Biệt" },
              { key: "deeptech", label: "Deep-Tech & Quốc Tế" },
              { key: "esg", label: "NCKH Trường ĐH" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === tab.key
                    ? "bg-primary-forest text-white shadow-md shadow-primary-forest/20 scale-105"
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-primary-forest"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredAwards.map((award) => (
            <div
              key={award.id}
              className="group relative rounded-3xl bg-surface-container-lowest p-7 sm:p-8 border-2 border-surface-container-highest shadow-3d-surface transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-primary-forest/40 flex flex-col justify-between"
            >
              {/* Card Top Pill & Year */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-mono font-bold tracking-wider">
                    <Medal className="w-3.5 h-3.5" />
                    {award.categoryLabel}
                  </span>
                  <span className="font-mono text-xs font-extrabold text-outline px-2.5 py-1 rounded-lg bg-surface-container border border-surface-container-highest">
                    {award.year}
                  </span>
                </div>

                {/* Award Title */}
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary-forest text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:bg-secondary-moss group-hover:text-deep-ink transition-all duration-300">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-primary-forest group-hover:text-secondary-moss transition-colors leading-snug">
                      {award.title}
                    </h3>
                    <p className="text-xs font-semibold text-tertiary-timber mt-0.5">
                      {award.organizer}
                    </p>
                  </div>
                </div>

                {/* Award Description */}
                <p className="text-sm text-on-surface-variant leading-relaxed mt-3 mb-6">
                  {award.description}
                </p>
              </div>

              {/* Bottom Meta & Impact Metric */}
              <div className="pt-4 border-t border-surface-container-highest flex flex-wrap items-center justify-between gap-3 text-xs">
                {award.impactMetric && (
                  <span className="inline-flex items-center gap-1 font-mono font-bold text-secondary-moss">
                    <Sparkles className="w-3.5 h-3.5" />
                    {award.impactMetric}
                  </span>
                )}
                <span className="inline-flex items-center gap-1 text-on-surface-variant font-medium ml-auto">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary-forest" />
                  {award.verifiedBy}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Honor Summary Footer Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-surface-container-low border border-surface-container-highest flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary-moss/20 text-secondary-moss flex items-center justify-center font-bold shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-primary-forest">
                Đề tài Hydrogel Sinh học từ Phế phẩm Nông nghiệp
              </h4>
              <p className="text-xs text-on-surface-variant">
                Đã được chứng minh hiệu quả ngậm ẩm 450x và an toàn tuyệt đối không để lại vi nhựa trong đất.
              </p>
            </div>
          </div>

          <a
            href="/journey"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold text-primary-forest hover:text-secondary-moss transition-colors shrink-0 group"
          >
            Xem Chi Tiết Hành Trình R&amp;D
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </Container>
    </section>
  );
};
