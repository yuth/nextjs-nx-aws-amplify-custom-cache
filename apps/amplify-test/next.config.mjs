//@ts-check
import { composePlugins, withNx } from '@nx/next';
import { execSync } from "child_process";
import { fileURLToPath } from "url";

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  generateBuildId: () => execSync("git rev-parse HEAD").toString().trim(),
  cacheHandler: fileURLToPath(
    import.meta.resolve("@henrikvolmer/nextjs-cache-handler-s3"),
  ),
  cacheMaxMemorySize: 0,
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

export default composePlugins(...plugins)(nextConfig);
