/**
 * This js contains the breakpoint variables for responsive stylings
 */
const size = {
  mobile: "374px",
  mobileL: "576px",
  tablet: "768px",
  tabletL: "992px",
  laptop: "1024px",
  laptopM: "1200px",
  laptopL: "1400px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletL: `(max-width: ${size.tabletL})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopM: `(max-width: ${size.laptopM})`,
  laptopL: `(max-width: ${size.laptopL})`,
};

//Usage Example
// @media ${device.laptop} {
//     max-width: 800px;
// }
