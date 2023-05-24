export const categories: Categories[] = [
  'Groceries',
  'Utilities',
  'Vehicle',
  'Charity',
  'Personal',
];

export const categoryOptions = categories.map((category) => ({
  value: category,
  label: category,
}));

export const selectStyles = {
  control: (base: any) => ({
    ...base,
    boxShadow: 'none',
    borderColor: '#efefef',
    borderRadius: '10px',
  }),
  multiValue: (styles: any) => {
    return {
      ...styles,
      backgroundColor: '#efefef',
      borderRadius: '11px',
      padding: '0 5px',
      color: '#000',
    };
  },
  multiValueLabel: (styles: any) => ({
    ...styles,
    padding: 0,
    paddingLeft: '2px',
  }),
  menuPortal: (styles: any) => ({ ...styles, zIndex: 9999 }),
  multiValueRemove: (styles: any) => ({
    ...styles,
    paddingRight: '2px',
    paddingLeft: '0px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'transparent',
    },
    ':hover svg': {
      color: 'red',
    },
  }),
};
