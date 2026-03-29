"use client";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type DialogProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  titulo?: string;
  sinopsis?: string;
  image?: string;
  footer?: React.ReactNode;
  size?: "sm" | "md" | "lg";
};

export default function Dialog({
  trigger,
  children,
  titulo,
  sinopsis,
  image,
  footer,
  size = "md",
}: DialogProps) {
  const sizes = {
    sm: "w-[350px]",
    md: "w-[500px]",
    lg: "w-[700px]",
  };
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        <DialogPrimitive.Content
          className={`fixed bg-gray-900 p-6 rounded-xl shadow-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${sizes[size]}`}
        >
          {image && (
            <div>
              <img src={image} alt={titulo} height={300} width={500} />
            </div>
          )}
          {titulo && (
            <DialogPrimitive.Title className="text-xl font-bold mb=2">
              {titulo}
            </DialogPrimitive.Title>
          )}
          {sinopsis && (
            <DialogPrimitive.Description className="text-white mb-4">
              {sinopsis}
            </DialogPrimitive.Description>
          )}
          <div>{children}</div>
          {footer && (
            <div className="mt-6 flex justify-end gap-3">{footer}</div>
          )}
          <DialogPrimitive.Close className="absolute top-4 right-4 text-gray-400 hover:text-white">
            X
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
