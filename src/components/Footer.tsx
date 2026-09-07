/**
 * @name Footer.tsx
 * @description Global footer containing ISO & ESG certifications, partner network, and contact info
 */

import React from "react";
import Link from "next/link";
import { Sprout, PhoneCall, Mail, MapPin, ShieldCheck, Heart } from "lucide-react";
import { Container } from "@/design-system";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-low border-t border-surface-container-highest mt-auto pt-16 pb-12 transition-colors">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-surface-container-highest">
          {/* Col 1: Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-forest text-white flex items-center justify-center shadow-md">
                <Sprout className="w-5 h-5 text-[#C1EE7C]" />
              </div>
              <span className="font-display font-bold text-2xl text-primary-forest">
                ViNar
              </span>
            </div>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Tiên phong công nghệ vật liệu sinh học từ phế phẩm nông nghiệp.
              Giải pháp giữ ẩm thông minh thích ứng biến đổi khí hậu hướng tới
              Net Zero 2050.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-surface-container text-primary-forest border border-surface-container-highest">
                TRL 6 VERIFIED
              </span>
              <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container">
                NET ZERO 2050
              </span>
            </div>
          </div>

          {/* Col 2: Hệ Sinh Thái Sản Phẩm */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-base text-primary-forest">
              Hệ Sinh Thái Giải Pháp
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-on-surface-variant">
              <li>
                <Link
                  href="/san-pham"
                  className="hover:text-primary-forest transition-colors flex items-center justify-between"
                >
                  <span>Viên nén AgriGel™</span>
                  <span className="text-[11px] text-outline">Ngậm ẩm 450x</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/san-pham"
                  className="hover:text-primary-forest transition-colors flex items-center justify-between"
                >
                  <span>Màng bảo vệ BioBandage™</span>
                  <span className="text-[11px] text-outline">Chống mặn 3‰</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className="hover:text-primary-forest transition-colors flex items-center justify-between"
                >
                  <span>Công cụ định lượng Hecta</span>
                  <span className="text-[11px] text-secondary-moss font-bold">Tính toán nhanh</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/hanh-trinh"
                  className="hover:text-primary-forest transition-colors flex items-center justify-between"
                >
                  <span>Khảo nghiệm thực địa</span>
                  <span className="text-[11px] text-outline">120+ hecta</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Mạng Lưới Khoa Học & Đối Tác */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-base text-primary-forest">
              Mạng Lưới Nghiên Cứu
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-on-surface-variant">
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-secondary-moss shrink-0 mt-0.5" />
                <span>Viện Hàn Lâm Khoa Học &amp; Công Nghệ VN</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-secondary-moss shrink-0 mt-0.5" />
                <span>Taiwan AgriTech Innovation Center</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-secondary-moss shrink-0 mt-0.5" />
                <span>Liên minh Hợp tác xã Nông nghiệp Tây Nguyên</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-secondary-moss shrink-0 mt-0.5" />
                <span>Mạng Lưới Khởi Nghiệp Đổi Mới Sáng Tạo Quốc Gia</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Thông Tin Liên Hệ Khảo Nghiệm */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-base text-primary-forest">
              Trụ Sở &amp; Khảo Nghiệm
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-on-surface-variant">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary-forest shrink-0 mt-0.5" />
                <span>Khu Công nghệ Cao, TP. Thủ Đức, TP. Hồ Chí Minh</span>
              </div>
              <div className="flex items-start gap-2.5">
                <PhoneCall className="w-4 h-4 text-secondary-moss shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] uppercase font-bold text-outline">Tổng đài miễn cước</div>
                  <a href="tel:18006828" className="font-mono font-bold text-base text-primary-forest hover:underline">
                    1800 6828
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-outline shrink-0 mt-0.5" />
                <span>pilot@vinarbiotech.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Standards */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-outline">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-deep-ink">
              &copy; 2026 ViNar (VinaGreen) Bio-Technology.
            </span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-deep-ink border border-surface-container-highest">
              ISO 14044 LCA Compliant
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-deep-ink border border-surface-container-highest">
              GHG Protocol Standard
            </span>
            <span className="flex items-center gap-1 text-primary-forest font-semibold">
              <Heart className="w-3 h-3 text-red-500 fill-red-500" /> Tự hào trí tuệ công nghệ sinh học Việt
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
