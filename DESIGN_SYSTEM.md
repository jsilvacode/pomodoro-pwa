# Flowmodoro Design System v3

Flowmodoro debe sentirse simple a primera vista y sofisticado al usarlo. La calidad está en la consistencia, el ritmo visual y los detalles; no en multiplicar componentes.

## Principios

1. **Una acción principal por contexto.** El acento visual más fuerte se reserva para la decisión principal.
2. **Menos superficies, mejor jerarquía.** Preferir espacio, tipografía y divisores antes que añadir tarjetas.
3. **La interacción comparte un mismo lenguaje.** Reposo → hover → focus → active debe sentirse igual en toda la app.
4. **La complejidad aparece bajo demanda.** Opciones secundarias viven en popovers, drawers o disclosures.
5. **El color semántico es excepcional.** Ciruela y lila guían la acción; el rojo intenso se reserva para acciones destructivas.

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

Usar para la decisión principal: guardar o confirmar. Iniciar/reanudar usa una versión compacta y más serena.

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

Para controles contextuales persistentes y el botón compacto de inicio; no se aplica a todos los botones.

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

La aplicación usa solo modo oscuro. Petróleo profundo `#0B1A25`, ciruela `#201832`, azul `#1D4A77` y verde azulado `#19616C` forman el fondo; el lila `#C4A8DD` identifica las acciones. La inmersión oscurece y suaviza la imagen para reducir distracciones.

El color de modo del timer puede comunicar trabajo/descanso, pero no debe competir con el acento principal en controles de acción.

El icono usa un arco de reloj crema sobre petróleo con un único punto coral. Su fuente vectorial está en `icons/icon.svg`; los PNG y el favicon derivan de ella.

## Tipografía

- **Titulares y UI:** Manrope, con pesos claros para separar promesa, contenido y controles.
- **Marca:** Cormorant Garamond solo en el nombre Flowmodoro.

No mezclar tipografías dentro de un mismo componente funcional.

La home usa gradientes de lila, ciruela, azul profundo y verde azulado, con un reflejo rosado tenue. Las capas se concentran en los primeros 960 px de página; las tarjetas mantienen superficies serenas para proteger la lectura. El flip clock comparte la paleta mediante caras superior e inferior ligeramente distintas, sin perder contraste.

La escena inmersiva usa `assets/cielo-violeta.webp`, versión optimizada de la fotografía `thomas-bennie-B2e7_Q8Tixw-unsplash.jpg` proporcionada por el dueño del proyecto. La misma foto cubre toda la pantalla, difusa detrás, y aparece más definida bajo una capa oscura en la tarjeta del reloj. Pesa cerca de 115 KB y se guarda junto con los archivos de la PWA para que la escena esté disponible sin conexión.

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


## Home integrada y estados de producto

La página principal vuelve a ser vertical. El primer tramo ofrece el reloj, una tarea opcional y la acción de empezar sin obligar a leer una introducción. En escritorio, Hoy acompaña al reloj; en móvil aparece inmediatamente después. Más abajo viven el progreso, la guía y el apoyo al proyecto. La navegación lleva a estas secciones mediante anclas y el logo vuelve arriba.

- **Inicio:** una frase breve da contexto; la tarjeta del reloj contiene modos, tiempo y una sola acción principal. Sonido, reinicio y ajustes viven justo fuera de ella.
- **Foco listo o pausado:** se puede empezar o reanudar sin preparación obligatoria. Una sesión pausada muestra su tarea actual; otra selección se indica como tarea del siguiente bloque.
- **Foco inmersivo:** al iniciar un bloque de trabajo, la página se convierte en una escena tranquila con reloj, control de pausa y salida.
- **Hoy:** una sola lista de tareas, accesible junto al reloj en escritorio y debajo en móvil. Cada tarea ofrece una acción explícita para enfocarla; si crece la lista en escritorio, se desplaza dentro de su tarjeta. El resumen del día queda después de la lista y abre la actividad en un diálogo centrado.
- **Guía:** la ayuda breve se abre a demanda en un diálogo; la explicación extensa permanece más abajo en la página.
- **Ajustes:** controles de tiempo, un botón ESP/ENG/PT y preferencias en un drawer; la guía y el apoyo también se pueden descubrir bajando por la página. Al entrar por primera vez se toma el idioma preferido del navegador y el botón guarda cualquier cambio manual.

El desplazamiento vertical sirve para explorar. La inmersión sirve para trabajar. Entrar, pausar, salir y volver no reinician el bloque ni cambian su tarea registrada.

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
