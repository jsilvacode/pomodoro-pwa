# Rediseño de la experiencia — 23 de septiembre de 2026

## Implementado

El recorrido conserva un inicio útil y transforma la misma escena al concentrarse. Se mantienen un solo temporizador y los estados existentes de trabajo, pausa, finalización y descanso. Los controles tienen zonas propias; las opciones aparecen en ventanas y no desplazan el reloj.

- Vidrio amplio, cuatro dígitos horizontales y botón de sesión compacto.
- Paleta petróleo y rosa recuperada; flip casi neutro, con las mismas caras durante la animación.
- Horizonte, Refugio y Aura, con selección persistente, carga antes de la transición y rotación opcional entre bloques nuevos.
- Tarea actual consultable durante el foco; elección explícita de tarea para el siguiente bloque.
- Sonido, ambientes, actividad, ajustes y guía sobre el contexto actual. Escape cierra el panel antes de salir del foco.
- Acciones de tarea fuera de las filas, en la capa superior; hoja inferior en móvil y posición anclada en escritorio.
- Listas desplazables y tarjetas alineadas en escritorio; lista acotada también en móvil.
- Traducciones ES/EN/PT, actualización de caché y recursos de ambiente sin conexión tras su instalación.

## Decisión de composición

Se conserva el vidrio amplio y tenue con flip neutralizado como composición principal: mantiene la identidad y responde al pedido de ampliar el foco sin agrandar el reloj. La alternativa con menos superficie y reloj tipográfico se deja en la comparación visual del espacio de trabajo; no sustituye el reloj aprobado ni añade otra opción a los ajustes.

## Comprobación

- 30 pruebas automáticas de sesiones, preferencias, concurrencia de imágenes, rotación, paneles, atajos del navegador y caché.
- Navegador integrado: tamaños 320×640, 375×667, 390×844, 430×932, 667×375, 768×900, 1024×768 y 1440×900.
- Chrome: recorrido desde cero con una tarea, menú móvil a 375×667, cambio de ambiente, pausa y recarga; foco a 1440×900. Se conservaron tarea, estimación, tiempo restante y ambiente.
- En todos los tamaños del foco: cuatro dígitos en una línea, controles sin superposición, acción dentro del vidrio y sin desbordamiento horizontal.
- Inicio: tarjetas de igual altura a 1024 y 1440; listas con 8 y 30 tareas; acciones de primera y última fila; devolución de foco después de modificar estimación.
- Verificación visual de tres ambientes, selector móvil, ventanas de sonido, actividad y ajustes; cambio manual de idioma.
- Se probó la actualización de la PWA desde la versión anterior, conservando pausa, tareas, idioma y escena.
- Sin errores de consola durante los recorridos observados.

Pendiente de comprobación externa: teléfono físico y Safari independiente. La inspección de Safari por automatización no llegó a una página de prueba. No se presenta como validación realizada.

## Fuera de este lote

Pago, anuncios, cuentas, mezcla de sonidos, fondos en vídeo y una vista ambiental adicional. El plan permite estudiarlos después; no deben interferir con el recorrido actual.
