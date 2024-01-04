import DeleteButton from '../buttons/delete.button';
import EditButton from '../buttons/edit.button';

export default function GridCellAction() {
  return (
    <div className="flex items-center gap-10 pt-2">
      <EditButton />
      <DeleteButton />
    </div>
  );
}
