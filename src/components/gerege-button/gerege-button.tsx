import {
  getCategories,
  getProductDetail,
  getProducts,
} from "@/sdk/queries/products";
import GeregeButtonAdd from "./gerege-button-add.client";

const GeregeButton = async ({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) => {
  const { products } = await getProducts({
    variables: {
      categoryId: "",
    },
  });

  const geregeproduct = products.find(
    // (product) => product.code === "gerege_tour_card"
    (product) => product.code === "test"
  );

  if (!geregeproduct) {
    return null;
  }

  return (
    <GeregeButtonAdd
      geregeproduct={geregeproduct}
      className={className}
      title={title}
    />
  );
};

export default GeregeButton;
