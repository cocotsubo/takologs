import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";

export function PasswordInput({
  value,
  onChange,
  placeholder,
  autoComplete,
  minLength,
  required,
  id,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  autoComplete?: string;
  minLength?: number;
  required?: boolean;
  id?: string;
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="mt-1.5 flex items-center gap-2 rounded-xl glass px-3 py-3">
      <Lock className="h-4 w-4 text-sand-500 shrink-0" />
      <input
        id={id}
        type={show ? "text" : "password"}
        required={required}
        minLength={minLength}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none text-base text-sand-900 dark:text-sand-50 placeholder:text-sand-400"
        autoComplete={autoComplete}
      />
      <button
        type="button"
        onClick={() => setShow((v) => !v)}
        className="shrink-0 rounded-full p-1 text-sand-500 hover:text-clay-500"
        aria-label={show ? "Masquer le mot de passe" : "Afficher le mot de passe"}
      >
        {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  );
}
