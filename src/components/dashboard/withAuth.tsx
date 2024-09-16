import { useEffect } from "react";
import { useRouter } from "next/router";

const withAuth = (WrappedComponent: React.FC) => {
  const AuthHOC = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (!isLoggedIn) {
        router.push("/login"); 
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return AuthHOC;
};

export default withAuth;
