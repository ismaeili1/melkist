import { z } from "zod";

export const cuidSchema = z.string().cuid();

export const emailSchema = z.string().email();

export const phoneSchema = z.string().min(8).max(30);

export const slugSchema = z.string().min(3).max(255);

export const urlSchema = z.string().url();
