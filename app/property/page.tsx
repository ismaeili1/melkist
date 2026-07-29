import {
  PropertyDiscovery,
} from "@/components/real-estate/PropertyDiscovery";

import type {
  SavedSearchUrlParams,
} from "@/lib/saved-searches";

type PropertyPageProps = {
  searchParams: Promise<SavedSearchUrlParams>;
};

export default async function PropertyPage({
  searchParams,
}: PropertyPageProps) {
  const params =
    await searchParams;

  return (
    <PropertyDiscovery
      initialSearchParams={
        params
      }
    />
  );
}