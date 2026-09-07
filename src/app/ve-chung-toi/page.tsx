/**
 * @name page.tsx
 * @description About Us page focusing on visual storytelling with smart image placeholders and concise copy
 */

"use client";

import React from "react";
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
  ImagePlaceholder,
  ChatbotWidget,
} from "@/components";
import {
  Heart,
  Target,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface text-deep-ink">
      <Navbar />

      <main className="flex-1 py-12 space-y-20">
        {/* =========================================================================
            1. Hero: Concise Storytelling & Primary Visual Anchor
           ========================================================================= */}
        <section>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Concise Text (Đã cắt giảm chữ thừa, tập trung vào trọng tâm) */}
              <div className="lg:col-span-6 space-y-6">
                <Badge variant="timber" size="md">
                  Về Chúng Tôi • Câu Chuyện ViNar
                </Badge>

                <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-forest leading-tight">
                  Biến Phế Phẩm Khói Bụi Thành{" "}
                  <span className="text-secondary-moss">Sinh Kế Bền Vững</span>
                </h1>

                <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed font-normal">
                  ViNar (VinaGreen) khởi nguồn từ khát vọng giải quyết nghịch cảnh kép của
                  nông nghiệp Việt Nam: hàng triệu tấn rơm rạ, vỏ cà phê bị đốt
                  bỏ gây ô nhiễm khói bụi, trong khi bà con Tây Nguyên và miền Tây
                  phải gồng mình chống chọi hạn mặn khốc liệt.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-surface-container border border-surface-container-highest">
                    <div className="text-xs font-mono font-bold uppercase text-outline">
                      Sứ Mệnh
                    </div>
                    <div className="font-display font-bold text-lg text-primary-forest mt-1">
                      Kinh Tế Tuần Hoàn
                    </div>
                    <div className="text-xs text-on-surface-variant mt-0.5">
                      Net Zero 2050 cho nông nghiệp
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-container border border-surface-container-highest">
                    <div className="text-xs font-mono font-bold uppercase text-outline">
                      Cam Kết
                    </div>
                    <div className="font-display font-bold text-lg text-secondary-moss mt-1">
                      100% Không Vi Nhựa
                    </div>
                    <div className="text-xs text-on-surface-variant mt-0.5">
                      Bảo vệ cấu trúc đất mẹ dài lâu
                    </div>
                  </div>
                </div>
              </div>

              {/* Primary Visual Placeholder 1: Lab Origin Photo */}
              <div className="lg:col-span-6">
                <ImagePlaceholder
                  aspectRatio="4/3"
                  title="Khởi Nguồn Từ Phòng Thí Nghiệm Hóa Sinh"
                  recommendedSubject="Ảnh nhóm R&D ViNar trong áo blouse trắng đang đo độ trương nở 450x của hạt AgriGel trong ống đong thủy tinh chia vạch, ánh sáng tự nhiên phòng lab sạch sẽ."
                  tag="Ảnh Trọng Tâm 01: Nghiên Cứu Lab"
                  lighting="Ánh sáng trắng phòng lab, độ nét cao cận cảnh hạt gel"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================================
            2. Visual Pillars: Đồng Hành Cùng Nông Dân & Khảo Nghiệm Đồng Ruộng
           ========================================================================= */}
        <section className="py-16 bg-surface-container-low border-y border-surface-container-highest">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary-moss font-mono">
                Minh Chứng Người Thật Việc Thật
              </span>
              <h2 className="font-display text-3xl font-bold text-primary-forest">
                Hình Ảnh Thực Địa Tại Các Vùng Trọng Điểm
              </h2>
            </div>

            {/* 3 Visual Placeholders for Field & Team Story */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Box 2: Đồng hành cùng nông dân */}
              <ImagePlaceholder
                aspectRatio="1/1"
                title="Đồng Hành Trực Tiếp Cùng Nhà Vườn"
                recommendedSubject="Ảnh chụp người sáng lập ViNar đang ngồi cùng nông dân sầu riêng tại Cai Lậy (Tiền Giang), hai tay bốc nắm đất ẩm tơi xốp kiểm tra rễ cây."
                tag="Ảnh 02: Thực Địa Vườn Cây"
                lighting="Ánh nắng ban mai xuyên qua tán lá sầu riêng"
              />

              {/* Box 3: Hội đồng cố vấn & Đội ngũ */}
              <ImagePlaceholder
                aspectRatio="1/1"
                title="Hội Đồng Cố Vấn Khoa Học Độc Lập"
                recommendedSubject="Ảnh chụp tập thể ban cố vấn gồm các giáo sư/tiến sĩ nông hóa học tại trạm khảo nghiệm Tây Nguyên đang đối chiếu số liệu cảm biến đất."
                tag="Ảnh 03: Hội Đồng Cố Vấn"
                lighting="Chân dung chuyên gia ngoài trạm thực nghiệm"
              />

              {/* Box 4: Xưởng sản xuất Pilot */}
              <ImagePlaceholder
                aspectRatio="1/1"
                title="Xưởng Sản Xuất Bán Công Nghiệp Pilot"
                recommendedSubject="Ảnh máy nén viên sinh thái và hệ thống bao gói sinh học tại xưởng pilot, công nhân mang bảo hộ đóng gói từng bao AgriGel 500g đạt chuẩn."
                tag="Ảnh 04: Dây Chuyền Pilot"
                lighting="Ánh sáng nhà xưởng gọn gàng, máy móc sạch sẽ"
              />
            </div>
          </Container>
        </section>

        {/* =========================================================================
            3. Core Values: 3 Tactile 3D Blocks (Trình bày súc tích, không dàn trải)
           ========================================================================= */}
        <section>
          <Container>
            <div className="max-w-2xl mx-auto text-center mb-12 space-y-2">
              <h2 className="font-display text-3xl font-bold text-primary-forest">
                Ba Trụ Cột Giá Trị Cốt Lõi
              </h2>
              <p className="text-sm text-on-surface-variant">
                Nguyên tắc định hướng cho mọi quyết định nghiên cứu và thương mại hóa của ViNar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Pebble3D
                variant="forest"
                shape="egg"
                title="Vì Môi Trường Khí Hậu"
                subtitle="Chấm dứt đốt rơm rạ, giảm thiểu 680,000 tấn CO2e phát thải và bảo vệ nguồn nước ngầm."
                metric="Net Zero"
                icon={<Sparkles className="w-6 h-6 text-[#bbefc0]" />}
              />

              <Pebble3D
                variant="sprout"
                shape="egg"
                title="Vì Sinh Kế Bà Con"
                subtitle="Tăng thu nhập 2.8 - 4.2 triệu VNĐ/tháng từ phế phẩm và tiết kiệm 40% chi phí nước tưới."
                metric="+30% Thu Nhập"
                icon={<Heart className="w-6 h-6 text-[#154423]" />}
              />

              <Pebble3D
                variant="timber"
                shape="egg"
                title="Tự Chủ Công Nghệ Việt"
                subtitle="Làm chủ 100% công nghệ tinh chế polysaccharide bản địa, thay thế hóa chất nhập khẩu."
                metric="100% Bản Địa"
                icon={<ShieldCheck className="w-6 h-6 text-[#ffdcc6]" />}
              />
            </div>

            <div className="mt-14 text-center">
              <Link href="/hanh-trinh">
                <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                  Xem Lộ Trình Hành Trình Lịch Sử Của ViNar
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <ChatbotWidget />
      <Footer />
    </div>
  );
}
