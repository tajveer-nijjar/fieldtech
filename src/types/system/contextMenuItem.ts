export default interface ContextMenuItem {
  name: string;
  icon: string;
  action: () => any;
  enabled: boolean;
  destructive?: boolean;
  hidden?: boolean;
}
