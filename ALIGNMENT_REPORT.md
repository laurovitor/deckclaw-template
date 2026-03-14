# DeckClaw Template Alignment Report

## 1) ux-ops — padrões visuais extraídos do app atual (`deckclaw`)
Base observada no código fonte:
- Tokens: `src/index.css` (fundo cinza claro, superfícies brancas, bordas suaves, azul primário #2563eb aprox.)
- Layout: `AppLayout.tsx` (sidebar + header sticky + conteúdo com padding consistente)
- Sidebar/menu: `AppSidebar.tsx` (navegação vertical com item ativo destacado)
- Componentes-base: `ui/card.tsx`, `ui/button.tsx` (raio médio, borda sutil, sombra leve, estados hover/focus)

Mapeamento aplicado no template:
- **Background**: cinza claro de app (`--bg`) e cards brancos (`--surface`)
- **Tipografia**: Inter/system, pesos 500–700 em títulos e labels
- **Spacing**: grid 16/24/32, paddings amplos em content/header
- **Sidebar/Header**: estrutura e hierarquia parecidas com app atual
- **Card/Table/Form/Button/Badge/Modal**: linguagem visual unificada e próxima ao produto

## 2) devfront-ops — aplicação no `deckclaw-template`
Páginas principais alinhadas:
- Dashboard (`index.html`)
- Jobs (`jobs.html`)
- Projects (`projects.html`)
- Candidates (`candidates.html`)
- Tasks (`tasks.html`)
- Users (`users.html`)
- OpenClaw (`openclaw.html`)
- Settings (`settings.html`)

Ajustes de estrutura:
- `assets/scripts/layout.js` refeito para sidebar/topbar na mesma direção visual do app
- `assets/styles/tokens.css`, `base.css`, `components.css` reestruturados para tokens e componentes próximos do layout atual
- `forms.html` e `tables.html` mantidos como legacy com redirecionamento para `candidates.html` e `jobs.html`

## 3) code-review-ops — verificação de fidelidade mínima
Checklist de consistência:
- [x] Sidebar com ativo/hover e agrupamento de navegação
- [x] Header com botão, título e bloco de usuário
- [x] Cards com borda/sombra/raio coerentes
- [x] Tabelas com header suave e linhas consistentes
- [x] Forms com focus/error no estilo esperado
- [x] Modal e toasts com padrão único
- [x] Badges de status semânticos

## 4) qa-ops + tester-ops — validação desktop/mobile
Evidências (before/after):
- Before desktop: `assets/screenshots/before/index-desktop.png`
- Before mobile: `assets/screenshots/before/index-mobile.png`
- After desktop: `assets/screenshots/after/index-desktop.png`
- After mobile: `assets/screenshots/after/index-mobile.png`
- Extras after: `assets/screenshots/after/jobs-desktop.png`, `assets/screenshots/after/candidates-mobile.png`

Checklist de similaridade:
- [x] Aparência geral remete ao DeckClaw atual, não a tema novo desconectado
- [x] Componentes-chave do escopo mínimo cobertos
- [x] Responsividade básica validada em viewport desktop e mobile
