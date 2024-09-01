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

  const geregeproduct = products.filter(
    (product) => product.name === "test4"
  );

  return (
    <GeregeButtonAdd
      geregeproduct={geregeproduct[0]}
      className={className}
      title={title}
    />
  );
};

export default GeregeButton;
