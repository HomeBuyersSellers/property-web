import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/app/Redux/Features/commonSlice";
import { useEffect } from "react";

const Breadcrumbs = () => {
  const path = usePathname();
  const dispatch = useDispatch();
  let pathWithoutEn = path;
  if (path.startsWith("/en/") || path.startsWith("/en/")) {
    pathWithoutEn = path.substring(3);
  }
  const segments = pathWithoutEn.split("/").filter(Boolean);
  const pathText = segments.join("/");
  useEffect(()=>{
    if(pathText){
      dispatch(setPageTitle(pathText));
    }
  },[])

  return (
    <nav className="text-sm">
      <ul className="flex py-2 font-medium">
        <li>
          <Link href="/" className="text-gray-400 capitalize">
            Home
          </Link>
        </li>
        {/* {segments.map((segment, index) => ( */}
        <li>
          <span className="mx-2 text-gray text-md">&gt;</span>
          <Link href={`/${path}`} className="text-primary-color capitalize">
            {pathText}
          </Link>
        </li>
        {/* ))} */}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
