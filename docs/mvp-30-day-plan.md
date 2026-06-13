# MVP mínimo — App de consistencia y transformación física

## 1. Principio del MVP

El MVP debe validar una sola hipótesis: las personas vuelven durante varios días si la experiencia se centra en consistencia, retos cortos y apoyo privado, sin dieta, sin conteo de calorías y sin dependencia de wearables.

La versión inicial debe ser construible por una sola persona en menos de 30 días. Por eso se eliminan funciones que aumentan complejidad sin validar la tesis principal: IA conversacional completa, análisis de fotos, chat, smartwatch, marketplace, dashboard corporativo, pagos complejos y sistema avanzado de ligas.

## 2. Hipótesis a validar

### 2.1 Hipótesis principal

Un usuario que inicia un reto de 7 días con tres hábitos simples y puede invitar a personas cercanas tendrá más probabilidad de completar al menos cuatro check-ins en la primera semana.

### 2.2 Señales de validación real

El MVP debe medirse con comportamiento real, no solo encuestas:

- El usuario completa onboarding.
- El usuario crea o se une a un reto.
- El usuario hace check-ins diarios.
- El usuario invita al menos a una persona.
- El usuario vuelve después de fallar un día.
- El usuario inicia un segundo reto.

### 2.3 Criterios de éxito de 30 días

- 60% o más de usuarios registrados completa onboarding.
- 50% o más completa su primer check-in.
- 30% o más completa cuatro de siete días del primer reto.
- 20% o más invita al menos a una persona.
- 15% o más inicia un segundo reto.

## 3. Alcance estricto del MVP

### 3.1 Incluir

- Autenticación simple.
- Onboarding breve.
- Creación automática de un reto de 7 días.
- Selección de tres hábitos.
- Check-in diario de menos de 20 segundos.
- Grupo privado por enlace de invitación.
- Ranking simple por porcentaje de consistencia.
- Racha flexible básica.
- Resumen semanal.
- Notificaciones o recordatorios básicos.
- Panel mínimo de analítica para el fundador.

### 3.2 Excluir

- Conteo de calorías.
- Planes de dieta.
- Wearables.
- IA conversacional.
- Chat entre usuarios.
- Análisis de fotos.
- Pagos dentro de la app.
- Marketplace.
- Retos corporativos.
- Dashboard empresarial.
- Sistema avanzado de ligas.
- Feed social público.

## 4. Pantallas del MVP

### 4.1 Pantalla de bienvenida

Objetivo: explicar la promesa en menos de cinco segundos.

Contenido:

- Título: “Construye consistencia, no culpa”.
- Subtítulo: “Reto de 7 días para crear hábitos saludables sin contar calorías”.
- Botones: “Empezar” e “Iniciar sesión”.

### 4.2 Registro e inicio de sesión

Objetivo: reducir fricción.

Contenido:

- Login con email magic link o código OTP.
- Opcional: Google o Apple si el stack lo permite rápido.

### 4.3 Onboarding: objetivo

Pregunta: “¿Qué quieres mejorar primero?”

Opciones:

- Energía.
- Confianza.
- Disciplina.
- Fuerza.
- Salud general.

### 4.4 Onboarding: barrera principal

Pregunta: “¿Qué suele detenerte?”

Opciones:

- Falta de tiempo.
- Falta de motivación.
- Vergüenza.
- No saber qué hacer.
- Abandono después de unas semanas.

### 4.5 Onboarding: nivel inicial

Pregunta: “¿Cómo describirías tu actividad actual?”

Opciones:

- Estoy empezando.
- Hago algo de actividad.
- Entreno algunas veces por semana.

Esta respuesta asigna una liga simple: Inicio, Base o Activa.

### 4.6 Onboarding: selección de hábitos

El usuario elige tres hábitos de una lista corta:

- Caminar 10 minutos.
- Entrenar 15 minutos.
- Tomar agua.
- Dormir antes de una hora elegida.
- Estirar 5 minutos.
- Preparar una comida saludable.
- Respirar o meditar 3 minutos.

### 4.7 Confirmación del reto

Contenido:

- Nombre del reto: “Mi reto de 7 días”.
- Hábitos elegidos.
- Liga inicial.
- Botón: “Empezar hoy”.

### 4.8 Home / reto activo

La pantalla principal debe mostrar únicamente lo necesario:

- Día actual del reto.
- Tres hábitos del día.
- Botón de check-in por hábito.
- Porcentaje de consistencia semanal.
- Racha actual.
- Botón para invitar a alguien.

### 4.9 Check-in diario

Objetivo: registrar el día en menos de 20 segundos.

