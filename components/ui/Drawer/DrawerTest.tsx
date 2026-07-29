"use client";

import {
  useState,
} from "react";

import {
  Button,
} from "@/components/ui/Button";

import {
  Drawer,
} from "./Drawer";

export function DrawerTest() {
  const [
    open,
    setOpen,
  ] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        باز کردن Drawer
      </Button>

      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        title="پنل MELKIST"
        description="این پنل برای نمایش محتوای جانبی استفاده می‌شود."
      >
        <p>
          Drawer با موفقیت فعال شده است.
        </p>
      </Drawer>
    </>
  );
}