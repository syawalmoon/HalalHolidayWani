import React from "react";
import PricingandcalendarNoIwontsyncmyavailability from "pages/PricingandcalendarNoIwontsyncmyavailability";
import PropertyDetailsBedroomTwo from "pages/PropertyDetailsBedroomTwo";
import Parkingfree from "pages/Parkingfree";
import PropertySetupBreakfastDetailsn from "pages/PropertySetupBreakfastDetailsn";
import PropertyDetailsOtherSpaces from "pages/PropertyDetailsOtherSpaces";
import PricingandcalendarYesIllconnectwithachannelmanager from "pages/PricingandcalendarYesIllconnectwithachannelmanager";
import PricingandcalendarFive from "pages/PricingandcalendarFive";
import Parking from "pages/Parking";
import PricingandcalendarRateplans from "pages/PricingandcalendarRateplans";
import Newpricepernight from "pages/Newpricepernight";
import PricingandcalendarYes from "pages/PricingandcalendarYes";
import PricingandcalendarNo from "pages/PricingandcalendarNo";
import PhotosImportPhotosAirbnb from "pages/PhotosImportPhotosAirbnb";
import PhotosImportPhotos from "pages/PhotosImportPhotos";
import Hostprofile from "pages/Hostprofile";
import Rules from "pages/Rules";
import Language from "pages/Language";
import Newpricepernightno from "pages/Newpricepernightno";
import Newpricepernightyes from "pages/Newpricepernightyes";
import PropertySetupBreakfastDetails from "pages/PropertySetupBreakfastDetails";
import PropertySetupAmenities from "pages/PropertySetupAmenities";
import PropertySetupPropertyDetails from "pages/PropertySetupPropertyDetails";
import NameLocation3rdPage from "pages/NameLocation3rdPage";
import NameLocation2ndPage from "pages/NameLocation2ndPage";
import NameLocation1stPage from "pages/NameLocation1stPage";
import Questionaboutproperty from "pages/Questionaboutproperty";
import Confirmation from "pages/Confirmation";
import Confirmationhotel from "pages/Confirmationhotel";
import HowmuchapartmenttolistPage from "pages/Howmuchapartmenttolist";
import HowmuchhoteltolistPage from "pages/Howmuchhotelltolist";
import PropertycategorypagePage from "pages/Propertycategorypage";
import Grouphomepage from "pages/Grouphomepage";
import PropertySetupBreakfastDetailsy from "pages/PropertySetupBreakfastDetailsy";
import Parkingpaid from "pages/Parkingpaid";
import PropertyDetailsLivingRoom from "pages/PropertyDetailsLivingRoom";
import PricingandcalendarYesIllimportunavailabledatesfromanotherwebsite from "pages/PricingandcalendarYesIllimportunavailabledatesfromanotherwebsite";
import Addproperty from "pages/Addproperty";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NameLocation1stPage />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/pricingandcalendaryesillimportunavailabledatesfromanotherwebsite"
          element={
            <PricingandcalendarYesIllimportunavailabledatesfromanotherwebsite />
          }
        />
        <Route
          path="/propertydetailslivingroom"
          element={<PropertyDetailsLivingRoom />}
        />
        <Route path="/parkingpaid" element={<Parkingpaid />} />
        <Route
          path="/propertysetupbreakfastdetailsy"
          element={<PropertySetupBreakfastDetailsy />}
        />
        <Route path="/addproperty" element={<Addproperty />} />
        <Route path="/grouphomepage" element={<Grouphomepage />} />
        <Route
          path="/propertycategorypage"
          element={<PropertycategorypagePage />}
        />
        <Route
          path="/howmuchhoteltolist"
          element={<HowmuchhoteltolistPage />}
        />
        <Route
          path="/howmuchpropertytolist"
          element={<HowmuchapartmenttolistPage />}
        />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/confirmationhotel" element={<Confirmationhotel />} />
        <Route
          path="/questionaboutproperty"
          element={<Questionaboutproperty />}
        />
        <Route path="/namelocation1stpage" element={<NameLocation1stPage />} />
        <Route path="/namelocation2ndpage" element={<NameLocation2ndPage />} />
        <Route path="/namelocation3rdpage" element={<NameLocation3rdPage />} />
        <Route
          path="/propertysetuppropertydetails"
          element={<PropertySetupPropertyDetails />}
        />
        <Route
          path="/propertysetupamenities"
          element={<PropertySetupAmenities />}
        />
        <Route
          path="/propertysetupbreakfastdetails"
          element={<PropertySetupBreakfastDetails />}
        />
        <Route path="/language" element={<Language />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/hostprofile" element={<Hostprofile />} />
        <Route path="/photosimportphotos" element={<PhotosImportPhotos />} />
        <Route
          path="/photosimportphotosairbnb"
          element={<PhotosImportPhotosAirbnb />}
        />
        <Route
          path="/pricingandcalendarno"
          element={<PricingandcalendarNo />}
        />
        <Route
          path="/pricingandcalendaryes"
          element={<PricingandcalendarYes />}
        />
        <Route
          path="/pricepernight"
          element={<Newpricepernight />}
        />
        <Route
          path="/pricepernighty"
          element={<Newpricepernightyes />}
        />
        <Route
          path="/pricepernightn"
          element={<Newpricepernightno />}
        />
        <Route
          path="/pricingandcalendarrateplans"
          element={<PricingandcalendarRateplans />}
        />
        <Route path="/parking" element={<Parking />} />
        <Route
          path="/pricingandcalendarfive"
          element={<PricingandcalendarFive />}
        />
        <Route
          path="/pricingandcalendaryesillconnectwithachannelmanager"
          element={<PricingandcalendarYesIllconnectwithachannelmanager />}
        />
        <Route
          path="/propertydetailsotherspaces"
          element={<PropertyDetailsOtherSpaces />}
        />
        <Route
          path="/propertysetupbreakfastdetailsn"
          element={<PropertySetupBreakfastDetailsn />}
        />
        <Route path="/parkingfree" element={<Parkingfree />} />
        <Route
          path="/propertydetailsbedroomtwo"
          element={<PropertyDetailsBedroomTwo />}
        />
        <Route
          path="/pricingandcalendarnoiwontsyncmyavailability"
          element={<PricingandcalendarNoIwontsyncmyavailability />}
        />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;