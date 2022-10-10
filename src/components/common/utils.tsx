export const handleBack = (router: any) => {
  return router.back();
};

export function slugify(content: any) {
  return content
    ?.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}
