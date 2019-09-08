import React from "react";
import CollectionItem from "components/collection-item";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...rest }) => (
            <CollectionItem key={id} {...rest} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
