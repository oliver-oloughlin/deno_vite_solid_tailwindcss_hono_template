import { createEffect, JSX } from "solid-js";
import { twMerge } from "tailwind-merge";

export type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
};

export function Button(
  { class: className, children, size = "md", variant = "primary", ...props }:
    ButtonProps,
) {
  let btnRef: HTMLButtonElement | undefined;

  createEffect(() => {
    const ripple = (e: PointerEvent) => {
      const x = e.offsetX;
      const y = e.offsetY;
      const elem = document.createElement("div");

      elem.addEventListener("animationend", () => elem.remove(), {
        once: true,
      });

      elem.style.setProperty("--x", `${x}px`);
      elem.style.setProperty("--y", `${y}px`);

      elem.className =
        "rounded-full bg-[radial-gradient(transparent,currentcolor)] w-[30ch] aspect-square absolute left-0 top-0 animate-ripple pointer-events-none";

      btnRef?.appendChild(elem);
    };

    btnRef?.addEventListener("pointerdown", ripple);
    return () => btnRef?.removeEventListener("pointerdown", ripple);
  });

  return (
    <button
      ref={btnRef}
      class={twMerge(
        "rounded-full border-slate-600 border-[1px] duration-150 relative isolate overflow-hidden hover:brightness-[120%] hover:shadow-sm",
        size === "sm"
          ? "px-2 py-1 text-sm"
          : size === "md"
          ? "px-4 py-2"
          : "px-8 py-4 text-lg",
        variant === "primary"
          ? "bg-hotpink text-white"
          : "bg-slate-700 text-gray-100",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
