// import { useRouter } from "next/router";
// import Home from "./index";
// import Projects from "./projects";
// import MyApp from "./_app";

// const AppRouting = () => {
//     const router = useRouter();
//     const { slug } = router.query;
  
//     const renderRoute = () => {
//       switch (slug?.[0]) {
//         case '/':
//           return <Home />;
//         case '/projects':
//           return <Projects />;
//         default:
//           return <Home/>;
//       }
//     };
  
//     return (
//       <MyApp>
//         {renderRoute()}
//       </MyApp>
//     );
//   };

//   export default AppRouting