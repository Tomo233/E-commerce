import { MegaMenu } from "primereact/megamenu";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import HeroSectionLine from "./HeroSectionLine";

function ProductNavigation() {
  const items = [
    {
      label: "Woman's Fashion",

      template: (
        <>
          <span className="text-xl">Woman&rsquo;s fashion</span>
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
          <span className="text-xl">Man&rsquo;s fashion</span>
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
      template: <span className="text-xl"> Sports & Outdoor</span>,
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
    <div className="relative w-56 flex">
      <MegaMenu
        model={items}
        orientation="verticaly"
        breakpoint="960px"
        className="w-96 mt-5 bg-white cursor-pointer "
      />
      <HeroSectionLine />
    </div>
  );
}

export default ProductNavigation;
