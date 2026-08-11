import { Device, DeviceType } from "@prisma/client";
import { BaseRepository } from "@/lib/database";

export interface CreateDeviceInput {
  userId: string;
  fingerprint: string;
  deviceName?: string;
  deviceType?: DeviceType;
  platform?: string;
  browser?: string;
  os?: string;
  ipAddress?: string;
  country?: string;
  city?: string;
}

export class DeviceRepository extends BaseRepository {

  async findByFingerprint(
    fingerprint: string,
  ): Promise<Device | null> {

    return this.prisma.device.findUnique({
      where: {
        fingerprint,
      },
    });
  }


  async create(
    data: CreateDeviceInput,
  ): Promise<Device> {

    return this.prisma.device.create({
      data,
    });
  }


  async updateLastSeen(
    id: string,
  ): Promise<Device> {

    return this.prisma.device.update({
      where: {
        id,
      },
      data: {
        lastSeenAt: new Date(),
      },
    });
  }


  async findOrCreate(
    data: CreateDeviceInput,
  ): Promise<Device> {

    const existing =
      await this.findByFingerprint(
        data.fingerprint,
      );


    if (existing) {

      return this.updateLastSeen(
        existing.id,
      );

    }


    return this.create(data);

  }

}


export const deviceRepository =
  new DeviceRepository();