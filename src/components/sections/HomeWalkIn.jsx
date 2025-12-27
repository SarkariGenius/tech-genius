import { memo, Fragment, useState } from "react";

//component
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { sectionSliders } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const HomeWalkIn = memo(() => {
  const { t } = useTranslation();
  const [onlyonstreamit] = useState(sectionSliders);
  return (
    <Fragment>
      <SectionSlider
        title={t("Home.latest-walk_in")}
        list={onlyonstreamit}
        className="streamit-block"
        // loop={true}
        paddingY="my-4"
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={t(data.title)}
            movieTime={t(data.movieTime)}
            watchlistLink="/playlist"
            link="/movies-detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

HomeWalkIn.displayName = "HomeWalkIn";
export default HomeWalkIn;
