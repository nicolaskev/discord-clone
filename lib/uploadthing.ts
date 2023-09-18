import { generateComponents } from "@uploadthing/react";

import type { OurFileRouter } from "@/app/api/uploadthing/core";

export const { UploadButton, UploadDropZone, Uploader } =
  generateComponents<OurFileRouter>();
