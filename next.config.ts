import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  sassOptions: {
    loadPaths: [path.join(process.cwd(), "src/styles")],
    additionalData: `@use "variables" as *;`,
  },
};

export default nextConfig;
