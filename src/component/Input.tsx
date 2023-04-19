import React, {
  DetailedHTMLProps,
  HtmlHTMLAttributes,
  InputHTMLAttributes,
  forwardRef,
} from "react";

const Input = forwardRef<HTMLInputElement,InputHTMLAttributes<HTMLInputElement>>(({ style, ...rest }, ref) => {
  return <input style={{width:'100%',fontSize:'16px', padding:'.25em .5em',...style}} {...rest} ref={ref} />;
});

Input.displayName = "Input";

export default Input;
