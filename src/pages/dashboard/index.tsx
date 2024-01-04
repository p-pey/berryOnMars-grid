import { AgGridReact } from 'ag-grid-react';
import '../../assets/styles/dashboard.css';
import useGrid from './lib/hooks/useGrid';
import { GRID_COLUMN } from './lib/constants';

function Dashboard() {
  const { get, on } = useGrid();
  return (
    <div className="w-screen h-screen p-5">
      <div className="w-full mx-auto md:w-11/12 lg:w-7/12 xl:w-5/6 h-full bg-gray-100 shadow-lg p-5 rounded-md">
        <div className={'ag-theme-quartz-dark h-full'}>
          <input
            type="text"
            className="form-input rounded-md mb-3 text-black"
            placeholder="Search ..."
            onInput={on.search}
          />
          <AgGridReact ref={get.gridRef} rowData={get.data} columnDefs={GRID_COLUMN} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
