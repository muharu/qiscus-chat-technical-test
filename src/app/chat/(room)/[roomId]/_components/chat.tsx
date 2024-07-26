"use client";

import { useState } from "react";
import { Auth } from "~/app/_features/loaders";
import { cn } from "~/lib/utils";

export function Chat({ user }: Readonly<{ user: Auth["data"] }>) {
  const [datas, setData] = useState(apiJsonMockup);

  return (
    <div className="space-y-4 py-6 overflow-auto">
      {datas.results.comments.map((comment, index) => (
        <div
          key={index}
          className={cn(
            "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm mx-4",
            comment.sender === "agent@mail.com" ||
              comment.sender === "admin@mail.com"
              ? "ml-auto bg-primary text-primary-foreground"
              : "bg-muted"
          )}
        >
          {comment.type === "text" && <p>{comment.message}</p>}
          {comment.type === "image" && (
            <img
              src={comment.message}
              alt={comment.sender}
              className="rounded-lg"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
          {comment.type === "video" && (
            <video controls className="rounded-lg max-w-[400px]">
              <source src={comment.message} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {comment.type === "pdf" && (
            <a
              href={comment.message}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              View PDF
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

const apiJsonMockup = {
  results: {
    room: {
      name: "Product A",
      id: 12456,
      image_url: "https://picsum.photos/id/237/200/300",
      participant: [
        {
          id: "admin@mail.com",
          name: "Admin",
          role: 0,
        },
        {
          id: "agent@mail.com",
          name: "Agent A",
          role: 1,
        },
        {
          id: "customer@mail.com",
          name: "king customer",
          role: 2,
        },
      ],
    },
    comments: [
      {
        id: 885512,
        type: "text",
        message: "Selamat malam",
        sender: "customer@mail.com",
      },
      {
        id: 885513,
        type: "text",
        message: "Malam",
        sender: "agent@mail.com",
      },
      {
        id: 885514,
        type: "text",
        message: "Ada yang bisa saya bantu?",
        sender: "agent@mail.com",
      },
      {
        id: 885515,
        type: "text",
        message:
          "Saya ingin mengirimkan bukti pembayaran, karena diaplikasi selalu gagal",
        sender: "customer@mail.com",
      },
      {
        id: 885516,
        type: "text",
        message: "Baik, silahkan kirimkan lampiran bukti pembayarannya",
        sender: "agent@mail.com",
      },
      {
        id: 885517,
        type: "image",
        message:
          "https://media.discordapp.net/attachments/1094862915103895635/1266406000718774284/images.png?ex=66a507ff&is=66a3b67f&hm=d8cd8ea6c0277d2ae2a03f2297fc0ce74d8e280dc692e14b6ceb7d438b514102&=&format=webp&quality=lossless",
        sender: "customer@mail.com",
      },
      {
        id: 885518,
        type: "text",
        message:
          "Baik pembaaran sudah kami terima, apakah bisa disertakan video kendala yang dialami?",
        sender: "agent@mail.com",
      },
      {
        id: 885519,
        type: "video",
        message:
          "https://videos.pexels.com/video-files/6630294/6630294-uhd_2732_1440_25fps.mp4",
        sender: "customer@mail.com",
      },
      {
        id: 885520,
        type: "text",
        message:
          "Baik masalah sudah kami proses, berikut kami lampirkan file pdf untuk informasi nomer tiket anda",
        sender: "agent@mail.com",
      },
      {
        id: 885521,
        type: "pdf",
        message:
          "https://www.tugure.id/uploads/post-file-2019-01-18-140326.pdf",
        sender: "agent@mail.com",
      },
    ],
  },
};
