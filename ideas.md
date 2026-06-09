# SinoVenture 设计方案

## 方案一：暗金奢华（Dark Gold Luxury）
<response>
<text>
**Design Movement**: Art Deco Modernism — 黑金奢华，融合装饰艺术的几何精准与现代极简主义

**Core Principles**:
1. 深墨黑底色 + 金色点缀，营造高端外事服务的权威感
2. Cormorant Garamond 衬线字体 + Inter 无衬线，形成层次对比
3. 几何线框装饰元素，体现精准与专业
4. 大量留白，内容呼吸感强

**Color Philosophy**: 
- 主色：#0A0E17（深墨黑）
- 金色：#B8965A / #D4AF72（双金调）
- 白色：#FFFFFF / #F5F2EC（暖白）
- 灰色：#8A8E9A（辅助文字）

**Layout Paradigm**: 非对称布局，左侧大标题 + 右侧内容，打破传统居中网格

**Signature Elements**:
1. 金色菱形分隔符
2. 带角标的品牌徽章
3. 数字背景水印效果

**Interaction Philosophy**: 悬停时金色线条从左向右展开，按钮有微妙的位移反馈

**Animation**: 页面加载时文字淡入上移，滚动触发区块渐显，轮播图1.4秒淡入切换

**Typography System**: 
- 标题：Cormorant Garamond（300/400/600）
- 正文：Inter（300/400/500）
- 中文：Noto Sans SC（300/400）
</text>
<probability>0.09</probability>
</response>

## 方案二：简约白金（Minimal White Gold）
<response>
<text>
**Design Movement**: Swiss Minimalism — 极简主义，白底金线，强调内容本身

**Core Principles**:
1. 大面积白色背景，金色作为唯一装饰色
2. 严格的网格系统，精准的间距
3. 文字即设计，排版即视觉
4. 去除一切多余装饰

**Color Philosophy**: 白底 + 金色 + 深灰，干净专业

**Layout Paradigm**: 严格12列网格，内容对齐感强

**Signature Elements**:
1. 细金线边框
2. 大号数字编号
3. 极细字重标题

**Interaction Philosophy**: 极简hover效果，颜色渐变为主

**Animation**: 极简淡入，无多余动效

**Typography System**: Playfair Display + DM Sans
</text>
<probability>0.05</probability>
</response>

## 方案三：东方现代（Oriental Modern）
<response>
<text>
**Design Movement**: Contemporary Chinoiserie — 东方美学与现代设计的融合

**Core Principles**:
1. 传统中国红/朱砂色与现代设计语言结合
2. 水墨质感背景纹理
3. 汉字与英文的双语排版艺术
4. 留白即意境

**Color Philosophy**: 朱砂红 + 墨黑 + 宣纸白

**Layout Paradigm**: 竖向阅读流 + 横向展开，模拟书卷展开感

**Signature Elements**:
1. 水墨笔触装饰
2. 印章式标签
3. 竖排文字点缀

**Interaction Philosophy**: 如展开画卷般的过渡动画

**Animation**: 水墨晕染效果，内容从中心向外展开

**Typography System**: 思源宋体 + Noto Serif SC + 英文衬线
</text>
<probability>0.06</probability>
</response>

---

## 选定方案：暗金奢华（Dark Gold Luxury）

保留原始 HTML 的设计精髓，完整迁移到 React + Tailwind 架构，确保视觉一致性。
