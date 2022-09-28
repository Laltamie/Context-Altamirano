import React from "react";
import "../Header/Header.css"
import ItemListContainer from "../ItemListContainer/ItemListContainer";


const Header = () => {

    return (
        <div>
            <header>
                
                <div className="p-5 text-center bg-image conten-header" height= "400px">
                    <div className="mask">
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="text-white">
                                <h1 className="mb-3">Bienvenid@</h1>
                                <h4 className="mb-3">GEMINI</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <div>
                <ItemListContainer />
            </div>



        </div>
    );
};

export default Header;