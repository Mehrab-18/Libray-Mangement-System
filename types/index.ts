import { StaticImageData } from "next/image";
import { MouseEventHandler , ReactNode} from "react";

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string | ReactNode;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}

export interface NavLinkProps {
  url: string;
  title: string;
  customStyles?: string;
}

export interface SearchbarProps{
  placeholder?: string;
}

export interface BookCardProps {
  imageUrl?: string | StaticImageData; // Allow for both string and StaticImageData types
  heading: string;
}

export interface HomePageSectionProps {
  paragraph: string;
  heading: string;
  imageUrl: string | StaticImageData;
  isOverview?: boolean;
  isShowroom?: boolean;
  isJoinUs?: boolean;
}

export interface LibraryCardProps {
  id:number,
  libraryNumber: string,
  works: number,
  dateofAddition:string,
  isRecommended?:boolean,
  isBtn1?:boolean;
  btn1Text?:string;
  isBtn2?:boolean;
  btn2Text?:string;
}

export interface CardStyle {
  originalBtnBgColor: string;
  originalBtnColor?:string;
}

export interface WorkCardProps{
  imageUrl: any;
  isOriginal: boolean;
  originalText?:string;
  description: string;
  footerText: string;
  hasVolumes?:boolean;
  noOfVolumes?: string;
  isfooterText?: boolean;
  isfooterText2?: boolean;
  footerText2?: string;
  cardStyles?:CardStyle[];
}

export interface LoginModal {
  modal:boolean,
  setModal:(isOpen: boolean) => void
}