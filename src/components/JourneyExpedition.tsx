"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FlaskConical,
  Trophy,
  Users,
  MapPin,
  Calendar,
  Quote,
  Image as ImageIcon,
} from "lucide-react";

export interface JourneyStep {
  id: string;
  type: "lab" | "competition" | "networking";
  period: string;
  stationName: string;
  location: string;
  badge: string;
  icon: React.ReactNode;
  headline: string;
  story: string;
  imagePlaceholder?: string;
  awards?: { title: string; category: string }[];
  quote?: string;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: "lab",
    type: "lab",
    period: "Quý 1 – Quý 4 / 2023",
    stationName: "Trạm 01: Khởi Nguồn Từ Lab",
    location: "Phòng Thí Nghiệm Hóa Sinh",
    badge: "R&D FOUNDATION",
    icon: <FlaskConical className="w-6 h-6 sm:w-7 sm:h-7 text-white" />,
    headline: "Hạt giống đầu tiên ươm mầm từ phòng lab",
    story:
      "Trước vấn nạn đốt đồng khói bụi và hạn mặn, nhóm kỹ sư trẻ bắt đầu hành trình từ phòng thí nghiệm, tổng hợp thành công màng hydrogel polysaccharide có khả năng giữ ẩm vượt trội.",
    imagePlaceholder: "Hình ảnh nhóm đang làm việc miệt mài trong phòng lab hoặc kiểm tra mẫu tại vườn cây",
    quote: "Từ những ngày đầu chật vật với từng mẫu thử, chúng mình chỉ có niềm tin mãnh liệt rằng phế phẩm nông nghiệp sẽ là lời giải cho bài toán hạn mặn."
  },
  {
    id: "competitions",
    type: "competition",
    period: "2024 - 2026",
    stationName: "Trạm 02: Khẳng Định & Vươn Xa",
    location: "Các Đấu Trường Khởi Nghiệp",
    badge: "AWARDS & RECOGNITION",
    icon: <Trophy className="w-6 h-6 sm:w-7 sm:h-7 text-white" />,
    headline: "Thử lửa tại các đấu trường Đổi mới Sáng tạo",
    story:
      "Mang giải pháp ra ánh sáng, dự án đã nhận được sự công nhận và đánh giá cao từ các chuyên gia, ban giám khảo và các quỹ đầu tư tại nhiều đấu trường lớn nhỏ.",
    imagePlaceholder: "Khoảnh khắc nhận giải thưởng, thuyết trình pitch deck hoặc vinh danh trên sân khấu",
    awards: [
      { title: "Giải Nhất GreenBio Global Idea Bridge Lab 2025", category: "Global Winner" },
      { title: "Top 9 Tech Planter SEA 2026", category: "Deep-Tech & Eco-Innovation" },
      { title: "Special Prize InnoStar 2026", category: "Giải Thưởng Đặc Biệt" },
      { title: "Giải Nhì NCKH Cấp Trường TDTU", category: "NCKH Sinh Viên" },
    ],
    quote: "Mỗi giải thưởng không chỉ là thành tích, mà là một lần chúng mình được lắng nghe, được phản biện và trưởng thành hơn trên hành trình khoa học."
  },
  {
    id: "networking",
    type: "networking",
    period: "Hiện tại",
    stationName: "Trạm 03: Hành Trình Mới",
    location: "Networking & Tìm Đồng Đội",
    badge: "TEAM BUILDING",
    icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />,
    headline: "Đi tìm những người bạn đồng hành",
    story:
      "Từ ý tưởng đến sản phẩm thực tế là một chặng đường dài. Chúng mình đang kết nối và tìm kiếm những người đồng đội nhiệt huyết, có cùng chung tầm nhìn phát triển bền vững để đưa ViNar Hydrogel ra thị trường.",
    imagePlaceholder: "Hình ảnh team đi sự kiện networking, gặp gỡ đối tác, hoặc sinh hoạt chung",
    quote: "Nếu bạn đam mê công nghệ xanh và muốn tạo ra tác động thực sự, hãy bước cùng chúng mình trong chặng đường sắp tới!"
  }
];

