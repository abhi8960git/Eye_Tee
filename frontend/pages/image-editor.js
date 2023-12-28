import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import EditorDesignCarasoul from "@/components/EditorDesignCarasoul.jsx";
import CustomTextComponent from "@/components/CustomTextComponent";
import CategoryCard from "@/components/CategoryCard";
const ImageEditor = () => {
  const router = useRouter();
  const designImg = router.query.url || "";
  return (
    <div className="w-full max-w-[1200px] px-5 md:px-3 mx-auto">
      <div className="flex  justify-between mx-8 mt-10  mb-5 ">
        <div className="grid grid-row-9 bg-zinc-300 w-[26em] rounded-[30px]">
          <div className="row-span-6 flex justify-center items-center object-contain">
            <div>
              <Image
                src={designImg}
                width={200}
                height={200}
                alt="designImage"
              />
            </div>
          </div>
          <div className="border-b border-zinc-400 w-full my-1"></div>
          <div className="row-span-1 mx-4 ">
            <p>Name</p>
          </div>
          <div className="border-b border-zinc-400 w-full"></div>
          <div className="row-span-2 mx-4">
            <p>Description</p>
          </div>
        </div>

        <div className="editor w-[25em]  mr-[5em]">
          <EditorDesignCarasoul />
        </div>
      </div>
      <div className="mx-8 mt-9">
        <CustomTextComponent fontSize="35px">
          Explore These Categories
        </CustomTextComponent>
      </div>

      <div className="mx-8 mb-9">
        <div className="flex gap-4">
          {[0, 1, 2, 3].map((e, index) => (
            <div className="flex flex-col justify-center items-center bg-white/95 shadow-sm rounded-[30px] inline-block w-[230px] p-5 bg-red-300 border-3 border-zinc-600">
              <CategoryCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;