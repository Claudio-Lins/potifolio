"use client";
import Image from "next/image";
import React from "react";
import { TechBadge } from "./TechBadge";
import { Button } from "./Button";
import { HomePageInfo } from "../@types/PageInfoTypes";
import { RichText } from "./Richtext";
import { CMSIcon } from "./CMSIcon";
import { motion } from "framer-motion";
import { Download, Send } from "lucide-react";

interface HeroSectionProps {
  homeInfo: HomePageInfo;
}

export function HeroSection({ homeInfo }: HeroSectionProps) {
  function handleContact() {
    const contactSection = document.querySelector("#contact");
    contactSection && contactSection.scrollIntoView({ behavior: "smooth" });
  }
  function downloadCv() {
    window.open(homeInfo.cv.url);
  }
  function downloadCl() {
    window.open(homeInfo.cl.url);
  }

  return (
    <section className="w-full h-[755px] bg-[#000203] flex flex-col justify-center pb-10 sm:pb-20 py-32 lg:pb-[90px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:max-w-[530px]"
        >
          <small className="font-mono text-emerald-400">Olá, meu nome é</small>
          <h2 className="font-medium text-4xl mt-2">Claudio Lins</h2>
          <div className="text-zinc-400 my-6 text-sm sm:text-base space-y-2 p-2 sm:h-64 h-48 overflow-auto">
            <RichText content={homeInfo.introduction.raw} />
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-3 w-full">
            {homeInfo.technologies.map((tech, i) => (
              <TechBadge
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                key={tech.name}
                name={tech.name}
              />
            ))}
          </div>
          <div className="flex items-center gap-6 w-full pt-10 justify-center">
            <Button
              onClick={downloadCv}
              className="hover:bg-emerald-500 w-full text-center"
            >
              <span>Curriculum Vitae</span>
              <Download size={20} />
            </Button>
            <Button
              onClick={downloadCl}
              className="hover:bg-emerald-500 w-full text-center"
            >
              <span>Cover Letter</span>
              <Download size={20} />
            </Button>
          </div>
          <div className=" flex flex-col sm:flex-row items-center gap-8 mt-8 w-full sm:max-w-md justify-between">
            <Button
              onClick={handleContact}
              className="hover:bg-emerald-500 w-full max-w-xs text-center flex"
            >
              <span className="">Entre em contacto</span>
              <Send size={20} />
            </Button>
            <div className="flex items-center text-2xl gap-8">
              {homeInfo.socialNetworks.map((contact) => (
                <a
                  className="hover:text-emerald-400"
                  target="_blank"
                  key={contact.url}
                  href={contact.url}
                  rel="noreferrer"
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={homeInfo.profileCover.url}
            alt="Picture of the author"
            width={420}
            height={404}
          />
        </motion.div>
      </div>
    </section>
  );
}
