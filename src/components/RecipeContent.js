import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./styles/RecipeContent.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CollapsibleComponent,
  CollapsibleHead,
  CollapsibleContent,
} from "react-collapsible-component";
import ReactPlayer from "react-player/youtube";

const IMAGES_API = "/preview";

const RecipeContent = ({
  strCategory,
  strMeal,
  strInstructions,
  strMealThumb,
  strYoutube,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  strIngredient5,
  strIngredient6,
  strIngredient7,
  strIngredient8,
  strIngredient9,
  strIngredient10,
  strIngredient11,
  strIngredient12,
  strIngredient13,
  strIngredient14,
  strIngredient15,
  strIngredient16,
  strIngredient17,
  strIngredient18,
  strIngredient19,
  strIngredient20,
  strMeasure1,
  strMeasure2,
  strMeasure3,
  strMeasure4,
  strMeasure5,
  strMeasure6,
  strMeasure7,
  strMeasure8,
  strMeasure9,
  strMeasure10,
  strMeasure11,
  strMeasure12,
  strMeasure13,
  strMeasure14,
  strMeasure15,
  strMeasure16,
  strMeasure17,
  strMeasure18,
  strMeasure19,
  strMeasure20,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClose = () => setShowPopup(false);
  const handleShow = () => setShowPopup(true);

  function ingredientsCheck() {
    const ingredients = [
      { ingredient: strIngredient1 },
      { ingredient: strIngredient2 },
      { ingredient: strIngredient3 },
      { ingredient: strIngredient4 },
      { ingredient: strIngredient5 },
      { ingredient: strIngredient6 },
      { ingredient: strIngredient7 },
      { ingredient: strIngredient8 },
      { ingredient: strIngredient9 },
      { ingredient: strIngredient10 },
      { ingredient: strIngredient11 },
      { ingredient: strIngredient12 },
      { ingredient: strIngredient13 },
      { ingredient: strIngredient14 },
      { ingredient: strIngredient15 },
      { ingredient: strIngredient16 },
      { ingredient: strIngredient17 },
      { ingredient: strIngredient18 },
      { ingredient: strIngredient19 },
      { ingredient: strIngredient20 },
    ];
    return ingredientList(ingredients);
  }

  function ingredientList(items) {
    const arr = [];
    items.forEach((e) => {
      if (!e.ingredient == "") {
        arr.push(e.ingredient);
      }
    });
    return arr.join("\n");
  }

  function measuresCheck() {
    const measures = [
      { measure: strMeasure1 },
      { measure: strMeasure2 },
      { measure: strMeasure3 },
      { measure: strMeasure4 },
      { measure: strMeasure5 },
      { measure: strMeasure6 },
      { measure: strMeasure7 },
      { measure: strMeasure8 },
      { measure: strMeasure9 },
      { measure: strMeasure10 },
      { measure: strMeasure11 },
      { measure: strMeasure12 },
      { measure: strMeasure13 },
      { measure: strMeasure14 },
      { measure: strMeasure15 },
      { measure: strMeasure16 },
      { measure: strMeasure17 },
      { measure: strMeasure18 },
      { measure: strMeasure19 },
      { measure: strMeasure20 },
    ];
    return measureList(measures);
  }

  function measureList(items) {
    const arr = [];
    items.forEach((e) => {
      if (!e.measure == "") {
        arr.push(e.measure);
      }
    });
    arr.filter(function (e) {
      return e != null;
    });
    return arr.join("\n");
  }
  /* eslint eqeqeq: 0 */
  return (
    <div className="recipe__content">
      <button
        className="recipe__button"
        onClick={handleShow}
        style={{ outline: "none" }}
      >
        <img src={strMealThumb + IMAGES_API} alt={strMeal} />
      </button>

      <div className="recipe__info">
        <h3>{strMeal}</h3>
      </div>

      <Modal show={showPopup} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#bdb2ff" }}>
          <Modal.Title>
            {strMeal} - {strCategory}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#d6d3f0" }}>
          <img
            src={strMealThumb}
            alt=""
            style={{
              width: "100%",
              borderRadius: "5px",
              paddingBottom: "15px",
            }}
          />
          <CollapsibleComponent>
            <CollapsibleHead>Ingredients</CollapsibleHead>
            <CollapsibleContent>
              <div className="recipe__ingredients">
                <p
                  style={{
                    fontWeight: "500",
                    whiteSpace: "pre",
                    textAlign: "center",
                  }}
                >
                  {ingredientsCheck()}
                </p>
                <p>{measuresCheck()}</p>
              </div>
            </CollapsibleContent>

            <CollapsibleHead>Instructions</CollapsibleHead>
            <CollapsibleContent>
              <p style={{ fontWeight: "500", whiteSpace: "pre-line" }}>
                {strInstructions}
              </p>
            </CollapsibleContent>
            <CollapsibleHead>Youtube</CollapsibleHead>
            <CollapsibleContent>
              <div>
                <ReactPlayer url={strYoutube} controls={true} width="auto" />
              </div>
            </CollapsibleContent>
          </CollapsibleComponent>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#bdb2ff" }}>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RecipeContent;
