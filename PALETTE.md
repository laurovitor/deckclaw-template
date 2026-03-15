# DeckClaw Palette — Fase 1 (Tailwind)

Paleta oficial derivada do dashboard atual (`tokens.css`), com pares light/dark para uso consistente em `bg/surface/text/border`.

## Primárias

| Token | Light | Dark | Uso |
|---|---|---|---|
| `primary` | `#2563EB` | `#60A5FA` | CTA principal, links, foco |
| `primary-hover` | `#1D4ED8` | `#3B82F6` | Hover de ações primárias |

## Neutras

| Token | Light | Dark | Uso |
|---|---|---|---|
| `bg` | `#F1F5F9` | `#0B1220` | Fundo da aplicação |
| `surface` | `#FFFFFF` | `#0F172A` | Cards/painéis |
| `surface-soft` | `#F8FAFC` | `#111B31` | Blocos secundários |
| `surface-hover` | `#EEF2FF` | `#18223A` | Hover em itens de lista/nav |
| `text` | `#0F172A` | `#E2E8F0` | Texto principal |
| `text-muted` | `#64748B` | `#94A3B8` | Texto auxiliar |
| `border` | `#E2E8F0` | `#243244` | Divisórias e contornos |

## Estados

| Token | Light | Dark | Uso |
|---|---|---|---|
| `success` | `#16A34A` | `#22C55E` | Confirmações e status positivos |
| `warn` (`warning`) | `#D97706` | `#F59E0B` | Alertas de atenção |
| `danger` | `#DC2626` | `#EF4444` | Erros, risco, ações destrutivas |
| `info` | `#2563EB` | `#60A5FA` | Informações e destaque neutro |

## Pares light/dark de uso rápido

- **App BG:** `bg` → `bg`
- **Card/Painel:** `surface` → `surface`
- **Subcard/Seção:** `surface-soft` → `surface-soft`
- **Texto principal:** `text` → `text`
- **Texto secundário:** `text-muted` → `text-muted`
- **Borda padrão:** `border` → `border`
- **Ação principal:** `primary` / `primary-hover`

## Exemplos (bg/surface/text/border)

- Página: `bg-bg text-text`
- Card principal: `bg-surface border border-border`
- Card secundário: `bg-surface-soft`
- Label auxiliar: `text-text-muted`
- Botão primário: `bg-primary hover:bg-primary-hover text-white`
- Estado de sucesso: `bg-success/10 text-success border border-success/30`
