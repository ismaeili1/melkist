import {
  sessionRepository,
} from "@/lib/auth/session/repositories";


export async function revokeAllSessions(
  userId:string,
){

  await sessionRepository.revokeAll(
    userId,
  );

}
