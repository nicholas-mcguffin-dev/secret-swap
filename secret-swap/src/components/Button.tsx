import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonType = "button" | "submit" | "reset" | undefined;
type ButtonHierarchy = "primary" | "secondary" | "tertiary" | "success" | "danger" | "warning" | "info";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    disabled?: boolean;
    handleClick?: () => void;
    type?: ButtonType;
    hierarchy: ButtonHierarchy;
    title: string;
}

const styles = {
    "primary": "bg-indigo-500 text-white",
    "secondary": "bg-white text-indigo-500 outline-indigo-500 outline outline-2",
    "tertiary": "text-indigo-500",
    "success": "bg-success",
    "danger": "bg-danger",
    "warning": "bg-warning",
    "info": "bg-info",
}

function Button(props: ButtonProps) {
    const style = styles[props.hierarchy];

    return (
        <button
            onClick={props?.handleClick}
            className={`${style} rounded-lg py-2 px-4 font-sans text-xs font-bold uppercase shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
            type={props?.type || "button"}
            disabled={props?.disabled}
        >
            {props.children}
        </button>
            )
}

export default Button;