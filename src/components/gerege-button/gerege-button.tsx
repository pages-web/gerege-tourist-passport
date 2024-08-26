import { getProducts } from "@/sdk/queries/products";
import GeregeButtonAdd from "./gerege-button-add.client";

const GeregeButton = async () => {
  const { products } = await getProducts({
    variables: {
      perPage: 12,
      isKiosk: true,
      groupedSimilarity: "config",
    },
  });
  const geregeproduct = products.filter(
    (product) => product.name === "GEREGE TOUR CARD"
  );

  return (
    <div>
      <GeregeButtonAdd {...geregeproduct[0]} />
    </div>
  );
};

export default GeregeButton;
