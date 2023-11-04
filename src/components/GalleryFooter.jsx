import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"

const GalleryFooter = () => {
  return (
    <div className="flex min-h-[2.5rem] flex-wrap items-center gap-1 border-t border-gray-300 px-4 py-2 xl:gap-2 [&_*]:leading-6">
      <div className="flex items-center gap-1 xl:gap-2">
        <small className="font-semibold">Project:</small>
  
        <a
          href="https://github.com/KAZI-SAMIR/Image-Gallery"
          className="text-gray-900 transition-colors hover:text-gray-600"
        >
          <small className="font-semibold">Image Gallery</small>
        </a>
      </div>
      <div className="flex items-center gap-2 max-sm:w-full sm:ms-auto">
        <small className=" font-semibold sm:ms-auto">
          Designer: Kazi-Samir
        </small>
        <a
          href="https://github.com/KAZI-SAMIR"
          target="_blank"
          rel="noreferrer"
          className="text-xl text-gray-900 transition-colors hover:text-gray-600 max-sm:ms-auto"
        >
          <IoLogoGithub className="inline align-text-top" />
        </a>
        <a
          href="https://www.linkedin.com/in/kazi-samir-b44653216"
          target="_blank"
          rel="noreferrer"
          className="text-xl text-gray-900 transition-colors hover:text-gray-600"
        >
          <IoLogoLinkedin className="inline align-text-top" />
        </a>
      </div>
    </div>
  )
}

export default GalleryFooter
