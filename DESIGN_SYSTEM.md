# Flowmodoro Design System v3

Flowmodoro debe sentirse simple a primera vista y sofisticado al usarlo. La calidad está en la consistencia, el ritmo visual y los detalles; no en multiplicar componentes.

## Principios

1. **Una acción principal por contexto.** El acento visual más fuerte se reserva para la decisión principal.
2. **Menos superficies, mejor jerarquía.** Preferir espacio, tipografía y divisores antes que añadir tarjetas.
3. **La interacción comparte un mismo lenguaje.** Reposo → hover → focus → active debe sentirse igual en toda la app.
4. **La complejidad aparece bajo demanda.** Opciones secundarias viven en popovers, drawers o disclosures.
5. **El color semántico es excepcional.** Cobre/ámbar es el acento del producto; rojo solo representa acciones destructivas.

## Geometría

Los componentes usan cuatro familias:

- **Control:** `--radius-control: 10px`. Botones, inputs, filas interactivas.
- **Pill:** `--radius-pill: 999px`. Contexto seleccionado, como tarea activa o sonido.
- **Panel:** `--radius-panel: 16px`. Menús, popovers, diálogos y superficies flotantes.
- **Workspace:** puede ampliar el radio del panel, como Focus Mode, pero debe pertenecer a la misma familia visual.

Altura estándar de control: `44px`.  
Altura compacta: `36px`.

## Acciones

### Primaria

Usar para la decisión principal: iniciar, guardar, confirmar.

- fondo `--accent`
- radio `--radius-control`
- texto de alto contraste
- hover: elevación mínima de 1px
- active: vuelve a plano y reduce levemente escala

Clases actuales: `.btn-primary`, `.ctrl-btn-primary`, `.drawer-save`.

### Secundaria

Para cancelar, cerrar, acciones alternativas o utilidades.

- superficie `--surface-interactive`
- borde `--border-interactive`
- hover `--surface-hover`
- acento solo al interactuar

Clases actuales: `.btn-ghost`, `.ctrl-btn-ghost`, cierres y controles de reproducción.

### Pill

Solo para controles contextuales persistentes, no para botones genéricos.

Clases actuales: `.focus-pill`, `.ambient-pill`.

## Estados

Todos los elementos interactivos deben respetar:

- **Rest:** neutro.
- **Hover:** acento sutil, sin saltos grandes.
- **Focus visible:** `--focus-ring`.
- **Active:** feedback corto de escala/posición.
- **Disabled:** opacidad baja, sin hover.

No crear un nuevo efecto de hover para un componente nuevo si uno existente resuelve el caso.

## Superficies flotantes

Popovers, menús y diálogos comparten:

- `--radius-panel`
- `--border-interactive`
- `--shadow-float`
- blur moderado
- fondo basado en `--bg-surface`

No inventar una sombra o radio distinto por pantalla.

## Color

### Claro

Crema cálido + cobre.

### Oscuro

Obsidiana + ámbar.

El color de modo del timer puede comunicar trabajo/descanso, pero no debe competir con el acento principal en controles de acción.

## Tipografía

- **Display:** Cormorant Garamond, solo para momentos editoriales o jerarquía expresiva.
- **UI:** Outfit, para navegación, controles, labels y contenido funcional.

No mezclar tipografías dentro de un mismo componente funcional.

## Movimiento

- microinteracción: `--motion-fast`
- transición estándar: `--motion-normal`
- cambio de escena: `--motion-slow` o `--motion-cinematic`
- easing premium: `--ease-premium`

Las transiciones deben comunicar continuidad, no decorar.

## Regla para futuros componentes

Antes de crear un estilo nuevo, intentar componerlo con:

1. un token existente;
2. una de las cuatro geometrías;
3. un patrón de acción existente;
4. un estado de interacción existente.

Si necesita una excepción, debe existir una razón funcional o semántica clara.


## App Shell y estados de producto

Flowmodoro v4 no usa scroll de documento como navegación principal. La aplicación se organiza en estados de interfaz:

- **Foco / Timer:** el reloj y la acción principal están disponibles al entrar; elegir una tarea es opcional y aparece cerca del reloj.
- **Foco / Preparar:** planificación accesible a demanda, sin interrumpir una sesión pausada.
- **Foco / Inmersivo:** solo reloj, control Iniciar/Pausar y salida.
- **Hoy:** gestor completo de tareas e historial.
- **Más:** ajustes, guía, atajos, instalación y apoyo.

La navegación `Foco / Hoy / Más` cambia estados dentro del mismo viewport. No debe reintroducir anchors de scroll para estas vistas.

### Contrato de inmersión

- `Iniciar` entra a inmersión durante una sesión de trabajo; `Reanudar` conserva el bloque pausado.
- `Pausar` pausa el timer pero conserva la escena inmersiva y el ambiente.
- `×` o `Esc` pausan el timer, detienen el ambiente y salen de inmersión.
- El fin natural de una sesión de trabajo respeta la preferencia de inicio automático del descanso.
- La escena inmersiva conserva una indicación discreta de fase y tarea actual para evitar desorientación.
- El gestor de tareas, el selector de ambiente, reset y ajustes no aparecen dentro de la escena inmersiva.

### Continuidad espacial

Los cambios importantes deben sentirse como transformaciones de un mismo sistema, no como pantallas que se reemplazan. Priorizar `transform`, `opacity` y cambios de contraste/superficie. Mantener desplazamientos pequeños, delays superpuestos y reposo visual después de cada transición.

La jerarquía de motion es:

- microinteracción: `--motion-fast`;
- control/panel: `--motion-normal`;
- transición de escena: `--motion-slow`;
- inmersión: `--motion-cinematic`;
- easing principal: `--ease-premium`.

La interfaz debe permanecer completamente usable con `prefers-reduced-motion`.
