import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardWrapper } from "../utility/CardWrapper";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { PROJECTS } from "@/constants";
import { AvatarGroup } from "../utility/AvatarGroup";
import Image from "next/image";

export const ProjectGalleryCard = () => (
  <CardWrapper
    outerDivClassName="flex-none mt-6"
    innerDivClassName="mb-6 bg-white shadow-soft-xl"
  >
    <div className="p-4 pb-0 mb-0 bg-white rounded-t-2xl">
      <h6 className="mb-1">Projects</h6>
      <p className="leading-normal text-sm">Architects design houses</p>
    </div>
    <div className="flex-auto p-4">
      <div className="flex flex-wrap -mx-3">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12"
          >
            <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
              <div className="relative">
                <a className="block shadow-xl rounded-2xl">
                  {/* <img
                    src={project.img}
                    alt="img-blur-shadow"
                    className="max-w-full shadow-soft-2xl rounded-2xl"
                  /> */}
                  <Image
                    src={project.img}
                    alt={project.category}
                    width={500}
                    height={300}
                    className="max-w-full shadow-soft-2xl rounded-2xl"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </a>
              </div>
              <div className="flex-auto px-1 pt-6">
                <p className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-soft-gray900-slate800 text-sm bg-clip-text">
                  {project.category}
                </p>
                <a href="javascript:;">
                  <h5>{project.title}</h5>
                </a>
                <p className="mb-6 leading-normal text-sm">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"
                  >
                    View Project
                  </button>
                  <AvatarGroup participants={project.participants} />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
          <div className="relative flex flex-col h-full min-w-0 break-words bg-transparent border border-solid shadow-none rounded-2xl border-slate-100 bg-clip-border">
            <div className="flex flex-col justify-center flex-auto p-6 text-center">
              <a href="javascript:;">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="mb-4 text-slate-400"
                />
                <h5 className="text-slate-400">New project</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </CardWrapper>
);
