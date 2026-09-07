/**
 * @name route.ts
 * @description Next.js Route Handler for VINAGREEN Agricultural AI Assistant with SSE Streaming.
 * Integrates with Ollama Cloud / OpenAI-compatible API using OLLAMA_API_KEY, model gemma4:31b,
 * and yields token-by-token Server-Sent Events (SSE).
 */

import { NextResponse } from "next/server";

// ---------------------------------------------------------------------------
// VINAGREEN Agriculture Knowledge Base System Prompt
// ---------------------------------------------------------------------------

const VINAGREEN_SYSTEM_PROMPT = `
Bạn là "Trợ Lý Nông Vụ ViNar" - Chuyên gia tư vấn kỹ thuật nông nghiệp của Công ty Cổ phần Nông nghiệp Xanh VINAGREEN.

TÔN CHỈ & PHONG CÁCH GIAO TIẾP:
- Xưng hô: Xưng "Tôi" hoặc "ViNar", gọi người dùng là "Bà con" hoặc "Quý đối tác".
- Giọng văn: Thân thiện, mộc mạc, đậm chất nông nghiệp, chuyên nghiệp và giàu tình cảm.
- Trả lời: Ngắn gọn, đi thẳng vào trọng tâm, dùng định dạng Markdown (in đậm ** **, danh sách, bảng biểu nếu cần) có số liệu cụ thể.

BỘ TRI THỨC SẢN PHẨM & KỸ THUẬT VINAGREEN:

1. VIÊN NÉN NGẬM NƯỚC AGRIGEL:
   - Công nghệ: Polymer sinh học ngậm giữ nước gấp 400 - 500 lần trọng lượng khô.
   - Liều lượng Sầu riêng kinh doanh (1 ha): 45 – 50 kg AgriGel. Tiết kiệm 40% – 42% lượng nước tưới, giảm 30% chi phí phân bón bốc hơi.
   - Liều lượng Cà phê Tây Nguyên (1 ha đất đỏ bazan): 40 – 45 kg AgriGel. Giữ ẩm đất 60 – 90 ngày trong đỉnh điểm mùa khô.
   - Liều lượng Cây ăn trái khác (Thanh long, Cam quýt, Bưởi, Mãng cầu): 35 – 40 kg/ha.
   - Liều lượng Lúa & Cây ngắn ngày: 15 – 20 kg/ha.
   - Độ bền: Hoạt động nhả nước - ngậm nước liên tục trong đất 3 - 5 năm.

2. MÀNG BỌC RỄ CHỐNG MẶN BIOBANDAGE:
   - Công nghệ: Màng sinh học khóa giữ 88.4% ion mặn Na⁺ và Cl⁻ trong ngưỡng nước mặn > 3‰.
   - Tác dụng: Bảo vệ bộ rễ tơ chống cháy rễ, ngộ độc mặn trong 90 – 120 ngày mùa xâm nhập mặn.
   - Phân hủy: Tự hủy sinh học thành mùn hữu cơ cải tạo đất sau khi hết chu kỳ.

3. CHÍNH SÁCH MẪU THỬ MIỄN PHÍ:
   - ViNar tặng gói AgriGel 500g thử nghiệm miễn phí cho nhà vườn tại các tỉnh: Gia Lai, Đắc Lắc, Tiền Giang, Bến Tre, Long An.
   - Bà con chỉ cần để lại Số điện thoại hoặc gọi tổng đài.

4. THÔNG TIN LIÊN HỆ & HOTLINE:
   - Tổng đài Kỹ thuật Nông học miễn cước: 1800 6828 (8:00 – 18:00 hàng ngày).
   - Website chính thức: VINAGREEN.

YÊU CẦU PHẢN HỒI:
- Trình bày định dạng Markdown đẹp mắt (dùng **in đậm**, bảng biểu nếu so sánh).
- Nếu hỏi về sầu riêng hoặc cà phê: Luôn đưa ra con số liều lượng kg cụ thể cho 1 ha.
- Nếu bà con xin mẫu thử: Hướng dẫn để lại SĐT hoặc gọi Hotline 1800 6828.
`;

