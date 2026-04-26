# 成电约饭 - Design System (MASTER)

## Product Info
- **Name**: 成电约饭
- **Type**: Campus Social Dining Mini Program
- **Platform**: WeChat Mini Program (iOS/Android)
- **Audience**: UESTC undergraduates & graduates (18-26)

## Design Philosophy
Playful yet trustworthy. A campus dining companion that feels friendly, safe, and energetic. Uses soft clay-like surfaces with vibrant accents to create youthful appeal while maintaining credibility through clear information hierarchy and trust indicators (credit score, health badges).

## Color Tokens

| Token | Hex | Usage |
|-------|-----|-------|
| --primary | #2563EB | Main brand, active states, primary buttons |
| --primary-light | #DBEAFE | Light backgrounds, tags |
| --secondary | #3B82F6 | Secondary actions, links |
| --cta | #F97316 | Call-to-action, highlight, "Join" buttons |
| --cta-light | #FFF7ED | CTA backgrounds |
| --bg | #F8FAFC | Page background |
| --surface | #FFFFFF | Cards, modals, input backgrounds |
| --text | #1E293B | Primary text, headings |
| --text-secondary | #475569 | Body text, descriptions |
| --text-muted | #94A3B8 | Placeholders, timestamps |
| --border | #E2E8F0 | Dividers, input borders |
| --success | #10B981 | Credit score good, completed status |
| --warning | #F59E0B | Medium credit, pending |
| --danger | #EF4444 | Low credit, cancel, error |
| --female-only | #EC4899 | "Girls only" badge |

## Typography

WeChat Mini Program uses system fonts:
- iOS: PingFang SC (-apple-system)
- Android: Roboto / Noto Sans CJK

| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Display | 40rpx | 700 | 1.3 |
| H1 | 36rpx | 700 | 1.3 |
| H2 | 32rpx | 600 | 1.4 |
| H3 | 28rpx | 600 | 1.4 |
| Body | 28rpx | 400 | 1.5 |
| Caption | 24rpx | 400 | 1.4 |
| Tag | 22rpx | 500 | 1.2 |

## Spacing Scale (4rpx base)

| Token | Value |
|-------|-------|
| --space-1 | 8rpx |
| --space-2 | 16rpx |
| --space-3 | 24rpx |
| --space-4 | 32rpx |
| --space-5 | 48rpx |
| --space-6 | 64rpx |

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| --radius-sm | 8rpx | Tags, badges |
| --radius-md | 16rpx | Buttons, small cards |
| --radius-lg | 24rpx | Main cards, panels |
| --radius-xl | 32rpx | Bottom sheets, modals |
| --radius-full | 9999rpx | Avatars, pills |

## Shadows (Clay-inspired)

| Token | Value |
|-------|-------|
| --shadow-sm | 0 2rpx 8rpx rgba(30,41,59,0.06) |
| --shadow-md | 0 4rpx 16rpx rgba(30,41,59,0.08) |
| --shadow-lg | 0 8rpx 32rpx rgba(30,41,59,0.10) |

## Elevation

- Cards: bg #FFFFFF + shadow-md + radius-lg
- Buttons: bg primary/cta + shadow-sm + radius-md
- Floating Action: shadow-lg

## Animation

- Tap feedback: scale(0.97) + 100ms
- Page transition: 200ms ease-out
- Skeleton shimmer: 1.5s linear infinite
- Toast: 300ms ease-in-out

## Component Patterns

### Meal Card
- White surface, radius-lg, shadow-md
- Top: Avatar row (host avatar + nickname + credit score badge)
- Middle: Time + Location + People count
- Bottom: Taste tags + Cost type (AA/我请) + Join button

### Credit Badge
- >=90: green pill with shield icon
- 80-89: orange pill
- <80: red pill with warning icon

### Health Badge
- Upload icon + "已体检" green badge
- Missing: muted text "未上传" (optional display)

### Bottom Tab Bar
- 4 items: 约饭 / 凑单 / 消息 / 我的
- Active: primary color + filled icon
- Inactive: text-muted + outlined icon

## Anti-Patterns
- Do NOT use emoji as icons
- Do NOT use pure black (#000000)
- Do NOT use shadows on scrollable list items (performance)
- Do NOT use font-size < 24rpx for readable content
- Avoid horizontal page scroll

## Accessibility
- Touch targets >= 88rpx (44pt)
- Color contrast >= 4.5:1 for text
- Focus states for keyboard navigation
- Reduced motion respected via prefers-reduced-motion
