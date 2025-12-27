import React, { Fragment, memo, useEffect,useState } from "react";

//react bootstrap
import { Container, Row, Col } from "react-bootstrap";

//components
import ProductCard from "../../components/merchandise/walkin-card";
import WalkinDetailCard from "../../components/cards/WalkinDetailCard";


// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";
import { useLocation } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getWalkIn ,getAllWalkInList } from "../../api/WalkInAPI";

const WalkinDetail = memo(() => {
  const { t } = useTranslation();
  const location =useLocation();
  const {id} = location.state
  const [walkInsData, setWalkInsData] = useState([]);
  const [allWalkInsData, setAllWalkInsData] = useState([]);
  const themeSchemeDirection = useSelector(theme_scheme_direction);


    const fetchWalkIn = async () => {
      try {
        const responseData = await getWalkIn(id);
        console.log("responseData getAllWalkInList", responseData);
        setWalkInsData(responseData.data || []);
      } catch (err) {
        console.error("Error fetching walk-ins:", err);
      }
    };

    useEffect(() => {
      fetchWalkIn();
      fetchAllWalkIn();
    }, []);



  const fetchAllWalkIn = async () => {
    try {
      const responseData = await getAllWalkInList();
      console.log("responseData getAllWalkInList", responseData);
      setAllWalkInsData(responseData.walkIns || []); // ✅ ensure array
    } catch (err) {
      console.error("Error fetching walk-ins:", err);
    }
  };

  const walkInDetail =walkInsData;
  const allWalkInDetail =allWalkInsData;
  
  return (
    <Fragment>
      <WalkinDetailCard
        company_name={walkInDetail.company_name}
        description={walkInDetail.description}
        location={walkInDetail.location}
        updatedAt={walkInDetail.updatedAt}
        is_new={walkInDetail.is_new}
        is_sale={walkInDetail.is_sale}
        price={walkInDetail.price}
        final_price={walkInDetail.final_price}
        tags={walkInDetail.tags}
        additional-info={walkInDetail.additional_info}
        sku={walkInDetail.sku}
        category={walkInDetail.category}
        additional_info={walkInDetail.additional_info}
        walkIn_image={walkInDetail.walkIn_image}
      
        // startDate: { type: Date,  },
        // endDate: { type: Date,  },
        // startTime: { type: Date,  },
        // StartTime : {type: Date },
        // endTime : {type: Date },
        // description:{type :String},
        // role:{type: String},
        // walkIn_image :{type : String},
        // location:  { type: String, },
        
      />
      <div className="related-product-block section-padding-top">
        <Container className="p-0">
          <div className="overflow-hidden">
            <div className="d-flex align-items-center justify-content-between px-3 my-4">
              <h5 className="main-title text-capitalize mb-0">{t("merchandise.related_products")}</h5>
              <Link to="/all-walkIn" className="text-primary iq-view-all text-decoration-none flex-none">{t("merchandise.want_more")}</Link>
            </div>
            <Swiper
              key={themeSchemeDirection}
              dir={themeSchemeDirection}
              slidesPerView={4}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              // loop={true}
              modules={[Navigation]}
              wrapperTag="ul"
              className="position-relative swiper-card wrapper-class merch-slides"
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                1025: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
                1500: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
              }}
              autoplay={{
                delay: 1000,
                disableOnInteraction: true,
              }}
            >
              {allWalkInDetail.map((item, index) => {
                return (
                  <SwiperSlide tag="li" key={index}>
                    <ProductCard
                      walkIn_image={item.walkIn_image}
                      company_name={t(item.company_name)}
                      price={item.price}
                      final_price={item.final_price}
                      rating="5"
                      count1="0"
                      is_sale={item.is_sale}
                      is_new={item.is_new}
                      slug={item.slug}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </Container>
      </div>
    </Fragment>
  );
});

WalkinDetail.displayName = "WalkinDetail";
export default WalkinDetail;
