import React from "react";
import PaddingWrapper from "./paddingWrapper";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";
const Header = () => {
  const auth = useAuth();
  const { user, logout } = auth;
  return (
    <PaddingWrapper>
      <div className="px-3 w-full bg-gray-600 h-24 flex justify-between items-center text-white">
        <Link href="/" className="text-white text-3xl">
          <img src={"/monkey.png"} className="w-16 object-cover cursor-pointer" />
        </Link>
        {!user && (
          <ul className="flex w-56 justify-around cursor-pointer">
            <li>
              <Link href="/signin">Sign In</Link>
            </li>
            <li>
              <Link href="/signup">Sign Up</Link>
            </li>
          </ul>
        )}
        {user && (
          <ul className="flex w-56 justify-around">
            <li>
              <Link href="/myWishList">
                {user.wishList ? (
                  <a>
                    Wish List <span className="bg-blue-300 px-3">{user.wishList.length}</span>
                  </a>
                ) : (
                  <a>Wish List</a>
                )}
              </Link>
            </li>
            <li>
              <button type="button" onClick={() => logout()}>
                Logout
              </button>
            </li>
          </ul>
        )}
      </div>
    </PaddingWrapper>
  );
};

export default Header;
