import deleteICon from '../../../../../assets/icons/trash-2.svg';

export interface DeleteButtonProps {
  onClick: VoidFunction;
}

export function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <button type="button" onClick={onClick} className="rounded-lg border-0 outline-0 bg-transparent shadow-lg">
      <img alt="edit" width={20} height={20} src={deleteICon} />
    </button>
  );
}

export default DeleteButton;
