import { defineConfig } from 'tsup';
import path from 'path';

export default defineConfig({
    entry: ['src/**/*.ts'], // Main entry file
    outDir: 'dist', // Output directory
    format: ['cjs'], // CommonJS and ES Module output
    dts: true, // Generate TypeScript declaration files
    sourcemap: true, // Generate sourcemaps
    clean: true, // Clean the output directory before building,
    minify:true,
    bundle: true,
    esbuildOptions(options) {
        options.alias = {
            '@': path.resolve(__dirname, 'src'), // Maps "@/..." to "./src/..."
        };
    },
});
