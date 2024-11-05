"use client"

import Image from "next/image";
import favicon from '../../app/favicon.ico'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import { Tooltip } from "@mui/material";
import Article from "@mui/icons-material/Article";
import { useUserModal } from "@/context/modal/UserModalContext";
import EditIcon from '@mui/icons-material/Edit';
import Link from "next/link";

export default function Profile() {
  const { openModal, user } = useUserModal()

  return (
    <div className="flex gap-10 md:gap-20 mb-14">
      <div className="relative bg-gray-800 rounded-full w-40 h-40 flex flex-col justify-center">
        <Image 
          className="rounded-full m-auto"
          src={favicon}
          alt="Logo"
          width={120}
          height={120}
          layout="intrinsic"
        />
      </div>

      <div className="flex flex-col justify-around">
        <h4 className="text-xs -mb-7">
          <span className="font-bold">Catopedia</span> by Alex Hiraga
        </h4>
        <div className="flex gap-3 items-center">
          {user ? (
            <h2 className="text-lg font-semibold">{user}</h2>
          ) : (
            <h2 className="italic text-lg">Your cat name</h2>
          )}
          <button onClick={openModal} className="text-sm underline dark:hover:text-cyan-700 hover:text-cyan-300 transition-all flex gap-1 items-center">
            <EditIcon fontSize="inherit" />
            Edit
          </button>
        </div>
        <div className="flex flex-row gap-4">
          <Tooltip title="GitHub">
            <Link href="https://github.com/alexhiraga" target="_blank">
              <GitHubIcon fontSize="large" />
            </Link>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <Link href="https://www.linkedin.com/in/alexhiraga/" target="_blank">
              <LinkedIn fontSize="large" />
            </Link>
          </Tooltip>
          <Tooltip title="Instagram">
            <Link href="https://www.instagram.com/alexhiraga/" target="_blank">
              <Instagram fontSize="large" />
            </Link>
          </Tooltip>
          <Tooltip title="Portfolio">
            <Link href="https://www.alexhiraga.com" target="_blank">
              <Article fontSize="large" />
            </Link>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}