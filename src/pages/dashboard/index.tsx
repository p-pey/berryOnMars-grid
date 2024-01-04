import { AgGridReact } from 'ag-grid-react';
import '../../assets/styles/dashboard.css';
import useGrid from './lib/hooks/useGrid';
import { GridModal } from './lib/components';

function Dashboard() {
  const { get, on, set } = useGrid();
  return (
    <div className="w-screen h-screen p-5">
      <GridModal
        handleCreate={on.create}
        handleEdit={on.update}
        handleDelete={on.delete}
        data={get.modalType?.data}
        type={get.modalType?.type}
        onClose={() => set.modalType(undefined)}
      />
      <div className="w-full mx-auto md:w-11/12 lg:w-7/12 xl:w-5/6 h-full bg-gray-100 shadow-lg p-5 rounded-md">
        <div className={'ag-theme-quartz-dark h-full w-full'}>
          <div className="flex items-center justify-between">
            <input
              type="text"
              className="form-input rounded-md mb-3 text-black"
              placeholder="Search ..."
              onInput={on.search}
            />

            <button
              className="rounded-md  bg-green-500 py-3 px-10 "
              type="button"
              onClick={() =>
                set.modalType({
                  type: 'NEW',
                  data: undefined,
                })
              }
            >
              Add New Item
            </button>
          </div>
          <AgGridReact ref={get.gridRef} className="w-full" rowData={get.data} columnDefs={get.GRID_COLUMN} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
