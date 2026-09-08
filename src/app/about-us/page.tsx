/**
 * @name page.tsx
 * @description About Us page focusing on high-impact e-commerce storytelling, concise copy, and visual dominance.
 */

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Container,
  Button,
  Badge,
} from "@/design-system";
import {
  Navbar,
  Footer,
  Pebble3D,
  ChatbotWidget,
  WeAreTrustedBy,
  WePartnerWith,
} from "@/components";
import {
  ArrowRight,
  Sparkles,
  Globe,
  Leaf,
  Target,
  Compass,
  CheckCircle2,
  Quote,
  Cpu,
  Heart,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutUsPage() {
  const { lang, t } = useLanguage();
  const focusAreas = [
    {
      key: "about.focus.smart_agri",
      icon: <Leaf className="w-5 h-5 text-primary-forest" />,
      bg: "bg-primary-forest/20"
    },
    {
      key: "about.focus.medical",
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      bg: "bg-blue-600/20"
    },
    {
      key: "about.focus.waste",
      icon: <Globe className="w-5 h-5 text-secondary-moss" />,
      bg: "bg-secondary-moss/20"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-surface text-deep-ink">
      <Navbar />

      <main className="flex-1 py-12 space-y-24">
        {/* =========================================================================
            1. Hero: Dấu Chân Toàn Cầu. Khát Vọng Việt Nam.
           ========================================================================= */}
        <section className="relative pt-8 pb-12">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Sharp, Punchy Text */}
              <div className="space-y-8">
                <Badge variant="timber" size="md" icon={<Compass className="w-4 h-4" />}>
                  Câu Chuyện Sáng Lập ViNar
                </Badge>

                <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-forest leading-tight">
                  Dấu Chân Trải Nghiệm. <br />
                  <span className="text-secondary-moss">Khát Vọng Dẫn Dắt.</span>
                </h1>

                <div className="text-base sm:text-lg text-on-surface-variant leading-relaxed space-y-4">
                  <p>
                    ViNar không bắt đầu trên bàn giấy, mà từ khát vọng của những người trẻ. Trải qua các chương trình ươm tạo tại Hàn, Nhật, Đài... chúng tôi xót xa khi nhìn về quê hương:
                  </p>

                  <ul className="space-y-2.5 text-deep-ink hidden md:block">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500/80 shrink-0 mt-2" />
                      <span>Phế phẩm nông nghiệp bị đốt bỏ gây ô nhiễm khói bụi.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500/80 shrink-0 mt-2" />
                      <span>Nông dân oằn mình chống chọi hạn mặn, đất bạc màu.</span>
                    </li>
                  </ul>

                  <p className="pt-1 font-bold text-primary-forest text-xl">
                    Gác lại thành tựu cá nhân, chúng tôi chọn kiến tạo mô hình kinh tế tuần hoàn mang lại tác động bền vững.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                  {focusAreas.map((area, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-surface-container border border-surface-container-highest flex flex-col items-center justify-center text-center gap-2 transition-all hover:shadow-md hover:border-primary-forest/30 group cursor-default">
                      <div className={`w-10 h-10 rounded-full ${area.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        {area.icon}
                      </div>
                      <div className="font-display font-bold text-deep-ink text-sm leading-tight">
                        {t(area.key)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: High-Impact Visuals */}
              <div className="relative lg:mr-6 lg:mb-6">
                {/* Main Image */}
                <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-3d-surface border-4 border-white z-10">
                  <Image
                    src="/images/aboutus/chemical_lab.png"
                    alt="Thành viên sáng lập ViNar tại phòng Lab công nghệ cao ở Hàn Quốc hoặc Đài Loan, ánh sáng neon hiện đại, tập trung nghiên cứu"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Floating Secondary Image (Context) */}
                <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 lg:-bottom-8 lg:-right-8 w-2/3 max-w-[280px] aspect-square rounded-[2rem] overflow-hidden shadow-3d-surface border-4 border-white z-20 hidden md:block">
                  <Image
                    src="/images/aboutus/han_man.png"
                    alt="Nông dân Tây Nguyên đang ôm những mảng đất nứt nẻ do hạn mặn, ánh mắt lo âu nhưng đầy hi vọng khi cầm trên tay mầm cây xanh"
                    fill
                    sizes="33vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================================
            2. The Manifesto
           ========================================================================= */}
        <section className="relative w-full py-24 sm:py-32 overflow-hidden flex items-center justify-center text-center mt-12 mb-12">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/aboutus/netzero.png"
              alt="Tầm nhìn phát triển bền vững Net Zero 2050 của ViNar"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto space-y-8 text-white">
              <Quote className="w-16 h-16 text-secondary-moss/80 mx-auto" />
              <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-bold tracking-widest uppercase shadow-lg mb-6">
                Khát Vọng Của Thế Hệ Mới
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-6xl leading-tight">
                &quot;Chúng tôi không chờ đợi sự thay đổi, <br className="hidden md:block" />chúng tôi tự mình kiến tạo sự thay đổi.&quot;
              </h2>
              <div className="mt-8 bg-white/5 border border-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl max-w-3xl mx-auto shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <p className="text-lg sm:text-xl text-[#e2f0e4] font-medium leading-relaxed relative z-10">
                  <strong className="text-white font-bold text-xl sm:text-2xl">ViNar</strong> chính là lời tuyên ngôn của thế hệ trẻ Việt Nam: tự mình kiến tạo sự thay đổi, mang lại sinh kế bền vững cho cộng đồng yếu thế và đưa Việt Nam tiến nhanh hơn trên hành trình chạm đích <strong className="text-[#bbefc0] font-bold text-xl sm:text-2xl drop-shadow-md">Net Zero 2050</strong>.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================================
            3. Cách Mạng Vật Liệu Xanh
           ========================================================================= */}
        <section className="py-12">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Product/Impact Image */}
              <div className="order-2 lg:order-1 relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-3d-surface">
                <Image
                  src="/images/aboutus/nguon_vang.png"
                  alt="Cận cảnh bàn tay đang nâng niu một khối AgriGel ngậm nước trong suốt như pha lê, phía dưới là lớp đất tơi xốp, ánh sáng mặt trời tự nhiên rọi vào rực rỡ"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Text */}
              <div className="order-1 lg:order-2 space-y-8">
                <Badge variant="eco" size="md" icon={<Leaf className="w-4 h-4" />}>
                  Cách Mạng Vật Liệu Xanh
                </Badge>

                <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary-forest leading-tight">
                  Rác Thải Là <br /> <span className="text-secondary-moss">Nguồn Vàng Sinh Học.</span>
                </h2>

                <p className="text-lg text-on-surface-variant">
                  Tại ViNar, khái niệm &quot;rác thải&quot; bị xóa bỏ hoàn toàn.<span className="hidden md:inline"> Chúng tôi tái sinh hàng triệu tấn phế phẩm nông nghiệp thành vật tư sinh học đột phá.</span>
                </p>

                <div className="space-y-4">
                  {[
                    "100% Không Vi Nhựa & Hóa Chất",
                    "Giữ Ẩm Tuyệt Đối, Bảo Tồn Nguồn Nước",
                    "Tái Tạo Độ Phì Nhiêu Cho Đất Mẹ"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-surface-container-highest">
                      <div className="w-8 h-8 rounded-full bg-secondary-moss/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-secondary-moss" />
                      </div>
                      <span className="font-bold text-deep-ink text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================================
            4. 3 Trụ Cột Chiến Lược
           ========================================================================= */}
        <section className="bg-surface-container-low py-20 border-y border-surface-container-highest">
          <Container>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-primary-forest mb-4">
                3 Trụ Cột <span className="hidden md:inline">Chuẩn Mực Toàn Cầu</span>
              </h2>
              <p className="text-on-surface-variant text-lg">Hành động thực chất.<span className="hidden md:inline"> Tác động bền vững.</span></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Pebble3D
                variant="forest"
                shape="egg"
                category="Môi Trường"
                title="Tuần Hoàn Trái Đất"
                subtitle="Khép kín tuần hoàn. Phục hồi tự nhiên. Cam kết hành động hướng tới Net Zero 2050."
                metric="Net Zero"
                icon={<Sparkles className="w-6 h-6 text-[#bbefc0]" />}
              />
              <Pebble3D
                variant="sprout"
                shape="egg"
                category="Cộng Đồng"
                title="Nâng Tầm Đời Sống"
                subtitle="Biến phế phẩm thành sinh kế. Tăng thu nhập trực tiếp cho bà con nông dân."
                metric="Sinh Kế"
                icon={<Heart className="w-6 h-6 text-[#154423]" />}
              />
              <Pebble3D
                variant="timber"
                shape="egg"
                category="Xã Hội"
                title="Công Nghệ Vị Nhân Sinh"
                subtitle="Tiên phong Deep-tech sinh học. Thay thế hoàn toàn vật liệu polymer độc hại."
                metric="Deep-Tech"
                icon={<ShieldCheck className="w-6 h-6 text-[#ffdcc6]" />}
              />
            </div>
          </Container>
        </section>

        {/* =========================================================================
            5. Lợi Thế Cạnh Tranh (USP) & Thực Địa
           ========================================================================= */}
        <section>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-6">
                <Badge variant="timber" size="md">Sức Mạnh Tuổi Trẻ</Badge>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary-forest leading-tight">
                  Công Nghệ Là Công Cụ. <br />
                  <span className="text-secondary-moss">Khát Vọng Youth Là Cốt Lõi.</span>
                </h2>
                <p className="text-lg text-on-surface-variant">
                  Sự khác biệt của ViNar nằm ở ngọn lửa đam mê và khát vọng cống hiến<span className="hidden md:inline"> của thế hệ trẻ (Youth) luôn sẵn sàng lấm bùn, sát cánh cùng nông dân</span>.
                </p>
              </div>
              <div className="relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden shadow-xl">
                <Image
                  src="/images/aboutus/tam_huyet.png"
                  alt="Kỹ sư trẻ ViNar đang hướng dẫn và nắm tay một người nông dân lớn tuổi tại vườn sầu riêng, cả hai cùng nhìn về phía trước mỉm cười rạng rỡ, phía sau là vườn cây xanh tươi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Sub-images of field work */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative aspect-square rounded-3xl overflow-hidden group">
                <Image src="/images/aboutus/thucdia.png" alt="Cảnh thực địa tại vườn sầu riêng, chuyên gia đang bón AgriGel vào gốc cây, cận cảnh lớp đất được cải tạo" fill className="object-cover group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h4 className="text-white font-bold text-lg">Đồng Hành Cùng Nhà Vườn</h4>
                </div>
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden group">
                <Image src="/images/aboutus/covan.png" alt="Hội đồng cố vấn khoa học ViNar đang họp bàn tại phòng Lab, chỉ tay vào biểu đồ phân tích sinh học đất trên bảng tương tác" fill className="object-cover group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h4 className="text-white font-bold text-lg">Bảo Chứng Khoa Học</h4>
                </div>
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden group">
                <Image src="/images/aboutus/xuong_ban_cong.png" alt="Bên trong xưởng sản xuất pilot của ViNar, dây chuyền đang ép những viên AgriGel tự động, sạch sẽ và chuyên nghiệp, có logo ViNar trên bao bì" fill className="object-cover group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h4 className="text-white font-bold text-lg">Sản Xuất Chuẩn Hóa</h4>
                </div>
              </div>
            </div>

            <div className="mt-14 text-center">
              <Link href="/journey">
                <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                  Khám Phá Hành Trình Của ViNar
                </Button>
              </Link>
            </div>
          </Container>
        </section>

        {/* =========================================================================
            6 & 7. Ecosystem Components
           ========================================================================= */}
        <div className="space-y-0">
          <WeAreTrustedBy />
          <WePartnerWith />
        </div>
      </main>

      <ChatbotWidget />
      <Footer />
    </div>
  );
}
