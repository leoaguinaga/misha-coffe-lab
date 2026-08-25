---
name: MISHA COFFE LAB
description: Café peruano de especialidad con una voz gráfica directa, intensa y cálida.
colors:
  primary: "#b72d3b"
  ink: "#090606"
  paper: "#fff8f8"
  surface: "#fffafa"
  blush: "#f7edef"
  inverse: "#ffffff"
typography:
  display:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.045em"
  body:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Poppins, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 700
    lineHeight: 1.2
rounded:
  control: "12px"
  surface: "16px"
  hero: "24px"
spacing:
  compact: "16px"
  standard: "24px"
  section: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px 24px"
  card-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.inverse}"
    rounded: "{rounded.hero}"
---

# Design System: MISHA COFFE LAB

## Overview

**Creative North Star: "La barra roja"**

MISHA combina la oscuridad concentrada de una barra de café con una superficie de papel cálido. La interfaz debe sentirse decidida y cercana: negro para peso, rojo para acción y un blanco rosado para descanso.

**Key Characteristics:**

- Tipografía sans extra-bold, compacta y editorial para cada título principal.
- Fotografía de café enmarcada por negro profundo y esquinas suaves.
- Rojo MISHA reservado para acciones, énfasis y pequeñas señales de orientación.

## Colors

El negro y el papel cálido estructuran cada vista; el rojo debe ser un acento deliberado, no un fondo omnipresente.

### Primary

- **Rojo MISHA:** acción, énfasis y estados seleccionados.

### Neutral

- **Tinta:** texto principal, fondos de contenido destacado y overlays fotográficos.
- **Papel:** fondo base de las rutas y superficie clara predominante.
- **Blush:** separación tonal de secciones narrativas.
- **Blanco:** texto sobre tinta y controles claros.

**The Accent Rule.** El rojo llama a la acción o marca una prioridad; la legibilidad siempre se sostiene con tinta o blanco.

## Typography

**Display Font:** Poppins, sans-serif

**Body Font:** Poppins, sans-serif

**Character:** Los títulos son compactos, contundentes y sin serif. El texto de lectura conserva aire y contraste para no competir con el display.

### Hierarchy

- **Display:** peso 700, `clamp(2.5rem, 5vw, 4rem)`, interlineado 0.94; todos los títulos principales de index y carta usan `.misha-heading`.
- **Body:** peso 400, 1rem, interlineado 1.625; limita los bloques largos a una lectura cómoda.
- **Label:** peso 700, 0.625rem, mayúsculas y tracking amplio; se usa solo para categorías o información secundaria.

**The One Title Rule.** No crear escalas de display distintas entre rutas: hero, encabezado de carta, categorías y destacados parten de `.misha-heading`.

## Layout

El contenido vive en un contenedor de 6xl con 16px de margen móvil. Las secciones alternan papel, blush y tinta para marcar el ritmo; las rutas no crean un fondo o una retícula paralela.

## Elevation & Depth

La profundidad es principalmente tonal: fotografías oscuras, overlays y cambios de superficie. Las sombras son suaves y se reservan para elementos flotantes o estados de interacción.

## Shapes

Los controles usan esquinas suavemente redondeadas (12px); las piezas fotográficas y los bloques de protagonismo usan 16–24px. Los pills quedan restringidos a badges y filtros compactos.

## Components

### Buttons

- **Primary:** rojo MISHA, texto tinta, peso semibold, radio de control y foco visible rojo.
- **Secondary:** fondo transparente sobre fotografía, borde blanco y texto blanco.

### Cards / Containers

- **Featured:** tinta con tipografía blanca y fotografía en overlay; radio de hero.
- **Reading surfaces:** papel o blush, sin cromados innecesarios.

### Navigation

- **Style:** papel translúcido con blur, texto tinta y acción primaria roja. La navegación de la carta conserva la misma superficie base que el index.

## Do's and Don'ts

### Do:

- **Do** usar `.misha-heading` para todos los títulos de contenido principal.
- **Do** repetir los mismos papel, tinta y rojo entre index, carta y rutas auxiliares.
- **Do** usar el rojo como acento de alto contraste para acciones y selección.

### Don't:

- **Don't** reintroducir tipografía serif o un peso liviano para títulos principales.
- **Don't** crear una escala de titulares exclusiva para la carta.
- **Don't** usar verde, marrones de la identidad anterior ni una tercera familia de superficies.
