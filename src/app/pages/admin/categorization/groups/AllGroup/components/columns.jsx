import { BiSolidEditAlt } from "react-icons/bi";
import CustomCopyToClipBoard from "../../../../../../components/CustomCopyToClipBoard/CustomCopyToClipBoard";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import EditGroupModal from "./EditGroupModal";

const AllGroupsColumns = [
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
          <EditGroupModal
            show={show}
            handleClose={handleClose}
            group={row.original}
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

export { AllGroupsColumns };
