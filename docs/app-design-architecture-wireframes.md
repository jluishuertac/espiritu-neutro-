# Espíritu Neutro — Arquitectura, user flow y wireframes del MVP

## 1. Principios de diseño del producto

Espíritu Neutro debe sentirse como una aplicación tranquila, privada y motivadora. No debe parecer una app de dieta, una red social pública ni una herramienta de castigo. El producto debe transmitir que la transformación se construye con acciones pequeñas, repetidas y sostenibles.

Principios clave:

- Consistencia antes que intensidad.
- Privacidad antes que exposición.
- Apoyo antes que comparación agresiva.
- Simplicidad antes que precisión excesiva.
- Retorno después del fallo antes que perfección.
- Retos privados antes que feed público.

## 2. Arquitectura general

### 2.1 Arquitectura de producto

La aplicación se organiza en cinco módulos principales:

1. Identidad y onboarding: registra al usuario, entiende su motivación, detecta barreras y configura su primer reto.
2. Retos y hábitos: administra retos de 7 días, hábitos seleccionados y check-ins diarios.
3. Consistencia y progreso: calcula días activos, porcentaje de cumplimiento, rachas y resumen semanal.
4. Grupos privados: permite invitar personas cercanas, compartir reto y ver progreso agregado.
5. Analítica mínima: registra eventos clave para validar retención, activación e invitaciones.

### 2.2 Arquitectura técnica recomendada

Para el MVP, la arquitectura debe reducir dependencias y permitir que una sola persona construya, despliegue y mantenga el producto.

Componentes:

- App móvil: React Native con Expo.
- Lenguaje: TypeScript.
- Backend como servicio: Supabase.
- Base de datos: PostgreSQL en Supabase.
- Autenticación: Supabase Auth con email OTP o magic link.
- Notificaciones: Expo Notifications.
- Analítica: tabla propia `events` en Supabase.
- Distribución beta: Expo preview, TestFlight o Google Play Internal Testing.

### 2.3 Diagrama lógico

```text
Usuario
  |
  v
App móvil Espíritu Neutro
  |-- Auth y sesión
  |-- Onboarding
  |-- Home del reto
  |-- Check-in diario
  |-- Grupo privado
  |-- Ranking
  |-- Resumen semanal
  |
  v
Supabase
  |-- Auth
  |-- PostgreSQL
  |-- Row Level Security
  |-- Edge Functions opcionales
  |
  v
Tablas principales
  |-- profiles
  |-- habits
  |-- challenges
  |-- challenge_habits
  |-- daily_checkins
  |-- daily_checkin_items
  |-- groups
  |-- group_members
  |-- events
```

### 2.4 Modelo de navegación

La navegación debe ser lineal al inicio y tab-based después de la activación.

Antes de onboarding:

- Welcome.
- Login.
- Onboarding.
- Selección de hábitos.
- Confirmación de reto.

Después de onboarding:

- Home.
- Check-in diario.
- Grupo privado.
- Ranking.
- Resumen semanal.
- Perfil y ajustes.

Navegación MVP recomendada:

- Stack de autenticación: `Welcome`, `Login`.
- Stack de onboarding: `Goal`, `Barrier`, `Level`, `HabitSelection`, `ChallengeConfirmation`.
- Tabs principales: `Home`, `Grupo`, `Resumen`, `Perfil`.
- Modales: `DailyCheckin`, `Invite`, `RankingDetail`.

## 3. User flow completo

### 3.1 Nuevo usuario sin invitación

```text
Welcome
  -> Login
  -> Onboarding: objetivo
  -> Onboarding: barrera
  -> Onboarding: nivel
  -> Selección de hábitos
  -> Confirmación del reto
  -> Home
  -> Check-in diario
  -> Home con progreso actualizado
```

Detalle:

1. El usuario abre la app y entiende que no se trata de dieta ni calorías.
2. Inicia sesión con email.
3. Elige su objetivo emocional principal.
4. Declara su barrera principal.
5. Declara su nivel de actividad.
6. Selecciona tres hábitos simples.
7. La app crea un reto de 7 días.
8. El usuario llega a Home y completa su primer check-in.

### 3.2 Nuevo usuario con invitación

