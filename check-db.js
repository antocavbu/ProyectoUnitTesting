/**
 * Script para inspeccionar la base de datos SQLite
 * Uso: npm run db:check
 * 
 * Este script permite:
 * - Ver todas las tablas creadas
 * - Revisar el contenido de cada tabla
 * - Verificar la integridad de los datos
 */
import db from './src/db.js';

async function checkDatabase() {
  try {
    console.log('� INSPECCIÓN DE BASE DE DATOS SQLite');
    console.log('=====================================\n');
    
    // Obtener información de las tablas
    const tables = await db.raw(`
      SELECT name FROM sqlite_master 
      WHERE type='table' AND name NOT LIKE 'sqlite_%'
    `);
    
    console.log('📋 TABLAS ENCONTRADAS:');
    tables.forEach((table, index) => {
      console.log(`${index + 1}. ${table.name}`);
    });
    console.log('\n');
    
    // Revisar tabla courses
    const courses = await db('courses').select();
    console.log('🎓 TABLA COURSES:');
    if (courses.length === 0) {
      console.log('   (Vacía - sin cursos registrados)');
    } else {
      console.table(courses);
    }
    
    // Revisar tabla students  
    const students = await db('students').select();
    console.log('\n👥 TABLA STUDENTS:');
    if (students.length === 0) {
      console.log('   (Vacía - sin estudiantes registrados)');
    } else {
      console.table(students);
    }
    
    // Revisar tabla enrollments
    const enrollments = await db('enrollments').select();
    console.log('\n📝 TABLA ENROLLMENTS:');
    if (enrollments.length === 0) {
      console.log('   (Vacía - sin inscripciones registradas)');
    } else {
      console.table(enrollments);
    }
    
    // Estadísticas generales
    console.log('\n📊 ESTADÍSTICAS:');
    console.log(`   • Total de cursos: ${courses.length}`);
    console.log(`   • Total de estudiantes: ${students.length}`);
    console.log(`   • Total de inscripciones: ${enrollments.length}`);
    
    console.log('\n✅ Inspección completada exitosamente');
    
  } catch (error) {
    console.error('❌ Error al inspeccionar la base de datos:', error.message);
    process.exit(1);
  } finally {
    await db.destroy();
    console.log('🔌 Conexión a base de datos cerrada');
  }
}

// Ejecutar la función
checkDatabase().catch(console.error);
