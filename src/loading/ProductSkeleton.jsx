import { Skeleton } from "@mui/material";
import React from "react";

export default function ProductSkeleton() {
  return (
    <div className="product">
      <Skeleton variant="rounded" width={"100%"} height={150} />

      <div className="product__info">
        <Skeleton variant="text" sx={{ fontSize: "16px" }} />
        <div className="product__bottom">
          <Skeleton variant="text" sx={{ fontSize: "16px", width: "54px" }} />
          <Skeleton variant="rounded" width={48} height={29} />
        </div>
      </div>
    </div>
  );
}
