# Course Student FP

Un proyecto de gestión de cursos y estudiantes desarrollado con Node.js, Express y SQLite.

## 📋 Descripción

Este proyecto implementa un sistema para gestionar cursos y estudiantes utilizando programación funcional y tecnologías modernas de JavaScript.

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
tarea3/
├── babel.config.js          # Configuración de Babel
├── course-student-fp/       # Directorio principal del proyecto
│   ├── package.json         # Dependencias y scripts
│   ├── package-lock.json    # Versiones exactas de dependencias
│   └── node_modules/        # Dependencias instaladas
└── README.md               # Este archivo
```

## 🛠️ Instalación

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd tarea3
   ```

2. **Navega al directorio del proyecto:**
   ```bash
   cd course-student-fp
   ```

3. **Instala las dependencias:**
   ```bash
   npm install
   ```

4. **Configura las variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto con las variables necesarias.

## 🚀 Uso

### Desarrollo
```bash
npm run dev
```

### Testing
```bash
npm test
```

### Producción
```bash
npm start
```

## 📋 Scripts Disponibles

- `npm test` - Ejecuta las pruebas unitarias
- `npm run dev` - Inicia el servidor en modo desarrollo (con nodemon)
- `npm start` - Inicia el servidor en modo producción

## 🗃️ Base de Datos

El proyecto utiliza SQLite como base de datos con Knex.js como query builder para:
- Gestión de migraciones
- Construcción de consultas SQL
- Conexión y configuración de la base de datos

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




