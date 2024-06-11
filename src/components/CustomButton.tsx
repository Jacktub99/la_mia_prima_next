"use client";
import Image from "next/image";
import { CustomButtonProps } from "../../types";

const CustomButton = ({ containerStyles, title,  handleClick }: CustomButtonProps) => {
    return(
        <button
        disabled={false}
        type={"button"}
        className={"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}
        onClick={handleClick}

        >
            <span className={'flex-1'}>
                title
            </span>

        </button>
    )
}
export default CustomButton