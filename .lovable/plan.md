# MovieFlow × Vidu Q3 合作落地页

参考文档要点与 wavespeed.ai/vidu-q3-api、wavespeed.ai/collections/vidu 的版式风格，做一个 B2B 风格、面向全球开发者与企业团队的合作落地页。

## 路由与文件

- 新建路由：`src/routes/vidu.tsx`（路径 `/vidu`），独立 SEO（title、description、og:title、og:description、og:image）
- 不改动 `src/routes/index.tsx`
- 组件拆分至 `src/components/vidu/`：`Hero.tsx`、`Logos.tsx`、`PainSolution.tsx`、`Capabilities.tsx`、`Tiers.tsx`、`Results.tsx`、`Integration.tsx`、`CTA.tsx`、`Footer.tsx`

## 页面结构（自上而下）

1. **顶部导航**：左侧 MovieFlow × Vidu 联名 logo（文字 lockup），右侧 "Docs / Playground / Get 1000 Free Credits" CTA
2. **Hero**
   - Eyebrow：`PARTNERSHIP · MOVIEFLOW × VIDU Q3`
   - H1：Enterprise AI Video, Without the Bottlenecks
   - Sub：合作介绍 + Vidu Q3 模型一句话定位（60s+ 4K、统一多模态 API、低 40% 成本、99.9% SLA）
   - 双 CTA：`Claim 1000 Free Credits` / `Read API Docs`
   - 右侧：循环播放的视频占位（mp4 提示位，先用渐变 + 播放按钮静态占位，便于后续替换为真实 demo）
3. **信任条**：合作 / 适用行业 logo 占位（E-commerce、SaaS、Film、Edtech 等 4-6 个文字徽标）
4. **The 4 Bottlenecks → Solved**：左痛点 / 右 Q3 方案的 4 组对照卡片（对应文档 4 大痛点）
5. **Core Capabilities**：6 张能力卡（Text-to-Video、Image-to-Video Pro 720p–4K、Reference-to-Video 1–4 图、Start-End-to-Video 关键帧桥接、多语种音素级唇形同步、批量与多比例输出）
6. **Tiers**：Standard / Pro (1–16s) / Turbo 三档对比表，标注起步价 `From $0.25/run`
7. **Proven Results**：4 个数字指标（-75% 制作时间、+32% 转化、+45% 留存、-80% 预演周期、-70% 本地化成本）
8. **Integration**：代码片段（Node.js fetch 示例），右侧列出 Python / Node / Java / Go SDK 与 2 小时接入、GDPR/CCPA/PIPL 合规
9. **Final CTA**：1000 Free Vidu Credits 注册条，链接到 `https://platform.vidu.com/?utm_source=osm`
10. **Footer**：MovieFlow × Vidu 联合署名、合作邮箱占位

## 设计系统

- 主题：深色企业科技风（对齐 wavespeed 的 dark + 高对比）
- 在 `src/styles.css` 新增语义 token（不写死颜色）：
  - `--background` 深近黑、`--foreground` 近白
  - 新增 `--brand` (Vidu 紫蓝)、`--brand-2` (MovieFlow 青)、`--gradient-brand: linear-gradient(135deg, var(--brand), var(--brand-2))`
  - `--shadow-glow` 用于 hero 与 CTA
- 全部使用 Tailwind 语义类（`bg-background`、`text-foreground`、`bg-[image:var(--gradient-brand)]`），不出现 `text-white` / `bg-black` 等硬编码
- 字体：保留默认无衬线，标题加粗、紧排（tracking-tight）
- 复用 shadcn `Button` / `Card` / `Badge` / `Separator`

## SEO

- title：`MovieFlow × Vidu Q3 API — Enterprise AI Video Without Bottlenecks`
- description：一句话覆盖 60s+ 4K 一致性、统一多模态、低 40% 成本、99.9% SLA
- og:image：使用 hero 区生成的品牌图（`imagegen` 生成 1200×630，存 `src/assets/vidu-og.jpg`）

## 不做的事

- 不接后端、不调真实 Vidu API（纯前端落地页）
- 不改首页、不动现有路由
- 不引入新依赖

完成后只需把 `/vidu` 加进现有导航或直接分享 URL。