Interacción:

- El usuario marca cada hábito como completado o no completado.
- Puede añadir una nota opcional de una línea.
- Mensaje de cierre: “Hoy sumaste consistencia”.

### 4.10 Grupo privado

Contenido:

- Nombre del grupo.
- Enlace para invitar.
- Lista de miembros.
- Ranking por porcentaje de hábitos completados.
- Sin chat en MVP.

### 4.11 Resumen semanal

Contenido:

- Días activos.
- Hábitos completados.
- Mejor hábito.
- Día más difícil.
- Mensaje de refuerzo.
- Botón: “Iniciar otro reto”.

### 4.12 Perfil y ajustes

Contenido mínimo:

- Nombre.
- Objetivo.
- Liga.
- Notificaciones activadas o desactivadas.
- Cerrar sesión.
- Eliminar cuenta.

### 4.13 Panel fundador

Puede ser una página web protegida o una vista interna simple.

Métricas:

- Usuarios registrados.
- Onboardings completados.
- Retos iniciados.
- Check-ins por día.
- Retos completados.
- Invitaciones creadas.
- Usuarios con cuatro o más check-ins.

## 5. Flujos principales

### 5.1 Flujo de activación

1. Usuario abre la app.
2. Lee promesa.
3. Se registra con email.
4. Completa objetivo, barrera y nivel.
5. Elige tres hábitos.
6. Inicia reto de 7 días.
7. Completa primer check-in.

Este flujo debe tardar menos de cinco minutos.

### 5.2 Flujo de check-in diario

1. Usuario recibe recordatorio.
2. Abre Home.
3. Marca hábitos completados.
4. Ve confirmación positiva.
5. Se actualizan consistencia, racha y ranking.

### 5.3 Flujo de invitación

1. Usuario toca “Invitar”.
2. Se genera o copia enlace del grupo.
3. Lo comparte por WhatsApp, SMS o redes.
4. Invitado abre enlace.
5. Invitado se registra y entra al mismo grupo.
6. Invitado inicia su reto con su propio nivel y hábitos.

### 5.4 Flujo de recuperación tras fallo

1. Usuario no hace check-in un día.
2. Recibe mensaje al día siguiente: “No perdiste el progreso. Vuelve hoy”.
3. Home muestra un botón de retorno.
4. Si completa check-in, se marca como “retorno”.

### 5.5 Flujo de cierre de reto

1. El usuario llega al día 7.
2. Ve resumen semanal.
3. Se le propone repetir reto o iniciar reto de 21 días en una versión futura.
4. En MVP, el botón crea otro reto de 7 días.

## 6. Base de datos

Recomendación: PostgreSQL en Supabase.

### 6.1 `profiles`

Guarda información pública y de onboarding.

Campos:

- `id` uuid primary key, referencia a auth user.
- `display_name` text.
- `goal` text.
- `main_barrier` text.
- `activity_level` text.
- `league` text.
- `onboarding_completed` boolean.
- `created_at` timestamp.
- `updated_at` timestamp.

### 6.2 `habits`

Catálogo de hábitos disponibles.

Campos:

- `id` uuid primary key.
- `name` text.
- `description` text.
- `default_duration_minutes` integer nullable.
- `is_active` boolean.

### 6.3 `challenges`

Representa un reto de 7 días.

Campos:

- `id` uuid primary key.
- `user_id` uuid.
- `group_id` uuid nullable.
- `name` text.
- `start_date` date.
- `end_date` date.
- `status` text: active, completed, abandoned.
- `created_at` timestamp.

### 6.4 `challenge_habits`

Hábitos elegidos para un reto.

Campos:

- `id` uuid primary key.
- `challenge_id` uuid.
- `habit_id` uuid.
- `sort_order` integer.

### 6.5 `daily_checkins`

Registro de check-in por día y reto.

Campos:

- `id` uuid primary key.
- `challenge_id` uuid.
- `user_id` uuid.
- `checkin_date` date.
- `note` text nullable.
- `completed_count` integer.
- `total_count` integer.
- `created_at` timestamp.

Restricción:

- Único por `challenge_id` y `checkin_date`.

### 6.6 `daily_checkin_items`

Detalle de hábitos completados.

Campos:

- `id` uuid primary key.
- `daily_checkin_id` uuid.
- `habit_id` uuid.
- `completed` boolean.

### 6.7 `groups`

Grupo privado por invitación.

Campos:

- `id` uuid primary key.
- `name` text.
- `owner_id` uuid.
- `invite_code` text unique.
- `created_at` timestamp.

### 6.8 `group_members`

Miembros de grupo.