export const JourneyExpedition: React.FC = () => {
  const [visibleStations, setVisibleStations] = useState<Set<string>>(new Set(["lab"]));
  const observerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            if (id) {
              setVisibleStations((prev) => {
                const newSet = new Set(prev);
                newSet.add(id);
                return newSet;
              });
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -15% 0px" }
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Container for the winding snake timeline */}
      <div className="flex flex-col">
        {JOURNEY_STEPS.map((step, idx) => {
          const isVisible = visibleStations.has(step.id);
          const isEven = idx % 2 === 0; // 0 = Left, 1 = Right, 2 = Left
          const isLast = idx === JOURNEY_STEPS.length - 1;

          return (
            <React.Fragment key={step.id}>
              {/* Station Block */}
              <div
                data-id={step.id}
                ref={(el) => { observerRefs.current[idx] = el; }}
                className={`relative w-full transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                  }`}
              >
                {/* Vertical Line Segment */}
                <div
                  className={`absolute top-0 bottom-0 w-[4px] bg-primary-forest/40 ${isEven ? "left-[1.5rem] sm:left-[2.5rem] -ml-[2px]" : "right-[1.5rem] sm:right-[2.5rem] -mr-[2px]"
                    }`}
                />

                {/* Station Node Icon */}
                <div
                  className={`absolute top-12 sm:top-16 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-700 delay-300 ring-4 ring-surface z-10 ${isVisible ? "scale-100" : "scale-0"
                    } ${isEven ? "left-[1.5rem] sm:left-[2.5rem] -translate-x-1/2" : "right-[1.5rem] sm:right-[2.5rem] translate-x-1/2"
                    } ${step.type === "lab" ? "bg-primary-forest text-white" :
                      step.type === "competition" ? "bg-[#D97706] text-white" :
                        "bg-secondary-moss text-white"
                    }`}
                >
                  {step.icon}
                </div>

                {/* Content Container */}
                <div
                  className={`w-full py-6 sm:py-8 ${isEven
                    ? "pl-[4.5rem] sm:pl-[6.5rem] pr-[0.5rem] sm:pr-[2rem]"
                    : "pr-[4.5rem] sm:pr-[6.5rem] pl-[0.5rem] sm:pl-[2rem]"
                    }`}
                >
                  {/* Card with Image and Text Layout Horizontal on Desktop (xl:flex-row) */}
                  <div className="w-full bg-surface-container-lowest p-5 sm:p-8 rounded-[2rem] border border-surface-container-highest shadow-3d-surface flex flex-col xl:flex-row gap-6 sm:gap-10 hover:border-primary-forest/40 transition-all duration-300 relative overflow-hidden group">

                    {/* Background ambient glow */}
                    <div className={`absolute top-0 w-64 h-64 bg-primary-forest/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none ${isEven ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
                      }`}></div>

                    {/* Image Placeholder Section */}
                    <div className={`w-full xl:w-2/5 shrink-0 flex flex-col ${isEven ? "xl:order-2" : "xl:order-1"
                      }`}>
                      <div className="w-full aspect-[4/3] sm:aspect-video xl:aspect-[4/3] rounded-2xl bg-surface-container border border-surface-container-highest flex flex-col items-center justify-center text-center p-6 overflow-hidden relative group-hover:bg-surface-container-highest transition-colors cursor-pointer">
                        <ImageIcon className="w-10 h-10 text-outline mb-3 group-hover:scale-110 group-hover:text-primary-forest transition-all duration-500" />
                        <span className="text-xs sm:text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-2">
                          [Vị trí Hình ảnh To]
                        </span>
                        <span className="text-[11px] sm:text-xs text-outline leading-relaxed max-w-[220px]">
                          {step.imagePlaceholder}
                        </span>
                      </div>

                      {/* Quote below image */}
                      {step.quote && (
                        <div className="mt-4 sm:mt-5 relative p-4 sm:p-5 rounded-2xl bg-primary-forest/5 border border-primary-forest/10 italic text-xs sm:text-sm text-deep-ink/80 font-medium">
                          <Quote className="absolute top-3 left-3 w-4 h-4 sm:w-5 sm:h-5 text-primary-forest/20 rotate-180" />
                          <p className="pl-6 sm:pl-8 relative z-10 leading-relaxed">
                            &quot;{step.quote}&quot;
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Text Project Content Section */}
                    <div className={`w-full xl:w-3/5 flex flex-col justify-center ${isEven ? "xl:order-1" : "xl:order-2"
                      }`}>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                        <span className="px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase font-mono">
                          {step.badge}
                        </span>
                        <span className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-tertiary-timber">
                          <Calendar className="w-3.5 h-3.5" />
                          {step.period}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-primary-forest mb-3 leading-snug">
                        {step.stationName}
                      </h3>
                      <h4 className="font-bold text-base sm:text-lg text-deep-ink/90 mb-4 leading-relaxed">
                        {step.headline}
                      </h4>

                      <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mb-6">
                        {step.story}
                      </p>

                      {/* Awards / Achievements List - Mini Timeline */}
                      {step.awards && (
                        <div className="mb-2 mt-4 space-y-4">
                          <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-primary-forest flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-tertiary-timber" />
                            {step.type === "competition"
                              ? "Dấu Ấn Trên Các Đấu Trường Khởi Nghiệp"
                              : "Giải thưởng & Thành tích"}
                          </div>

                          {/* Mini Timeline Layout for Awards */}
                          <div className="relative border-l-[3px] border-surface-container-highest ml-2.5 sm:ml-3 space-y-4 py-2">
                            {step.awards.map((award, i) => (
                              <div key={i} className="relative pl-6 sm:pl-8 group/award">
                                {/* Timeline Dot Node */}
                                <div className="absolute -left-[11px] top-1/2 -translate-y-1/2 w-[19px] h-[19px] rounded-full bg-surface-container-lowest border-[3px] border-surface-container-highest group-hover/award:border-tertiary-timber transition-colors flex items-center justify-center">
                                  <div className="w-2 h-2 rounded-full bg-tertiary-timber scale-0 group-hover/award:scale-100 transition-transform" />
                                </div>

                                {/* Content Frame */}
                                <div className="p-3.5 sm:p-4 rounded-xl bg-surface-container-low border border-surface-container-highest group-hover/award:border-tertiary-timber/40 group-hover/award:bg-surface-container transition-all">
                                  <div className="font-bold text-xs sm:text-sm text-primary-forest leading-snug">
                                    {award.title}
                                  </div>
                                  <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide text-on-surface-variant mt-1.5 flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-secondary-moss" />
                                    {award.category}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-auto pt-6 flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-outline">
                        <MapPin className="w-3.5 h-3.5 text-secondary-moss" />
                        {step.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Curving Winding Connector to Next Station */}
              {!isLast && (
                <div
                  className={`relative w-full h-24 sm:h-40 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <div className="absolute left-[1.5rem] sm:left-[2.5rem] right-[1.5rem] sm:right-[2.5rem] top-0 bottom-0">
                    <svg className="w-full h-full text-primary-forest/40" preserveAspectRatio="none" viewBox="0 0 100 100" overflow="visible">
                      {isEven ? (
                        // Smooth S-Curve: Left to Right
                        <path
                          d="M 0,0 L 0,20 C 0,50 100,50 100,80 L 100,100"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeDasharray="12 12"
                          vectorEffect="non-scaling-stroke"
                          className="animate-pulse"
                        />
                      ) : (
                        // Smooth S-Curve: Right to Left
                        <path
                          d="M 100,0 L 100,20 C 100,50 0,50 0,80 L 0,100"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeDasharray="12 12"
                          vectorEffect="non-scaling-stroke"
                          className="animate-pulse"
                        />
                      )}
                    </svg>
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
