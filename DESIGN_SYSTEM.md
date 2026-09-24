# Flowmodoro: espacio de concentración

## Recorrido y jerarquía

Inicio permite preparar el día y arrancar sin una tarea obligatoria. El mismo reloj pasa a Foco, dentro de un vidrio amplio, con controles en una fila propia. Trabajo y descanso son fases de una misma sesión. Pausar conserva la escena; salir pausa y detiene el sonido. Abrir un panel o cambiar de ambiente conserva tiempo, tarea y audio.

La tarea junto al reloj abre la selección del próximo bloque; nunca reasigna la tarea de una sesión que ya empezó. Actividad, ajustes, guía, sonido y ambientes comparten una capa de ventanas. Solo hay un panel principal abierto, con Escape, fondo inerte y retorno de teclado al activador.

## Tres ambientes

| Ambiente | Carácter | Acento | Superficie |
|---|---|---|---|
| Horizonte | Lago ilustrado, abierto y cálido | `#E0A5B5` | `#17313D` |
| Refugio | Bosque íntimo, niebla y agua | `#B7CEBC` | `#1C3534` |
| Aura | Gradiente limpio, abstracto, sin grano | `#D5A9CF` | `#232E44` |

La escena ocupa todo el fondo y permanece montada al cambiar de presentación. En Foco baja la iluminación. El mismo recorte aparece nítido dentro del vidrio y difuminado hacia los bordes; no se duplica una fotografía con encuadres distintos. Aura no añade ruido ni grano.

La selección persiste de forma independiente. La rotación es voluntaria y solo se solicita al iniciar un bloque de trabajo nuevo; reanudar o descansar no la dispara. El sonido es una preferencia separada.

## Color y tipografía

Oscuro permanente. Base petróleo `#0B1A25`; superficies frías, transición azul grisáceo, ciruela y reflejos rosa. Texto `#F3F2F0`, secundario `#C2CED4`, discreto `#B4C3CC`. El acento depende del ambiente. No se tiñen las caras del reloj.

Manrope en interfaz y controles. Cormorant Garamond se reserva para la marca. Las caras estáticas y animadas del flip comparten carbón `#23272E` arriba y `#191D24` abajo, con sombra moderada.

## Composición

- Escritorio: reloj y Hoy con los mismos bordes superior e inferior. Solo la lista se desplaza dentro de Hoy.
- Móvil: reloj primero y Hoy después; las listas largas tienen desplazamiento propio para mantener cerca el resumen.
- Foco: vidrio de hasta 1.440 px, márgenes de 12 px en móvil y hasta 40 px en escritorio, considerando áreas seguras.
- El reloj permanece horizontal. Su límite de tamaño es independiente del vidrio y se reduce en horizontal con poca altura.
- Salir ocupa el extremo superior izquierdo; sonido y ambientes, el derecho. Ningún control se superpone a los dígitos.
- Iniciar, pausar y reanudar conservan un botón compacto, con etiqueta explícita.
- Controles táctiles de al menos 44 px; bordes de 10–12 px, paneles de 20–28 px.

## Ventanas y movimiento

Los diálogos viven en `#overlayRoot`, fuera de listas y contenedores transformados, y usan la capa superior nativa. Las acciones de tareas se anclan al botón en escritorio y forman una hoja inferior en móvil; su posición se reajusta al cambiar de tamaño. Los otros paneles se centran y permiten desplazamiento interno.

Entrada de paneles: 200 ms. Cambio de escena: 450 ms por opacidad, después de cargar la imagen. Sin animación continua de filtros. Se respeta reducción de movimiento. Los paneles usan superficies opacas para sostener el contraste sobre cualquiera de los ambientes.

## Responsabilidades técnicas

- `app.js`: única sesión operativa, presentación Inicio/Foco, acciones y coordinador de paneles.
- `scene-controller.js`: catálogo, carga y preferencias de escena. Sin acceso al temporizador ni al audio.
- `experience.css`: composición de escena y foco, paneles y tokens actuales.
- `styles.css`: componentes generales. Se retiraron las generaciones anteriores de reglas de foco intervenidas.
- `activity-overlay.css`: actividad y alineación del espacio de escritorio.
- `assets/ambientes`: imágenes y miniaturas optimizadas, con procedencia documentada.

No incorporar otro intervalo para representar el reloj, una cuenta obligatoria, publicidad en el foco o cambios automáticos de sonido al elegir paisaje.
