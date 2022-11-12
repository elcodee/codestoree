import React from "react";
import Image from "next/image";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";
import Swal from "sweetalert2";
import { Badge } from "@mantine/core";

function ProjectCard({ project }) {
  const ModalOrder = () =>
    Swal.fire({
      icon: "question",
      title: `Netflix Premium`,
      text: project.title,
      showClass: {
        popup: "animate__animated animate__bounceInDown",
      },
      showCloseButton: true,
      allowOutsideClick: false,
      confirmButtonText: "Lanjut &nbsp;➤",
      confirmButtonColor: "#044981",
      footer:
        '<div style="text-align: center;"><b>Pembayaran</b> <br /> BCA | GOPAY | OVO | DANA</div>',
      input: "text",
      inputLabel: "Whatsapp",
      inputPlaceholder: "081xxxx",
      inputValidator: result => !result && 'WhatsApp Tidak Boleh Kosong !',
      inputAttributes: {
        autocapitalize: "off",
      },
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log("RES : ", result);
        let timerInterval;
        Swal.fire({
          icon: "warning",
          // title: "Auto close alert!",
          allowOutsideClick: false,
          html: "Tunggu Sebentar, lagi menghubungi admin...",
          timer: 5000,
          timerProgressBar: true,
//           didOpen: () => {
//             Swal.showLoading();
//           },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
            window.open(`https://api.whatsapp.com/send?phone=6285156187157&text=Hallo%20Code%20Store%20%21%0D%0A%0D%0AMau%20Order%20Paket%20Netflix%20${project.title}%2C%20Bisa%20dibantu%20untuk%20pemesanannya%20%3F%0D%0A%0D%0A%2APembayaran%20Code%20Store%2A%0D%0A_%2APilih%20salah%20satu_%0D%0A-%20BCA%0D%0A-%20GOPAY%0D%0A-%20OVO%0D%0A-%20DANA`, '_blank').focus();
          }
        });
      } else if (result.isDenied) {
        // Swal.fire('Changes are not saved', '', 'info')
      }
    });

  return (
    <div
      className="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center"
      key={project.id}
      onClick={() => ModalOrder()}
    >
      <a
        href={`#!`}
        className={`w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard`}
      >
        <img className="w-full rounded-md" src={project.img} />
      </a>
      <div className="w-full mt-5">
        <div className="flex projects-center justify-between">
          <a
            href={project.link || project.github}
            target="_blank"
            className="flex justify-between"
          >
            {project.best_sell && (
              <Badge
                variant="gradient"
                style={{ marginTop: 4, marginRight: 5 }}
              >
                BEST SELLER
              </Badge>
            )}
            <h3 className="text-lg font-bold">{project.title}</h3>
          </a>
          {/* <div className="space-x-2">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <Image
                  src="/static/icons/external-link.svg"
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Image
                  src="/static/icons/github.svg"
                  width={16}
                  height={16}
                  alt="Github Icon"
                />
              </a>
            )}
          </div> */}
        </div>
        {/* <p className="text-fun-gray text-left text-sm">{project.desc}</p> */}
        <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
          {project.tags.map((tag, index) => {
            return (
              <li key={tag}>
                {/* <Link href={`/projects/tag/${kebabCase(tag)}`}> */}
                  <div className="m-1 rounded-lg text-sm bg-fun-pink-dark py-1 px-2 cursor-pointer hover:opacity-75">
                    {tag}
                  </div>
                {/* </Link> */}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
