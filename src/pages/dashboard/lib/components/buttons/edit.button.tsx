import editIcon from '../../../../../assets/icons/edit-3.svg';

export function EditButton() {
  return (
    <button className="rounded-lg border-0 outline-0 bg-transparent shadow-lg">
      <img width={20} height={20} alt="edit" src={editIcon} />
    </button>
  );
}

export default EditButton;
