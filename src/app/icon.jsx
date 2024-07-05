import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
    width: 24,
    height: 24,
};

export const contentType = "image/png";


export default function Icon() {
    return new ImageResponse(
        (
            <div
        >
            <link rel="icon" href="/favicon.ico"></link>
        </div>
    ),
    {...size}
    );
}