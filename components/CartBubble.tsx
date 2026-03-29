"user client";
import * as Tooltip from "@radix-ui/react-tooltip";
import React from "react";

export default function PlayBubble() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.TooltipTrigger>
          <button className="fixed bottom-6 right-6 bg-gray-600 text-white p-4 rounded-full shadow-lg hover:bg-gray-500 transition">
            ▶️
          </button>
        </Tooltip.TooltipTrigger>
        <Tooltip.Portal>
          <Tooltip.Content side="right" className="bg-gray-900 text-white px-3 py-1 rounded text-sm">
            play current serie
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
