import { notFound } from "next/navigation";

import {
  PropertyGallery,
} from "@/components/ui/PropertyGallery";

import {
  PropertyHeader,
} from "./components/PropertyHeader";

import {
  PropertyFacts,
} from "./components/PropertyFacts";

import {
  PropertyPrice,
} from "./components/PropertyPrice";

import {
  PropertyDescription,
} from "./components/PropertyDescription";

import {
  PropertyLocation,
} from "./components/PropertyLocation";

import {
  PropertyContact,
} from "./components/PropertyContact";

import {
  SimilarProperties,
} from "./components/SimilarProperties";

import {
  propertyResults,
} from "../property-data";

import styles from "./page.module.css";

type PropertyDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PropertyDetailPage({
  params,
}: PropertyDetailPageProps) {
  const {
    id,
  } = await params;

  const property =
    propertyResults.find(
      (item) => item.id === id,
    );

  if (!property) {
    notFound();
  }

  return (
    <div className={styles.page}>
      
      <main className={styles.main}>
        <div className={styles.container}>

          <nav
            className={styles.breadcrumb}
            aria-label="مسیر صفحه"
          >
            <span>ملکیست</span>
            <span>/</span>
            <span>املاک</span>
            <span>/</span>
            <strong>
              {property.title}
            </strong>
          </nav>

          <div className={styles.detailLayout}>

            <div className={styles.visualColumn}>

              <div className={styles.galleryWrapper}>

                {property.featured && (
                  <span
                    className={
                      styles.featuredBadge
                    }
                  >
                    ویژه
                  </span>
                )}

                <PropertyGallery
                  images={
                    property.images.map(
                      (
                        image,
                        index,
                      ) => ({
                        id:
                          `${property.id}-image-${index + 1}`,

                        src: image,

                        alt:
                          `${property.title} - تصویر ${index + 1}`,
                      }),
                    )
                  }
                />

              </div>

            </div>

            <aside
              className={styles.infoColumn}
            >

              <PropertyHeader
                property={property}
              />

              <PropertyPrice
                property={property}
              />

            </aside>

          </div>

          <PropertyFacts
            property={property}
          />

          <PropertyDescription
            property={property}
          />

          <PropertyLocation
            property={property}
          />

          <PropertyContact
            property={property}
          />

          <SimilarProperties
            currentProperty={property}
            properties={propertyResults}
          />

        </div>
      </main>
    </div>
  );
}