```text
Enlace de invitación
  -> Welcome contextual del grupo
  -> Login
  -> Onboarding reducido
  -> Selección de hábitos
  -> Confirmación del reto
  -> Grupo privado
  -> Home
```

Detalle:

1. El usuario abre un enlace compartido por alguien conocido.
2. La app muestra el nombre del grupo privado.
3. El usuario se registra.
4. Completa onboarding reducido.
5. Se une automáticamente al grupo.
6. Inicia su propio reto de 7 días.
7. Puede ver ranking del grupo sin exponer datos sensibles.

### 3.3 Usuario activo que vuelve cada día

```text
Notificación o hábito propio
  -> Home
  -> Check-in diario
  -> Confirmación positiva
  -> Home actualizado
```

Detalle:

1. El usuario abre la app.
2. Ve tres hábitos del día.
3. Marca los hábitos completados.
4. Recibe un mensaje breve de refuerzo.
5. La consistencia y racha se actualizan.

### 3.4 Usuario que falló un día

```text
Recordatorio de retorno
  -> Home con mensaje empático
  -> Check-in diario
  -> Mensaje de retorno
  -> Progreso actualizado
```

Detalle:

1. La app no castiga visualmente el fallo.
2. Home muestra “No perdiste tu progreso. Vuelve hoy”.
3. El usuario completa el check-in.
4. La app refuerza la identidad de retorno.

### 3.5 Usuario que termina el reto

```text
Día 7 completado
  -> Resumen semanal
  -> Ver logros
  -> Invitar o repetir reto
  -> Nuevo reto de 7 días
```

Detalle:

1. Al terminar el día 7, la app muestra un resumen.
2. El resumen prioriza consistencia, no transformación física.
3. El usuario puede repetir el reto o invitar a alguien.

## 4. Wireframe: Welcome

### 4.1 Objetivo de la pantalla

Comunicar la promesa en segundos y reducir ansiedad. La pantalla debe decir claramente que Espíritu Neutro no trata de dietas, calorías ni exposición corporal.

### 4.2 Estructura visual

```text
┌────────────────────────────────────┐
│                                    │
│        Espíritu Neutro             │
│                                    │
│  Construye consistencia, no culpa. │
│                                    │
│  Retos privados de 7 días para     │
│  crear hábitos saludables sin      │
│  contar calorías.                  │
│                                    │
│  ✓ Sin dietas                      │
│  ✓ Sin exposición pública          │
│  ✓ Sin smartwatch obligatorio      │
│                                    │
│  [ Empezar ]                       │
│                                    │
│  Ya tengo cuenta                   │
│                                    │
└────────────────────────────────────┘
```

### 4.3 Detalles de diseño

- Fondo claro, cálido y minimalista.
- Logo o wordmark centrado.
- Título grande y sereno.
- Tres bullets de confianza.
- Botón primario de alto contraste.
- Link secundario discreto.

### 4.4 Estados especiales

Si el usuario llega desde invitación, mostrar:

```text
[Nombre] te invitó al grupo “Familia 7 días”.
Construyan consistencia juntos, en privado.
```

## 5. Wireframe: Login

### 5.1 Objetivo de la pantalla

Permitir acceso rápido sin crear fricción de contraseña.

### 5.2 Estructura visual

```text
┌────────────────────────────────────┐
│  ←                                 │
│                                    │
│  Entra a Espíritu Neutro           │
│                                    │
│  Te enviaremos un código o enlace  │
│  seguro a tu email.                │
│                                    │
│  Email                             │
│  ┌──────────────────────────────┐  │
│  │ tu@email.com                 │  │
│  └──────────────────────────────┘  │
│                                    │
│  [ Continuar ]                     │
│                                    │
│  Al continuar aceptas términos     │
│  básicos y política de privacidad. │
│                                    │
└────────────────────────────────────┘
```

### 5.3 Detalles de diseño

- Un solo campo.
- Nada de contraseña en MVP.
- Texto de seguridad simple.
- Error claro si el email no es válido.
- Estado de carga en botón.

### 5.4 Pantalla de verificación

```text
┌────────────────────────────────────┐
│  Revisa tu email                   │
│                                    │
│  Enviamos un enlace/código a:      │
│  usuario@email.com                 │
│                                    │
│  [ Reenviar ]                      │
│  [ Cambiar email ]                 │
└────────────────────────────────────┘
```