Campos:

- `id` uuid primary key.
- `group_id` uuid.
- `user_id` uuid.
- `role` text: owner, member.
- `created_at` timestamp.

Restricción:

- Único por `group_id` y `user_id`.

### 6.9 `events`

Tabla simple de analítica propia.

Campos:

- `id` uuid primary key.
- `user_id` uuid nullable.
- `event_name` text.
- `properties` jsonb.
- `created_at` timestamp.

Eventos mínimos:

- `signup_completed`.
- `onboarding_completed`.
- `challenge_started`.
- `checkin_completed`.
- `invite_created`.
- `group_joined`.
- `challenge_completed`.
- `second_challenge_started`.

## 7. APIs necesarias

Si se usa Supabase, muchas operaciones pueden hacerse con SDK y Row Level Security. Aun así, conviene tener funciones o endpoints para operaciones compuestas.

### 7.1 Autenticación

Gestionada por Supabase Auth.

- `signInWithOtp(email)`.
- `signOut()`.
- `getSession()`.

### 7.2 Perfil y onboarding

`POST /profile/onboarding`

Entrada:

- `displayName`.
- `goal`.
- `mainBarrier`.
- `activityLevel`.
- `habitIds`.

Salida:

- Perfil actualizado.
- Reto activo creado.
- Liga asignada.

Responsabilidad:

- Guardar perfil.
- Calcular liga simple.
- Crear reto de 7 días.
- Asociar tres hábitos.
- Registrar evento `onboarding_completed`.

### 7.3 Reto activo

`GET /challenges/active`

Salida:

- Reto activo.
- Hábitos.
- Check-in de hoy si existe.
- Consistencia acumulada.
- Racha.

### 7.4 Check-in

`POST /checkins`

Entrada:

- `challengeId`.
- `date`.
- `items`: lista de `habitId` y `completed`.
- `note` opcional.

Salida:

- Check-in creado o actualizado.
- Consistency score.
- Streak.
- Ranking actualizado si aplica.

### 7.5 Grupo

`POST /groups`

Entrada:

- `name`.

Salida:

- Grupo.
- `inviteCode`.
- `inviteUrl`.

`POST /groups/join`

Entrada:

- `inviteCode`.

Salida:

- Grupo unido.

`GET /groups/:id/leaderboard`

Salida:

- Miembros.
- Porcentaje de consistencia del reto activo.
- Días con check-in.

### 7.6 Resumen semanal

`GET /challenges/:id/summary`

Salida:

- Días activos.
- Hábitos completados.
- Total posible.
- Mejor hábito.
- Consistencia.
- Mensaje de refuerzo.

### 7.7 Analítica interna

`POST /events`

Entrada:

- `eventName`.
- `properties`.

`GET /admin/metrics`

Salida:

- Métricas agregadas del MVP.

## 8. Stack tecnológico recomendado

### 8.1 Opción recomendada para una sola persona

- App móvil: React Native con Expo.
- Lenguaje: TypeScript.
- Backend: Supabase.
- Base de datos: Supabase Postgres.
- Auth: Supabase Auth con magic link u OTP.
- Storage: no necesario en MVP si no hay fotos.
- Push notifications: Expo Notifications.
- Analítica: tabla `events` propia en Supabase; PostHog opcional.
- Hosting web para panel fundador: Next.js en Vercel o una ruta interna simple en Expo Web.
- Diseño UI: NativeWind o React Native Paper.
- Formularios: React Hook Form + Zod.
- Estado remoto: TanStack Query.

### 8.2 Razón de la elección

Este stack reduce el número de piezas que una sola persona debe mantener. Supabase cubre autenticación, base de datos, políticas de seguridad y funciones edge. Expo acelera desarrollo, builds y notificaciones sin requerir configuración nativa pesada.

### 8.3 Alternativa aún más rápida

Si el objetivo es validar antes de construir app nativa:

- Next.js responsive web app.
- Supabase.
- PWA instalable.
- Vercel.

Esta alternativa puede lanzarse más rápido, pero valida peor la dinámica móvil de notificaciones y check-ins diarios.

## 9. Costos aproximados mensuales

### 9.1 Durante MVP con menos de 1.000 usuarios

- Supabase Free: USD 0.
- Expo Free: USD 0.
- Vercel Free: USD 0 si se usa panel web.
- Dominio: USD 10 a 20 al año.
- Apple Developer Program: USD 99 al año si se publica en App Store.
- Google Play Console: USD 25 pago único.
- PostHog Cloud Free: USD 0 si se usa.
- Email transaccional básico: USD 0 a 20.

