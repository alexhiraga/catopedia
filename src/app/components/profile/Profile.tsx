import Image from "next/image";
import favicon from '../../favicon.ico'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import { Tooltip } from "@mui/material";
import Article from "@mui/icons-material/Article";

export default function Profile() {
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
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col justify-around">
        <h2 className="text-lg">
          <span className="font-bold">Catopedia</span> by Alex Hiraga
        </h2>
        <div className="flex flex-row gap-4">
          <Tooltip title="GitHub">
            <a href="https://github.com/alexhiraga" target="_blank">
              <GitHubIcon fontSize="large" />
            </a>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <a href="https://www.linkedin.com/in/alexhiraga/" target="_blank">
              <LinkedIn fontSize="large" />
            </a>
          </Tooltip>
          <Tooltip title="Instagram">
            <a href="https://www.instagram.com/alexhiraga/" target="_blank">
              <Instagram fontSize="large" />
            </a>
          </Tooltip>
          <Tooltip title="Portfolio">
            <a href="https://www.alexhiraga.com" target="_blank">
              <Article fontSize="large" />
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}