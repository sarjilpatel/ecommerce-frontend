import React, { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import "./CustomSelectSearch.css";

const CustomSelectSearch = ({
  options,
  optionLableAccessor,
  optionValueAccessor,
  name,
  id,
  handleOnChange,
  value,
  lable,
  error,
  errortext,
}) => {
  const formattedOptions = useMemo(
    () =>
      options.map((option) => {
        return {
          label: option[optionLableAccessor],
          value: option[optionValueAccessor],
        };
      }),
    [options]
  );

  return (
    <div className="customSelectSearch">
      <p className="customselectlable">{lable}</p>
      <Select
        options={formattedOptions}
        name={name}
        id={id}
        onChange={(selectedOption) => {
          const event = {
            target: {
              name: name,
              value: selectedOption !== null ? selectedOption.value : "",
            },
          };
          handleOnChange(event);
        }}
        controlShouldRenderValue
        isClearable={true}
        // value={value}
        value={
          formattedOptions.find((option) => option.value == value)
            ? formattedOptions.find((option) => option.value == value)
            : ""
        }
      />
      <p className="errordisplay">{error ? errortext : ""}</p>
    </div>
  );
};

export default CustomSelectSearch;
