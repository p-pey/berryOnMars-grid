import GridCellAction from '../components/gridCellAction';

export const GRID_COLUMN = [
  { field: 'firstName' },
  { field: 'lastName' },
  { field: 'address' },
  { field: 'country' },
  {
    field: '',
    cellRenderer: GridCellAction,
  },
];
