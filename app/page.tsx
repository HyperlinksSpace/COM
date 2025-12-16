import Image from "next/image";
import photo from "./techsynbal.png";

export default function Home() {
  return (
    <main
      className="flex min-h-screen w-full items-center justify-center bg-white"
      style={{ padding: "33px" }}
    >
      <Image
        src={photo}
        alt="Centered photo"
        priority
        className="h-auto w-auto object-contain"
        style={{
          maxHeight: "calc(100vh - 66px)",
          maxWidth: "calc(100vw - 66px)",
        }}
        sizes="(max-width: 768px) 100vw, 100vw"
      />
    </main>
  );
}