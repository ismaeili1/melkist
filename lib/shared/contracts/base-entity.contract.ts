export interface BaseEntityContract {
  id: string;

  createdAt: Date;

  updatedAt: Date;

  deletedAt: Date | null;

  isActive: boolean;

  version: number;

  createdBy: string | null;

  updatedBy: string | null;

  deletedBy: string | null;
}