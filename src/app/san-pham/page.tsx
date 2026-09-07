/**
 * @name page.tsx
 * @description Product Deep Dive page featuring Capillary Cycle, Interactive Dosage Calculator, and SpecTable
 */

"use client";

import React, { useState } from "react";
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
  SpecTable,
  ChatbotWidget,
} from "@/components";
import {
  Droplets,
  ShieldAlert,
  ArrowRight,
  Calculator,
  Layers,
  Sparkles,
  TrendingDown,
  CheckCircle2,
} from "lucide-react";

export default function ProductsPage() {
  // Interactive B2B Calculator State
  const [areaHectares, setAreaHectares] = useState<number>(2);
  const [cropType, setCropType] = useState<"durian" | "coffee" | "citrus" | "rice">("durian");
  const [soilType, setSoilType] = useState<"bazan" | "alluvial" | "saline">("bazan");

  // Dynamic Dosage Calculations
  const dosageRates = {
    durian: { kgPerHa: 50, waterSavedPercent: 42, fuelSavedVnd: 2800000 },
    coffee: { kgPerHa: 45, waterSavedPercent: 40, fuelSavedVnd: 2500000 },
    citrus: { kgPerHa: 40, waterSavedPercent: 38, fuelSavedVnd: 2200000 },
    rice: { kgPerHa: 30, waterSavedPercent: 35, fuelSavedVnd: 1800000 },
  };

  const currentRate = dosageRates[cropType];
  const totalKg = Math.round(currentRate.kgPerHa * areaHectares);
  const totalFuelSaved = (currentRate.fuelSavedVnd * areaHectares).toLocaleString("vi-VN");

  return (
    <div className="flex flex-col min-h-screen bg-surface text-deep-ink">
      <Navbar />

      <main className="flex-1 py-12 space-y-20">
        {/* =========================================================================
            1. Products Hero Section
           ========================================================================= */}
        <section>
          <Container>
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <Badge variant="eco" size="md">
                Danh Mục Giải Pháp Sinh Học Chuyên Sâu
              </Badge>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-forest leading-tight">
                Vật Liệu Giữ Ẩm &amp; Màng Bảo Vệ Rễ Tơ
              </h1>
              <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
                Được phát triển từ nền tảng hóa sinh hữu cơ, AgriGel™ và BioBandage™
                thay thế triệt để các hóa chất ngậm nước tổng hợp nhập khẩu, mang
                lại giải pháp chống hạn mặn bền vững cho đất mẹ.
              </p>
            </div>

            {/* Product Duos 3D Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
              <Pebble3D
                variant="forest"
                shape="egg"
                title="AgriGel™ Viên Nén Giữ Ẩm Sinh Học"
                subtitle="Cấu trúc tổ ong vi xốp hấp thu nước tức thì và nhả chậm 15 – 21 ngày cho rễ cây hấp thụ. Tự phân rã 100% thành mùn hữu cơ sau 6 - 8 tháng."
                metric="450× Ngậm Nước"
                icon={<Droplets className="w-6 h-6 text-[#bbefc0]" />}
              >
                <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
                  <span className="px-2.5 py-1 rounded-full bg-white/20">Không vi nhựa</span>
                  <span className="px-2.5 py-1 rounded-full bg-white/20">TRL 6 Lab</span>
                  <span className="px-2.5 py-1 rounded-full bg-white/20">Bảo vệ rễ 21 ngày</span>
                </div>
              </Pebble3D>

              <Pebble3D
                variant="timber"
                shape="egg"
                title="BioBandage™ Màng Bọc Rễ Kháng Mặn"
                subtitle="Màng bọc sinh học bao phủ rễ tơ, ngăn chặn 88.4% sự xâm nhập của ion Na⁺ và Cl⁻ trong nước mặn trên 3‰, đồng thời kháng nấm bệnh Phytophthora."
                metric="Khóa Mặn &gt;3‰"
                icon={<ShieldAlert className="w-6 h-6 text-[#ffdcc6]" />}
              >
                <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
                  <span className="px-2.5 py-1 rounded-full bg-white/20">Bảo vệ rễ tơ 90-120 ngày</span>
                  <span className="px-2.5 py-1 rounded-full bg-white/20">Đất phù sa ĐBSCL</span>
                </div>
              </Pebble3D>
            </div>
          </Container>
        </section>

        {/* =========================================================================
            2. Capillary Action Mechanism Diagram
           ========================================================================= */}
        <section className="py-14 bg-surface-container-low border-y border-surface-container-highest">
          <Container>
            <div className="max-w-3xl mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary-moss font-mono">
                Cơ Chế Mao Dẫn Vi Mô (Capillary Cycle)
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary-forest">
                Cách Thức AgriGel Hoạt Động Quanh Vùng Rễ
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card tier="floating" rounded="lg" className="p-6 space-y-3 shadow-3d-surface">
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center font-mono font-bold text-primary-forest">
                  01
                </div>
                <h4 className="font-display font-bold text-lg text-primary-forest">
                  Viên Nén Khô Ban Đầu
                </h4>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Cấu trúc polysaccharide đậm đặc ở trạng thái ngủ đông, dễ dàng
                  bảo quản trong bao bì sinh thái lên đến 24 tháng mà không giảm chất lượng.
                </p>
              </Card>

              <Card tier="floating" rounded="lg" className="p-6 space-y-3 shadow-3d-surface">
                <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center font-mono font-bold text-on-secondary-container">
                  02
                </div>
                <h4 className="font-display font-bold text-lg text-primary-forest">
                  &lt; 3 Phút Trương Nở Cực Hạn
                </h4>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Khi gặp nước tưới hoặc sương đêm, hạt nén lập tức hút căng nước
                  và khóa giữ chất dinh dưỡng phân bón hòa tan không bị rửa trôi.
                </p>
              </Card>

              <Card tier="floating" rounded="lg" className="p-6 space-y-3 shadow-3d-surface">
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center font-mono font-bold text-primary-forest">
                  03
                </div>
                <h4 className="font-display font-bold text-lg text-primary-forest">
                  Nhả Chậm 15 – 21 Ngày
                </h4>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Cung cấp độ ẩm thẩm thấu ngược theo áp suất rễ cây, duy trì sức
                  sống cho lá non và nuôi trái lớn đều ngay cả khi đứt nước tưới 3 tuần.
                </p>
              </Card>
            </div>
          </Container>
        </section>

        {/* =========================================================================
            3. Interactive B2B & Farmer Dosage Calculator (Dynamic Slider)
           ========================================================================= */}
        <section>
          <Container>
            <div className="max-w-4xl mx-auto rounded-[2.5rem] bg-surface-container-lowest p-8 sm:p-12 shadow-3d-surface border border-surface-container-highest">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-surface-container-highest">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-secondary-container text-on-secondary-container flex items-center justify-center">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-primary-forest">
                      Công Cụ Định Lượng Nông Vụ Thông Minh
                    </h3>
                    <p className="text-xs text-on-surface-variant">
                      Kéo trượt diện tích để tính toán chính xác lượng AgriGel và chi phí tiết kiệm
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-surface-container text-outline self-start sm:self-auto">
                  MODEL V3.4
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
                {/* Controls Area */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Crop Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-outline mb-2">
                      Loại Cây Trồng Mục Tiêu
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: "durian", label: "🌳 Sầu riêng" },
                        { id: "coffee", label: "☕ Cà phê vối" },
                        { id: "citrus", label: "🍊 Bưởi / Cam" },
                        { id: "rice", label: "🌾 Lúa / Cây ngắn ngày" },
                      ].map((crop) => (
                        <button
                          key={crop.id}
                          type="button"
                          onClick={() => setCropType(crop.id as any)}
                          className={`p-3 rounded-xl text-xs font-bold text-left border transition-all cursor-pointer ${
                            cropType === crop.id
                              ? "bg-primary-forest text-white border-primary-forest shadow-sm"
                              : "bg-surface-container text-deep-ink border-surface-container-highest hover:bg-surface-container-high"
                          }`}
                        >
                          {crop.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Area Slider (UX Optimization) */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-outline uppercase">Quy Mô Diện Tích Canh Tác</span>
                      <span className="font-display text-lg text-primary-forest font-extrabold">
                        {areaHectares} Hecta ({areaHectares * 10} công)
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0.5}
                      max={20}
                      step={0.5}
                      value={areaHectares}
                      onChange={(e) => setAreaHectares(parseFloat(e.target.value))}
                      className="w-full h-2.5 bg-surface-container-high rounded-full appearance-none cursor-pointer accent-primary-forest"
                    />
                    <div className="flex justify-between text-[11px] text-outline font-mono">
                      <span>0.5 ha</span>
                      <span>5 ha</span>
                      <span>10 ha</span>
                      <span>20 ha</span>
                    </div>
                  </div>

                  {/* Soil Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-outline mb-1.5">
                      Đặc Tính Thổ Nhưỡng
                    </label>
                    <select
                      value={soilType}
                      onChange={(e) => setSoilType(e.target.value as any)}
                      className="w-full h-11 px-4 rounded-xl bg-surface-container border border-surface-container-highest text-sm text-deep-ink focus:outline-none focus:ring-2 focus:ring-primary-forest"
                    >
                      <option value="bazan">Đất đỏ Bazan Tây Nguyên (Thoát nước nhanh, dễ hạn)</option>
                      <option value="alluvial">Đất phù sa bồi lắng ĐBSCL (Cần giữ phân bón)</option>
                      <option value="saline">Đất duyên hải nhiễm mặn theo mùa (&gt; 2.5‰)</option>
                    </select>
                  </div>
                </div>

                {/* Output Card */}
                <div className="lg:col-span-5 p-6 rounded-3xl bg-secondary-container/20 border border-secondary-moss/30 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-secondary-moss">
                      Kết Quả Định Lượng
                    </span>
                    <div className="font-display font-extrabold text-3xl sm:text-4xl text-primary-forest mt-2">
                      {totalKg} <span className="text-lg font-normal">kg AgriGel</span>
                    </div>
                    <div className="text-xs text-on-surface-variant mt-1">
                      Liều lượng tương đương: <strong>45g – 55g / gốc</strong> rải quanh tán chiếu
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-secondary-moss/20">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-on-surface-variant">Lượng nước tưới tiết kiệm:</span>
                      <span className="font-bold text-secondary-moss">~{currentRate.waterSavedPercent}%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-on-surface-variant">Tiết kiệm dầu bơm ước tính:</span>
                      <span className="font-bold text-primary-forest">~{totalFuelSaved} VNĐ/vụ</span>
                    </div>
                  </div>

                  <a href="/#pilot-form">
                    <Button variant="primary" size="md" className="w-full">
                      Nhận Gói Thử Nghiệm Này
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================================
            4. Technical Specs Table Component
           ========================================================================= */}
        <section>
          <Container>
            <SpecTable />
          </Container>
        </section>
      </main>

      <ChatbotWidget />
      <Footer />
    </div>
  );
}
