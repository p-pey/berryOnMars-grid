import { FormEventHandler, useCallback, useRef, useState } from 'react';
import { grid } from '../types';
import staticGridData from '../data/grid.json';
import { useToggle } from '../../../../hooks';
import { AgGridReact } from 'ag-grid-react';

export default function useGrid() {
  const [isModalOpen, toggleOpenModal] = useToggle(false);
  const [data, setData] = useState<grid[]>(staticGridData.gridData);
  const gridRef = useRef<AgGridReact | null>(null);
  const onSearch: FormEventHandler<HTMLInputElement> = useCallback((event) => {
    gridRef.current?.api.setGridOption('quickFilterText', event.currentTarget.value);
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
