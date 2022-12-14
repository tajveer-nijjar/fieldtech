export default interface MenuItem {
  name: string;
  icon?: string;
  showIcon?: boolean;
  title: string;
  subtitle?: string;
  route: string;
  hash?: string;
  query?: string;
  children: MenuItem[];
}
