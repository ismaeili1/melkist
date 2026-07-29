import { Auth } from "@/lib/auth/auth";

async function run() {
  const user =
    await Auth.currentUser();

  console.log(user);
}

run();