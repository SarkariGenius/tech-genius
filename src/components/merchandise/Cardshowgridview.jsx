import { Fragment, memo, useState } from "react";

//react-router-dom
import { Link } from "react-router-dom";

// components
import RatingStar from "../rating-star";
import WalkinModal from "./WalkinModal";

//sweetalert2
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

// the hook
import { useTranslation } from "react-i18next";

const CardShopGridView = memo((props) => {
  const { t } = useTranslation();
  const showSwal = () => {
    Swal.fire({
      title: `${t("sweetalert.added")}`,
      text: `${t("sweetalert.added_to_cart")}`,
      icon: "success",
      confirmButtonText: `${t("sweetalert.ok_btn")}`,
      background: "#141314",
      color: "#ffffff",
    });
  };

  const showSwalwish = () => {
    Swal.fire({
      title: `${t("sweetalert.added")}`,
      text: `${t("sweetalert.added_to_wishlist")}`,
      icon: "success",
      confirmButtonText: `${t("sweetalert.ok_btn")}`,
      background: "#141314",
      color: "#ffffff",
    });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isSale = props.is_sale;
  const isNew = props.is_new;
  return (
    <Fragment>
      <div className="product-block">
        {isSale ? (
          <span className="onsale bg-primary">{t("shop.sale!")}</span>
        ) : isNew ? (
          <span className="onsale bg-primary">{t("shop.new!")}</span>
        ) : (
          ""
        )}
        <div className="image-wrap">
          <Link to="/walkIn-detail" state={{id : props._id}}>    
            <div className="product-image">
              <img
                src={props.walkIn_image}
                className="img-fluid w-100"
                alt=""
                loading="lazy"
              />
            </div>
          </Link>
       
          <div className="buttons-holder">
            <ul className="list-unstyled m-0 p-0">
              <li>
                <Link className="sq-btn" to="#" onClick={handleShow}>
                  <i className="fa fa-eye" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <div className="on-first-load">
                  {/* <!-- ADD TO WISHLIST --> */}
                  <div className="add-button">
                    <Link
                      to="#"
                      className="add_to_wishlist"
                      onClick={showSwalwish}
                    >
                      <i className="fa fa-heart"></i>
                    </Link>
                  </div>
                  {/* <!-- COUNT TEXT --> */}
                </div>
              </li>
              <li>
                <Link
                  to="#"
                  className="added_to_cart d-flex align-items-center"
                  onClick={showSwal}
                >
                  <i className="fa-solid fa-basket-shopping"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-caption">
          <h5 className="product__title">
            <Link to="/walkIn-detail" className="title-link">
              {" "}
              {props.company_name}
            </Link>
          </h5>
          <div className="price-detail">
            <div className="price">
           
             Date : {props.walkin_date}
            </div>
          </div>
          <div className="price-detail">
            <div className="price">
          Location : {props.location}
          
            </div>
          </div>
          {/* <div className="container-rating">
            <div className="star-rating text-primary">
              <RatingStar
                count={props.rating}
                count1={props.count1}
                starColor="text-warning"
              />
            </div>
          </div> */}
        </div>
        
      </div>
      <WalkinModal show={show} handleClose={handleClose} />
    </Fragment>
  );
});

CardShopGridView.displayName = "CardShopGridView";
export default CardShopGridView;
