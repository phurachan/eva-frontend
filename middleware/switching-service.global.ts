export default defineNuxtRouteMiddleware((to, from) => {
  const globalProfileDataCookie = useCookie<any>("globalProfileData");

  if (!["/login"].includes(to.path)) {
    if (!globalProfileDataCookie.value?.username) {
      return navigateTo("/login");
    }
  } else {
    if (!!globalProfileDataCookie.value?.username) {
      return navigateTo("/dashboard");
    }
  }
});
