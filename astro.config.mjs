// @ts-check
import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "",
      description: "Documentation for the Ecosystem Thinking project.",
      logo: {
        src: "./src/assets/logo.png",
        alt: "Ecosystem Thinking Logo",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/platformable/ecosystem-thinking",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
            { label: "Testing Guide", slug: "guides/testing" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],

  adapter: node({
    mode: "standalone",
  }),
})