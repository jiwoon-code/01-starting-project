import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["3wfk2w-5174.csb.app", "swpfcm-5173.csb.app", "3glnq2-5173.csb.app"],
  },
});
