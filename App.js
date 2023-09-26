import { PaperProvider } from "react-native-paper";
import Router from "./src/router/Router";

export default function App() {
 return (
 <PaperProvider>
<Router />
</PaperProvider>
 );
};