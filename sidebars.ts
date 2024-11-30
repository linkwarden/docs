/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

import { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import openapiSidebar from "./docs/openapi/sidebar";

const sidebars: SidebarsConfig = {
  sidebar: [
    { type: "autogenerated", dirName: "." },
    {
      "OpenAPI Documentation": openapiSidebar,
    },
  ],
};

export default sidebars;