import { FormEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import { grid } from '../types';
import { useToggle } from '../../../../hooks';
import { AgGridReact } from 'ag-grid-react';
import { FetchApi } from '../../../../services';
import { toast } from 'sonner';

export default function useGrid() {
  const [isModalOpen, toggleOpenModal] = useToggle(false);
  const [data, setData] = useState<grid[]>([]);
  const gridRef = useRef<AgGridReact | null>(null);
  const onSearch: FormEventHandler<HTMLInputElement> = useCallback((event) => {
    gridRef.current?.api.setGridOption('quickFilterText', event.currentTarget.value);
  }, []);
  const getData = () => {
    FetchApi({
      method: 'GET',
      url: '/gridData',
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return {
    get: {
      gridRef,
      data,
      isModalOpen,
    },
    set: {
      data: setData,
      toggleModal: toggleOpenModal,
    },
    on: {
      search: onSearch,
    },
  };
}
