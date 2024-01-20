import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap"; // Import Row here
import Partner from "../partners/Partner";
import { selectAllPartners } from "../partners/partnersSlice";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

function PartnersList() {
  const partners = useSelector(selectAllPartners);
  const isLoading = useSelector((state) => state.partners.isLoading);
  const errMsg = useSelector((state) => state.partners.errMsg);

  return isLoading ? (
    <Loading />
  ) : errMsg ? (
    <Error errMsg={errMsg} />
  ) : (
    <Col className="mt-4">
      <Row>
        {partners.map((partner) => (
          <div className="d-flex mb-5" key={partner.id}>
            <Partner partner={partner} />
          </div>
        ))}
      </Row>
    </Col>
  );
}

export default PartnersList;
