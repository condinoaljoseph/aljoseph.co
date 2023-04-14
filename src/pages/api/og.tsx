/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          background: "white",
        }}
      >
        <div
          style={{
            left: 42,
            top: 42,
            position: "absolute",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              width: 24,
              height: 24,
              background: "rgb(190 24 93)",
              borderRadius: 50,
            }}
          />
          <span
            style={{
              marginLeft: 8,
              fontSize: 20,
            }}
          >
            aljoseph.co
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "20px 50px",
            margin: "0 42px",
            fontSize: 40,
            width: "auto",
            maxWidth: 550,
            textAlign: "center",
            color: "rgb(190 24 93)",
            lineHeight: 1.4,
          }}
        >
          {postTitle}
        </div>
        <div
          style={{
            left: 42,
            bottom: 42,
            position: "absolute",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="https://aljoseph.co/assets/images/me.jpeg"
            width={48}
            height={48}
            alt="me"
          />
          <p style={{ marginLeft: 12 }}>Personal blog by Al Joseph Condino</p>
        </div>
      </div>
    )
  );
}
