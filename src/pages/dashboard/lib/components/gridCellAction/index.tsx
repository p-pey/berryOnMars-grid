import { modalContentType } from '../../types';
import DeleteButton from '../buttons/delete.button';
import EditButton from '../buttons/edit.button';

export interface GridCellActionProps {
  onClick: (type: modalContentType) => void;
}

export function GridCellAction({ onClick }: GridCellActionProps) {
  return (
    <div className="flex items-center gap-10 pt-2">
      <EditButton onClick={() => onClick('EDIT')} />
      <DeleteButton onClick={() => onClick('DELETE')} />
    </div>
  );
}

export default GridCellAction;
