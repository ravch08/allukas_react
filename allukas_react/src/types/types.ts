import { ReactNode } from "react";
import { ProductsProps } from "../components/pages/Home";

export type SectionHeadingProps = {
  heading: string;
  subHeading: string;
};

export type RatingsProps = {
  stars: string;
};

export type CategoryProps = {
  catImgSrc: string;
  category: string;
};

export type CategoryArrProps = {
  categoryArr: CategoryProps[];
};

export type PageBannerProps = {
  pageTitle: string;
  subTitle: string;
};

export type ErrorProps = {
  errorMsg: string;
};

export type ProductCompProps = {
  products: ProductsProps[];
};

export type ProductInfoProps = {
  product: ProductsProps;
};

export type SortedProductProps = {
  products: ProductsProps[];
  status: string;
  error: string;
  heading: string;
  subHeading: string;
};

export type ModalProps = {
  children: ReactNode;
  modalTitle: string;
  handleClose: () => void;
};

export type ModalCompProps = {
  closeModal: () => void;
};

export type OverlayCompProps = {
  handleClose: () => void;
};
