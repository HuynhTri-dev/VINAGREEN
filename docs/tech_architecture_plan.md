# ViNar Circular AgriTech Platform - Technology Architecture & ElevenLabs Agent Integration Blueprint

## 1. Problem Analysis & Objectives

### 1.1 Context & Project Requirements
ViNar (VinaGreen) is an agritech circular economy initiative transforming agricultural waste into superabsorbent biopolymer gels (AgriGel, BioBandage), targeting Net Zero 2050 and drought mitigation in the Mekong Delta and Central Highlands.

The digital platform must serve 3 distinct user groups:
1. **Impact Funds & ESG Investors**: Deep-tech credibility, data transparency, ESG roadmap, and TRL metrics (requires high-performance, fast-loading, SEO-optimized editorial presentation).
2. **B2B Cooperatives & Smart Farms**: Interactive ROI & dosage calculator, case studies, pilot kit registration.
3. **Smallholder Farmers (End-Users)**: Low-friction touchpoints, high readability (WCAG AAA), and crucially a **Voice-first AI Assistant (AI Farmer Agent)** that understands colloquial Vietnamese agricultural contexts.

### 1.2 The ElevenLabs Integration Challenge
To deliver an authentic "Farmer Assistant", standard text-only chatbots fail due to rural usability barriers (sunlight glare, wet hands, low typing affinity). Integrating ElevenLabs enables natural Voice-to-Voice conversational AI:
- **Zero API Key Leakage**: The client-side application must never expose the `xi-api-key`.
- **Low-Latency Streaming**: Bidirectional voice conversation requires WebSockets or WebRTC with interruption capability (<600ms latency).
- **Dual-Mode Experience**: Must seamlessly support Voice-to-Voice (speaking & listening with audio visualizers) AND Text-Chat fallback for quiet environments or unstable connections.
- **Client Tools / Function Calling**: The ElevenLabs Agent should be able to trigger web actions (e.g., auto-filling the dosage calculator for coffee or durian crops based on conversation).

---

## 2. Recommended Technology Stack

| Layer | Recommended Technology | Justification |
| :--- | :--- | :--- |
| **Framework** | **Next.js 15 (App Router, React 19, TypeScript)** | Single full-stack repository providing SSR/SSG for SEO (Investor & Product pages), edge API routes for secure ElevenLabs token exchange, and optimized image/font delivery. |
| **Styling & Design System** | **Tailwind CSS v3/v4 + CSS Variables** | Direct compatibility with the existing Google Stitch UI drafts (`docs/DESIGN.md`, Bio-Organic Modernism palette: `#154423`, `#82AC42`, `#7B4B28`, `#F7F6EE`, Epilogue & Plus Jakarta Sans). |
| **Voice / Conversational AI** | **ElevenLabs Conversational AI SDK (`@11labs/react` or `@11labs/client`)** | Built-in WebSocket connection, state management (`listening`, `speaking`, `thinking`), automatic microphone handling, VAD (Voice Activity Detection), and audio streaming. |
| **Audio Visualization** | **Web Audio API + Canvas / Framer Motion** | Real-time biological waveform orb styled with Sprout Vitality green (`#82AC42`) and Forest Green (`#2E5C38`) reflecting speech volume and agent response. |
| **State Management** | **Zustand** | Lightweight, predictable state management for chatbot dock states, conversation transcripts, and calculator sync. |
| **Backend API Route** | **Next.js Edge / Node Route Handlers** | Generates temporary Signed URLs via ElevenLabs REST API to initiate secure WebSockets without exposing credentials. |

---

## 3. System Architecture & Data Flow

### 3.1 ElevenLabs Secure Connection Flow

```mermaid
sequenceDiagram
    autonumber
    actor Farmer as User (Farmer / Investor)
    participant UI as Next.js Client (Custom Chatbot)
    participant API as Next.js Backend (/api/elevenlabs/signed-url)
    participant 11Labs as ElevenLabs ConvAI Engine

    Farmer->>UI: Clicks "Trò chuyện với Trợ lý ViNar" (or Mic icon)
    UI->>API: GET /api/elevenlabs/signed-url (with agentId)
    Note over API: Uses process.env.ELEVENLABS_API_KEY securely
    API->>11Labs: POST /v1/convai/conversation/get-signed-url?agent_id=xxx
    11Labs--API: Returns ephemeral signedUrl (TTL: 15-60s)
    API-->>UI: { signedUrl }
    UI->>11Labs: WebSocket Connect (using signedUrl)
    Note over UI, 11Labs: Full-Duplex WebRTC / WebSocket Audio Stream
    Farmer->>UI: Speaks Vietnamese ("Tôi cần tư vấn giữ nước cho 1 ha sầu riêng Đắk Lắk")
    UI->>11Labs: Audio input stream
    11Labs->>UI: Transcripts & Audio chunk stream + Client Tool execution
    UI->>Farmer: Plays natural Vietnamese voice + renders visualizer & dosage card
```

