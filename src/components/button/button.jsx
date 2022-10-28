import React from "react";


// small button - width 100px
// medium button - width 150px
// large button - width 200px
// extra large - width 300px

function Button({
  leadingIcon,
  trailingIcon,
  paddingClasses,
  marginClasses,
  onClick,
  disabled,
  type,
  sizeClasses,
  borderClasses,
  backgroundClasses,
  text,
  textClasses,
  cursorClasses,
}) {
  disabled = disabled ?? false;
  type = type ?? "button";
  sizeClasses = sizeClasses ?? "w-100 h-100";
  borderClasses = borderClasses ?? "";
  backgroundClasses = backgroundClasses ?? "bg-grey";
  text = text ?? "Button";
  textClasses = textClasses ?? "";
  paddingClasses =  paddingClasses ?? "p-4";
  marginClasses = marginClasses ?? "";
  cursorClasses = cursorClasses ?? "";

  let classNames = `flex items-center ${cursorClasses} ${sizeClasses} ${backgroundClasses} ${textClasses} ${borderClasses} ${paddingClasses} ${marginClasses}`;

  return (
    <button onClick={onClick} className={classNames} type={type} disabled={disabled}>
      {leadingIcon && <span>{leadingIcon}</span>}
      <span className="mx-4">{text}</span>
      {trailingIcon && <span>{trailingIcon}</span>}
    </button>
  );
}

export default Button;
