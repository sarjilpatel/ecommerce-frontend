// import { BiSolidEditAlt } from "react-icons/bi";
// import edit from "../../../../../../../assets/edit.svg";
import CustomCopyToClipBoard from "../../../../../../components/CustomCopyToClipBoard/CustomCopyToClipBoard";
// import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AllCategoriesColumns = [
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
    Header: "Group",
    Cell: ({ row }) => {
      return <p>{row?.original?.Group?.vName}</p>;
    },
  },
  {
    Header: "SizeCategory",
    Cell: ({ row }) => {
      return <p>{row?.original?.SizeCategory?.vName}</p>;
    },
  },
  {
    Header: "Actions",
    Cell: ({ row }) => {
      const navigate = useNavigate();
      const handleEdit = () => {
        navigate("/admin/categorization/categories/edit", {
          state: row.original,
        });
      };

      return (
        <div className="customactioncell">
          {/* <BiSolidEditAlt
            onClick={handleEdit}
            className="actionbutton editbutton"
          /> */}
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="actionbutton editbutton"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="actionbutton deletebutton"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path>
          </svg>
        </div>
      );
    },
  },
];

export { AllCategoriesColumns };
