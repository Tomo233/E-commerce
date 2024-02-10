/* eslint-disable react/prop-types */
import { MegaMenu } from "primereact/megamenu";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import VerticalLine from "../../components/VerticalLine";
const items = [
  {
    label: "Woman's Fashion",

    template: (
      <>
        <span className="text-2xl">Woman&rsquo;s fashion</span>
        <i
          className="pi pi-arrow-right"
          style={{ marginLeft: "5px", position: "absolute", top: "8px" }}
        ></i>
      </>
    ),
    items: [
      [
        {
          label: "Casual Wear",

          items: [
            { label: "T-shirts" },
            { label: "Jeans" },
            { label: "Hoodies" },
          ],
        },
      ],
      [
        {
          label: "Formal Wear",

          items: [
            { label: "Business suits" },
            { label: "Pencil skirts or tailored pants" },
            { label: "Heels or dress shoes" },
          ],
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
        <span className="text-2xl">Man&rsquo;s fashion</span>
        <i
          className="pi pi-arrow-right"
          style={{ marginLeft: "5px", position: "absolute", top: "8px" }}
        ></i>
      </>
    ),

    items: [
      [
        {
          label: "Casual Wear",

          items: [
            { label: "T-shirts" },
            { label: "Jeans" },
            { label: "Hoodies" },
          ],
        },
      ],
      [
        {
          label: "Sportswear",

          items: [
            { label: "Athletic T-shirts" },
            { label: "Athletic Shorts" },
            { label: "Running Shoes" },
          ],
        },
      ],
    ],

    command: () => {
      // Callback to run
    },
  },
  {
    label: "Electronics",
    icon: "pi pi-signout",
    command: () => {
      // Callback to run
      console.log("electronics");
    },
    template: <span className="text-2xl">Electronics</span>,
  },
  {
    label: "Home & Lifestyle",
    icon: "pi pi-signout",
    command: () => {
      // Callback to run
    },
    template: <span className="text-2xl">Home & Lifestyle </span>,
  },
  {
    label: "Medicine",
    icon: "pi pi-signout",
    command: () => {
      // Callback to run
    },
    template: <span className="text-2xl">Medicine</span>,
  },
  {
    label: "Sports & Outdoor",
    icon: "pi pi-signout",
    command: () => {
      // Callback to run
    },
    template: <span className="text-2xl"> Sports & Outdoor</span>,
  },
  {
    label: "Baby's & Toys",
    icon: "pi pi-signout",
    command: () => {
      // Callback to run
    },
    template: (
      <>
        <span className="text-2xl">Baby&rsquo;s & Toys</span>
      </>
    ),
  },
  {
    label: "Groceries & Pets",
    icon: "pi pi-signout",
    command: () => {
      // Callback to run
    },
    template: <span className="text-2xl">Groceries & Pets</span>,
  },
  {
    label: "Health & Beauty",
    icon: "pi pi-signout",
    command: () => {
      // Callback to run
    },
    template: <span className="text-2xl">Health & Beauty</span>,
  },
];

function ProductNavigation() {
  return (
    <div className="relative w-64 flex">
      <MegaMenu
        model={items}
        orientation="verticaly"
        breakpoint="960px"
        className="w-96 mt-5  bg-white cursor-pointer"
      />
      <VerticalLine />
    </div>
  );
}

export default ProductNavigation;