## 6. Wireframe: Onboarding

### 6.1 Objetivo general

Entender al usuario lo suficiente para personalizar el primer reto sin crear un cuestionario largo.

### 6.2 Onboarding 1: objetivo emocional

```text
┌────────────────────────────────────┐
│  Paso 1 de 3                       │
│                                    │
│  ¿Qué quieres mejorar primero?     │
│                                    │
│  ○ Más energía                     │
│  ○ Más confianza                   │
│  ○ Más disciplina                  │
│  ○ Más fuerza                      │
│  ○ Salud general                   │
│                                    │
│  [ Continuar ]                     │
└────────────────────────────────────┘
```

### 6.3 Onboarding 2: barrera principal

```text
┌────────────────────────────────────┐
│  Paso 2 de 3                       │
│                                    │
│  ¿Qué suele detenerte?             │
│                                    │
│  ○ Falta de tiempo                 │
│  ○ Falta de motivación             │
│  ○ Vergüenza                       │
│  ○ No saber qué hacer              │
│  ○ Abandono después de semanas     │
│                                    │
│  [ Continuar ]                     │
└────────────────────────────────────┘
```

### 6.4 Onboarding 3: nivel actual

```text
┌────────────────────────────────────┐
│  Paso 3 de 3                       │
│                                    │
│  ¿Dónde estás hoy?                 │
│                                    │
│  ○ Estoy empezando                 │
│  ○ Hago algo de actividad          │
│  ○ Entreno algunas veces/semana    │
│                                    │
│  Tu liga inicial se ajustará para  │
│  que compitas de forma justa.      │
│                                    │
│  [ Continuar ]                     │
└────────────────────────────────────┘
```

### 6.5 Detalles de diseño

- Una pregunta por pantalla.
- Opciones grandes y tocables.
- Barra de progreso simple.
- Sin lenguaje clínico.
- No pedir peso, fotos ni medidas en MVP.

## 7. Wireframe: Selección de hábitos

### 7.1 Objetivo de la pantalla

Hacer que el usuario elija exactamente tres hábitos alcanzables para iniciar su reto.

### 7.2 Estructura visual

```text
┌────────────────────────────────────┐
│  Elige 3 hábitos                   │
│                                    │
│  Pequeños, reales y repetibles.    │
│  2 de 3 seleccionados              │
│                                    │
│  [✓] Caminar 10 minutos            │
│  [✓] Tomar agua                    │
│  [ ] Entrenar 15 minutos           │
│  [ ] Estirar 5 minutos             │
│  [ ] Dormir antes de mi hora       │
│  [ ] Preparar comida saludable     │
│  [ ] Respirar 3 minutos            │
│                                    │
│  [ Crear mi reto de 7 días ]       │
└────────────────────────────────────┘
```

### 7.3 Reglas de interacción

- El botón se habilita solo con tres hábitos seleccionados.
- Si el usuario intenta elegir más de tres, mostrar: “Para este primer reto, menos es mejor”.
- Los hábitos deben tener microcopy que reduzca ambición excesiva.
- No permitir hábitos personalizados en el primer MVP, para evitar complejidad.

### 7.4 Confirmación del reto

```text
┌────────────────────────────────────┐
│  Tu reto está listo                │
│                                    │
│  7 días · Liga Inicio              │
│                                    │
│  Hábitos:                          │
│  ✓ Caminar 10 minutos              │
│  ✓ Tomar agua                      │
│  ✓ Estirar 5 minutos               │
│                                    │
│  No necesitas hacerlo perfecto.    │
│  Solo vuelve cada día.             │
│                                    │
│  [ Empezar hoy ]                   │
└────────────────────────────────────┘
```

## 8. Wireframe: Home

### 8.1 Objetivo de la pantalla

Responder una pregunta: “¿Qué tengo que hacer hoy?”.

### 8.2 Estructura visual

