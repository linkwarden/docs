// This is used to exclude the openapi sidebar item from the autogenerated sidebar
// docusaurus creates so we can use the generated sidebar that docusaurus-plugin-openapi-docs creates
// which automatically groups the endpoints by tag
async function customSidebarItemsGenerator({
  defaultSidebarItemsGenerator,
  ...args
}) {
  const sidebarItems = await defaultSidebarItemsGenerator(args);

  return sidebarItems.filter((item) => item.label !== "api");
}

export default customSidebarItemsGenerator;
