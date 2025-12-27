import { Fragment, memo, useEffect, useState } from "react";

//react bootstrap
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";

//router
import { Link } from "react-router-dom";

//components
import BreadCrumbWidget from "../../components/BreadcrumbWidget";
// import ShopCategorySidebar from "../../components/merchandise/ShopCategorySidebar";
import CardShopListView from "../../components/merchandise/Cardshoplistview";
import CardShopGridView from "../../components/merchandise/Cardshowgridview";
import {
  getAllWalkInList,
  addWalkIns,
  deleteWalkIns,
} from "../../api/WalkInAPI";

//static data
import { walkins } from "../../StaticData/shop";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getnewProductAsync } from "../../store/shop/actions";

// Import selectors & action from setting store
import * as SettingSelector from "../../store/shop/selectors";

// the hook
import { useTranslation } from "react-i18next";
import ChoicesJs from "../../components/choice";



const AllWalkInList = memo((props) => {
  const { t } = useTranslation();

  const [walkInsData, setWalkInsData] = useState([]);

  const options = [
    {
      value: `${t("shop.default_sorting")}`,
      label: `${t("shop.default_sorting")}`,
    },
    {
      value: `${t("shop.sort_by_popularity")}`,
      label: `${t("shop.sort_by_popularity")}`,
    },
    {
      value: `${t("shop.sort_by_rating")}`,
      label: `${t("shop.sort_by_rating")}`,
    },
    {
      value: `${t("shop.sort_by_latest")}`,
      label: `${t("shop.sort_by_latest")}`,
    },
    {
      value: `${t("shop.price_low_to_high")}`,
      label: `${t("shop.price_low_to_high")}`,
    },
    {
      value: `${t("shop.price_high_to_low")}`,
      label: `${t("shop.price_high_to_low")}`,
    },
  ];
  // selector
  const newProduct = useSelector(SettingSelector.newProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getnewProductAsync());
  });

  useEffect(() => {
    fetchAllWalkIn();
  }, []);

    const fetchAllWalkIn = async () => {
      try {
        const responseData = await getAllWalkInList();
        console.log("responseData getAllWalkInList", responseData);
        setWalkInsData(responseData.walkIns || []); 
      } catch (err) {
        console.error("Error fetching walk-ins:", err);
      }
    };

  

  // ✅ dynamically filter from state
  const filterWiseWalkIn = walkInsData;

  return (
    <Fragment>
      <BreadCrumbWidget title={t("header.all_walkin")} />
      <div className="section-padding">
        <Container>
          <Row>
            {/* <Col lg="3">
              <ShopCategorySidebar>
                {newProduct.map((item, index) => {
                  return (
                    <span key={index}>
                      <ul className="list-unstyled m-0 p-0 shop-product">
                        <li className="d-flex align-items-center mb-4">
                          <div className="top-product-img pe-3">
                            <img src={item.walkIn_image} className="img-fluid" />
                          </div>
                          <div className="">
                            <Link to="/product-detail" className="">
                              {t(item.company_name)}
                            </Link>
                            <div>
                              <del>{item.price}</del> {item.walkin_date}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </span>
                  );
                })}
              </ShopCategorySidebar>
            </Col> */}
            <Col xl="9">
              <Tab.Container defaultActiveKey="forth">
                <div className="d-flex align-items-center justify-content-between mb-5 shop-filter flex-wrap">
                  <p>{t("shop.showing")}</p>
                  <div className="d-flex align-items-center">
                    <div className="product-view-button">
                      <Nav
                        as="ul"
                        id="pills-tab"
                        className="nav_shop nav d-flex nav-pills mb-0 iq-product-filter d-flex bg-transparent align-items-center list-inline"
                        role="tablist"
                      >
                        <Nav.Item
                          as="li"
                          className="nav-item"
                          role="presentation"
                        >
                          <Nav.Link
                            id="list-view-tab"
                            className="btn-sm btn-icon rounded-pill p-0"
                            data-toggle="pill"
                            data-bs-target="#pills-list-view"
                            eventKey="first"
                            role="tab"
                            aria-selected="true"
                          >
                            <span className="btn-inner">
                              <svg
                                className="hover_effect active_effect"
                                width="18"
                                height="16"
                                viewBox="0 0 18 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_1379_355)">
                                  <path
                                    d="M3.42857 0H0V3.42857H3.42857V0Z"
                                    fill=""
                                  ></path>
                                  <path
                                    d="M18 0.857422H6V2.57171H18V0.857422Z"
                                    fill=""
                                  ></path>
                                  <path
                                    d="M3.42857 6H0V9.42857H3.42857V6Z"
                                    fill=""
                                  ></path>
                                  <path
                                    d="M18 6.85742H6V8.57171H18V6.85742Z"
                                    fill=""
                                  ></path>
                                  <path
                                    d="M3.42857 12H0V15.4286H3.42857V12Z"
                                    fill=""
                                  ></path>
                                  <path
                                    d="M18 12.8574H6V14.5717H18V12.8574Z"
                                    fill=""
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_1379_355">
                                    <rect
                                      width="18"
                                      height="15.4286"
                                      fill=""
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                          </Nav.Link>
                        </Nav.Item>

                        <Nav.Item
                          as="li"
                          className="nav-item"
                          role="presentation"
                        >
                          <Nav.Link
                            id="grid-four-view-tab"
                            className="nav-link btn-sm btn-icon rounded-pill p-0"
                            data-toggle="pill"
                            data-bs-target="#pills-grid-four-view-tab"
                            eventKey="forth"
                            role="tab"
                            aria-selected="false"
                          >
                            <span className="btn-inner">
                              <svg
                                className="hover_effect active_effect"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M3.85714 0H0V3.85714H3.85714V0Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M8.5715 0H4.71436V3.85714H8.5715V0Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M13.2856 0H9.42847V3.85714H13.2856V0Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M18 0H14.1428V3.85714H18V0Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M3.85714 4.71387H0V8.57101H3.85714V4.71387Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M8.5715 4.71387H4.71436V8.57101H8.5715V4.71387Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M13.2856 4.71387H9.42847V8.57101H13.2856V4.71387Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M18 4.71387H14.1428V8.57101H18V4.71387Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M3.85714 9.42871H0V13.2859H3.85714V9.42871Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M8.5715 9.42871H4.71436V13.2859H8.5715V9.42871Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M13.2856 9.42871H9.42847V13.2859H13.2856V9.42871Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M18 9.42871H14.1428V13.2859H18V9.42871Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M3.85714 14.1426H0V17.9997H3.85714V14.1426Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M8.5715 14.1426H4.71436V17.9997H8.5715V14.1426Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M13.2856 14.1426H9.42847V17.9997H13.2856V14.1426Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M18 14.1426H14.1428V17.9997H18V14.1426Z"
                                  fill=""
                                ></path>
                              </svg>
                            </span>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                    <div className="iq-custom-select d-inline-block shop-select">
                      <ChoicesJs
                        options={options}
                        className="js-choice"
                        select="one"
                      />
                    </div>
                  </div>
                </div>

                <Tab.Content defaultActiveKey="forth">
                  {/* <!-- List View --> */}
                  <Tab.Pane
                    id="pills-list-view"
                    eventKey="first"
                    className="tab-pane fade show "
                    role="tabpanel"
                    data-current-page="1"
                  >
                    {filterWiseWalkIn.slice(0, 9).map((item, index) => {
                      return (
                        <Row className="row-cols-1" key={index}>
                          <CardShopListView
                            // walkIn_image={item.walkIn_image}
                            walkIn_image={
                              item.walkIn_image?.startsWith("data:image")
                                ? item.walkIn_image
                                : `data:image/jpeg;base64,${item.walkIn_image}`
                            }
                            walkin_date={item.date}
                            _id= {item._id}
                            slug={item.slug}
                            is_sale={item.is_sale}
                            is_new={item.is_new}
                            company_name={t(item.company_name)}
                            location={item.location}
                            rating="4"
                            count1="1"
                          />
                        </Row>
                      );
                    })}
                  </Tab.Pane>

                  {/* <!-- All Walk-in Details --> */}
                  <Tab.Pane
                    id="pills-grid-view"
                    eventKey="forth"
                    className="tab-pane fade"
                    role="tabpanel"
                    aria-labelledby="grid-view-tab"
                    tab-current-page="4"
                  >
                    <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
                      {filterWiseWalkIn.map((item, index) => {
                        return (
                          <Col key={index}>
                            <CardShopGridView
                              walkIn_image={
                                item.walkIn_image?.startsWith("data:image")
                                  ? item.walkIn_image
                                  : `data:image/jpeg;base64,${item.walkIn_image}`
                              }
                              slug={item.slug}
                              is_sale={item.is_sale}
                              is_new={item.is_new}
                              company_name={t(item.company_name)}
                              location={item.location}
                              _id= {item._id}
                              walkin_date={item.date}
                              rating="5"
                              count1="0"
                            />
                          </Col>
                        );
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

AllWalkInList.displayName = "AllWalkInList";
export default AllWalkInList;
