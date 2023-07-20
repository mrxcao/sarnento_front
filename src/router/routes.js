import { useAuth } from "/src/store/auth";

export default async function routes(to, from, next) {
  if (to.meta?.auth) {
    const auth = useAuth();
    auth.authOk ? next() : next({ name: "login" });
  } else {
    next();
  }
  
}
