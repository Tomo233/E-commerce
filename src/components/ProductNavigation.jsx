import { MegaMenu } from "primereact/megamenu";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useNavigate } from "react-router-dom";

function ProductNavigation() {
  const navigate = useNavigate();

  const items = [
    {
      label: "Woman's Fashion",

      template: (
        <>
          <span className="text-xl">Woman&rsquo;s fashion</span>
          <i
            className="pi pi-arrow-right"
            style={{ marginLeft: "5px", position: "absolute", top: "10px" }}
          ></i>
        </>
      ),
      items: [
        [
          {
            label: "Video 1",
            items: [{ label: "Video 1.1" }, { label: "Video 1.2" }],
            command: () => navigate("/signUp"),
          },
          {
            label: "Video 2",
            items: [{ label: "Video 2.1" }, { label: "Video 2.2" }],
          },
        ],
        [
          {
            label: "Video 3",
            items: [{ label: "Video 3.1" }, { label: "Video 3.2" }],
          },
          {
            label: "Video 4",
            items: [{ label: "Video 4.1" }, { label: "Video 4.2" }],
          },
        ],
      ],
      command: () => {
        // Callback to run
        // navigate("/signUp");
      },
    },
    {
      label: "Men's Fashion",
      template: (
        <>
          <span className="text-xl">Man&rsquo;s fashion</span>
          <i
            className="pi pi-arrow-right"
            style={{ marginLeft: "5px", position: "absolute", top: "10px" }}
          ></i>
        </>
      ),
      command: () => {
        // Callback to run
      },
    },
    {
      label: "Electronics",
      icon: "pi pi-signout",
      command: () => {
        // Callback to run
      },
      template: <span className="text-xl">Electronics</span>,
    },
    {
      label: "Home & Lifestyle",
      icon: "pi pi-signout",
      command: () => {
        // Callback to run
      },
      template: <span className="text-xl">Home & Lifestyle </span>,
    },
    {
      label: "Medicine",
      icon: "pi pi-signout",
      command: () => {
        // Callback to run
      },
      template: <span className="text-xl">Medicine</span>,
    },
    {
      label: "Sports & Outdoor",
      icon: "pi pi-signout",
      command: () => {
        // Callback to run
      },
      template: <span className="text-xl">Sports & Outdoor</span>,
    },
    {
      label: "Baby's & Toys",
      icon: "pi pi-signout",
      command: () => {
        // Callback to run
      },
      template: (
        <>
          <span className="text-xl">Baby&rsquo;s & Toys</span>
        </>
      ),
    },
    {
      label: "Groceries & Pets",
      icon: "pi pi-signout",
      command: () => {
        // Callback to run
      },
      template: <span className="text-xl">Groceries & Pets</span>,
    },
    {
      label: "Health & Beauty",
      icon: "pi pi-signout",
      command: () => {
        // Callback to run
      },
      template: <span className="text-xl">Health & Beauty</span>,
    },
  ];

  return (
    <>
      <MegaMenu
        model={items}
        orientation="verticaly"
        breakpoint="960px"
        className="w-96 mt-5 bg-white cursor-pointer "
      />
    </>
  );
}

export default ProductNavigation;
