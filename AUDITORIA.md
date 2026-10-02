# Auditoria bertobarata.com

2 out 2026 · impeccable audit + ui-ux-pro-max + tasteskill, num só documento.
Medido no build local (`astro build`), com Lighthouse 12 mobile e Playwright a 1440x900 e 390x844.

## 1. Resumo

| Medida | Valor |
|---|---|
| Lighthouse mobile | Performance **86** · Acessibilidade **100** · Boas práticas **100** · SEO **100** |
| Core Web Vitals (lab) | FCP 2,7 s · LCP 2,9 s · TBT 0 ms · CLS 0 |
| impeccable | **12/20** (Aceitável: há trabalho a fazer) |
| tasteskill Pre-Flight | **Falha** (eyebrows 6/6, cor por projeto, travessão no título, grelhas de cards idênticos) |
| Altura da página | 6.833 px em desktop · **10.156 px em mobile** |
| Problemas | 9 P1 · 10 P2 · 7 P3 |

A identidade (dot-matrix, Khand, verde-lima sobre quase-preto) é forte e distingue-se do Barata Studio. Vale a pena mantê-la. O que puxa o site para baixo:
- conteúdo desatualizado (projetos, MetLife, CV);
- secções esticadas a 100vh;
- tudo centrado e em cards iguais;
- imagens muito pesadas;
- falhas de toque em mobile.

## 2. Notas por ferramenta

### impeccable audit

| # | Dimensão | Nota | Achado-chave |
|---|---|---|---|
| 1 | Acessibilidade | 3 | Lighthouse dá 100, mas há texto a 9,9–11,5 px em mobile, links "Visitar site" com 4,01:1 e alvos de 23 px de altura |
| 2 | Performance | 3 | 2,2 MB de capturas JPG de página inteira (até 1000x6252) para miniaturas de 333 px; Google Fonts bloqueia a renderização |
| 3 | Responsivo | 2 | O botão "Próximo" tapa o "Web Developer" em mobile; 10k px de scroll; grelha de 24 tecnologias com 1.386 px |
| 4 | Theming | 2 | Tokens em `global.css`, mas 8 cores hex por projeto em `site.ts`; fontes metade self-hosted, metade Google |
| 5 | Anti-padrões | 2 | Eyebrow com linhas em todas as secções, tudo centrado, 3 grelhas de cards idênticos, travessão no `<title>` |
| | **Total** | **12/20** | **Aceitável** |

**Veredito anti-padrões:** o hero passa (o dot-matrix é intencional e não é um "AI default"). Da secção Sobre para baixo, o template nota-se: rótulo pequeno com linhas, título centrado em Khand, subtítulo cinzento, grelha de cards. A estrutura repete-se 6 vezes.

### ui-ux-pro-max

| Prioridade | Estado | Notas |
|---|---|---|
| 1 Acessibilidade | ⚠️ | Contraste 4,01:1 num link de cor por projeto; `label-content-name-mismatch` no ícone "BS" (o aria-label diz "Barata Studio" e o texto visível diz "BS"); skip-link aponta para `#work` |
| 2 Toque | ❌ | `BB.` 27x28, ícones da nav 40x40, "Visitar site" 84x23, "Código" 46x23 (mínimo 44x44) |
| 3 Performance | ⚠️ | Sem WebP/AVIF, sem `srcset`, cache curto; `will-change` permanente no hero 3D |
| 4 Layout | ❌ | `min-height:100vh` + scroll-snap em todas as secções: Formação (1 card) e Contacto ocupam 900 px cada; sobreposição do botão fixo em mobile |
| 5 Tipografia e cor | ⚠️ | Texto de corpo bom (Geist, 65ch); microtexto mono a 11,5 px em mobile; 8 cores de destaque |
| 6 Animação | ✅/⚠️ | Há `prefers-reduced-motion`; 3 animações infinitas (pulse, caret, bob) mais tilt 3D com o cursor |
| 7 Estilo | ✅ | Dark tech com dot-matrix coerente com um portfólio de developer |

### tasteskill

**Design Read:** portfólio pessoal de developer para recrutadores e clientes do Studio, em linguagem dark-tech com tipografia dot-matrix, assente em CSS nativo e motion contido.

