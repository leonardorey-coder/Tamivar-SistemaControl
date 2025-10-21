// Sistema de navegación modular para Tamivar
const app = {
    currentComponent: 'dashboard',
    
    // Metadatos de componentes
    components: {
        dashboard: {
            title: 'Dashboard',
            subtitle: 'Panel de control y resumen ejecutivo',
            file: 'components/dashboard.html'
        },
        gastos: {
            title: 'Control de Gastos',
            subtitle: 'Gestión y seguimiento de gastos por obra',
            file: 'components/gastos.html'
        },
        facturacion: {
            title: 'Facturación',
            subtitle: 'Seguimiento de facturas emitidas y recibidas',
            file: 'components/facturacion.html'
        },
        materiales: {
            title: 'Materiales',
            subtitle: 'Inventario y control de stock',
            file: 'components/materiales.html'
        },
        proyectos: {
            title: 'Proyectos',
            subtitle: 'Gestión de obras y proyectos activos',
            file: 'components/proyectos.html'
        },
        proveedores: {
            title: 'Proveedores',
            subtitle: 'Directorio de proveedores y contratistas',
            file: 'components/proveedores.html'
        },
        reportes: {
            title: 'Reportes',
            subtitle: 'Informes y análisis del sistema',
            file: 'components/reportes.html'
        }
    },

    // Inicializar aplicación
    init: function() {
        console.log('Tamivar - Sistema de Control Empresarial iniciando...');
        this.loadComponent('dashboard');
    },

    // Cargar componente dinámicamente
    loadComponent: function(componentName) {
        const component = this.components[componentName];
        
        if (!component) {
            console.error(`Componente "${componentName}" no encontrado`);
            return;
        }

        // Actualizar título y subtítulo
        document.getElementById('page-title').textContent = component.title;
        document.getElementById('page-subtitle').textContent = component.subtitle;

        // Actualizar estado activo en navbar
        this.updateActiveNav(componentName);

        // Cargar HTML del componente
        this.fetchComponent(component.file, componentName);

        this.currentComponent = componentName;
    },

    // Cargar archivo HTML del componente
    fetchComponent: function(filePath, componentName) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error al cargar ${filePath}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(html => {
                document.getElementById('content-container').innerHTML = html;
                
                // Llamar función de inicialización del componente si existe
                if (typeof window[`init${this.capitalize(componentName)}`] === 'function') {
                    window[`init${this.capitalize(componentName)}`]();
                }

                // Cargar script del componente si existe
                this.loadComponentScript(componentName);
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('content-container').innerHTML = 
                    `<div class="text-center py-12">
                        <p class="text-red-600">Error al cargar el componente: ${error.message}</p>
                    </div>`;
            });
    },

    // Cargar script asociado al componente
    loadComponentScript: function(componentName) {
        const scriptPath = `js/${componentName}.js`;
        
        // Remover script anterior si existe
        const existingScript = document.querySelector(`script[data-component="${componentName}"]`);
        if (existingScript) {
            existingScript.remove();
        }

        // Crear y cargar nuevo script
        const script = document.createElement('script');
        script.src = scriptPath;
        script.setAttribute('data-component', componentName);
        script.onerror = function() {
            console.log(`No hay script específico para ${componentName}`);
        };
        document.body.appendChild(script);
    },

    // Actualizar elemento activo en navbar
    updateActiveNav: function(componentName) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('bg-blue-700', 'font-semibold');
            if (item.getAttribute('data-component') === componentName) {
                item.classList.add('bg-blue-700', 'font-semibold');
            }
        });
    },

    // Utilidad: capitalizar primera letra
    capitalize: function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
};

// Función global para cargar componentes desde onclick
function loadComponent(componentName) {
    app.loadComponent(componentName);
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    app.init();
});