### 3.2 Dual-Mode Custom Chatbot Component Design
The custom chatbot will be packaged as a floating widget docked at bottom-right with an expansive mode for tablet/mobile:
- **Header**: Agent status indicator (Online / Listening / Speaking), Volume toggle, Language switch, Minimize button.
- **Body**:
  - *Voice Mode (Primary)*: Interactive Bio-Organic Sound Orb (pulsing canvas reacting to audio frequencies), live subtitles (ASR transcript), quick crop selector pills.
  - *Text Mode (Secondary)*: Clean message bubble stream with markdown support, product cards, and calculator result embeds.
- **Footer Controls**: Large 56px touch target microphone button (Farmer A11y compliant), text input field, instant fallback trigger to human agronomist contact.

---

## 4. Step-by-Step Implementation Roadmap

### Phase 1: Foundation & Scaffold Setup
1. **Initialize Project**: Scaffold Next.js 15 with TypeScript, Tailwind CSS, and Lucide/Material Icons.
2. **Token & Asset Porting**: Configure `tailwind.config.ts` with the exact Bio-Organic Modernism color scheme (`surface`, `forest-dark`, `sprout-vitality`, `warm-timber`, `oat-white`), typography (Epilogue + Plus Jakarta Sans), and shadows from `docs/DESIGN.md`.
3. **Environment Setup**: Define `.env.local` containing `ELEVENLABS_API_KEY` and `ELEVENLABS_AGENT_ID`.

### Phase 2: Core Platform Pages (From Stitch Drafts)
1. **Layout & Global Navigation**: Responsive header with frosted glass blur (`backdrop-filter: blur(12px)`), language selector, and CTA button.
2. **Page Sections**:
   - `Home` (`trang_ch_vinar_phong_c_ch_bio_organic_n_i_b_t`): Hero section, circular economy process infographic, value metrics, quick calculator preview.
   - `Products` (`s_n_ph_m_vinar_bio_organic_chuy_n_s_u`): AgriGel & BioBandage technical specs, soil hydration retention curves.
   - `About Us` (`v_ch_ng_t_i_bio_organic_storytelling`): R&D lab origin, team, ESG commitment.
   - `Journey & Milestones` (`h_nh_tr_nh_vinar_bio_organic_milestones`): Awards, trial tests, expansion timeline.

### Phase 3: ElevenLabs Custom Chatbot Integration
1. **API Route Handler**: Create `/api/elevenlabs/signed-url` to request single-use signed URLs from ElevenLabs.
2. **Agent Hook & Client Engine**: Implement `useElevenLabsConversation` wrapping `@11labs/react` or `@11labs/client`.
3. **Custom Visualizer**: Build an organic pulsing canvas visualizer utilizing `AnalyserNode` from Web Audio API.
4. **Interactive Agricultural Tools (Function Calling)**:
   - Tool `calculateDosage({ cropType, areaHectares, region })` that the ElevenLabs agent can invoke to automatically populate the on-screen AgriGel calculator card.
5. **Fallback Flow**: Seamless escalation to WhatsApp/Zalo hotline or contact form when questions exceed knowledge scope.

### Phase 4: Polish, Accessibility & Field Testing
1. **Mobile & A11y Optimization**: Large touch buttons (min 48px), high contrast under outdoor direct sunlight, voice feedback confirmations.
2. **Network Resilience**: Auto-reconnect handling for low 3G/4G connectivity in rural areas.

---

## 5. Potential Risks & Mitigation Strategies

| Risk / Edge Case | Impact | Mitigation Strategy |
| :--- | :--- | :--- |
| **Vietnamese Dialects & Agricultural Slang** | Agent misinterprets Southern/Central dialect terms (e.g., "trái sầu riêng", "cây cà phê", "đất cát pha"). | Configure ElevenLabs Agent with custom system prompt vocabulary, phonetic pronunciation dictionaries, and bilingual agritech knowledge base. |
| **API Key Exposure** | Quota exhaustion, security compromise. | Strictly enforce Signed URL generation exclusively on Next.js server route handlers. Zero API keys in frontend bundles. |
| **Microphone Permissions in Mobile Browsers** | User blocks mic permission or uses in-app webview (Zalo/Facebook). | Provide clear visual guidance modal for microphone permission, and provide immediate one-tap fallback to Text Chat mode. |
| **High Audio Latency on Rural 3G/4G** | Awkward conversational pauses. | Use streaming WebSocket chunks, optimize ElevenLabs voice model selection for Turbo/Flash latency, and display immediate "Đang lắng nghe..." visual cues. |
| **Cost Management (Voice Generation Units)** | Excessive ElevenLabs credits consumption. | Set conversation duration limits (e.g. 3-5 minutes per session), debounce voice activity detection, and provide instant text fallback. |
