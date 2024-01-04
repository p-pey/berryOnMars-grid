import { ChangeEventHandler, FormEventHandler, useMemo, useState } from 'react';
import { grid, modalContentFormState } from '../../../types';
import { toast } from 'sonner';

export interface EditItemProps {
  onReject: VoidFunction;
  onConfirm: (inputs: Partial<grid>) => void;
  data: grid;
}

export default function EditItem({ onConfirm, onReject, data }: EditItemProps) {
  const [inputs, setInputs] = useState<modalContentFormState>({
    address: {
      error: undefined,
      value: data.address,
    },
    country: {
      error: undefined,
      value: data.country,
    },
    firstName: {
      error: undefined,
      value: data.firstName,
    },
    lastName: {
      error: undefined,
      value: data.lastName,
    },
  });
  const isAllowToSubmit = useMemo(() => {
    const inputKeys = Object.keys(inputs);
    return inputKeys.every(
      (key) => !inputs[key as keyof typeof inputs].error && !!inputs[key as keyof typeof inputs].value,
    );
  }, [inputs]);
  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (isAllowToSubmit) {
      const gridData: Partial<grid> = {
        address: inputs.address.value,
        country: inputs.country.value,
        firstName: inputs.firstName.value,
        lastName: inputs.lastName.value,
        id: data.id,
      };
      onConfirm(gridData);
    } else {
      toast.success('Please Fill All Fields');
    }
  };
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setInputs((prev) => {
      return {
        ...prev,
        [name]: {
          value: value || undefined,
          error: value ? undefined : `Please Enter ${name}`,
        },
      };
    });
  };
  return (
    <div>
      <h2 className="text-lg pb-5 mb-5 border-b border-gray-300">Update</h2>
      <form onSubmit={onSubmit}>
        <div className="flex items-center gap-10 w-full">
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input
              defaultValue={data.firstName}
              id="firstName"
              name="firstName"
              className="rounded-md border-gray-300 mt-2"
              onChange={handleChange}
            />
            <span className="text-red-500 text-sm font-semibold">{inputs.firstName.error}</span>
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName">Last Name</label>
            <input
              defaultValue={data.lastName}
              id="lastName"
              name="lastName"
              className="rounded-md border-gray-300 mt-2"
              onChange={handleChange}
            />
            <span className="text-red-500 text-sm font-semibold">{inputs.lastName.error}</span>
          </div>
        </div>

        <div className="flex items-center gap-10 w-full">
          <div className="flex flex-col gap-5">
            <label htmlFor="address">Address</label>
            <input
              defaultValue={data.address}
              id="address"
              name="address"
              className="rounded-md border-gray-300 mt-2"
              onChange={handleChange}
            />
            <span className="text-red-500 text-sm font-semibold">{inputs.address.error}</span>
          </div>
          <div className="flex flex-col">
            <label htmlFor="country">Country</label>
            <input
              defaultValue={data.country}
              id="country"
              name="country"
              className="rounded-md border-gray-300 mt-2"
              onChange={handleChange}
            />
            <span className="text-red-500 text-sm font-semibold">{inputs.country.error}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-5">
          <button type="button" onClick={onReject} className="rounded-md bg-gray-200 text-black py-2 px-10">
            Cancel
          </button>
          <button type="submit" className="rounded-md bg-blue-500 text-white py-2 px-10">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
