import { useState } from "react";
import { Tooltip } from "react-bootstrap";
import CopyToClipboard from "react-copy-to-clipboard";
import { BiSolidEditAlt } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdContentCopy, MdDeleteForever } from "react-icons/md";
import CustomCopyToClipBoard from "../../../../../components/CustomCopyToClipBoard/CustomCopyToClipBoard";
import EditBrandModal from "./EditBrandModal";

const AllBrandsColumns = [
  {
    Header: "ID",
    accessor: "id",
    Cell: ({ row }) => {
      return (
        <div className="d-flex gap-2 align-items-center ">
          <CustomCopyToClipBoard text={row.original.id} />
          <p className="m-0">{row.original.id}</p>
        </div>
      );
    },
  },
  {
    Header: "Name",
    accessor: "vName",
  },
  {
    Header: "Brand description",
    accessor: "tBranddescription",
  },
  {
    Header: "Actions",
    Cell: ({ row }) => {
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      return (
        <div className="customactioncell">
          <BiSolidEditAlt
            onClick={handleShow}
            className="actionbutton editbutton"
          />
          <EditBrandModal
            show={show}
            handleClose={handleClose}
            brand={row.original}
          />
          <MdDeleteForever
            onClick={() => alert(`Delete ${row.original.id}`)}
            className="actionbutton deletebutton"
          />
        </div>
      );
    },
  },
];

export { AllBrandsColumns };
