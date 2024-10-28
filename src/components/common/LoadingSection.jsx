import React from "react";

function LoadingSection() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutralWhite text-neutralBlack font-grotesk">
      <div className="flex flex-col items-center space-y-4">
        /* From Uiverse.io by devAaus */
        <div class="flex-col gap-4 w-full flex items-center justify-center">
          <div class="w-20 h-20 border-4 border-transparent text-accent text-4xl animate-spin flex items-center justify-center border-t-accent rounded-full">
            <div class="w-16 h-16 border-4 border-transparent text-primary text-2xl animate-spin flex items-center justify-center border-t-primary rounded-full"></div>
          </div>
        </div>
        <h2 className="text-2xl font-bold">Loading...</h2>
      </div>
    </div>
  );
}

export default LoadingSection;
