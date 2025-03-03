import Pagination  from 'react-bootstrap/Button';

function VariantPagination() {
  return (
    <>
      <style type="text/css">
        {`
    .active {
      background-color: purple;
      color: white;
    }
    `}
      </style>

      <Pagination />
    </>
  );
}

export default VariantPagination;