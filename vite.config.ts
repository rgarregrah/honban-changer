import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { crx, defineManifest } from "@crxjs/vite-plugin";

const manifest = defineManifest({
  manifest_version: 3,
  name: "Honban Changer",
  description: "簡単に複数の環境を切り替えられるChrome拡張機能",
  version: "0.0.1",
  permissions: [],
  action: {
    default_popup: "index.html",
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
});