| Dial | Atual | Recomendado |
|---|---|---|
| DESIGN_VARIANCE | 3 (tudo centrado e simétrico) | 6 |
| MOTION_INTENSITY | 6 | 5 |
| VISUAL_DENSITY | 3 (100vh por secção) | 4 |

Pre-Flight:
- ❌ eyebrows 6 em 6 secções (limite: ceil(6/3) = 2);
- ❌ accent lock (8 cores de projeto, mais o lima e o verde do "Disponível");
- ❌ travessão visível (`Berto Barata — Web Developer` no separador e no Google);
- ❌ grelhas de cards idênticos;
- ❌ CTA "Descarregar CV" duplicado (hero e contacto);
- ✅ raio consistente;
- ✅ CTAs numa linha;
- ✅ sem gradient text;
- ✅ sem glass decorativo;
- ⚠️ `min-height:100vh` em vez de `100dvh` (iOS).

## 3. Problemas unificados

### P1 (bloqueia, conteúdo errado ou WCAG)

1. **Remover o CV público.** É decisão tua: não queres downloads.
   - **Local:** botões "Descarregar CV" no hero e no contacto (`index.astro`), `profile.cvUrl` em `site.ts`, ficheiro `public/berto-barata-cv.pdf` (150 KB; hoje servido com 200).
   - **Correção:** apagar o ficheiro e os dois botões; o hero fica com 2 CTAs ("Ver projetos" e "Falar comigo").
   - **Nota:** o PDF continua no histórico do git. Se tiver dados pessoais, decide se queres limpar o histórico.
   - **Ferramentas:** tasteskill (CTA duplicado) + decisão do Berto.
2. **Projetos desatualizados.**
   - **Local:** `projects` em `site.ts`.
   - **Hoje:** Cão na Rua, Gentle Laughter, GreenBond, Barbearia Supra, Barata Studio, Sales Tracker, Ludy Artes, Valejas.
   - **Problema:** faltam Meet Tracker, App TVDE, FINE RAG e Queen Bee; a ordem não segue os 3 níveis do Studio (Valejas e Greenbond primeiro).
   - **Correção:** alinhar com o baratastudio.com, separando "Para clientes" de "Em desenvolvimento".
3. **Texto de apresentação e MetLife desatualizados.**
   - **Hoje:** o intro diz "Estudante de Engenharia… consultor financeiro" e o facet MetLife diz "Analista empresarial".
   - **Segundo o CV atual** (`~/Documents/Berto_Barata_CV_Capgemini.pdf`): Consultor Premium na MetLife desde dez 2025; ISEL pós-laboral, com média de 15,9.
   - **Correção:** usar a frase aprovada no Studio: "Tenho base em Engenharia Informática e de Computadores e trabalho também em mediação financeira e de seguros…"
4. **Em mobile, o botão fixo "Próximo" tapa o subtítulo do hero.**
   - **Evidência:** a 390 px fica sobre o "Web Developer".
   - **Correção:** esconder abaixo de 768 px; em mobile o scroll é natural.
   - **Ferramentas:** ui-ux-pro-max, impeccable.
5. **Alvos de toque < 44 px.**
   - **Medido:** `BB.` 27x28, ícones da nav 40x40, links dos cards com 23 px de altura.
   - **Correção:** padding e `min-height:44px`.
   - **Ferramentas:** ui-ux-pro-max, impeccable.
6. **Secções a 100vh com scroll-snap.**
   - **Local:** `global.css:137` e `.section{min-height:100vh}`.
   - **Problema:** Formação tem 1 card em 900 px e Contacto tem 900 px; em mobile a página chega a 10.156 px.
   - **Correção:** tirar o min-height (exceto no hero, com `100dvh`) e o snap; dar padding vertical por conteúdo.
   - **Ferramentas:** as três.
7. **Imagens dos projetos pesadas.**
   - **Problema:** capturas de página inteira (caonarua 619 KB a 1000x3676; baratastudio 473 KB a 1000x6252) para miniaturas de 333 px.
   - **Correção:** WebP/AVIF a 800 px de largura, com crop de 16:10 e uma versão longa só se o pan no hover se mantiver; usar `<Image>` do Astro com `srcset`.
   - **Ganho esperado:** cerca de 2 MB a menos e Performance acima de 95.
