import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({authenticate,setAuthenticate}) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];


  const navigate=useNavigate();


   const gotoLogin=()=>{
    navigate('/login')
   }


   const gotoMain=()=>{
    navigate('/')
   }

 const search=(event)=>{
  if(event.key == "Enter"){
   // console.log('enter')
   let keyword=event.target.value;
   console.log(keyword)
   navigate(`/?q=${keyword}`)
  }
 }

  return (
    <>
      <div className="login-button" onClick={gotoLogin}>
        <FontAwesomeIcon icon={faUser} />
        {
         // authenticate?A:B; //authenticate가 true이면 A가 실행되고 false면 B가 실행
         authenticate?(
          <div onClick={()=>setAuthenticate(false)}>
            <span>로그아웃</span>
           </div>
         ):(
           <div onClick={()=> navigate("/login")}>
            <span>로그인</span>
           </div>
         )
        }
      </div>
      <div className="nav-section">
        <img
          with={200} onClick={gotoMain}
          src="data:image/png;base64,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"
          alt="logo"
        />
      </div>
      <div className="menu_list">
        <ul>
          {menuList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <div className="input">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" onKeyDown={(event)=>search(event)}/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
