import React from "react";

/**
 * The styled component for form input fields
 * @param {*} param0
 * @returns A react functional component
 */
function FormField({ register, value, type, label }) {
  return (
    <article className="my-4">
      <label className="block text-muted text-xs font-medium my-1">
        {label}
      </label>
      <input
        value={value}
        required
        {...register}
        type={type}
        placeholder=" "
        className="shadow appearance-none border border-gray rounded w-4/6 py-2 px-3 text-dark "
      />
    </article>
  );
}

export default FormField;
