"use client";

import {
useEffect,
useMemo,
useState,
} from "react";

import {
getFavoriteIds,
} from "@/lib/favorites";

import {
PropertyCard,
type PropertyCardData,
} from "@/components/real-estate/PropertyCard";

import styles from "./SavedProperties.module.css";

type SavedPropertiesProps = {
properties: PropertyCardData[];
};

export function SavedProperties({
properties,
}: SavedPropertiesProps) {
const [
favoriteIds,
setFavoriteIds,
] = useState<string[]>([]);

const [
isReady,
setIsReady,
] = useState(false);

useEffect(() => {
setFavoriteIds(
getFavoriteIds(),
);
setIsReady(true);
}, []);

const savedProperties =
useMemo(() => {
if (!isReady) {
return [];
}
  const favoriteIdSet =
    new Set(favoriteIds);

  return properties.filter(
    (property) =>
      favoriteIdSet.has(
        property.id,
      ),
  );
}, [
  favoriteIds,
  isReady,
  properties,
]);
function handleFavoriteChange() {
setFavoriteIds(
getFavoriteIds(),
);
}

if (!isReady) {
return (
<section
className={
styles.loading
}
> <p>
ط¯ط± ط­ط§ظ„ ط¨ط§ط±ع¯ط°ط§ط±غŒ ط§ظ…ظ„ط§ع©
ط°ط®غŒط±ظ‡â€Œط´ط¯ظ‡... </p> </section>
);
}

return (
<section
className={
styles.section
}
>
<div
className={
styles.header
}
> <div>
<span
className={
styles.eyebrow
}
>
MELKIST SAVED </span>
      <h1>
        ط§ظ…ظ„ط§ع© ط°ط®غŒط±ظ‡â€Œط´ط¯ظ‡
      </h1>

      <p
        className={
          styles.description
        }
      >
        ط§ظ…ظ„ط§ع© ظ…ظˆط±ط¯ ط¹ظ„ط§ظ‚ظ‡ ط®ظˆط¯ ط±ط§
        ط¨ط±ط§غŒ ط¨ط±ط±ط³غŒ ظˆ ظ¾غŒع¯غŒط±غŒ
        ط¨ط¹ط¯غŒ ظ…ط¯غŒط±غŒطھ ع©ظ†غŒط¯.
      </p>
    </div>

    <div
      className={
        styles.count
      }
    >
      <strong>
        {savedProperties.length}
      </strong>

      <span>
        ظ…ظ„ع© ط°ط®غŒط±ظ‡â€Œط´ط¯ظ‡
      </span>
    </div>
  </div>

  {savedProperties.length === 0 ? (
    <EmptySavedProperties />
  ) : (
    <div
      className={
        styles.grid
      }
    >
      {savedProperties.map(
        (property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onFavoriteChange={
              handleFavoriteChange
            }
          />
        ),
      )}
    </div>
  )}
</section>
);
}

function EmptySavedProperties() {
return (
<div
className={
styles.emptyState
}
>
<div
className={
styles.emptyIcon
}
aria-hidden="true"
>
â™، </div>
  <h2>
    ظ‡ظ†ظˆط² ظ…ظ„ع©غŒ ط°ط®غŒط±ظ‡ ظ†ع©ط±ط¯ظ‡â€Œط§غŒط¯
  </h2>

  <p>
    ظ‡ظ†ع¯ط§ظ… ط¨ط±ط±ط³غŒ ط§ظ…ظ„ط§ع©طŒ
    ع¯ط²غŒظ†ظ‡ ط°ط®غŒط±ظ‡ ط±ط§ ط§ظ†طھط®ط§ط¨
    ع©ظ†غŒط¯ طھط§ ظ…ظ„ع©â€Œظ‡ط§غŒ ظ…ظˆط±ط¯
    ط¹ظ„ط§ظ‚ظ‡ ط´ظ…ط§ ط¯ط± ط§غŒظ†ط¬ط§
    ظ†ظ…ط§غŒط´ ط¯ط§ط¯ظ‡ ط´ظˆظ†ط¯.
  </p>

  <a
    href="/property"
    className={
      styles.exploreButton
    }
  >
    ظ…ط´ط§ظ‡ط¯ظ‡ ط§ظ…ظ„ط§ع©
  </a>
</div>
);
}

