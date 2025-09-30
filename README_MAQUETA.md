# Tamivar - Maqueta Beta del Sistema de Control Empresarial

## 📋 Descripción

Esta es una maqueta funcional del sistema de control de gastos, facturación y materiales de obra para Tamivar. Es una SPA (Single Page Application) completamente portable y lista para presentar la propuesta.

## 🚀 Cómo usar

### Opción 1: Abrir directamente (Recomendado)
Simplemente abre el archivo `index.html` en tu navegador favorito:
- Doble clic en `index.html`
- O arrastra el archivo a tu navegador

### Opción 2: Servidor local (Opcional)
Si prefieres usar un servidor local:

```bash
# Si tienes Python 3 instalado
python3 -m http.server 8000

# Si tienes Node.js instalado
npx serve
```

Luego abre: http://localhost:8000

## ✨ Características

### Módulos Incluidos

1. **Dashboard**
   - Tarjetas con estadísticas clave
   - Gráficos de gastos por categoría
   - Actividad reciente
   - Vista general de proyectos

2. **Control de Gastos**
   - Listado de gastos con filtros
   - Estados: Borrador, En revisión, Aprobado, Rechazado
   - Búsqueda y categorización
   - Adjuntos de comprobantes

3. **Facturación**
   - Dashboard de facturas (Pendientes, Emitidas, Por vencer)
   - Seguimiento de facturas
   - Alertas de vencimiento
   - Gestión de UUID y folios

4. **Inventario de Materiales**
   - Catálogo de materiales
   - Existencias en tiempo real
   - Alertas de bajo stock
   - Kardex de movimientos

5. **Proyectos y Obras**
   - Vista de tarjetas de proyectos
   - Presupuesto vs gastado
   - Barra de progreso
   - Estados de proyectos

6. **Proveedores**
   - Directorio de proveedores
   - Información de contacto
   - Categorización por tipo

7. **Reportes**
   - Reportes financieros
   - Reportes de facturación
   - Reportes de inventario
   - Generador de reportes personalizados

## 🎨 Diseño

- **Framework CSS**: Tailwind CSS (vía CDN)
- **Iconos**: Font Awesome 6.4.0
- **Colores**: Paleta moderna en azules con acentos
- **Responsive**: Adaptable a diferentes tamaños de pantalla
- **Interactivo**: Navegación suave entre módulos

## 📦 Portabilidad

✅ **100% Portable**
- No requiere instalación
- No necesita backend
- Funciona completamente offline
- Un solo archivo HTML
- CDNs para recursos externos (CSS, iconos)

## 🎯 Objetivo

Esta maqueta está diseñada para:
- Presentar la propuesta visual del sistema
- Mostrar la estructura de módulos
- Demostrar la experiencia de usuario
- Facilitar la discusión de funcionalidades
- Validar el diseño con stakeholders

## 📱 Navegación

- **Sidebar izquierdo**: Menú principal de módulos
- **Header superior**: Título de sección y acciones rápidas
- **Área de contenido**: Vista del módulo activo
- **Tarjetas interactivas**: Hover effects y transiciones suaves

## 🎪 Para la presentación

### Tips de presentación:
1. Abre en pantalla completa (F11 en la mayoría de navegadores)
2. Navega por cada módulo explicando las funcionalidades
3. Destaca las estadísticas del dashboard
4. Muestra los diferentes estados de gastos y facturas
5. Explica el sistema de alertas (facturas por vencer, bajo stock)
6. Presenta los reportes disponibles

### Puntos clave a destacar:
- ✅ Interfaz moderna y profesional
- ✅ Diseño intuitivo y fácil de usar
- ✅ Control total de gastos con aprobaciones
- ✅ Seguimiento completo de facturación
- ✅ Gestión de inventario en tiempo real
- ✅ Reportes exportables
- ✅ Alertas y notificaciones
- ✅ Dashboard ejecutivo con KPIs

## 🔮 Próximos pasos

Esta maqueta representa la interfaz. El desarrollo completo incluirá:
- Backend con Electron + SQLite
- Autenticación y roles de usuario
- Base de datos local
- Funcionalidad completa de CRUD
- Sistema de adjuntos
- Generación real de reportes
- Modo offline total
- Respaldos cifrados

## 📧 Contacto

Proyecto desarrollado para **Tamivar** - Soluciones Inmobiliarias
Estadía de **María Alejandra Medina Vega**
Licenciatura en Contabilidad y Finanzas

---

**Nota**: Esta es una maqueta visual (frontend only). No incluye funcionalidad de backend ni persistencia de datos.
