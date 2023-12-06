import { Link } from "react-router-dom";
import { useState } from 'react';

import ItemModal from '../ItemModal.js';
import urinaryIncontinenceJson from "../../../data/products/illness/urinaryIncontinence.json";

function UrinaryIncontinence () {

    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [packSize, setPackSize] = useState("");
    const [productOf, setProductOf] = useState("");
    const [exclusiveAvailability, setAvailability] = useState(false);
    const [ingredients, setIngredients] = useState("");
    const [dosageInstructions, setDosage] = useState("");

    const header = "Urinary incontinence";
    const category = "Illness / " + header;

    const productList = urinaryIncontinenceJson && urinaryIncontinenceJson.map((product) =>(

        <div className="col col-sm-4 itemCard" key={product.id}>
            <div className="itemImage">
                <Link href={() => false} onClick={() => displayItemModal(product)}><img src={product.image} alt={product.name}/> </Link>
            </div>
            <div className="itemInfo">
                <Link href={() => false} onClick={() => displayItemModal(product)}><p className="itemName">{product.name}</p> </Link>
                <p className="itemDesc">{category}</p>
            </div>
        </div>

    ));

    /*This is to close the modal and reset the value*/
    function callBack (childData) {
        setShow(false);
    }

    const displayItemModal = (message) => {
        setName(message.name);
        setImage(message.image);
        setDescription(message.description);
        setPackSize(message.packSize);
        setProductOf(message.productOf);
        setAvailability(message.exclusiveAvailability);
        setIngredients(message.ingredients);
        setDosage(message.dosageInstructions);
        setShow(true);
    }

    return (
        <>

            <div className="side-title">
                <h5>{header}</h5>
                <hr></hr>
            </div>

            <div className="row itemContainer">
                {productList}
            </div>


            <div>
                {show ? (
                    <ItemModal handleCallBack={callBack} name={name} image={image} description={description} packSize={packSize} productOf={productOf} exclusiveAvailability={exclusiveAvailability} ingredients={ingredients} dosageInstructions={dosageInstructions}/>
                ) : (
                    ""
                )}
            </div>

        </>
    );
}

export default UrinaryIncontinence;