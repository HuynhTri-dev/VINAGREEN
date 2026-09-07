/**
 * @name ChatbotWidget.tsx
 * @description Custom Text-First AI Chatbot Widget tailored for farmers and B2B partners
 */

"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  PhoneCall,
  Sparkles,
  Calculator,
  User,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/design-system";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  isDosageCard?: boolean;
  dosageData?: {
    crop: string;
    area: number;
    kgNeeded: string;
    waterSaved: string;
  };
}

const QUICK_SUGGESTION_CHIPS = [
  { label: "🌱 Liều lượng Sầu riêng", prompt: "Tính liều lượng AgriGel cho 1 hecta sầu riêng" },
  { label: "☕ Liều lượng Cà phê", prompt: "Tư vấn giữ ẩm cho cây cà phê đất đỏ bazan" },
  { label: "💧 Chống mặn BioBandage", prompt: "BioBandage có chịu được nước mặn 3‰ không?" },
  { label: "📦 Nhận mẫu thử miễn phí", prompt: "Tôi muốn đăng ký nhận gói mẫu thử AgriGel" },
  { label: "📞 Gặp kỹ sư nông học", prompt: "Cho tôi số điện thoại chuyên viên phụ trách vùng" },
];

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "Kính chào bà con và quý đối tác! Tôi là Trợ Lý Nông Vụ ViNar. Tôi có thể hỗ trợ tính toán liều lượng viên nén ngậm nước AgriGel, tư vấn kỹ thuật chống hạn mặn hoặc kết nối gửi mẫu thử nghiệm tận vườn.",
      timestamp: "Vừa xong",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: text,
      timestamp: "Vừa xong",
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage("");
    setIsTyping(true);

    // Simulated Smart Response based on user input
    setTimeout(() => {
      let botReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: "Cảm ơn bà con đã liên hệ. Hệ thống đang phân tích thông tin thổ nhưỡng theo vị trí canh tác của quý khách.",
        timestamp: "Vừa xong",
      };

      const lower = text.toLowerCase();
      if (lower.includes("sầu riêng") || lower.includes("liều lượng") || lower.includes("cà phê")) {
        botReply = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "Dưới đây là khuyến nghị định lượng chuẩn thực địa từ phòng thí nghiệm ViNar:",
          timestamp: "Vừa xong",
          isDosageCard: true,
          dosageData: {
            crop: lower.includes("sầu riêng") ? "Sầu riêng kinh doanh" : "Cà phê vối Tây Nguyên",
            area: 1,
            kgNeeded: "45 – 50 kg AgriGel",
            waterSaved: "40% – 42% lượng nước tưới",
          },
        };
      } else if (lower.includes("mẫu thử") || lower.includes("đăng ký")) {
        botReply = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "ViNar đang cấp phát gói dùng thử AgriGel 500g hoàn toàn miễn phí cho nhà vườn tại Gia Lai, Đắk Lắk, Tiền Giang và Bến Tre. Vui lòng để lại Số điện thoại hoặc bấm nút 'Đăng Ký Nhận Mẫu' ngay dưới trang chủ, kỹ sư sẽ gọi hỗ trợ trong 24 giờ!",
          timestamp: "Vừa xong",
        };
      } else if (lower.includes("kỹ sư") || lower.includes("số điện thoại") || lower.includes("gặp")) {
        botReply = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "Bà con có thể liên hệ trực tiếp Tổng đài Kỹ thuật Nông học ViNar qua số miễn cước 1800 6828 (8:00 - 18:00 hàng ngày) hoặc kết nối qua Zalo Official Account để gửi hình ảnh rễ cây cần khám bệnh.",
          timestamp: "Vừa xong",
        };
      } else if (lower.includes("chống mặn") || lower.includes("biobandage")) {
        botReply = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "Màng bọc rễ sinh học BioBandage có khả năng khóa giữ 88.4% ion Na⁺ và Cl⁻ trong ngưỡng mặn > 3‰, bảo vệ rễ tơ 90 - 120 ngày rồi tự hủy thành mùn hữu cơ, không gây ngạt rễ.",
          timestamp: "Vừa xong",
        };
      }

      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2.5 px-5 py-3 rounded-full bg-surface-container-lowest text-primary-forest shadow-3d-surface border border-surface-container-highest hover:scale-105 transition-all text-xs font-bold select-none cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-secondary-moss animate-pulse" />
            <span>Hỏi Trợ Lý Nông Vụ ViNar</span>
          </button>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Mở khung chat trợ lý nông vụ"
          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
            isOpen
              ? "bg-surface-container-high text-deep-ink shadow-md"
              : "bg-primary-forest text-white shadow-3d-forest hover:scale-110"
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative">
              <MessageSquare className="w-7 h-7 text-[#bbefc0]" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-secondary-moss border-2 border-white" />
            </div>
          )}
        </button>
      </div>

      {/* Chat Window Modal / Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-x-4 bottom-24 sm:inset-auto sm:bottom-24 sm:right-6 sm:w-[420px] h-[580px] max-h-[85vh] z-50 rounded-[2.5rem] bg-surface-container-lowest border border-surface-container-highest shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
          {/* Header */}
          <div className="p-4 sm:p-5 bg-primary-forest text-white flex items-center justify-between shadow-md shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1e482b] border border-white/20 flex items-center justify-center shadow-inner">
                <Bot className="w-6 h-6 text-[#bbefc0]" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base leading-tight">
                  Trợ Lý Nông Vụ ViNar
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-[#a0d3a5] mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-secondary-moss animate-pulse" />
                  <span>Trực tuyến • Hỗ trợ kỹ thuật 24/7</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="tel:18006828"
                title="Gọi hotline miễn cước"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#bbefc0]" />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Hotline Strip */}
          <div className="bg-secondary-container/80 dark:bg-surface-container px-4 py-1.5 flex items-center justify-between text-[11px] text-on-secondary-container font-semibold border-b border-secondary-moss/20">
            <span>Tổng đài miễn cước nông vụ:</span>
            <a href="tel:18006828" className="font-mono font-extrabold text-primary-forest underline">
              1800 6828
            </a>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-surface text-deep-ink">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-primary-forest text-white flex items-center justify-center shrink-0 text-xs font-bold mt-1">
                    VN
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl p-3.5 text-sm leading-relaxed shadow-sm ${
                    msg.sender === "user"
                      ? "bg-primary-forest text-white rounded-tr-sm"
                      : "bg-surface-container-lowest text-deep-ink border border-surface-container-highest rounded-tl-sm"
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Render In-Chat Interactive Dosage Card */}
                  {msg.isDosageCard && msg.dosageData && (
                    <div className="mt-3 p-3.5 rounded-xl bg-surface-container border border-surface-container-highest space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary-forest">
                        <span>{msg.dosageData.crop}</span>
                        <span className="text-secondary-moss">Khuyến nghị</span>
                      </div>
                      <div className="text-xl font-display font-extrabold text-primary-forest">
                        {msg.dosageData.kgNeeded}
                      </div>
                      <div className="text-xs text-on-surface-variant font-medium">
                        💧 Tiết kiệm: <strong>{msg.dosageData.waterSaved}</strong>
                      </div>
                      <div className="pt-2">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="w-full text-xs h-9 min-h-0"
                          onClick={() =>
                            handleSendMessage("Tôi muốn nhận mẫu thử cho liều lượng này")
                          }
                        >
                          Nhận Gói Thử Nghiệm 500g
                        </Button>
                      </div>
                    </div>
                  )}

                  <span className="block text-[10px] opacity-60 text-right mt-1">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-outline italic">
                <span className="w-2 h-2 rounded-full bg-secondary-moss animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-secondary-moss animate-bounce delay-100" />
                <span className="w-2 h-2 rounded-full bg-secondary-moss animate-bounce delay-200" />
                <span>Trợ lý ViNar đang tìm giải pháp...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Chips */}
          <div className="p-2.5 bg-surface-container-low border-t border-surface-container-highest overflow-x-auto flex gap-2 no-scrollbar">
            {QUICK_SUGGESTION_CHIPS.map((chip, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(chip.prompt)}
                className="shrink-0 px-3 py-1 rounded-full bg-surface-container-lowest hover:bg-surface-container text-xs font-semibold text-deep-ink border border-surface-container-highest transition-colors shadow-xs"
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-surface-container-lowest border-t border-surface-container-highest flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Nhập câu hỏi nông vụ hoặc loại cây..."
              className="flex-1 h-11 px-4 bg-surface-container-low rounded-full border border-surface-container-highest text-sm text-deep-ink focus:outline-none focus:border-primary-forest focus:ring-1 focus:ring-primary-forest"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="w-11 h-11 rounded-full bg-primary-forest text-white disabled:opacity-40 flex items-center justify-center shrink-0 hover:bg-primary transition-colors cursor-pointer shadow-sm"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
