import { FormPopover } from "@/components/form/form-popover";
import { Hint } from "@/components/hint";
import { HelpCircle, User2 } from "lucide-react";
import React from "react";

export function BoardList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center text-lg font-semibold text-neutral-700">
        <User2 className="w-6 h-6 mr-2" />
        Your boards
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <FormPopover sideOffset={10} side={"right"}>
          <div
            className="relative flex flex-col items-center justify-center w-full h-full transition rounded-sm aspect-video hover:opacity-75 bg-muted gap-y-1"
            role="button"
          >
            <p className="text-sm">Create new board</p>
            <span className="text-xs">5 remaining</span>
            <Hint
              sideOffset={40}
              description={`
            Free Workspaces can have up to 5 open boards. For unlimited boards upgrade this workspace.
            `}
            >
              <HelpCircle className="absolute bottom-2 right-2 h-[14px] w-[14px]" />
            </Hint>
          </div>
        </FormPopover>
      </div>
    </div>
  );
}