Costo mensual operativo probable: USD 0 a 30, sin contar cuentas de tiendas.

### 9.2 Con 1.000 a 10.000 usuarios

- Supabase Pro: aproximadamente USD 25 al mes.
- Vercel Pro opcional: aproximadamente USD 20 al mes.
- Servicio de email: USD 10 a 50 al mes.
- Analítica pagada opcional: USD 0 a 100 al mes.

Costo mensual probable: USD 35 a 195.

### 9.3 Costos que no conviene asumir en MVP

- IA generativa por usuario.
- Procesamiento de imágenes.
- Integraciones con wearables.
- Infraestructura propia en Kubernetes.
- CRM complejo.
- Pasarela de pagos si aún no hay validación de retención.

## 10. Roadmap semanal para lanzar en menos de 30 días

### Semana 1 — Fundaciones y onboarding

Objetivo: que un usuario pueda registrarse, completar onboarding y crear su primer reto.

Entregables:

- Proyecto Expo con TypeScript.
- Supabase configurado.
- Esquema de base de datos.
- Auth por email.
- Pantalla bienvenida.
- Pantallas de onboarding.
- Creación automática del reto de 7 días.
- Semillas de hábitos.

Validación interna:

- Crear usuario nuevo.
- Completar onboarding.
- Ver reto activo creado.

### Semana 2 — Check-ins y progreso

Objetivo: que el usuario pueda volver cada día y registrar hábitos.

Entregables:

- Home del reto activo.
- Check-in diario.
- Cálculo de consistencia.
- Cálculo de racha simple.
- Estado de reto completado al día 7.
- Eventos básicos de analítica.

Validación interna:

- Completar check-in.
- Editar check-in del día.
- Simular varios días.
- Ver consistencia correcta.

### Semana 3 — Grupos, ranking y reactivación

Objetivo: validar componente social privado.

Entregables:

- Crear grupo.
- Generar enlace de invitación.
- Unirse a grupo con código.
- Ranking por consistencia.
- Mensajes de retorno después de fallo.
- Recordatorios locales o push básicos.

Validación interna:

- Invitar usuario de prueba.
- Comparar ranking de dos usuarios.
- Ver comportamiento tras un día sin check-in.

### Semana 4 — Pulido, métricas y lanzamiento beta

Objetivo: lanzar una beta útil y medible.

Entregables:

- Resumen semanal.
- Panel fundador mínimo.
- Ajustes de perfil.
- Eliminar cuenta.
- Estados vacíos y errores.
- Pruebas manuales end-to-end.
- Landing o formulario de invitación a beta.
- Distribución por TestFlight, Google Play Internal Testing o Expo preview.

Validación externa:

- 20 a 50 usuarios reales.
- Medir activación, check-ins, invitaciones y segundo reto.

## 11. Plan de desarrollo detallado para Codex

### 11.1 Preparación del repositorio

1. Crear estructura de proyecto Expo con TypeScript.
2. Configurar ESLint, Prettier y scripts de desarrollo.
3. Crear archivo `.env.example` con variables de Supabase.
4. Configurar navegación base.
5. Crear tema visual mínimo.

### 11.2 Supabase y datos

1. Crear migración inicial con tablas `profiles`, `habits`, `challenges`, `challenge_habits`, `daily_checkins`, `daily_checkin_items`, `groups`, `group_members` y `events`.
2. Crear restricciones únicas necesarias.
3. Crear índices para `user_id`, `challenge_id`, `group_id` e `invite_code`.
4. Crear seed de hábitos iniciales.
5. Configurar Row Level Security para que cada usuario lea y escriba solo sus datos.
6. Configurar políticas para que miembros de un grupo vean datos mínimos del ranking.

### 11.3 Autenticación

1. Implementar cliente Supabase.
2. Crear pantalla de login con email.
3. Implementar envío de OTP o magic link.
4. Persistir sesión.
5. Crear guard de navegación para usuario autenticado.
6. Implementar cierre de sesión.

### 11.4 Onboarding

1. Crear flujo de pantallas: objetivo, barrera, nivel, hábitos y confirmación.
2. Validar que el usuario elija exactamente tres hábitos.
3. Implementar función `assignLeague(activityLevel)`.
4. Implementar operación `completeOnboarding`.
5. Guardar perfil.
6. Crear reto de 7 días.
7. Asociar hábitos seleccionados.
8. Registrar evento `onboarding_completed`.
9. Redirigir a Home.

### 11.5 Reto activo y Home

