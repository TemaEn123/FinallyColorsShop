export interface IColor {
  id: string;
  title: string;
  photo: string;
  price: string;
}

export interface IFilters {
  title: string;
  p: number;
  l: number;
  sortBy: string;
  order: "asc" | "desc";
}

export interface IChangeFiltersObj {
  key: "title" | "sortBy" | "order" | "p" | "l";
  value: string | number;
}

export interface INewColor {
  title: string;
  photo: string;
  price: string;
}

export interface IChangeColor {
  id: string;
  title: string;
  price: string;
}

export interface IColorId {
  id: string;
}
