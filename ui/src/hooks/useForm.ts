import { useState } from "react";

type SetField = <T>(
  field: keyof T
) => (e: React.ChangeEvent<HTMLInputElement>) => void;

const useForm = <T extends Record<string, any>>(
  initialState: T
): [T, SetField, React.Dispatch<React.SetStateAction<T>>] => {
  const [form, setForm] = useState(initialState);
  const setField: SetField = (field) => (e) =>
    void setForm((curr) => ({
      ...curr,
      [field]: e.target.value,
    }));
  return [form, setField, setForm];
};

export default useForm;