1. Implementar consulta de reto activo.
2. Mostrar día actual del reto.
3. Mostrar hábitos del día.
4. Mostrar consistencia acumulada.
5. Mostrar racha simple.
6. Mostrar estado vacío si no hay reto activo.
7. Agregar botón para iniciar nuevo reto de 7 días si el anterior terminó.

### 11.6 Check-ins

1. Crear formulario de check-in diario.
2. Permitir marcar cada hábito como completado o no.
3. Permitir nota opcional.
4. Crear o actualizar check-in del día.
5. Guardar detalle por hábito.
6. Calcular `completed_count` y `total_count`.
7. Registrar evento `checkin_completed`.
8. Actualizar UI después de guardar.

### 11.7 Consistencia y rachas

1. Implementar función `calculateConsistency(challengeId)`.
2. Implementar función `calculateCurrentStreak(userId)`.
3. Considerar racha activa si el usuario hizo check-in hoy o ayer.
4. Mostrar mensaje de retorno si hubo pausa.
5. Crear pruebas unitarias para cálculos de consistencia y racha.

### 11.8 Grupos e invitaciones

1. Crear pantalla de grupo.
2. Implementar creación de grupo con `invite_code` único.
3. Implementar compartir enlace con API nativa de share.
4. Implementar ruta para aceptar invitación.
5. Agregar usuario a `group_members`.
6. Asociar reto activo al grupo si corresponde.
7. Registrar eventos `invite_created` y `group_joined`.

### 11.9 Ranking

1. Crear consulta de miembros del grupo.
2. Calcular porcentaje de consistencia por miembro.
3. Ordenar por porcentaje descendente.
4. Mostrar nombre, liga, porcentaje y días activos.
5. Evitar mostrar datos sensibles o notas privadas.

### 11.10 Resumen semanal

1. Detectar reto finalizado.
2. Crear pantalla de resumen.
3. Mostrar días activos.
4. Mostrar total de hábitos completados.
5. Calcular mejor hábito.
6. Mostrar mensaje motivacional estático según resultado.
7. Botón para iniciar nuevo reto de 7 días.
8. Registrar evento `challenge_completed`.

### 11.11 Recordatorios

1. Pedir permiso de notificaciones.
2. Permitir elegir hora de recordatorio.
3. Programar notificación local diaria.
4. Crear mensaje especial si no hubo check-in ayer.
5. Permitir desactivar recordatorios en ajustes.

### 11.12 Panel fundador

1. Crear pantalla o ruta protegida de métricas.
2. Consultar conteos agregados de usuarios, retos y check-ins.
3. Mostrar conversión de onboarding.
4. Mostrar usuarios con cuatro o más check-ins.
5. Mostrar invitaciones creadas.
6. Restringir acceso por email administrador.

### 11.13 Ajustes y privacidad

1. Crear pantalla de perfil.
2. Permitir editar nombre.
3. Permitir activar o desactivar notificaciones.
4. Implementar cierre de sesión.
5. Implementar eliminación de cuenta o solicitud de eliminación.
6. Añadir textos básicos de privacidad.

### 11.14 Calidad y lanzamiento

1. Probar flujo de usuario nuevo completo.
2. Probar usuario invitado por enlace.
3. Probar check-in repetido el mismo día.
4. Probar reto finalizado.
5. Probar ranking con dos o más usuarios.
6. Revisar estados de carga, error y vacío.
7. Preparar build de prueba.
8. Crear lista de 20 a 50 beta testers.
9. Lanzar beta y revisar métricas diariamente.

## 12. Orden recomendado de implementación para Codex

1. Base de datos y tipos.
2. Autenticación.
3. Onboarding.
4. Creación de reto.
5. Home de reto activo.
6. Check-ins.
7. Consistencia y rachas.
8. Grupos e invitaciones.
9. Ranking.
10. Resumen semanal.
11. Recordatorios.
12. Panel fundador.
13. Ajustes.
14. Pulido y pruebas manuales.

## 13. Qué no debe hacer Codex en esta fase

- No implementar IA.
- No crear conteo calórico.
- No crear planes nutricionales.
- No integrar wearables.
- No crear chat.
- No implementar pagos.
- No crear feed público.
- No añadir fotos.
- No sobrediseñar arquitectura con microservicios.
- No crear lógica médica o diagnóstica.

## 14. Resultado esperado del MVP

Al final de los 30 días debe existir una app móvil simple donde un usuario pueda registrarse, elegir tres hábitos, iniciar un reto de 7 días, hacer check-ins diarios, invitar a personas cercanas, ver un ranking privado y recibir un resumen de avance.

El producto no debe sentirse completo; debe sentirse suficientemente útil para descubrir si la consistencia, los retos privados y la comparación justa generan retención real.
