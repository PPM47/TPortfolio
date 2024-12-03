"use client";
import classes from "@components/Image.module.scss";
import React from "react";

const Images = ({ imagess }) => {
  // Divide images into three groups (columns)
  const columnCount = 4;
  const columns = Array.from({ length: columnCount }, () => []);

  imagess.forEach((image, index) => {
    columns[index % columnCount].push(image); // Distribute images evenly
  });

  return (
    <div className={classes.img_main_con}>
      {columns.map((column, colIndex) => (
        <div key={colIndex} className={classes.img_col}>
          {column.map((image, imgIndex) => (
            <div key={imgIndex} className={classes.img_con}>
              <img
                className={classes.img_tag}
                src={image.src}
                alt={image.alt || `Image ${imgIndex + 1}`}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Images;
