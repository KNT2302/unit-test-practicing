import ImageBox from "@/component/ImageBox";
import React from "react";

const Images = () => {
  return (
    <div style={{ height: "100vh", display: "grid", gridTemplateColumns:'1fr 1fr 1fr' }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "350px",
          justifyContent: "flex-end",
          border: "1px solid",
          padding: ".5em",
          borderRadius: ".5em",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: "1", width: "100%" }}>
          <ImageBox src="/defaultImg.jpg" alt="well" />
        </div>
        <p
          style={{
            height: "4em",
            textOverflow: "ellipsis",
            lineHeight: "2em",
            font: "1em",
            overflow: "hidden",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          dolorem cupiditate, at ipsa cumque itaque perferendis earum
          consequuntur, ad magnam enim praesentium doloremque illum qui
          accusantium est porro ex reiciendis.
        </p>
        <button>Purchase</button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "350px",
          justifyContent: "flex-end",
          border: "1px solid",
          padding: ".5em",
          borderRadius: ".5em",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: "1", width: "100%" }}>
          <ImageBox src="https://e0.pxfuel.com/wallpapers/903/1011/desktop-wallpaper-fantasy-landscape-resolution-for-anime-fantasy-background-high-resolution-landscape-thumbnail.jpg" alt="well" />
        </div>
        <p
          style={{
            height: "4em",
            textOverflow: "ellipsis",
            lineHeight: "2em",
            font: "1em",
            overflow: "hidden",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          dolorem cupiditate, at ipsa cumque itaque perferendis earum
          consequuntur, ad magnam enim praesentium doloremque illum qui
          accusantium est porro ex reiciendis.
        </p>
        <button>Purchase</button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "350px",
          justifyContent: "flex-end",
          border: "1px solid",
          padding: ".5em",
          borderRadius: ".5em",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: "1", width: "100%" }}>
          <ImageBox src="https://e1.pxfuel.com/desktop-wallpaper/953/139/desktop-wallpaper-anime-landscape-high-quality-resolution-anime-anime-landscape-thumbnail.jpg" alt="well" />
        </div>
        <p
          style={{
            height: "4em",
            textOverflow: "ellipsis",
            lineHeight: "2em",
            font: "1em",
            overflow: "hidden",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          dolorem cupiditate, at ipsa cumque itaque perferendis earum
          consequuntur, ad magnam enim praesentium doloremque illum qui
          accusantium est porro ex reiciendis.
        </p>
        <button>Purchase</button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "350px",
          justifyContent: "flex-end",
          border: "1px solid",
          padding: ".5em",
          borderRadius: ".5em",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: "1", width: "100%" }}>
          <ImageBox src="https://e0.pxfuel.com/wallpapers/125/1007/desktop-wallpaper-high-resolution-amazing-fantasy-landscape-27-full-pinterest-fantasy-landscape-art-google-and-fantasy-art-thumbnail.jpg" alt="well" />
        </div>
        <p
          style={{
            height: "4em",
            textOverflow: "ellipsis",
            lineHeight: "2em",
            font: "1em",
            overflow: "hidden",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          dolorem cupiditate, at ipsa cumque itaque perferendis earum
          consequuntur, ad magnam enim praesentium doloremque illum qui
          accusantium est porro ex reiciendis.
        </p>
        <button>Purchase</button>
      </div>
    </div>
  );
};

export default Images;
