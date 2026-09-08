/**
 * @name WePartnerWith.tsx
 * @description Showcase component displaying strategic partners, including GreenHeart, Omnimer Team, research institutes, and impact funds for ViNar
 */

"use client";

import React, { useState } from "react";
import { Container, Badge } from "@/design-system";
import {
  Handshake,
  GraduationCap,
  Landmark,
  Factory,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  Cpu,
} from "lucide-react";

export type PartnerCategory = "all" | "research" | "fund" | "enterprise" | "tech-company";

export interface StrategicPartner {
  id: string;
  name: string;
  website?: string;
  category: PartnerCategory;
  categoryName: string;
  collaborationArea: string;
  badgeTag: string;
  logoUrl?: string;
  logoPlaceholder?: string;
  isFeatured?: boolean;
}

const STRATEGIC_PARTNERS: StrategicPartner[] = [
  {
    id: "greenheart-lualom",
    name: "Dự Án GreenHeart",
    website: "https://greenheart.com.vn/",
    category: "enterprise",
    categoryName: "Đối Tác Tuần Hoàn Lúa - Tôm",
    collaborationArea:
      "Mô hình hợp tác tuần hoàn khép kín: GreenHeart cung cấp nguồn phụ phẩm rơm rạ từ cánh đồng lúa-tôm cho ViNar làm nguyên liệu sản xuất Hydrogel/AgriGel™, đồng thời đặt hàng bao tiêu lại sản phẩm khi thương mại hóa.",
    badgeTag: "Cung Cấp Rơm Rạ & Đặt Hàng Hydrogel",
    logoUrl: "/logos/greenheart_logo.png",
    isFeatured: true,
  },
  {
    id: "omnimer-team",
    name: "Omnimer Team",
    website: "https://github.com/omnimerteam",
    category: "tech-company",
    categoryName: "Đội Ngũ Công Nghệ & Phần Mềm",
    collaborationArea: "Ươm tạo năng lực chuyển đổi số, tích hợp trợ lý AI nông nghiệp & hỗ trợ hạ tầng công nghệ mở rộng quy mô.",
    badgeTag: "Đối tác Công nghệ & AI",
    logoPlaceholder: "OMNIMER TEAM",
    logoUrl: "logos/omnimer_team_logo.png",
    isFeatured: true,
  },
];

export const WePartnerWith: React.FC = () => {
  const [filter, setFilter] = useState<PartnerCategory>("all");

  const filteredPartners =
    filter === "all"
      ? STRATEGIC_PARTNERS
      : STRATEGIC_PARTNERS.filter((item) => item.category === filter);

  return (
    <section className="py-20 bg-surface border-t border-surface-container-highest relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-primary-forest/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <Badge variant="timber" size="md" icon={<Handshake className="w-4 h-4" />}>
            Hệ Sinh Thái Hợp Tác
          </Badge>
          <h2 className="font-display text-3xl sm:text-3xl font-bold text-primary-forest leading-tight">
            Đối Tác Chiến Lược &amp; Doanh Nghiệp Đồng Hành
          </h2>
          {/* <p className="text-base text-on-surface-variant leading-relaxed">
            Liên kết mô hình kinh tế tuần hoàn cùng các dự án nông nghiệp xanh, đội ngũ công nghệ, Viện nghiên cứu &amp; Quỹ đầu tư tác động (Impact Funds).
          </p> */}

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {[
              { key: "all", label: "Tất Cả Đối Tác" },
              { key: "enterprise", label: "Doanh Nghiệp Tuần Hoàn" },
              { key: "tech-company", label: "Công Ty Công Nghệ & AI" },
              { key: "research", label: "Viện Nghiên Cứu & Trường ĐH" },
              { key: "fund", label: "Quỹ Đầu Tư ESG & Impact" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key as PartnerCategory)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${filter === tab.key
                  ? "bg-primary-forest text-white shadow-md shadow-primary-forest/20 scale-105"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-primary-forest"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Partners Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className={`h-full p-6 rounded-3xl border-2 shadow-3d-surface transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col group ${partner.isFeatured
                ? "bg-surface-container-lowest border-secondary-moss"
                : "bg-surface-container-lowest border-surface-container-highest hover:border-secondary-moss/40"
                }`}
            >
              <div className="flex-1 flex flex-col">
                {/* Category Icon & Featured Pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  {partner.logoUrl ? (
                    <div className="h-12 px-3 py-1.5 rounded-xl bg-white border border-surface-container-highest shadow-xs flex items-center justify-center">
                      <img
                        src={partner.logoUrl}
                        alt={partner.name}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-xl bg-surface-container text-primary-forest flex items-center justify-center font-bold shadow-xs group-hover:bg-primary-forest group-hover:text-white transition-colors">
                      {partner.category === "tech-company" && <Cpu className="w-5 h-5" />}
                      {partner.category === "research" && <GraduationCap className="w-5 h-5" />}
                      {partner.category === "fund" && <Landmark className="w-5 h-5" />}
                      {partner.category === "enterprise" && <Factory className="w-5 h-5" />}
                    </div>
                  )}

                  <span className="font-mono text-[11px] font-bold text-secondary-moss px-2.5 py-1 rounded-full bg-secondary-container">
                    {partner.badgeTag}
                  </span>
                </div>

                {/* Partner Name & Website */}
                <div className="flex items-center gap-1.5 mb-2">
                  <h3 className="font-display font-bold text-lg text-primary-forest group-hover:text-secondary-moss transition-colors leading-snug">
                    {partner.name}
                  </h3>
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tertiary-timber hover:text-secondary-moss transition-colors shrink-0"
                      title="Ghé thăm website"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Scope of Collaboration */}
                <p className="text-xs text-on-surface-variant leading-relaxed mb-6">
                  {partner.collaborationArea}
                </p>
              </div>

              {/* Logo / Footer Tag */}
              <div className="pt-4 border-t border-surface-container-highest flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary-moss animate-pulse" />
                  <span className="font-mono text-[11px] font-bold text-outline uppercase tracking-wider truncate max-w-[140px]">
                    {partner.logoPlaceholder || partner.name}
                  </span>
                </div>
                {partner.website ? (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-primary-forest hover:text-secondary-moss transition-colors truncate max-w-[130px]"
                  >
                    <span className="truncate">{partner.website.replace("https://", "").replace("http://", "")}</span>
                    <ArrowUpRight className="w-3 h-3 shrink-0" />
                  </a>
                ) : (
                  <span className="text-[11px] text-tertiary-timber font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
                    {partner.categoryName}
                  </span>
                )}
              </div>
            </div>
          ))}

          {/* Invitation Card for New Strategic Partners */}
          <div className="h-full p-6 rounded-3xl bg-primary-forest text-white shadow-3d-forest flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex-1 flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-white/20 text-[#c1ee7c] flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl leading-tight mb-2">
                Trở Thành Đối Tác Chiến Lược Của ViNar
              </h3>
              <p className="text-xs text-[#d1e5d3] leading-relaxed mb-6">
                Chúng tôi mở rộng hợp tác cùng các Mô hình nông nghiệp tuần hoàn, Đội ngũ công nghệ, Quỹ đầu tư ESG &amp; Viện nghiên cứu.
              </p>
            </div>

            <a
              href="mailto:contact@vinaragritech.vn"
              className="inline-flex items-center justify-between w-full px-4 py-3 rounded-2xl bg-secondary-moss text-deep-ink font-bold text-xs hover:bg-white transition-colors shadow-md"
            >
              <span>Gửi Đề Xuất Hợp Tác</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
