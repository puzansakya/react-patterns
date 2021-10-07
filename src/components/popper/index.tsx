import React, { useState } from "react";
import { usePopper } from "react-popper";

// HOOKS
import { useDisclosure } from "../../hooks/useDiscloser";

const Popper = ({ trigger, content, overlayClose = true, placement }: any) => {
  const { isOpen, open, close, toggle } = useDisclosure();

  const [referenceElement, setReferenceElement] = useState<any>(null);
  const [popperElement, setPopperElement] = useState<any>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    ...(placement && { placement }),
  });

  return (
    <>
      {React.cloneElement(trigger, {
        ref: (ref: any) => setReferenceElement(ref),
        onClick: () => {
          open();
        },
      })}

      {isOpen && (
        <div
          className="fixed inset-0"
          onClick={() => overlayClose && close()}
        />
      )}
      {isOpen && (
        <div
          ref={setPopperElement}
          style={{ ...styles.popper, zIndex: 3, marginTop: "12px" }}
          {...attributes.popper}
        >
          {content(isOpen, close, toggle)}
        </div>
      )}
    </>
  );
};

export default Popper;
