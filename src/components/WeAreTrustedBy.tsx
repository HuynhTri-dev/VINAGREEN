/**
 * @name WeAreTrustedBy.tsx
 * @description Component displaying trusted agricultural partners, farms, and cooperatives including GreenHeart rice-shrimp project
 */

"use client";

import React from "react";
import { Container, Badge } from "@/design-system";
import {
  Users,
  Building2,
  MapPin,
  CheckCircle2,
  PlusCircle,
  Clock,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export interface TrustedEntity {
  id: string;
  name: string;
  location: string;
  cropType: string;
  scale: string;
  status: string;
  logoUrl?: string;
  logoPlaceholderText: string;
  website?: string;
  isFeatured?: boolean;
}

const TRUSTED_ENTITIES: TrustedEntity[] = [
  {
    id: "greenheart-lualom",
    name: "Dự Án GreenHeart",
    location: "Đồng Bằng Sông Cửu Long",
    cropType: "Mô hình Lúa - Tôm sinh thái",
    scale: "Cung cấp Rơm rạ & Đặt hàng",
    status: "Đã ký thỏa thuận cung cấp rơm rạ & bao tiêu Hydrogel",
    logoUrl: "/logos/greenheart_logo.png",
    website: "https://greenheart.com.vn/",
    logoPlaceholderText: "GREENHEART",
    isFeatured: true,
  },
  {
    id: "htx-cailay",
    name: "HTX Sầu Riêng Cai Lậy",
    location: "Tiền Giang",
    cropType: "Sầu riêng xuất khẩu",
    scale: "35 Hecta",
    status: "Thử nghiệm 21 ngày hạn mặn",
    logoPlaceholderText: "HTX CAI LẬY",
  },
  {
    id: "nongtruong-chuprong",
    name: "Nông Trường Cà Phê Chư Prông",
    location: "Gia Lai",
    cropType: "Cà phê Robusta & Arabica",
    scale: "50 Hecta",
    status: "Tiết kiệm 40% chi phí bơm tưới",
    logoPlaceholderText: "CHƯ PRÔNG COFFEE",
  },
  {
    id: "htx-bentre",
    name: "HTX Bưởi Da Xanh Bến Tre",
    location: "Bến Tre",
    cropType: "Bưởi da xanh ruột hồng",
    scale: "20 Hecta",
    status: "Khóa 88% ion Na⁺ & Cl⁻",
    logoPlaceholderText: "BƯỞI BẾN TRE",
  },
  {
    id: "vuonuum-lamdong",
    name: "Vườn Ươm Cây Giống Lâm Đồng",
    location: "Đà Lạt, Lâm Đồng",
    cropType: "Cây giống kỹ thuật cao",
    scale: "100.000 Cây",
    status: "Giảm 50% tỷ lệ hao hụt rễ",
    logoPlaceholderText: "VƯỜN ƯƠM LÂM ĐỒNG",
  },
  {
    id: "htx-daklak",
    name: "HTX Nông Nghiệp Xanh Đắk Lắk",
    location: "Đắk Lắk",
    cropType: "Hạt tiêu & Cà phê",
    scale: "40 Hecta",
    status: "Đang nhân rộng 2025",
    logoPlaceholderText: "AGRI ĐẮK LẮK",
  },
];

export const WeAreTrustedBy: React.FC = () => {
  return (
    <section className="py-20 bg-surface-container-low border-t border-surface-container-highest relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <Badge variant="eco" size="md" icon={<Users className="w-4 h-4" />}>
            Đồng Hành Cùng Nông Dân &amp; Dự Án
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-forest leading-tight">
            Được Tin Tưởng Bởi Hàng Trăm Hợp Tác Xã &amp; Dự Án Sinh Thái
          </h2>
          <p className="text-base text-on-surface-variant leading-relaxed">
            Hơn 120+ Hecta vùng canh tác trọng điểm tại Tây Nguyên &amp; ĐBSCL cùng các dự án mô hình sinh thái lúa-tôm như GreenHeart đã ứng dụng và đồng hành cùng ViNar.
          </p>
        </div>

        {/* Responsive Grid of Trusted Entities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUSTED_ENTITIES.map((entity) => (
            <div
              key={entity.id}
              className={`p-6 rounded-3xl border shadow-3d-surface transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col justify-between ${
                entity.isFeatured
                  ? "bg-surface-container-lowest border-secondary-moss shadow-md"
                  : "bg-surface-container-lowest border-surface-container-highest"
              }`}
            >
              <div>
                {/* Logo Header */}
                <div className="flex items-center gap-3 mb-4">
                  {entity.logoUrl ? (
                    <div className="h-12 px-3 py-1.5 rounded-2xl bg-white border border-surface-container-highest shadow-xs flex items-center justify-center shrink-0">
                      <img
                        src={entity.logoUrl}
                        alt={entity.name}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-2xl bg-secondary-container text-on-secondary-container flex items-center justify-center font-mono font-bold text-xs text-center border border-secondary-moss/30 shadow-xs group-hover:scale-105 transition-transform shrink-0">
                      <Building2 className="w-6 h-6 text-primary-forest" />
                    </div>
                  )}

                  <div className="overflow-hidden">
                    <div className="flex items-center gap-1">
                      <h3 className="font-display font-bold text-base text-primary-forest truncate group-hover:text-secondary-moss transition-colors">
                        {entity.name}
                      </h3>
                      {entity.website && (
                        <a
                          href={entity.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-tertiary-timber hover:text-secondary-moss transition-colors shrink-0"
                          title="Ghé thăm website greenheart.com.vn"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-on-surface-variant mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-tertiary-timber shrink-0" />
                      <span>{entity.location}</span>
                    </div>
                  </div>
                </div>

                {/* Details Badge */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-surface-container border border-surface-container-highest">
                    <span className="text-outline font-medium">Vùng / Mô hình:</span>
                    <span className="font-bold text-primary-forest">{entity.cropType}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-surface-container border border-surface-container-highest">
                    <span className="text-outline font-medium">Quy mô hợp tác:</span>
                    <span className="font-mono font-bold text-secondary-moss">{entity.scale}</span>
                  </div>
                </div>
              </div>

              {/* Status Tag */}
              <div className="pt-3 border-t border-surface-container-highest flex items-center gap-1.5 text-xs font-semibold text-primary-forest">
                <CheckCircle2 className="w-4 h-4 text-secondary-moss shrink-0" />
                <span className="truncate">{entity.status}</span>
              </div>
            </div>
          ))}

          {/* Placeholder Slots for upcoming Partners */}
          <div className="p-6 rounded-3xl bg-surface-container/50 border-2 border-dashed border-primary-forest/30 flex flex-col items-center justify-center text-center space-y-3 min-h-[220px] transition-all hover:bg-surface-container">
            <div className="w-12 h-12 rounded-full bg-primary-forest/10 text-primary-forest flex items-center justify-center">
              <PlusCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-primary-forest">
                Trang Trại / HTX Của Bạn
              </h4>
              <p className="text-xs text-on-surface-variant max-w-xs mt-1">
                Đăng ký ngay để trở thành đối tác nhận gói dùng thử AgriGel 500g miễn phí mùa khô 2025.
              </p>
            </div>
            <a
              href="#pilot-form"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary-forest text-white text-xs font-bold hover:bg-secondary-moss hover:text-deep-ink transition-colors shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Đăng Ký Khảo Nghiệm
            </a>
          </div>

          <div className="p-6 rounded-3xl bg-surface-container/50 border-2 border-dashed border-surface-container-highest flex flex-col items-center justify-center text-center space-y-3 min-h-[220px]">
            <div className="w-12 h-12 rounded-full bg-tertiary-timber/10 text-tertiary-timber flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-primary-forest">
                Sắp Cập Nhật Thêm Logo
              </h4>
              <p className="text-xs text-on-surface-variant max-w-xs mt-1">
                Hệ thống thương hiệu &amp; nhận diện hình ảnh chính thức các đối tác nông nghiệp đang được ViNar hoàn thiện.
              </p>
            </div>
            <span className="text-[11px] font-mono font-bold text-outline px-3 py-1 rounded-full bg-surface-container">
              Cập nhật 2025
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};
