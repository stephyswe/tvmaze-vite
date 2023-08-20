import './skeleton.css';

/* eslint-disable react/no-array-index-key */
const SkeletonItem = () => (
  <div className="column column-block">
    <div className="search-item-image shimmer-effect" />
    <div className="search-item-metadata">
      <div className="search-item-text shimmer-effect" />
      <div className="search-item-subtext shimmer-effect" />
    </div>
  </div>
);

const SkeletonList = () => (
  <div className="row small-up-2 medium-up-3 large-up-5">
    {Array(20)
      .fill(null)
      .map((_, index) => (
        <SkeletonItem key={index} />
      ))}
  </div>
);

export default SkeletonList;