// ---------------------------------------------------------------------------
// Route Handler (SSE Streaming)
// ---------------------------------------------------------------------------

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Danh sách tin nhắn không hợp lệ" },
        { status: 400 }
      );
    }

    const ollamaApiKey = process.env.OLLAMA_API_KEY || "52a11c8b2bba4c76bd2e71152a127daf.4cHja0VG92Lu2I9_fsLRIWgJ";
    const ollamaBaseUrl = process.env.OLLAMA_BASE_URL || "https://ollama.com/v1";
    const ollamaModel = process.env.OLLAMA_MODEL || "gemma4:31b";
    const userMessage = messages[messages.length - 1]?.content || "";

    const encoder = new TextEncoder();

    // Create ReadableStream for SSE
    const stream = new ReadableStream({
      async start(controller) {
        let isOllamaStreaming = false;

        if (ollamaApiKey) {
          try {
            const formattedMessages = [
              { role: "system", content: VINAGREEN_SYSTEM_PROMPT },
              ...messages.map((m: { role: string; content: string }) => ({
                role: m.role === "assistant" || m.role === "bot" ? "assistant" : "user",
                content: m.content,
              })),
            ];

            const res = await fetch(`${ollamaBaseUrl}/chat/completions`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ollamaApiKey}`,
              },
              body: JSON.stringify({
                model: ollamaModel,
                messages: formattedMessages,
                stream: true,
                temperature: 0.6,
              }),
            });

            if (res.ok && res.body) {
              isOllamaStreaming = true;
              const reader = res.body.getReader();
              const decoder = new TextDecoder();
              let buffer = "";

              while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split("\n");
                buffer = lines.pop() || "";

                for (const line of lines) {
                  const trimmed = line.trim();
                  if (!trimmed || trimmed.startsWith(":")) continue;

                  if (trimmed === "data: [DONE]") {
                    controller.enqueue(encoder.encode("data: [DONE]\n\n"));
                    continue;
                  }

                  if (trimmed.startsWith("data: ")) {
                    try {
                      const jsonStr = trimmed.slice(6);
                      const parsed = JSON.parse(jsonStr);
                      const deltaText = parsed.choices?.[0]?.delta?.content || "";
                      if (deltaText) {
                        controller.enqueue(
                          encoder.encode(`data: ${JSON.stringify({ text: deltaText })}\n\n`)
                        );
                      }
                    } catch {
                      // Skip invalid JSON chunks
                    }
                  }
                }
              }
            }
          } catch (err) {
            console.warn("[VINAGREEN Chat SSE] Ollama API stream failed:", err);
          }
        }

        // Fallback simulated SSE streaming if Ollama call was not successful
        if (!isOllamaStreaming) {
          const fallbackText = generateKnowledgeReply(userMessage);
          const words = fallbackText.split(" ");
          for (let i = 0; i < words.length; i++) {
            const chunk = (i === 0 ? "" : " ") + words[i];
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text: chunk })}\n\n`));
            await new Promise((r) => setTimeout(r, 20));
          }
        }

        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "Connection": "keep-alive",
      },
    });
  } catch (error) {
    console.error("[VINAGREEN Chat API] Error:", error);
    return NextResponse.json(
      { error: "Đã có lỗi xảy ra khi xử lý câu hỏi" },
      { status: 500 }
    );
  }
}

// ---------------------------------------------------------------------------
// Fallback Rule-Based Knowledge Engine
// ---------------------------------------------------------------------------

function generateKnowledgeReply(text: string): string {
  const lower = text.toLowerCase();

  if (lower.includes("sầu riêng")) {
    return "Dạ thưa bà con, đối với sầu riêng kinh doanh (1 ha), ViNar khuyến nghị sử dụng **45 – 50 kg viên nén AgriGel**.\n\n| Chỉ số | Thông số khuyến nghị |\n| --- | --- |\n| Liều lượng | 45 – 50 kg/ha |\n| Nước tiết kiệm | 40% – 42% |\n| Chi phí phân bón | Giảm 30% bốc hơi |";
  }
  if (lower.includes("cà phê")) {
    return "Dạ thưa bà con, đối với cây cà phê vối tại vùng đất đỏ bazan Tây Nguyên (1 ha), liều lượng chuẩn là **40 – 45 kg AgriGel**.\n\n| Chỉ số | Thông số khuyến nghị |\n| --- | --- |\n| Liều lượng | 40 – 45 kg/ha |\n| Thời gian giữ ẩm | 60 – 90 ngày mùa khô |\n| Độ bền trong đất | 3 – 5 năm |";
  }
  if (lower.includes("mẫu thử") || lower.includes("đăng ký") || lower.includes("dùng thử")) {
    return "ViNar đang tặng miễn phí **gói thử nghiệm AgriGel 500g** tận vườn cho nhà vườn tại Gia Lai, Đắc Lắc, Tiền Giang, Bến Tre và Long An. Bà con vui lòng để lại **Số điện thoại** hoặc gọi tổng đài miễn cước **1800 6828** để đăng ký!";
  }
  if (lower.includes("mặn") || lower.includes("biobandage") || lower.includes("nước mặn")) {
    return "Màng sinh học **BioBandage** của ViNar có khả năng khóa giữ **88.4% ion mặn Na⁺ và Cl⁻** ngay cả khi độ mặn vượt 3‰. Bảo vệ bộ rễ tơ an toàn từ 90 – 120 ngày, sau đó tự phân hủy sinh học thành mùn cải tạo đất.";
  }

  return "Cảm ơn bà con đã liên hệ Nông Nghiệp Xanh VINAGREEN! Tôi là Trợ Lý Nông Vụ ViNar. Bà con cần tư vấn liều lượng AgriGel cho loại cây nào (Sầu riêng, Cà phê, Cây ăn trái) hay đăng ký nhận mẫu thử nghiệm miễn phí ạ?";
}
