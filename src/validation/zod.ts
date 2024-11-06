import { z } from "zod";
/*                                                       Authentication Schema                                                               */
// ** user registration schema
export const userRegistrationSchema = z.object({
  username: z
    .string({ message: "username is required!!" })
    .min(1, { message: "username is required!!" })
    .min(3, {
      message: "Username must be at least 3 characters long. e.g: user123"
    })
    .max(50, { message: "Username can be at most 50 characters long. e.g: user123" })
    .regex(/^[a-z0-9_.]{1,20}$/, {
      message: "Username can only contain lowercase letters, numbers, underscores, and periods. e.g: user123"
    }),
  fullName: z
    .string({ message: "fullName is required!!" })
    .min(1, { message: "fullName is required!!" })
    .min(3, {
      message: "Full name must be at least 3 characters long. e.g: John Doe"
    })
    .max(50, { message: "Full name can be at most 50 characters long. e.g: John Doe" })
    .regex(/^[a-zA-Z ]{3,20}$/, {
      message: "Full name can only contain letters and spaces. e.g: John Doe"
    }),
  email: z
    .string({ message: "email is required!!" })
    .min(1, { message: "email is required!!" })
    .min(3, { message: "email must be at least 3 characters long." })
    .max(150, { message: "email can be at most 150 characters long." })
    .regex(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, {
      message: "Invalid email format. e.g: john.doe@example.com"
    }),
  password: z
    .string({ message: "password is required!!" })
    .min(1, { message: "password is required!!" })
    .min(6, { message: "password must be at least 6 characters long." })
    .max(50, { message: "password can be at most 50 characters long." })
});

// ** user login schema
export const userLoginSchema = z.object({
  email: z.string({ message: "email is required!!" }).min(1, { message: "email is required!!" }).email({ message: "Invalid email format." }),
  password: z.string({ message: "password is required!!" }).min(1, { message: "password is required!!" })
});

// ** verify user schema
export const verifyUserSchema = z.object({
  email: z
    .string({ message: "email is required!!" })
    .min(1, { message: "email is required!!" })
    .email({ message: "Invalid email format. e.g: john.doe@example.com" }),
  OTP: z
    .string({ message: "OTP is required!!" })
    .min(1, { message: "OTP is required!!" })
    .min(6, { message: "OTP must be at least 6 characters long." })
    .max(6, { message: "OTP can be at most 6 characters long." })
});

export const sendOTPSchema = z.object({
  email: z
    .string({ message: "email is required!!" })
    .min(1, { message: "email is required!!" })
    .email({ message: "Invalid email format. e.g: john.doe@example.com" })
});

export const userUpdateSchema = z.object({
  uid: z.string({ message: "uid is required!!" }).min(1, { message: "uid is required!!" }),
  username: z
    .string({ message: "username is required!!" })
    .min(1, { message: "username is required!!" })
    .min(3, {
      message: "Username must be at least 3 characters long. e.g: user123"
    })
    .max(50, { message: "Username can be at most 50 characters long. e.g: user123" })
    .regex(/^[a-z0-9_.]{1,20}$/, {
      message: "Username can only contain lowercase letters, numbers, underscores, and periods. e.g: user123"
    }),
  fullName: z
    .string({ message: "fullName is required!!" })
    .min(1, { message: "fullName is required!!" })
    .min(3, {
      message: "Full name must be at least 3 characters long. e.g: John Doe"
    })
    .max(50, { message: "Full name can be at most 50 characters long. e.g: John Doe" })
    .regex(/^[a-zA-Z ]{3,20}$/, {
      message: "Full name can only contain letters and spaces. e.g: John Doe"
    })
});
export const userUpdateEmailSchema = z.object({
  uid: z.string({ message: "uid is required!!" }).min(1, { message: "uid is required!!" }),
  email: z
    .string({ message: "email is required!!" })
    .min(1, { message: "email is required!!" })
    .min(3, { message: "email must be at least 3 characters long." })
    .max(150, { message: "email can be at most 150 characters long." })
    .email({ message: "Invalid email format. e.g: john.doe@example.com" })
    .regex(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, {
      message: "Invalid email format. e.g: john.doe@example.com"
    })
});

export const userUpdatePasswordSchema = z.object({
  uid: z.string({ message: "uid is required!!" }).min(1, { message: "uid is required!!" }),
  oldPassword: z
    .string({ message: "oldPassword  is required" })
    .min(1, { message: "oldPassword  is required" })
    .max(50, { message: "oldPassword  can be at most 50 characters long." }),
  password: z
    .string({ message: "newPassword is required!!" })
    .min(1, { message: "newPassword is required!!" })
    .min(6, { message: " newPassword must be at least 6 characters long." })
    .max(50, { message: " newPassword can be at most 50 characters long." })
});
export const userDeleteSchema = z.object({
  uid: z.string({ message: "uid is required!!" }).min(1, { message: "uid is required!!" })
});
/*                                                       Contact US Schema                                                               */

export const contactUsSchema = z.object({
  firstName: z
    .string({ message: "firstName is required!!" })
    .min(1, { message: "firstName is required!!" })
    .min(2, { message: "firstName must be at least 2 characters long." })
    .max(50, { message: "firstName can be at most 50 characters long." }),

  lastName: z
    .string({ message: "lastName is required!!" })
    .min(1, { message: "lastName is required!!" })
    .min(3, { message: "lastName must be at least 3 characters long." })
    .max(50, { message: "lastName can be at most 50 characters long." }),
  email: z
    .string({ message: "email is required!!" })
    .min(1, { message: "email is required!!" })
    .min(3, { message: "email must be at least 3 characters long." })
    .max(150, { message: "email can be at most 150 characters long." })
    .email({ message: "Invalid email format. e.g: john.doe@example.com" }),
  message: z
    .string({ message: "message is required!!" })
    .min(1, { message: "message is required!!" })
    .min(3, { message: "message must be at least 3 characters long." })
    .max(500, { message: "message can be at most 500 characters long." })
});

export const sendMessagaeToUserSchema = z.object({
  id: z.number({ message: "id is required!!" }).min(1, { message: "id is required!!" }),
  message: z.string({ message: "message is required!!" }).min(1, { message: "message is required!!" })
});
/*                                                 news letter schema                                                    */

export const newsLetterSchema = z.object({
  email: z
    .string({ message: "email is required!!" })
    .min(1, { message: "email is required!!" })
    .min(3, { message: "email must be at least 3 characters long." })
    .max(150, { message: "email can be at most 150 characters long." })
    .email({ message: "Invalid email format. e.g: john.doe@example.com" })
    .regex(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, {
      message: "Invalid email format. e.g: john.doe@example.com"
    })
});
