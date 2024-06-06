import { Skeleton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function FullProductSkeleton() {
  return (
    <div className="fp">
      <Link to={"/"}>
        <button className={"filter__btn"}>Главная</button>
      </Link>
      <div className="fp__body">
        <div className="fp__left">
          <h1 className="fp__title">
            <Skeleton
              variant="text"
              sx={{ fontSize: "20px", maxWidth: "600px", minWidth: "200px" }}
            />
          </h1>
          <Skeleton variant="rounded" width={200} height={200} />
          <h4 className="fp__price">
            <span className="fp__text">
              Цена:
              <Skeleton
                variant="text"
                sx={{
                  fontSize: "16px",
                  width: "30px",
                  display: "inline-block",
                }}
              />
            </span>
          </h4>
        </div>
        <div className="fp__right">
          <p className="fp__description">
            <Skeleton variant="rectangular" width={"600px"} height={107} />
          </p>
          <div className="fp__rate">
            <p className="fp__value">
              <span className="fp__text">
                Рейтинг:
                <Skeleton
                  variant="text"
                  sx={{
                    fontSize: "16px",
                    width: "30px",
                    display: "inline-block",
                  }}
                />
              </span>
            </p>
            <p className="fp__count">
              <span className="fp__text">
                Количество оценок:
                <Skeleton
                  variant="text"
                  sx={{
                    fontSize: "16px",
                    width: "30px",
                    display: "inline-block",
                  }}
                />
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
