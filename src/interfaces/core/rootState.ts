import { Namespaces } from "@/constants";
import { AppStoreState } from "@/store/root.store";

export default interface RootState {
  [Namespaces.root]: AppStoreState;
}
