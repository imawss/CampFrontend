import { Category } from "./catergory";
import { ResponseModel } from "./responseModel";

export interface CategoryResponseModel extends ResponseModel{
  data:Category[]
}