```text
┌────────────────────────────────────┐
│  Hola, Ana                         │
│  Día 3 de 7 · Liga Inicio          │
│                                    │
│  Consistencia semanal              │
│  ███████░░░ 67%                    │
│                                    │
│  Hábitos de hoy                    │
│  ┌──────────────────────────────┐  │
│  │ ○ Caminar 10 minutos         │  │
│  │ ○ Tomar agua                 │  │
│  │ ○ Estirar 5 minutos          │  │
│  └──────────────────────────────┘  │
│                                    │
│  [ Hacer check-in ]                │
│                                    │
│  Racha: 2 días                     │
│                                    │
│  Grupo privado                     │
│  Familia 7 días · 4 miembros       │
│  [ Invitar ] [ Ver ranking ]       │
└────────────────────────────────────┘
```

### 8.3 Jerarquía de información

1. Día del reto.
2. Consistencia.
3. Hábitos de hoy.
4. Check-in.
5. Grupo e invitación.

### 8.4 Estado de usuario que falló ayer

```text
No perdiste tu progreso.
Hoy es una buena oportunidad para volver.
[ Hacer check-in ]
```

### 8.5 Estado de check-in completado

```text
Check-in completado hoy.
Hoy sumaste consistencia.
[ Ver progreso ]
```

## 9. Wireframe: Check-in diario

### 9.1 Objetivo de la pantalla

Registrar hábitos completados con mínima fricción.

### 9.2 Estructura visual

```text
┌────────────────────────────────────┐
│  Check-in de hoy                   │
│  Día 3 de 7                        │
│                                    │
│  ¿Qué completaste hoy?             │
│                                    │
│  [✓] Caminar 10 minutos            │
│  [✓] Tomar agua                    │
│  [ ] Estirar 5 minutos             │
│                                    │
│  Nota opcional                     │
│  ┌──────────────────────────────┐  │
│  │ Hoy tuve poco tiempo...      │  │
│  └──────────────────────────────┘  │
│                                    │
│  [ Guardar check-in ]              │
└────────────────────────────────────┘
```

### 9.3 Confirmación posterior

```text
┌────────────────────────────────────┐
│  Bien hecho                        │
│                                    │
│  Completaste 2 de 3 hábitos.       │
│  Eso cuenta.                       │
│                                    │
│  Consistencia: 67%                 │
│  Racha: 3 días                     │
│                                    │
│  [ Volver al inicio ]              │
└────────────────────────────────────┘
```

### 9.4 Reglas de tono

- No usar “fallaste”.
- No usar colores rojos agresivos.
- Celebrar check-ins parciales.
- Reforzar que el progreso no exige perfección.

## 10. Wireframe: Grupo privado

### 10.1 Objetivo de la pantalla

Crear apoyo social sin convertir la app en red social.

### 10.2 Estructura visual

```text
┌────────────────────────────────────┐
│  Grupo privado                     │
│                                    │
│  Familia 7 días                    │
│  4 miembros                        │
│                                    │
│  Esta semana juntos completaron:   │
│  38 hábitos                        │
│                                    │
│  [ Invitar a alguien ]             │
│                                    │
│  Miembros                          │
│  Ana      67% · Liga Inicio        │
│  Luis     72% · Liga Base          │
│  Marta    55% · Liga Inicio        │
│  Diego    80% · Liga Activa        │
│                                    │
│  [ Ver ranking ]                   │
└────────────────────────────────────┘
```

### 10.3 Reglas de privacidad

- No mostrar notas personales.
- No mostrar peso, fotos ni medidas.
- No mostrar hábitos sensibles si en el futuro existen.
- Mostrar solo nombre, liga y consistencia.

### 10.4 Invitación

```text
┌────────────────────────────────────┐
│  Invita a tu grupo                 │
│                                    │
│  Comparte este enlace con personas │
│  de confianza.                     │
│                                    │
│  espirituneutro.app/join/ABCD      │
│                                    │
│  [ Copiar enlace ]                 │
│  [ Compartir por WhatsApp ]        │
└────────────────────────────────────┘
```

## 11. Wireframe: Ranking

### 11.1 Objetivo de la pantalla

Mostrar progreso relativo sin humillar a usuarios principiantes.

### 11.2 Estructura visual

```text
┌────────────────────────────────────┐
│  Ranking de consistencia           │
│  Semana actual                     │
│                                    │
│  1  Diego   80%  ████████░░        │
│  2  Luis    72%  ███████░░░        │
│  3  Ana     67%  ██████░░░░        │
│  4  Marta   55%  █████░░░░░        │
│                                    │
│  Se mide constancia, no peso.      │
│                                    │
│  Tu progreso personal              │
│  +2 días activos vs. semana pasada │
└────────────────────────────────────┘
```

