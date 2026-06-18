## 目标
给 `src/routes/vidu.tsx` 中所有指向外部域名的链接添加 `rel="sponsored"`，保持原有的 `noopener noreferrer` 不变。

## 外部链接清单（12 处）
当前文件中有 3 个外部 URL 常量：
- `PLATFORM_URL = "https://platform.vidu.com/?utm_source=osm"`  
- `DOCS_URL = "https://wavespeed.ai/docs/docs-api/vidu/vidu-q3-text-to-video"`  
- `PLAYGROUND_URL = "https://wavespeed.ai/models/vidu/q3/text-to-video"`

出现位置：
1. Nav — Docs（line 89）
2. Nav — Playground（line 92）
3. Nav — Sign In（line 95）
4. Hero — Open Playground（line 161）
5. Hero — View API Docs（line 166）
6. Capabilities — 6 张能力卡片（line 371，循环内）
7. Tiers — 3 个 CTA（line 465，循环内）
8. FinalCTA — Register & claim credits（line 609）
9. FinalCTA — Read the docs（line 614）
10. Footer — Docs（line 637）
11. Footer — Playground（line 638）
12. Footer — Get credits（line 639）

## 修改方式
将上述 12 处 `rel="noreferrer"` 统一替换为 `rel="sponsored noreferrer"`。

内部链接（`href="/"`、`href="#capabilities"`、`href="mailto:..."`）不做任何修改。