import { FormEventHandler, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { grid, modalContentType } from '../types';
import { AgGridReact } from 'ag-grid-react';
import { FetchApi } from '../../../../services';
import { toast } from 'sonner';
import GridCellAction from '../components/gridCellAction';
import { createGrid, deleteGrid, updateGrid } from '../services';

export default function useGrid() {
  const [modalType, setModalType] = useState<{ type: modalContentType; data: grid | undefined } | undefined>(undefined);
  const [data, setData] = useState<grid[]>([]);
  const gridRef = useRef<AgGridReact | null>(null);
  const onSearch: FormEventHandler<HTMLInputElement> = useCallback((event) => {
    gridRef.current?.api.setGridOption('quickFilterText', event.currentTarget.value);
  }, []);
  const onCreate = (inputs: Partial<grid>) => {
    createGrid(inputs)
      .then(() => {
        getData();
        toast.success('Successfully Created');
        setModalType(undefined);
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  const onUpdate = (inputs: Partial<grid>) => {
    updateGrid(inputs)
      .then(() => {
        getData();
        toast.success('Successfully Updated');
        setModalType(undefined);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const onDelete = (id: string) => {
    deleteGrid(id)
      .then(() => {
        getData();
        toast.success('Successfully Deleted');
        setModalType(undefined);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const getData = useCallback(() => {
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
  }, []);
  useEffect(() => {
    getData();
  }, []);
  const GRID_COLUMN = useMemo(
    () => [
      { field: 'firstName' },
      { field: 'lastName' },
      { field: 'address' },
      { field: 'country' },
      {
        field: '',
        cellRenderer: ({ data }: { data: grid }) => {
          return (
            <GridCellAction
              onClick={(type) =>
                setModalType({
                  type,
                  data,
                })
              }
            />
          );
        },
      },
    ],
    [],
  );

  return {
    get: {
      gridRef,
      data,
      modalType,
      GRID_COLUMN,
    },
    set: {
      data: setData,
      modalType: setModalType,
    },
    on: {
      search: onSearch,
      create: onCreate,
      update: onUpdate,
      delete: onDelete,
    },
  };
}