### 11.3 Reglas de ranking justo

- Ordenar por porcentaje de hábitos completados.
- Mostrar liga para contexto, no para juzgar.
- Evitar mostrar “último lugar” con diseño negativo.
- Incluir mensaje educativo: “Se mide constancia, no peso”.
- Enfatizar mejora personal además del ranking.

### 11.4 Estado con pocos miembros

```text
Aún no hay suficientes personas para ranking.
Invita a 1 o 2 personas de confianza para hacerlo más motivador.
[ Invitar ]
```

## 12. Wireframe: Resumen semanal

### 12.1 Objetivo de la pantalla

Cerrar el ciclo de 7 días con reflexión y continuidad.

### 12.2 Estructura visual

```text
┌────────────────────────────────────┐
│  Resumen de tu reto                │
│                                    │
│  Completaste 5 de 7 días           │
│  ███████░░░ 71%                    │
│                                    │
│  Hábitos completados               │
│  15 de 21                          │
│                                    │
│  Mejor hábito                      │
│  Tomar agua · 7/7 días             │
│                                    │
│  Aprendizaje                       │
│  La consistencia no fue perfecta,  │
│  pero volviste. Eso es progreso.   │
│                                    │
│  [ Repetir reto ]                  │
│  [ Invitar a alguien ]             │
└────────────────────────────────────┘
```

### 12.3 Variantes de mensaje

Si consistencia es mayor o igual a 70%:

```text
Construiste una base real. Ahora repite el sistema.
```

Si consistencia está entre 30% y 69%:

```text
No necesitas empezar desde cero. Ajustemos y vuelve esta semana.
```

Si consistencia es menor a 30%:

```text
El objetivo no era perfección. El siguiente reto debe ser más pequeño.
```

### 12.4 Próxima acción

La pantalla debe terminar con una acción clara:

- Repetir reto.
- Invitar a alguien.
- Ajustar hábitos en una versión futura.

## 13. Sistema visual recomendado

### 13.1 Personalidad visual

Espíritu Neutro debe verse sereno, humano y confiable.

Dirección:

- Colores base: arena, blanco cálido, gris suave.
- Color primario: verde salvia o azul profundo suave.
- Color de progreso: verde tranquilo.
- Evitar rojo salvo errores técnicos.
- Esquinas redondeadas.
- Tarjetas amplias.
- Mucho espacio en blanco.

### 13.2 Tipografía

- Títulos claros y grandes.
- Texto secundario legible.
- Microcopy empático.
- Evitar lenguaje militar, agresivo o de castigo.

### 13.3 Componentes base

- Botón primario.
- Botón secundario.
- Tarjeta de hábito.
- Barra de progreso.
- Badge de liga.
- Lista de miembros.
- Empty state.
- Mensaje de retorno.

## 14. Decisiones de producto para no sobrediseñar

### 14.1 No incluir fotos en MVP

Aunque las fotos privadas son parte de la visión, no son necesarias para validar consistencia y pueden aumentar sensibilidad, complejidad y fricción.

### 14.2 No incluir IA en MVP

La IA puede mejorar personalización después, pero en la primera versión basta con mensajes estáticos bien diseñados.

### 14.3 No incluir chat en MVP

El chat aumenta moderación, notificaciones, privacidad y complejidad. La validación social puede ocurrir con invitaciones y ranking privado.

### 14.4 No incluir pagos en MVP

Primero debe validarse retención. Monetización antes de retención puede distraer del aprendizaje principal.

### 14.5 No incluir wearables en MVP

El producto debe funcionar para cualquier persona con un teléfono. Los wearables pueden agregarse después como capa opcional.

## 15. Entregable de diseño antes de código

Antes de escribir código, el equipo debe tener:

- Mapa de navegación.
- Wireframes de las nueve pantallas principales.
- Lista de componentes base.
- Modelo de datos MVP.
- Eventos de analítica.
- Criterios de éxito.
- Copy principal de onboarding y check-in.

La primera implementación debe respetar estos wireframes y evitar agregar funcionalidades no listadas.
