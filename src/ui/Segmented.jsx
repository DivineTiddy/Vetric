import styled from "styled-components";
import propTypes from "prop-types";

const SegmentedLayout = styled.div`
  width: 587px;
  height: 34.5px;
  display: flex;
  gap: 13px;
  overflow: hidden;
`;
const Segmented = ({children}) => {
  return <SegmentedLayout>
    {children}
  </SegmentedLayout>;
};
Segmented.propTypes = {
  children: propTypes.array.isRequired,
};
export default Segmented;
