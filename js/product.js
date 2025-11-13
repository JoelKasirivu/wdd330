import { getParam } from "./utils.mjs";
import ProductData from "./productData.mjs";
import ProductDetail from "./productDetail.mjs";

const productId = getParam("product");
const dataSource = new ProductData("tents");
const product = new ProductDetail(productId, dataSource);
product.init();
