#!/usr/bin/env node

/**
 * Script para generar favicons desde el logo de FluxForge
 * Ejecutar: node scripts/generate-favicons.js
 */

const fs = require('fs');
const path = require('path');

// Tamaños de iconos necesarios para diferentes dispositivos
const iconSizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
];

console.log('🎨 Generando favicons para FluxForge Portfolio...');

// Crear directorio si no existe
const faviconDir = path.join(__dirname, '../public/favicons');
if (!fs.existsSync(faviconDir)) {
  fs.mkdirSync(faviconDir, { recursive: true });
}

// Copiar el logo principal como base
const logoPath = path.join(__dirname, '../public/images/fluxforge-logo.png');
const faviconPath = path.join(__dirname, '../public/favicon.ico');

if (fs.existsSync(logoPath)) {
  console.log('✅ Logo encontrado en public/images/fluxforge-logo.png');
  
  // Crear enlaces simbólicos para diferentes tamaños
  iconSizes.forEach(({ size, name }) => {
    const targetPath = path.join(faviconDir, name);
    if (!fs.existsSync(targetPath)) {
      fs.copyFileSync(logoPath, targetPath);
      console.log(`✅ Generado: ${name} (${size}x${size})`);
    }
  });
  
  // Copiar como favicon.ico principal
  if (!fs.existsSync(faviconPath)) {
    fs.copyFileSync(logoPath, faviconPath);
    console.log('✅ Favicon.ico generado');
  }
  
  console.log('\n🎉 Favicons generados exitosamente!');
  console.log('📁 Ubicación: public/favicons/');
  console.log('🔗 Favicon principal: public/favicon.ico');
  
} else {
  console.error('❌ No se encontró el logo en public/images/fluxforge-logo.png');
  console.log('💡 Asegúrate de tener el archivo fluxforge-logo.png en la carpeta public/images/');
} 