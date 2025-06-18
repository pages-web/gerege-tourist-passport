import {
  getCategories,
  getProductDetail,
  getProducts,
} from "@/sdk/queries/products";
import GeregeButtonAdd from "./gerege-button-add.client";

const GeregeButton = async ({
  className,
  title,
  isIcon,
}: {
  className?: string;
  title?: string;
  isIcon?: boolean;
}) => {
  const { products } = await getProducts({
    variables: {
      categoryId: "",
    },
  });

  const geregeproduct = products.find(
    (product) => product._id === "cHx5zw_62eVneWNiq0gT8"
  );

  if (!geregeproduct) {
    return null;
  }

  return (
    <GeregeButtonAdd
      geregeproduct={geregeproduct}
      className={className}
      title={title}
      isIcon={isIcon}
    />
  );
};

export default GeregeButton;
