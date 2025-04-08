export interface BadgeInterface {
  text: string;
}

export interface ButtonInterface {
  text: string;
  type?: string;
  href: string;
}

export interface CardInterface {
  badge?: BadgeInterface;
  image?: string;
  title?: string;
  subtitle?: string;
  body: string;
  btn: ButtonInterface;
}
