type TextareaFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  rows?: number;
  onChange: (value: string) => void;
};

export function TextareaField({
  id,
  label,
  placeholder,
  value,
  rows = 4,
  onChange,
}: TextareaFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-white"
      >
        {label}
      </label>

      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-white/30"
      />
    </div>
  );
}