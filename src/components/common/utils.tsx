export const handleBack = (router: any) => {
  return router.back();
};

export function slugify(content: any) {
  return content
    ?.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

/** READ COOKIE */
export function getCookie(cname: string) {
  if (typeof document === "undefined") return;
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

/** CREATE COOKIE */
export function setCookie(cname: string, cvalue: string, exdays: number) {
  if (typeof document === "undefined") return;
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/** DELETE COOKIE */
export function deleteCookie(cname: string) {
  if (typeof document === "undefined") return;
  let expires = "expires=" + "01 Jan 1970 00:00:00";
  document.cookie = cname + "=" + "" + ";" + expires + ";path=/";
}
