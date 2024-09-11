export const usePageTitle = (route) => {
  route === "/"
    ? (document.title = "RollingPuppies")
    : (document.title =
        route.split("/")[route.split("/").length - 1] + " - RollingPuppies");
};
