"use client";

import {
  PropertyGallery,
} from "@/components/ui/PropertyGallery";

import type {
  GalleryImage,
} from "@/components/ui/PropertyGallery";

const galleryImages: GalleryImage[] = [
  {
    id: "property-1",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    alt: "نمای داخلی مدرن یک واحد مسکونی",
  },

  {
    id: "property-2",
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
    alt: "اتاق نشیمن مدرن",
  },

  {
    id: "property-3",
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
    alt: "آشپزخانه مدرن",
  },

  {
    id: "property-4",
    src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85",
    alt: "فضای داخلی روشن و مینیمال",
  },

  {
    id: "property-5",
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",
    alt: "اتاق خواب مدرن",
  },
];

export default function GalleryDemoPage() {
  return (
    <main
      style={{
        minHeight: "100vh",

        padding:
          "var(--space-8) var(--space-4)",

        background:
          "var(--color-background)",
      }}
    >
      <div
        style={{
          width: "100%",

          maxWidth:
            "var(--container-xl)",

          marginInline:
            "auto",
        }}
      >
        <header
          style={{
            marginBottom:
              "var(--space-8)",
          }}
        >
          <h1
            style={{
              margin: 0,

              marginBottom:
                "var(--space-3)",

              fontSize:
                "var(--font-size-3xl)",

              color:
                "var(--color-text-primary)",
            }}
          >
            Property Gallery Demo
          </h1>

          <p
            style={{
              margin: 0,

              color:
                "var(--color-text-secondary)",
            }}
          >
            MELKIST v0.6.9.1 — Runtime Interaction Testing
          </p>
        </header>

        <section
          aria-label="گالری تصاویر ملک"
        >
          <PropertyGallery
            images={galleryImages}
            aspectRatio="16 / 10"
          />
        </section>
      </div>
    </main>
  );
}