8. **Ludy Artes sem imagem** (só aparece um "L" placeholder). Capturar o site ou retirar o card.
9. **SEO e partilha.**
   - **Em falta:** imagem OG, JSON-LD (Person com `sameAs` para GitHub, LinkedIn e baratastudio.com, e `worksFor` → Barata Studio).
   - **Por fazer:** robots.txt e sitemap estão feitos mas por commitar (branch `chore/seo-baseline`); HTTPS ainda pendente no GitHub Pages.
   - **Correção:** juntar tudo antes de submeter o sitemap na Search Console.

### P2 (qualidade visível)

1. **Eyebrows em todas as secções** (6/6). Manter no máximo 2 (por exemplo, hero e Contacto); nas outras, o título chega. *tasteskill, impeccable*
2. **Tudo centrado.** Alinhar títulos e texto à esquerda a partir da secção Sobre, numa grelha assimétrica (o hero centrado pode ficar, porque o nome é o design). *tasteskill*
3. **Cor por projeto quebra o accent lock.** Há 8 hex em `site.ts` e "Visitar site" fica a 4,01:1 num deles. Usar o lima em todos os links; a cor do projeto pode viver só na miniatura. *tasteskill, ui-ux-pro-max*
4. **Grelha de 24 tecnologias** com logos coloridos das marcas, em 1.386 px no mobile. Reduzir a cerca de 10 tecnologias atuais e mostrá-las monocromáticas numa lista densa em mono, ou numa só linha em marquee. *impeccable (identical cards)*
5. **Os 3 cards de facetas são uma grelha idêntica.** Passar para linhas com hairline (papel · organização · descrição), como no CTA do Studio. *impeccable*
6. **Ligação ao Barata Studio fraca.** É um monograma "BS" na nav e um card no contacto. Usar o logo oficial (máscara de `logo-bb.webp`) e uma linha clara do tipo "Fundador do Barata Studio ↗" no hero ou no Sobre. Corrige também o `label-content-name-mismatch`. *ui-ux-pro-max*
7. **Microtexto pequeno em mobile.** Eyebrows e tags a 11,5 px, estado a 10,9 px, "Próximo" a 9,9 px. Mínimo 12–13 px nos rótulos e 14 px no texto informativo. *ui-ux-pro-max*
8. **Fontes misturadas.** Array e Khand são self-hosted, Geist e Geist Mono vêm do Google (render-blocking). Self-host do Geist (há pacote `geist` no npm), `preload` da Array (usada no LCP) e mais nada externo. *ui-ux-pro-max, Lighthouse*
9. **Travessão no `<title>`.** Em `Base.astro:10`, passar a `Berto Barata · Web Developer`. Rever também os comentários e os textos em `site.ts`. *impeccable, tasteskill*
10. **"Projetos realizados recentemente / entregue a clientes reais"** inclui projetos próprios (Sales Tracker, Barata Studio). Separar os de clientes dos em desenvolvimento, como no Studio. *impeccable (copy)*

### P3 (polish)

1. Três animações infinitas (pulse do "Disponível", caret e bob do "Próximo") mais tilt 3D com `will-change` permanente. Manter o caret e retirar o bob (o botão sai em mobile, ver P1.4); `will-change` só durante o hover.
2. Skip-link para `#work`: deve apontar para `#main` ou para o início do conteúdo.
3. Rodapé "Feito à mão com Astro": trocar por uma ligação ao Barata Studio, ou retirar.
4. A foto tem pontos vermelhos de fundo no canto superior esquerdo. Recortar ou escurecer.
5. Badge "Disponível para trabalhar": confirmar se ainda é verdade e o que significa (emprego ou clientes Studio?).
6. `lang="pt"` sem `pt-PT`. Um site só em PT dispensa i18n; decidir se queres EN (os recrutadores lêem EN).
7. O dark-only está bem como identidade. Não é preciso modo claro, mas declara `color-scheme: dark`.

## 4. O que está bem (manter)

