# Carrossel Infinito de Alta Visibilidade — Veja o Material na Prática

Transformação da seção "Veja o material na prática" para substituir a troca estática de slides por uma esteira contínua infinita (marquee) em movimento constante para a direita, com visualização ampliada, contraste vibrante e cartões de mapas mentais em destaque.

## User Review & Decisões Confirmadas

> [!IMPORTANT]
> **Decisões alinhadas na Fase 1:**
> - **Estilo de Movimento**: Movimento contínuo e fluido tipo marquee sem paradas bruscas.
> - **Direção do Fluxo**: Deslocamento automático e infinito para a direita (`translate-x` com animação contínua e sem quebras visuais).
> - **Comportamento do Cursor**: Movimento constante e ininterrupto (sem pausar no hover).
> - **Nível de Visibilidade**: Eliminar aspecto apagado através de cartões mais iluminados, bordas de alta definição, sombras projetadas limpas e largura expandida para máxima clareza dos mapas.

---

## 1. Overview & Core Concept

- **O que faz**: Apresenta todos os 5 mapas mentais reais em uma vitrine dinâmica que desliza continuamente de forma suave e infinita para a direita, permitindo que os professores visualizem o material pedagógico completo sem necessidade de cliques.
- **Público**: Professores e educadores que buscam avaliar rapidamente a riqueza visual, qualidade gráfica e o formato pronto para impressão dos mapas.
- **Valor Percebido**: Demonstra a vasta quantidade e alta fidelidade dos materiais em exibição viva, aumentando o desejo de compra e a prova de produto.

---

## 2. User Experience & Visual Design

- **Maior Visibilidade e Contraste**:
  - **Fundo da Seção**: Verde-floresta profundo (`#173A2C`) preservado, com suave iluminação radial interna (`#214735`/`#D9A13B`) para dar profundidade de palco sem ofuscar.
  - **Cartões dos Mapas**: Base sólida branca pura (`#FFFFFF`), cantos arredondados modernos (16px), borda de precisão (`#E5D8C7`), e sombra destacada (`shadow-xl`) que eleva o material sobre o fundo.
  - **Tamanho dos Mapas**: Proporção natural A4 paisagem (`aspect-[1280/906]`) com largura ampliada (~380px a ~440px por cartão), tornando textos, ilustrações e grafismos perfeitamente legíveis.
  - **Efeito Infinito Suave**: Duplicação contínua da lista de mapas em CSS (`@keyframes marquee-right` com `linear infinite`), criando uma ilusão de esteira sem emendas visuais.
  - **Gradientes Sutis nas Bordas**: Máscara suave nas extremidades esquerda e direita para entrada e saída elegantes dos cartões na tela.

---

## 3. Decisões de Produto & Arquitetura

- **Decisão 1: Animação via CSS GPU vs JavaScript requestAnimationFrame**
  - *Abordagem escolhida*: Animação acelerada por hardware via CSS (`transform: translateX(...)` com `will-change: transform`).
  - *Por quê*: Desempenho de 60fps constante mesmo em celulares modestos, sem travamentos de thread JS e com consumo mínimo de bateria.
- **Decisão 2: Loop Infinito Sem Quebras**
  - *Abordagem escolhida*: Duplicação do array de 5 mapas mentais (renderizando 2 conjuntos idênticos em fila contínua sincronizada).
  - *Por quê*: Garante que nunca haja espaço vazio na tela independente da largura do monitor (desde mobile de 360px até ultrawide 4K).

---

## 4. Technical Architecture & Component Flow

```
┌────────────────────────────────────────────────────────────────────────┐
│                   SEÇÃO: VEJA O MATERIAL NA PRÁTICA                    │
│                                                                        │
│   Título: "Veja o material" (Branco) + "na prática" (Ocre #D9A13B)    │
│   Subtítulo pedagógico orientador em tom creme suave                   │
│                                                                        │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │  Container com Máscara de Degradê Lateral                          │ │
│ │                                                                    │ │
│ │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ...         │ │
│ │  │ Mapa 05      │  │ Mapa 04      │  │ Mapa 03      │  ──► FLUXO   │ │
│ │  │ (Foto Real)  │  │ (Foto Real)  │  │ (Foto Real)  │  PARA A      │ │
│ │  │ Borda Nítida │  │ Borda Nítida │  │ Borda Nítida │  DIREITA     │ │
│ │  └──────────────┘  └──────────────┘  └──────────────┘              │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│   Selo de Garantia Visual: "150 Mapas Mentais Prontos para Uso"        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Próximos Passos na Execução

1. Adicionar os keyframes de animação contínua para a direita no arquivo de estilos (`src/index.css`).
2. Reformular o componente `PracticeCarouselSection.tsx` para adotar a estrutura de trilha dupla infinita contínua, cartões com contraste reforçado e visualização expandida.
3. Validar a responsividade e executar `compile_applet` e `lint_applet` para conferência final.
