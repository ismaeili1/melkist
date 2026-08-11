import { z } from "zod";

export const LoginSchema = z.object({

  email:
    z
      .string()
      .email(),

  password:
    z
      .string()
      .min(8),

});

export const RegisterSchema = z.object({

  email:
    z.string().email(),

  password:
    z.string().min(8),

  firstName:
    z.string().optional(),

  lastName:
    z.string().optional(),

});

export const UpdateProfileSchema =
    z.object({

        firstName:
            z.string().optional(),

        lastName:
            z.string().optional(),

        phone:
            z.string().optional(),

        bio:
            z.string().optional(),

    });


    export const RevokeSessionSchema =
    z.object({

        sessionId:
            z.string().cuid(),

    });

    

