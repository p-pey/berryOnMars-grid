export interface DeleteItemProps {
  onReject: VoidFunction;
  onConfirm: VoidFunction;
}

export function DeleteItem({ onConfirm, onReject }: DeleteItemProps) {
  return (
    <div>
      <h6 className="my-5 block">Are You Sure to Delete this ?</h6>
      <div className="p-3 flex items-center justify-between gap-10">
        <button type="button" onClick={onReject} className="rounded-md bg-gray-100 text-black py-2 px-10">
          Cancel
        </button>
        <button type="button" onClick={onConfirm} className="rounded-md bg-red-500 text-white py-2 px-10">
          Yes, Delete it
        </button>
      </div>
    </div>
  );
}

export default DeleteItem;
