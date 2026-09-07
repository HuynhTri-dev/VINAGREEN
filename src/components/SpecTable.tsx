/**
 * @name SpecTable.tsx
 * @description Data-driven technical specifications table component with mock variable support
 */

import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export interface SpecRow {
  parameter: string;
  value: string;
  method: string;
  isHighlight?: boolean;
}

export interface SpecTableProps {
  title?: string;
  subtitle?: string;
  rows?: SpecRow[];
}

/** Default Mock Technical Data */
export const DEFAULT_SPEC_ROWS: SpecRow[] = [
  {
    parameter: "Thành phần cấu trúc",
    value: "100% Polysaccharide & Cellulose phụ phẩm nông nghiệp",
    method: "Quang phổ hồng ngoại biến đổi Fourier (FTIR)",
    isHighlight: true,
  },
  {
    parameter: "Khả năng ngậm nước cực hạn",
    value: "400g – 450g H₂O / 1g hạt khô tự thân",
    method: "Chuẩn thử nghiệm ASTM D570",
    isHighlight: true,
  },
  {
    parameter: "Tốc độ trương nở bão hòa",
    value: "< 180 giây khi tiếp xúc độ ẩm",
    method: "Trọng lượng kế hấp phụ động học",
  },
  {
    parameter: "Chu kỳ nhả ẩm tầng rễ",
    value: "15 – 21 ngày / lần ngậm nước",
    method: "Cảm biến điện dung độ ẩm đất sâu 30cm",
  },
  {
    parameter: "Thời gian hoạt hóa trong đất",
    value: "6 – 8 tháng (180 – 240 ngày)",
    method: "Chôn mẫu đất thực địa Gia Lai",
  },
  {
    parameter: "Tỷ lệ kháng ion mặn (Na⁺, Cl⁻)",
    value: "Khóa 88.4% nồng độ mặn > 3‰",
    method: "Đo độ dẫn điện EC & Sắc ký ion IC",
  },
  {
    parameter: "Độc tính & Vi nhựa tồn dư",
    value: "0% Polyacrylamide, 100% tự phân rã thành mùn đen",
    method: "Kiểm nghiệm tiêu chuẩn OECD 301B",
    isHighlight: true,
  },
  {
    parameter: "Mức độ sẵn sàng công nghệ",
    value: "TRL 6 (Thực nghiệm Pilot quy mô đồng ruộng 120ha)",
    method: "Hội đồng Khoa học & ĐMST Độc Lập",
  },
];

export const SpecTable: React.FC<SpecTableProps> = ({
  title = "Bảng Thông Số Kỹ Thuật Độc Quyền (Biotech Spec Sheet)",
  subtitle = "Dữ liệu đo đạc thực nghiệm từ Trạm khảo nghiệm Lâm sinh Gia Lai và Viện Hàn lâm KH&CN.",
  rows = DEFAULT_SPEC_ROWS,
}) => {
  return (
    <div className="w-full rounded-3xl bg-surface-container-low border border-surface-container-highest/80 overflow-hidden shadow-lg">
      <div className="p-6 sm:p-8 bg-surface-container border-b border-surface-container-highest/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-secondary-moss mb-1">
            <ShieldCheck className="w-4 h-4" />
            Kiểm Nghiệm Phòng Lab &amp; Thực Địa
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-primary-forest">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
            {subtitle}
          </p>
        </div>
        <span className="shrink-0 text-xs font-bold font-mono px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-container border border-secondary-moss/30 self-start sm:self-auto">
          SPEC-V3.4 VERIFIED
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface-container-high/60 text-xs font-bold uppercase text-primary-forest tracking-wider border-b border-surface-container-highest">
            <tr>
              <th className="py-4 px-6">Chỉ Tiêu Đánh Giá</th>
              <th className="py-4 px-6">Giá Trị Kiểm Nghiệm</th>
              <th className="py-4 px-6">Phương Pháp &amp; Tiêu Chuẩn</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container-highest/60">
            {rows.map((row, index) => (
              <tr
                key={index}
                className={
                  row.isHighlight
                    ? "bg-secondary-container/10 hover:bg-secondary-container/20 transition-colors"
                    : "hover:bg-surface-container/50 transition-colors"
                }
              >
                <td className="py-4 px-6 font-semibold text-deep-ink flex items-center gap-2">
                  {row.isHighlight && (
                    <CheckCircle2 className="w-4 h-4 text-secondary-moss shrink-0" />
                  )}
                  {row.parameter}
                </td>
                <td className="py-4 px-6 font-bold text-primary-forest">
                  {row.value}
                </td>
                <td className="py-4 px-6 text-xs text-outline font-medium">
                  {row.method}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
