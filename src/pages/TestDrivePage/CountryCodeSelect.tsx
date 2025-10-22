import React from "react";
import Select from "react-select";

const countryCodeOptions = [
  { value: "+1-264", label: "+1 (264) Anguilla" },
  { value: "+1-268", label: "+1 (268) Antigua and Barbuda" },
  { value: "+61", label: "+61 (Australia)" },
  { value: "+1-242", label: "+1 (242) Bahamas" },
  { value: "+1-246", label: "+1 (246) Barbados" },
  { value: "+1-441", label: "+1 (441) Bermuda" },
  { value: "+591", label: "+591 (Bolivia)" },
  { value: "+55", label: "+55 (Brazil)" },
  { value: "+1-284", label: "+1 (284) British Virgin Islands" },
  { value: "+1-345", label: "+1 (345) Cayman Islands" },
  { value: "+56", label: "+56 (Chile)" },
  { value: "+86", label: "+86 (China)" },
  { value: "+57", label: "+57 (Colombia)" },
  { value: "+53", label: "+53 (Cuba)" },
  { value: "+45", label: "+45 (Denmark)" },
  { value: "+1-767", label: "+1 (767) Dominica" },
  { value: "+1-809", label: "+1 (809) Dominican Republic" },
  { value: "+1-829", label: "+1 (829) Dominican Republic (Alt)" },
  { value: "+1-849", label: "+1 (849) Dominican Republic (Alt 2)" },
  { value: "+593", label: "+593 (Ecuador)" },
  { value: "+503", label: "+503 (El Salvador)" },
  { value: "+33", label: "+33 (France)" },
  { value: "+49", label: "+49 (Germany)" },
  { value: "+1-473", label: "+1 (473) Grenada" },
  { value: "+502", label: "+502 (Guatemala)" },
  { value: "+224", label: "+224 (Guinea)" },
  { value: "+592", label: "+592 (Guyana)" },
  { value: "+509", label: "+509 (Haiti)" },
  { value: "+504", label: "+504 (Honduras)" },
  { value: "+852", label: "+852 (Hong Kong)" },
  { value: "+91", label: "+91 (India)" },
  { value: "+62", label: "+62 (Indonesia)" },
  { value: "+353", label: "+353 (Ireland)" },
  { value: "+972", label: "+972 (Israel)" },
  { value: "+39", label: "+39 (Italy)" },
  { value: "+1-876", label: "+1 (876) Jamaica" },
  { value: "+81", label: "+81 (Japan)" },
  { value: "+1-664", label: "+1 (664) Montserrat" },
  { value: "+52", label: "+52 (Mexico)" },
  { value: "+505", label: "+505 (Nicaragua)" },
  { value: "+234", label: "+234 (Nigeria)" },
  { value: "+47", label: "+47 (Norway)" },
  { value: "+507", label: "+507 (Panama)" },
  { value: "+595", label: "+595 (Paraguay)" },
  { value: "+51", label: "+51 (Peru)" },
  { value: "+63", label: "+63 (Philippines)" },
  { value: "+48", label: "+48 (Poland)" },
  { value: "+351", label: "+351 (Portugal)" },
  { value: "+1-787", label: "+1 (787) Puerto Rico" },
  { value: "+974", label: "+974 (Qatar)" },
  { value: "+1-758", label: "+1 (758) Saint Lucia" },
  { value: "+1-784", label: "+1 (784) Saint Vincent and the Grenadines" },
  { value: "+1-869", label: "+1 (869) Saint Kitts and Nevis" },
  { value: "+1-721", label: "+1 (721) Sint Maarten" },
  { value: "+65", label: "+65 (Singapore)" },
  { value: "+27", label: "+27 (South Africa)" },
  { value: "+34", label: "+34 (Spain)" },
  { value: "+1-868", label: "+1 (868) Trinidad and Tobago" },
  { value: "+1-649", label: "+1 (649) Turks and Caicos" },
  { value: "+44", label: "+44 (United Kingdom)" },
  { value: "+1", label: "+1 (United States / Canada)" },
  { value: "+598", label: "+598 (Uruguay)" },
  { value: "+58", label: "+58 (Venezuela)" },
];

const CountryCodeSelect = ({ value, onChange }) => {
  // Sort alphabetically by label
  const sortedOptions = [...countryCodeOptions].sort((a, b) =>
    a.label.localeCompare(b.label)
  );

  return (
    <Select
      options={sortedOptions}
      value={sortedOptions.find((option) => option.value === value)}
      onChange={(option) => onChange(option.value)}
      placeholder="Select country code..."
      isSearchable
      styles={{
        control: (base) => ({
          ...base,
          borderRadius: "0.5rem",
          padding: "0.25rem",
          fontSize: "0.9rem",
        }),
      }}
    />
  );
};

export default CountryCodeSelect;
