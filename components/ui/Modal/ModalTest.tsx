"use client";

import {
  useState,
} from "react";

import {
  Button,
} from "@/components/ui/Button";

import {
  Modal,
} from "./Modal";


export function ModalTest() {
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
        باز کردن Modal
      </Button>


      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        title="Modal MELKIST"
        description="این پنجره برای تست سیستم Modal ساخته شده است."
      >
        <p>
          سیستم Modal با موفقیت فعال شده است.
        </p>
      </Modal>
    </>
  );
}