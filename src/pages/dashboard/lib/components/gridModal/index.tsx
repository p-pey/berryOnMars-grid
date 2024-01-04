import { Modal } from '../../../../../components';
import { grid, modalContentType } from '../../types';
import DeleteItem from './_components/deleteItem';
import EditItem from './_components/editItem';
import NewItem from './_components/newItem';

interface GridModalProps {
  type: modalContentType | undefined;
  onClose: VoidFunction;
  data: grid | undefined;
  handleDelete: (id: string) => void;
  handleEdit: (data: Partial<grid>) => void;
  handleCreate: (data: Partial<grid>) => void;
}

export function GridModal({ type, onClose, data, handleCreate, handleDelete, handleEdit }: GridModalProps) {
  const ContentType = () => {
    if (type === 'DELETE') {
      return <DeleteItem onReject={onClose} onConfirm={() => handleDelete(data?.id as string)} />;
    } else if (type === 'EDIT') {
      return <EditItem data={data as grid} onReject={onClose} onConfirm={handleEdit} />;
    }
    return <NewItem onReject={onClose} onConfirm={handleCreate} />;
  };
  return (
    <Modal open={!!type} onClose={onClose}>
      <ContentType />
    </Modal>
  );
}

export default GridModal;
