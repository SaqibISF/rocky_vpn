import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export const useAppState = () => useSelector((state: RootState) => state.app);
