import React, {PropsWithChildren, useContext} from "react";

// type StackHistory = {
//   type: 'pixel' | 'brush',
//   coords: number[]
// }

export type AppContextProps = PropsWithChildren<{
  app: {
    coords: [number, number];
    isDrawing: boolean;
    color: string;
    onSetCoords(e: React.MouseEvent): number[];
    onSetIsDrawing(isDrawing: boolean): void;
    onChangeColor(color: string): void;
  }
}>

export const AppContext = React.createContext<AppContextProps>({
  app: {
    coords: [0, 0],
    isDrawing: false,
    color: '',
    onSetCoords: () => [],
    onSetIsDrawing: () => {},
    onChangeColor: () => {}
  }
});

export const AppContextProvider = ({ app, children }: AppContextProps) => {
  return <AppContext.Provider value={{ app }}>{children}</AppContext.Provider>
}
export const useAppContext = () => useContext(AppContext);