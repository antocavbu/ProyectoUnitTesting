# Course Student FP

Un proyecto de gestión de cursos y estudiantes desarrollado con Node.js, Express y SQLite.

## 📋 Descripción

Este proyecto implementa un sistema para gestionar cursos y estudiantes utilizando programación funcional y tecnologías modernas de JavaScript.

## 🚀 Inicio Rápido

```bash
# Clonar y configurar
git clone https://github.com/antocavbu/ProyectoUnitTesting.git
cd ProyectoUnitTesting/course-student-fp
npm install
npm run migrate:latest

# Ejecutar pruebas con cobertura
npm test

# Inspeccionar base de datos
npm run db:check

# Iniciar servidor de desarrollo
npm run dev
```

## 🚀 Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución de JavaScript
- **Express** - Framework web para Node.js
- **SQLite3** - Base de datos ligera
- **Knex.js** - Query builder para SQL
- **Jest** - Framework de testing
- **Babel** - Transpilador de JavaScript
- **dotenv** - Gestión de variables de entorno

## 📁 Estructura del Proyecto

```
course-student-fp/
├── babel.config.js          # Configuración de Babel
├── jest.config.js           # Configuración de Jest
├── jest.setup.js            # Setup para pruebas
├── knexfile.cjs             # Configuración de Knex/Base de datos
├── package.json             # Dependencias y scripts
├── package-lock.json        # Versiones exactas de dependencias
├── check-db.js              # Script para inspeccionar BD
├── dev.sqlite3              # Base de datos SQLite
├── .env                     # Variables de entorno (crear)
├── .gitignore               # Archivos ignorados por Git
├── README.md                # Este archivo
├── coverage/                # Reportes de cobertura de tests
├── migrations/              # Migraciones de base de datos
├── src/                     # Código fuente
│   ├── app.js               # Aplicación Express principal
│   ├── db.js                # Configuración de base de datos
│   ├── controllers/         # Controladores (lógica de negocio)
│   └── routers/             # Rutas de la API
├── tests/                   # Pruebas unitarias
└── node_modules/            # Dependencias instaladas
```

## 🛠️ Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/antocavbu/ProyectoUnitTesting.git
   cd ProyectoUnitTesting/course-student-fp
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Ejecuta las migraciones de base de datos:**
   ```bash
   npm run migrate:latest
   ```

4. **Configura las variables de entorno (opcional):**
   Crea un archivo `.env` en la raíz del proyecto con las variables necesarias.

## 🚀 Uso

### Desarrollo
```bash
npm run dev
```

### Testing y Cobertura
```bash
npm test
```

### Inspeccionar Base de Datos
```bash
npm run db:check
```

### Producción
```bash
npm start
```

## 📋 Scripts Disponibles

- `npm test` - Ejecuta las pruebas unitarias con cobertura (96%+)
- `npm run dev` - Inicia el servidor en modo desarrollo (con nodemon)
- `npm start` - Inicia el servidor en modo producción
- `npm run migrate:latest` - Ejecuta las migraciones de base de datos
- `npm run db:check` - **Inspecciona el contenido de la base de datos SQLite**

## 📊 Reportes de Cobertura

Después de ejecutar `npm test`, puedes ver los reportes de cobertura en:
- **Terminal**: Resumen inmediato
- **HTML**: `coverage/lcov-report/index.html` (abrir en navegador)
- **XML**: `coverage/coverage-final.json`

```bash
# Ejecutar tests y ver cobertura
npm test

# Ver reporte HTML en el navegador
start coverage/lcov-report/index.html
```

## 🗃️ Base de Datos

El proyecto utiliza SQLite como base de datos con Knex.js como query builder para:
- Gestión de migraciones
- Construcción de consultas SQL
- Conexión y configuración de la base de datos

### Comandos de Base de Datos
```bash
# Ejecutar migraciones
npm run migrate:latest

# Inspeccionar contenido de la base de datos
npm run db:check
```

### Ejemplo de salida del script `db:check`:
```
📋 TABLAS ENCONTRADAS:
1. courses
2. students  
3. enrollments

🎓 TABLA COURSES:
┌─────────┬────┬─────────────────────┬─────────────────────┐
│ (index) │ id │ title               │ created_at          │
├─────────┼────┼─────────────────────┼─────────────────────┤
│ 0       │ 1  │ 'JavaScript Basics' │ '2025-07-05 10:30'  │
└─────────┴────┴─────────────────────┴─────────────────────┘

📊 ESTADÍSTICAS:
   • Total de cursos: 1
   • Total de estudiantes: 0
   • Total de inscripciones: 0
```

### Estructura de la Base de Datos
- **courses**: Tabla de cursos con id, title, created_at, updated_at
- **students**: Tabla de estudiantes con id, name, email, created_at, updated_at
- **enrollments**: Tabla de relación entre estudiantes y cursos

## 🧪 Testing

El proyecto incluye configuración para testing con:
- **Jest** - Framework de testing principal
- **Supertest** - Para testing de APIs HTTP
- **Babel-jest** - Para transpilar código durante las pruebas

## 🔧 Configuración

### Babel
El proyecto usa Babel para transpilar código ES6+ con la configuración en `babel.config.js`:
- Preset: `@babel/preset-env`
- Target: Node.js actual

### Variables de Entorno
Configura las siguientes variables en tu archivo `.env`:
```env
PORT=3000
DB_FILENAME=database.sqlite
NODE_ENV=development
```

## 📄 Licencia

Este proyecto está bajo la Licencia ISC - ver el archivo [LICENSE](LICENSE) para detalles.

## 👥 Autor

- **Antonieta Bustos** 