- **Hero:** o dot-matrix "BERTO BARATA", com contorno pontilhado em "BARATA", é memorável e não copia o Studio.
- **Lighthouse:** Acessibilidade, Boas práticas e SEO a 100; CLS 0; TBT 0.
- **Base técnica:** `prefers-reduced-motion` respeitado; `focus-visible` definido; HTML semântico.
- **Texto de corpo:** Geist com boa medida de linha.
- **Miniaturas:** o pan da captura no hover é um detalhe bom (mantém-se com imagens otimizadas).
- **Contacto:** direto, com email clicável.

## 5. Ordem de ataque (um PR por lote)

1. **Conteúdo:** retirar o CV; atualizar o intro e a MetLife; projetos alinhados com o Studio (clientes / em desenvolvimento); Ludy com captura; rever "Disponível".
2. **Layout e mobile:** tirar 100vh e o snap; esconder "Próximo" em mobile; alvos de 44 px; microtexto ≥ 12 px; alinhar à esquerda a partir do Sobre; eyebrows só onde contam.
3. **Sistema visual:** accent lock no lima; facetas e tecnologias sem grelha de cards; logo oficial do Studio.
4. **Performance:** imagens em WebP/AVIF com `srcset`; self-host do Geist e preload da Array.
5. **SEO:** OG image, JSON-LD, robots e sitemap, título sem travessão. Depois disso, submeter o sitemap na Search Console e ativar o HTTPS.

## 6. Decisões tuas

- **Tecnologias:** lista curta só com o que usas hoje, ou manter o "já usei"?
- **Badge "Disponível para trabalhar":** manter? Se sim, para quê (emprego ou projetos)?
- **Versão EN do site:** sim ou não?
- **MetLife:** aparece pelo nome ou como "mediação financeira e de seguros"?

## 7. Estado após as correções (2 out 2026)

Lighthouse mobile depois das correções: **Performance 99 · Acessibilidade 100 · Boas práticas 100 · SEO 100** (PT e EN). LCP 1,8 s (era 2,9 s), CLS 0. Página em mobile com 9.026 px (era 10.156 px).

Resolvido:
- **P1.1** CV retirado (ficheiro e botões).
- **P1.2** Projetos alinhados com o Studio:
  - para clientes: Valejas, Greenbond, Ludy, Cão na Rua, Gentle Laughter, Queen Bee, Barbearia;
  - nova secção "Em desenvolvimento": Barata Studio, Meet Tracker, App TVDE, FINE RAG.
- **P1.3** Intro com a frase do Studio; a MetLife aparece como "Mediação de seguros e financeira".
- **P1.4** Botão "Próximo" só em desktop.
- **P1.5** Alvos de toque com pelo menos 44 px.
- **P1.6** Sem 100vh nem scroll-snap; o hero usa `100dvh`.
- **P1.7** Imagens em WebP de 1200x750 (de 2,2 MB para cerca de 400 KB).
- **P1.8** Ludy com captura.
- **P1.9** SEO completo:
  - imagem OG e JSON-LD (Person com `worksFor` Barata Studio e `sameAs`);
  - robots.txt e sitemap com hreflang;
  - HTTPS ativo e obrigatório.
- **P2.1** Eyebrows só no hero e no Contacto.
- **P2.2** Secções alinhadas à esquerda a partir do Sobre.
- **P2.3** Accent único (lima).
- **P2.4** Tecnologias monocromáticas numa tabela com hairlines.
- **P2.5** Facetas em linhas, não em cards.
- **P2.6** Logo oficial do Studio na nav e nas apps; links para o Studio no rodapé e no contacto.
- **P2.7** Microtexto com pelo menos 12 px.
- **P2.8** Geist self-hosted, com preload da Array e da Geist.
- **P2.9** `<title>` sem travessão.
- **P2.10** Copy de projetos separada (clientes / próprios).
- **P3.1–P3.4, P3.6, P3.7:**
  - bob removido;
  - skip-link para `#about`;
  - rodapé com o Studio;
  - foto limpa;
  - `pt-PT` mais versão EN;
  - `color-scheme: dark`.
- **Extra:** links "Código" para repos privados (Greenbond, Ludy) removidos; davam 404.

Por fazer:
- **P3.5** O badge fica "Disponível para projetos", por decisão do Berto.
- **Search Console:** submeter `https://bertobarata.com/sitemap.xml`.
