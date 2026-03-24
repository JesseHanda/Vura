type SelectOption = {
  value: string;
  label: string;
};

type QuestionSelectFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
};

export function QuestionSelectField({
  id,
  label,
  placeholder,
  value,
  options,
  onChange,
}: QuestionSelectFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-white"
      >
        {label}
      </label>

      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-white/15 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-white/30"
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}