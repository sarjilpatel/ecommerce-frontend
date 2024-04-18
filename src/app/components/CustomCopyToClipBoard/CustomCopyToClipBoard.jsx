import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";

const CustomCopyToClipBoard = ({ text }) => {
  const [toolTipVisible, setToolTipVisible] = useState(false);
  return (
    <CopyToClipboard
      text={`${text}`}
      onCopy={() => {
        setToolTipVisible(true);
        setTimeout(() => {
          setToolTipVisible(false);
        }, 1000);
      }}
    >
      <div className="position-relative d-flex gap-2 cursor-pointer">
        <MdContentCopy
          data-tooltip-id={`copied-tooltip-${text}`}
          title="Copy link"
          data-event="click"
          data-tooltip-delay-hide={5000}
          className="copycustom "
        />
        <Tooltip
          id={`copied-tooltip-${text}`}
          className="extraClass"
          content={toolTipVisible ? "Copied!" : ""}
        />
      </div>
    </CopyToClipboard>
  );
};

export default CustomCopyToClipBoard;
